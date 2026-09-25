/**
 * Configuração central da landing page de pré-lançamento.
 *
 * - WhatsApp e Instagram vêm de variáveis de ambiente (veja `.env.example`).
 * - O logo é um arquivo em `public/brand/`; troque o arquivo e ajuste
 *   `src`, `width` e `height` abaixo se o formato mudar.
 */

function readEnv(value: string | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

export const siteConfig = {
  name: "Green Ocean",
  city: "Arroio do Sal",
  /** Data de lançamento exibida na página. */
  launch: {
    label: "03.10",
    iso: "2026-10-03",
  },

  whatsapp: {
    /**
     * PENDENTE: defina WHATSAPP_NUMBER no `.env.local` (ou nas variáveis de
     * ambiente da hospedagem). Somente dígitos, com DDI + DDD. Enquanto não
     * estiver definido, o botão fica desabilitado e nenhum contato é inventado.
     */
    number: readEnv(process.env.WHATSAPP_NUMBER),
    message: "Oi! Vi a Green Ocean e quero receber a primeira pista 👀",
  },

  /** Opcional: defina INSTAGRAM_HANDLE para exibir o convite no rodapé. */
  instagramHandle: readEnv(process.env.INSTAGRAM_HANDLE),

  /**
   * Logo provisório. Substitua `public/brand/green-ocean-logo.svg` pelo logo
   * oficial (versão clara, para fundo azul profundo). Para PNG/WebP, aponte
   * `src` para o novo arquivo e informe as dimensões reais em pixels.
   */
  logo: {
    src: "/brand/green-ocean-logo.svg",
    width: 320,
    height: 120,
    alt: "Green Ocean",
  },
} as const;
