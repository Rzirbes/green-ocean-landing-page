/**
 * Configuração central da landing page de pré-lançamento.
 *
 * - WhatsApp e Instagram vêm de variáveis de ambiente (veja `.env.example`).
 * - O logo é um arquivo em `public/brand/`; se trocar o arquivo, ajuste
 *   `src`, `width` e `height` abaixo.
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
    label: "07.10",
    iso: "2026-10-03",
  },

  whatsapp: {
    /**
     * PENDENTE: defina WHATSAPP_NUMBER no `.env.local` (ou nas variáveis de
     * ambiente da hospedagem). Somente dígitos, com DDI + DDD. Enquanto não
     * estiver definido, o botão fica desabilitado e nenhum contato é inventado.
     */
    number: readEnv(process.env.WHATSAPP_NUMBER),
    message: "Oi! Vi a Green Ocean e quero receber a primeira pista",
  },

  /**
   * A partir de `activatesAt`, o botão principal deixa de abrir o WhatsApp e
   * passa a levar ao cardápio do Anota AI. A troca é feita em tempo de
   * requisição e no navegador, então não precisa de novo deploy no horário.
   * Sempre informe o fuso explicitamente (Brasília = -03:00).
   */
  order: {
    url: "https://pedido.anota.ai/loja/green-ocean?f=msa",
    label: "Faça seu pedido aqui!",
    activatesAt: "2026-10-07T10:30:00-03:00",
  },

  /** Opcional: defina INSTAGRAM_HANDLE para exibir o ícone do Instagram no rodapé. */
  instagramHandle: readEnv(process.env.INSTAGRAM_HANDLE),

  /**
   * Logo oficial, versão clara com fundo transparente (para o azul profundo).
   * Gerado a partir de `public/brand/green-ocean-logo-2.svg`, sem espaço vazio
   * em volta. Para trocar, aponte `src` para o novo arquivo e informe a
   * proporção real em `width`/`height` (para SVG, os valores do viewBox).
   */
  logo: {
    src: "/brand/green-ocean-logo-light.svg",
    width: 673,
    height: 427,
    alt: "Green Ocean — fresh food, your way",
  },
} as const;
