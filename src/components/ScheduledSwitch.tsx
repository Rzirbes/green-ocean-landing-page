"use client";

import { useCallback, useSyncExternalStore, type ReactNode } from "react";

type ScheduledSwitchProps = {
  /** Momento da troca, em milissegundos desde a época (UTC). */
  activatesAt: number;
  /** `Date.now()` do servidor na requisição; usado na hidratação para não divergir. */
  serverNow: number;
  /** Texto exibido acima da contagem regressiva enquanto `before` está ativo. */
  countdownLabel: string;
  before: ReactNode;
  after: ReactNode;
};

/** Segundos inteiros que faltam (arredondados para cima); 0 = já ativado. */
function secondsUntil(activatesAt: number, now: number) {
  return Math.max(0, Math.ceil((activatesAt - now) / 1000));
}

function formatHms(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds]
    .map((part) => String(part).padStart(2, "0"))
    .join(":");
}

/**
 * Mostra a contagem regressiva + `before` até `activatesAt` e `after` a partir
 * daí. Contador e troca usam a mesma referência de tempo, atualizada a cada
 * segundo e recalculada quando a aba volta do segundo plano ou o computador
 * acorda.
 */
export function ScheduledSwitch({
  activatesAt,
  serverNow,
  countdownLabel,
  before,
  after,
}: ScheduledSwitchProps) {
  // Uma vez ativado pelo servidor, não volta atrás por relógio local atrasado.
  const activeOnServer = serverNow >= activatesAt;

  const subscribe = useCallback(
    (onChange: () => void) => {
      if (activeOnServer) return () => {};

      let timer: ReturnType<typeof setTimeout> | undefined;

      const tick = () => {
        clearTimeout(timer);
        onChange();
        const remaining = activatesAt - Date.now();
        if (remaining <= 0) return;
        // Próxima virada de segundo da contagem (alinhada a `activatesAt`).
        timer = setTimeout(tick, remaining % 1000 || 1000);
      };

      tick();
      document.addEventListener("visibilitychange", tick);
      window.addEventListener("focus", tick);
      return () => {
        clearTimeout(timer);
        document.removeEventListener("visibilitychange", tick);
        window.removeEventListener("focus", tick);
      };
    },
    [activatesAt, activeOnServer],
  );

  const remaining = useSyncExternalStore(
    subscribe,
    () => (activeOnServer ? 0 : secondsUntil(activatesAt, Date.now())),
    () => secondsUntil(activatesAt, serverNow),
  );

  if (remaining === 0) return after;

  return (
    <div className="flex w-full flex-col items-center gap-4 sm:w-auto">
      <p className="flex flex-col items-center gap-1 text-center text-sm font-semibold text-mist">
        {countdownLabel}
        {/* role="timer" não é anunciado a cada segundo (aria-live off). */}
        <span
          role="timer"
          aria-live="off"
          className="text-2xl font-extrabold tracking-[0.08em] text-cream tabular-nums"
        >
          {formatHms(remaining)}
        </span>
      </p>
      {before}
    </div>
  );
}
