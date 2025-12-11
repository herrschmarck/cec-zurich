import type { Metadata } from "next";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { EventsPageClient } from "@/components/events/events-page-client";

interface EventsPageProps {
  params: { locale: Locale };
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateMetadata({ params }: EventsPageProps): Promise<Metadata> {
  const locale = params.locale;
  const title =
    locale === "de"
      ? "Events – Meditation, Workshops & Retreats in Zürich"
      : "Events – Meditation, workshops & retreats in Zurich";
  const description =
    locale === "de"
      ? "Übersicht über kommende Meditationen, Workshops, Retreats und Community-Events des Consciousness Explorers Club Zürich."
      : "Overview of upcoming meditations, workshops, retreats and community events of the Consciousness Explorers Club Zurich.";
  const url = `${SITE_URL}/${locale}/events`;

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

export default async function EventsPage({ params }: EventsPageProps) {
  const dict = await getDictionary(params.locale);

  return <EventsPageClient locale={params.locale} dict={dict} />;
}
