import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const heading = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const description =
  "Tem coisa nova chegando no delivery de Arroio do Sal. A primeira pista chega por aqui. 03.10 🌊";

export const metadata: Metadata = {
  title: "Green Ocean · Arroio do Sal · 03.10",
  description,
  openGraph: {
    title: "Green Ocean · Tem coisa nova chegando",
    description,
    locale: "pt_BR",
    type: "website",
    siteName: "Green Ocean",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f2a44",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
