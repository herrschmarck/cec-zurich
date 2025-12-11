import type { Metadata } from "next";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Hero } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about-section";
import { UpcomingEvents } from "@/components/home/upcoming-events";

interface HomePageProps {
  params: { locale: Locale };
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const locale = params.locale;
  const title =
    locale === "de"
      ? "CEC Zürich – Consciousness Explorers Club"
      : "CEC Zurich – Consciousness Explorers Club";
  const description =
    locale === "de"
      ? "Meditation und Bewusstseinsforschung in einer offenen Community in Zürich. Wöchentliche Sits, Workshops und Retreats."
      : "Meditation and consciousness exploration in an open community in Zurich. Weekly sits, workshops, and retreats.";
  const url = `${SITE_URL}/${locale}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Consciousness Explorers Club Zürich",
      locale,
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <>
      <Hero locale={params.locale} dict={dict} />
      <AboutSection locale={params.locale} dict={dict} />
      <UpcomingEvents locale={params.locale} dict={dict} />
    </>
  );
}
