import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Locale, locales } from "@/i18n.config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Providers } from "@/components/layout/providers";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Consciousness Explorers Club Zürich",
  description:
    "Meditation, Erforschung und Austausch in einer offenen, neugierigen Community in Zürich.",
  keywords: ["meditation", "mindfulness", "consciousness", "zürich", "community"],
  icons: {
    icon: "/favicon.ico",
  },
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: Locale };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const dict = await getDictionary(params.locale);

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body
        className={`${inter.variable} min-h-screen bg-zen-50 font-sans text-zen-900 antialiased dark:bg-zen-950 dark:text-zen-50`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Nav locale={params.locale} dict={dict} />
            <main className="flex-1">{children}</main>
            <Footer locale={params.locale} dict={dict} />
          </div>
        </Providers>
        {process.env.NODE_ENV === "production" && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  );
}
