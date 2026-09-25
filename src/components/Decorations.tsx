/** Elementos decorativos (ondas e folhas). Todos são ocultos para leitores de tela. */

type Props = { className?: string };

export function Leaf({ className }: Props) {
  return (
    <svg
      viewBox="0 0 64 96"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M52 4C22 12 4 40 10 78c26-4 46-28 48-58 0-6-2-11-6-16Z"
        fill="currentColor"
      />
      <path
        d="M14 74C24 56 34 38 50 10"
        fill="none"
        stroke="var(--color-cream)"
        strokeOpacity=".5"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WaveLines({ className }: Props) {
  return (
    <svg
      viewBox="0 0 240 60"
      className={className}
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
    >
      <path d="M4 18c19-14 38-14 58 0s39 14 58 0 39-14 58 0 39 14 58 0" strokeWidth="5" />
      <path d="M4 42c19-14 38-14 58 0s39 14 58 0 39-14 58 0 39 14 58 0" strokeWidth="3" strokeOpacity=".55" />
    </svg>
  );
}

/** Onda que faz a transição do azul da abertura para o creme da seção seguinte. */
export function WaveDivider({ className }: Props) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 64c120-34 260-46 400-18s280 60 440 34 300-70 420-58c80 8 140 26 180 40v58H0Z"
        fill="var(--color-mist)"
        fillOpacity=".35"
      />
      <path
        d="M0 88c160-30 300-34 460-8s300 44 460 20 320-52 520-24v44H0Z"
        fill="var(--color-cream)"
      />
    </svg>
  );
}

/** Composição orgânica usada para ocupar o espaço lateral em telas maiores. */
export function OrganicComposition({ className }: Props) {
  return (
    <div className={`relative aspect-square ${className ?? ""}`} aria-hidden="true">
      <div className="absolute inset-[6%] rounded-[58%_42%_47%_53%/49%_58%_42%_51%] bg-leaf/85" />
      <div className="absolute inset-[18%_4%_2%_22%] rounded-[43%_57%_62%_38%/55%_41%_59%_45%] bg-mist/25" />
      <div className="absolute inset-[30%] rounded-full border-2 border-dashed border-cream/40" />
      <WaveLines className="absolute bottom-[14%] left-[10%] w-[62%] text-cream/80" />
      <Leaf className="absolute right-[16%] top-[8%] w-[20%] rotate-12 text-cream/90" />
      <Leaf className="absolute left-[14%] top-[22%] w-[12%] -rotate-[30deg] text-mist" />
      <span className="absolute inset-0 flex items-center justify-center font-display text-[clamp(4rem,9vw,8rem)] font-semibold italic text-cream/95">
        ?
      </span>
    </div>
  );
}
