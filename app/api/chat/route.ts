import { NextRequest, NextResponse } from "next/server";

/**
 * Proxy do atendente de IA do Sushi Kamei.
 *
 * O frontend mantém e envia o histórico da conversa; esta rota apenas
 * encaminha a requisição para a API do WppManager adicionando a X-API-Key
 * no servidor — assim a chave NUNCA é exposta no navegador.
 */

export const runtime = "nodejs";

type ChatMessage = { role: "user" | "assistant"; content: string };

const API_URL =
  process.env.WPP_API_URL ??
  "https://api.wppmanager.com.br/v1/tenants/sushi-kamei/agents/atendente-de-delivery/chat";
const API_KEY = process.env.WPP_API_KEY;

export async function POST(req: NextRequest) {
  if (!API_KEY) {
    return NextResponse.json(
      { error: "Atendente indisponível: chave de API não configurada no servidor." },
      { status: 500 }
    );
  }

  let body: { message?: string; history?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const message = (body.message ?? "").toString().trim();
  if (!message) {
    return NextResponse.json({ error: "Mensagem vazia." }, { status: 400 });
  }

  // Sanitiza/limita o histórico encaminhado
  const history: ChatMessage[] = Array.isArray(body.history)
    ? body.history
        .filter(
          (m) =>
            m &&
            (m.role === "user" || m.role === "assistant") &&
            typeof m.content === "string"
        )
        .slice(-20)
        .map((m) => ({ role: m.role, content: m.content }))
    : [];

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30_000);

    const upstream = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY,
      },
      body: JSON.stringify({ message, history }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    const text = await upstream.text();
    let data: unknown = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = { reply: text };
    }

    if (!upstream.ok) {
      return NextResponse.json(
        { error: "O atendente está indisponível no momento. Tente novamente em instantes." },
        { status: 502 }
      );
    }

    // Normaliza a resposta para um campo `reply` que o frontend entende,
    // cobrindo os formatos mais comuns de retorno da API.
    const d = data as Record<string, unknown> | null;
    const reply =
      (d?.reply as string) ??
      (d?.message as string) ??
      (d?.response as string) ??
      (d?.content as string) ??
      (d?.answer as string) ??
      (typeof d?.data === "object" && d?.data !== null
        ? ((d.data as Record<string, unknown>).reply as string) ??
          ((d.data as Record<string, unknown>).message as string)
        : undefined) ??
      (typeof data === "string" ? data : "");

    const shouldHandoff = d?.should_handoff === true;
    const whatsappRedirectUrl =
      shouldHandoff && typeof d?.whatsapp_redirect_url === "string"
        ? d.whatsapp_redirect_url
        : undefined;

    // Remove o link wa.me do texto quando há handoff — o botão já o representa.
    const cleanReply = shouldHandoff
      ? (reply || "").replace(/https?:\/\/wa\.me\/\S*/g, "").replace(/:\s*$/, ".").trim()
      : reply;

    return NextResponse.json({
      reply: cleanReply || "Desculpe, não consegui entender. Pode reformular?",
      should_handoff: shouldHandoff,
      whatsapp_redirect_url: whatsappRedirectUrl,
    });
  } catch (err) {
    const aborted = err instanceof Error && err.name === "AbortError";
    return NextResponse.json(
      {
        error: aborted
          ? "O atendente demorou para responder. Tente novamente."
          : "Não foi possível falar com o atendente agora.",
      },
      { status: 504 }
    );
  }
}
