import type { Metadata } from "next";
import { Locale } from "@/i18n.config";
import { ContactPageClient } from "@/components/contact/contact-page-client";

interface ContactPageProps {
  params: { locale: Locale };
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const locale = params.locale;
  const title =
    locale === "de"
      ? "Kontakt & erste Teilnahme – CEC Zürich"
      : "Contact & first visit – CEC Zurich";
  const description =
    locale === "de"
      ? "Nimm Kontakt mit dem Consciousness Explorers Club Zürich auf oder melde dich für deine erste Teilnahme an einer Session an."
      : "Get in touch with the Consciousness Explorers Club Zurich or sign up for your first session.";
  const url = `${SITE_URL}/${locale}/contact`;

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

export default async function ContactPage({ params }: ContactPageProps) {
  return <ContactPageClient locale={params.locale} />;
}
