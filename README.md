# Sushi Kamei · 亀井 寿司

Site institucional do **Sushi Kamei** — sushi artesanal em Belo Horizonte (barcos de
sushi, jantares completos, festas de 15 e formaturas), feito pelo sushiman **Hilton**.

Frontend em **Next.js (App Router) + React + TypeScript**, com design **ukiyo-e**
(浮世絵) — estética de xilogravura japonesa: papel washi, vermelhão 朱, ocre, índigo 藍
e tinta sumi, padrão de ondas *seigaiha*, selos *hanko*, sol nascente de Hokusai,
tipografia mincho/pincel e kanji `亀井 寿司`. Tem um **atendente de IA** flutuante no
canto inferior direito.

## Como rodar

```bash
npm install

# desenvolvimento
npm run dev          # http://localhost:3000

# produção
npm run build
npm run start
```

## Atendente de IA (chatbot)

O botão flutuante (亀) abre o chat. O histórico da conversa é mantido no **frontend**
(`components/Chatbot.tsx`) e enviado a cada mensagem no formato:

```json
{ "message": "...", "history": [ { "role": "user", "content": "..." }, ... ] }
```

> **Segurança:** o navegador **não** fala direto com a API do WppManager. Ele chama a
> rota interna `POST /api/chat` (`app/api/chat/route.ts`), que adiciona o cabeçalho
> `X-API-Key` no **servidor** e repassa a requisição. Assim a chave nunca é exposta no
> código do cliente. A chave fica em `.env.local` (veja `.env.local.example`).

Se você preferir chamar a API diretamente do browser (como no curl de exemplo), dá para
mover o `fetch` para o componente — mas aí a `X-API-Key` ficaria visível para qualquer
visitante. O proxy é a forma recomendada.

## Estrutura

```
app/
  layout.tsx          # fontes (Shippori Mincho, Yuji Syuku, Zen Kaku Gothic) + metadata
  page.tsx            # página única com todas as seções
  globals.css         # tema ukiyo-e (papel washi, seigaiha, hanko, sumi)
  api/chat/route.ts   # proxy seguro para o atendente de IA
components/
  Nav.tsx             # navbar (scroll + menu mobile)
  Chatbot.tsx         # widget do atendente de IA
  OrderButton.tsx     # botões "Pedir/Falar" que abrem o chat
  Reveal.tsx          # animação de entrada ao rolar a página
public/images/        # imagens organizadas por categoria:
  marca/              #   logo
  equipe/             #   foto do Hilton (sushiman)
  produtos/           #   sashimi, temaki, hot
  produtos/sushis/    #   niguiris (camarão, salmão, trio grelhado/skin/atum)
  festa15/            #   buffets de festa
```

## Conteúdo do negócio

- **Barcos:** sugestões de 100 peças (R$ 350) e 200 peças (R$ 700); tamanhos sob medida.
- **Sushis:** galeria variada (nem todos os sabores têm foto). Item com **nome maior** =
  **3 sushis** diferentes no mesmo pedaço.
- **Jantares:** R$ 110/pessoa, mínimo 20 pessoas. Entrada (2 de 3: gyoza, rolinho
  primavera, fry de frango) + sushis variados + prato quente (1 de 3: yakisoba, kare
  rice, carne com legumes).
- **Festas de 15 e formaturas:** valores a combinar.
# sushikamei
