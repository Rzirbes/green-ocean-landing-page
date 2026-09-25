# Green Ocean — pré-lançamento

Landing page de pré-lançamento (Next.js App Router + TypeScript + Tailwind CSS).

## Rodando

```bash
npm install
cp .env.example .env.local   # preencha os valores
npm run dev
```

Verificações: `npm run lint` e `npm run build`.

## Configuração

| O quê | Onde |
| --- | --- |
| Número do WhatsApp | `WHATSAPP_NUMBER` no `.env.local` (ou nas variáveis da hospedagem). Somente dígitos, com DDI 55 + DDD. Sem ele, o botão fica desabilitado. |
| Mensagem do WhatsApp | `src/config/site.ts` → `whatsapp.message` |
| Instagram (opcional) | `INSTAGRAM_HANDLE` no `.env.local`. Vazio = o ícone do Instagram não aparece no rodapé. |
| Logo | `public/brand/green-ocean-logo-light.svg` (versão clara, fundo transparente) + `logo` em `src/config/site.ts` |
| Cores | `src/app/globals.css` (bloco `@theme`) |

As variáveis são lidas no build: após alterá-las, gere um novo build/deploy.
