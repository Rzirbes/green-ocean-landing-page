import Image from "next/image";
import {
  InstagramIcon,
  Leaf,
  OrganicComposition,
  WaveDivider,
  WaveLines,
} from "@/components/Decorations";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";
import { normalizeInstagramHandle } from "@/lib/links";

const instagram = normalizeInstagramHandle(siteConfig.instagramHandle);

function LaunchDate() {
  return (
    <time dateTime={siteConfig.launch.iso}>{siteConfig.launch.label}</time>
  );
}

export default function Home() {
  const { logo } = siteConfig;

  return (
    <>
      <main className="flex-1">
        {/* Abertura */}
        <section className="relative isolate overflow-hidden bg-ocean text-cream">
          <Leaf className="float-slow absolute -right-8 top-4 -z-10 w-20 rotate-[20deg] text-leaf/70 sm:w-32 lg:hidden" />
          <WaveLines className="absolute -left-10 bottom-28 -z-10 w-56 text-mist/15 lg:w-80" />

          <div className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-5 pb-28 pt-8 sm:px-8 sm:pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-36">
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                preload
                className="h-auto w-56 sm:w-64 lg:w-72"
              />

              <p className="mt-7 text-xs font-bold tracking-[0.28em] text-mist sm:mt-10 sm:text-sm">
                {siteConfig.city.toUpperCase()} · <LaunchDate />
              </p>

              <h1 className="mt-4 max-w-[16ch] text-balance font-display text-[2.35rem] font-semibold leading-[1.08] sm:text-6xl lg:text-7xl">
                Tem coisa nova chegando no delivery de Arroio do Sal.
              </h1>

              <p className="mt-5 max-w-md text-lg text-mist sm:text-xl">
                A primeira pista chega por aqui.
              </p>

              <div className="mt-8 w-full sm:w-auto">
                <WhatsAppButton />
              </div>
            </div>

            <OrganicComposition className="hidden w-full max-w-md justify-self-end lg:block" />
          </div>

          <WaveDivider className="absolute inset-x-0 bottom-0 h-16 w-full sm:h-24" />
        </section>

        {/* Curiosidade */}
        <section
          aria-labelledby="curiosidade"
          className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24"
        >
          <Leaf className="absolute -left-8 top-10 w-20 -rotate-[25deg] text-leaf/15 sm:w-28" />

          <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <h2
              id="curiosidade"
              className="max-w-[20ch] text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
            >
              Tu chegou até aqui antes de todo mundo.
            </h2>

            <div className="max-w-prose space-y-5 text-lg leading-relaxed text-ocean/90 sm:text-xl">
              <p>Então a gente pode contar um pouquinho mais.</p>
              <p>
                Tem uma hora do dia que todo mundo conhece: a manhã já passou, a
                fome bateu e começa aquela pergunta:
              </p>
              <blockquote className="border-l-4 border-leaf pl-5 font-display text-2xl italic text-ocean sm:text-3xl">
                “O que eu vou comer hoje?”
              </blockquote>
              <p>A Green Ocean tem uma novidade chegando para esse momento.</p>

              <p className="pt-2 font-display text-5xl font-semibold text-leaf sm:text-6xl">
                <LaunchDate />
              </p>

              <div className="pt-4">
                <WhatsAppButton variant="dark" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ocean px-5 py-10 text-cream sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-auto w-40"
          />

          <div className="flex flex-col items-center gap-3 sm:items-end">
            {instagram && (
              <a
                href={instagram.url}
                aria-label="Instagram da Green Ocean"
                title={instagram.handle}
                className="inline-flex size-12 items-center justify-center rounded-full text-cream transition-colors hover:bg-cream/10 hover:text-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mist motion-reduce:transition-none"
              >
                <InstagramIcon className="size-7" />
              </a>
            )}
            <p className="text-sm text-mist">
              © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.city}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
