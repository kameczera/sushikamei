"use client";

import { useEffect, useRef, useState } from "react";

type Role = "user" | "assistant";
interface Message {
  role: Role;
  content: string;
}

const WELCOME: Message = {
  role: "assistant",
  content:
    "Irasshaimase! 🍣 Sou o atendente virtual do Sushi Kamei. Posso te ajudar com barcos de sushi, jantares, festas de 15, formaturas e pedidos aqui em BH. Como posso ajudar?",
};

const SUGGESTIONS = [
  "Quero um barco de sushi",
  "Como funciona o jantar?",
  "Orçamento p/ festa de 15",
  "Vocês entregam hoje?",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // rolar para o final quando há novas mensagens / digitando
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  // foco no input ao abrir
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // permite abrir o chat de qualquer botão do site via evento global
  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener("kamei:open-chat", openChat);
    return () => window.removeEventListener("kamei:open-chat", openChat);
  }, []);

  async function send(text: string) {
    const message = text.trim();
    if (!message || loading) return;

    // o histórico enviado é a conversa ATÉ AQUI (sem a mensagem atual),
    // no formato { role, content } exatamente como o backend espera.
    const history = messages.map((m) => ({ role: m.role, content: m.content }));

    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, history }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Falha ao falar com o atendente.");
      }
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply as string },
      ]);
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "Não foi possível falar com o atendente agora."
      );
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    send(input);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  return (
    <>
      {!open && (
        <button
          className="chat-fab"
          onClick={() => setOpen(true)}
          aria-label="Abrir atendente virtual do Sushi Kamei"
        >
          <span className="ping" aria-hidden />
          <span className="fab-kanji kanji" aria-hidden>
            亀
          </span>
          <span className="badge" aria-hidden>
            IA
          </span>
        </button>
      )}

      {open && (
        <div className="chat-panel" role="dialog" aria-label="Atendente Sushi Kamei">
          <div className="chat-header">
            <div className="avatar">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/equipe/hilton.jpeg" alt="Atendente Sushi Kamei" />
            </div>
            <div className="ht">
              <b>Atendente Kamei</b>
              <div className="status">
                <span className="on" aria-hidden />
                Online · <span className="jp">亀井</span>
              </div>
            </div>
            <button
              className="chat-close"
              onClick={() => setOpen(false)}
              aria-label="Fechar atendente"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="chat-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.role === "user" ? "user" : "bot"}`}>
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="chat-typing" aria-label="Atendente digitando">
                <span /> <span /> <span />
              </div>
            )}
            {error && <div className="msg error">{error}</div>}
          </div>

          {messages.length <= 1 && !loading && (
            <div className="chat-suggestions">
              {SUGGESTIONS.map((s) => (
                <button key={s} onClick={() => send(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}

          <form className="chat-input" onSubmit={onSubmit}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Escreva sua mensagem…"
              rows={1}
            />
            <button
              type="submit"
              className="chat-send"
              disabled={loading || !input.trim()}
              aria-label="Enviar mensagem"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
