import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/links";

const whatsappUrl = buildWhatsAppUrl(
  siteConfig.whatsapp.number,
  siteConfig.whatsapp.message,
);

if (!whatsappUrl) {
  console.warn(
    "[Green Ocean] WHATSAPP_NUMBER não configurado: o botão do WhatsApp está desabilitado. Veja .env.example.",
  );
}

const baseClasses =
  "inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-center text-base font-extrabold tracking-[0.05em] sm:w-auto sm:px-8 sm:tracking-[0.08em]";

const variants = {
  /** Para fundo azul profundo. */
  light:
    "bg-cream text-ocean hover:bg-mist focus-visible:outline-mist",
  /** Para fundo creme. */
  dark: "bg-ocean text-cream hover:bg-leaf hover:text-white focus-visible:outline-ocean",
} as const;

type WhatsAppButtonProps = {
  variant?: keyof typeof variants;
};

export function WhatsAppButton({ variant = "light" }: WhatsAppButtonProps) {
  const label = "QUERO RECEBER A PISTA";

  if (!whatsappUrl) {
    return (
      <div className="flex flex-col items-center gap-2 sm:items-start">
        <button
          type="button"
          disabled
          className={`${baseClasses} cursor-not-allowed bg-mist text-ocean/70`}
        >
          {label}
        </button>
        {process.env.NODE_ENV !== "production" && (
          <p
            role="note"
            className="rounded-md bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-950"
          >
            Configurar WHATSAPP_NUMBER no .env.local
          </p>
        )}
      </div>
    );
  }

  return (
    <a
      href={whatsappUrl}
      className={`${baseClasses} ${variants[variant]} shadow-[0_10px_30px_-12px_rgb(0_0_0/0.55)] transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 focus-visible:outline-4 focus-visible:outline-offset-4 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0`}
    >
      {label}
      <span className="sr-only"> (abre uma conversa no WhatsApp)</span>
    </a>
  );
}
