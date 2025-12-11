import type { Metadata } from "next";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Check } from "lucide-react";
import { SITE_URL, SITE_NAME } from "@/lib/config";

interface AboutPageProps {
  params: { locale: Locale };
}


export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const locale = params.locale;
  const title =
    locale === "de"
      ? "Über den Consciousness Explorers Club Zürich"
      : "About the Consciousness Explorers Club Zurich";
  const description =
    locale === "de"
      ? "Lerne die Praxis, Werte und Community des Consciousness Explorers Club Zürich kennen. Offen, nicht-dogmatisch, neugierig."
      : "Learn about the practice, values, and community of the Consciousness Explorers Club Zurich. Open, non-dogmatic, curious.";
  const url = `${SITE_URL}/${locale}/about`;

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
      siteName: SITE_NAME,
      locale,
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      {/* Header */}
      <header className="mb-16 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-zen-900 dark:text-zen-50 md:text-4xl">
          {dict.about.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zen-600 dark:text-zen-300">
          {dict.about.intro}
        </p>
      </header>

      {/* What is CEC */}
      <section className="mb-16">
        <h2 className="mb-4 text-xl font-semibold text-zen-900 dark:text-zen-50">
          {dict.about.whatIsTitle}
        </h2>
        <p className="text-zen-600 dark:text-zen-300 leading-relaxed">
          {dict.about.whatIsText}
        </p>
      </section>

      {/* Our Practice */}
      <section className="mb-16">
        <h2 className="mb-4 text-xl font-semibold text-zen-900 dark:text-zen-50">
          {dict.about.practiceTitle}
        </h2>
        <p className="mb-6 text-zen-600 dark:text-zen-300">
          {dict.about.practiceText}
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {dict.about.practiceItems.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 rounded-lg border border-zen-200/60 bg-white/80 p-4 backdrop-blur dark:border-zen-800/60 dark:bg-zen-900/50"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700 dark:bg-forest-900/30 dark:text-forest-300">
                <Check className="h-3.5 w-3.5" />
              </div>
              <span className="text-sm text-zen-700 dark:text-zen-200">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Community */}
      <section className="rounded-2xl bg-gradient-to-br from-forest-50 to-sky-50 p-8 dark:from-forest-950/30 dark:to-sky-950/30">
        <h2 className="mb-4 text-xl font-semibold text-zen-900 dark:text-zen-50">
          {dict.about.communityTitle}
        </h2>
        <p className="text-zen-600 dark:text-zen-300 leading-relaxed">
          {dict.about.communityText}
        </p>
      </section>
    </div>
  );
}
