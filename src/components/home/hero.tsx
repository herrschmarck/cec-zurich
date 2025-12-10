import Link from "next/link";
import { Locale } from "@/i18n.config";
import { Dictionary } from "@/lib/i18n/dictionaries/types";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  locale: Locale;
  dict: Dictionary;
}

export function Hero({ locale, dict }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-50 via-zen-50 to-sky-50 dark:from-forest-950/30 dark:via-zen-950 dark:to-sky-950/30" />

      {/* Decorative elements */}
      <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-forest-200/30 blur-3xl dark:bg-forest-800/20" />
      <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-800/20" />

      <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-forest-200 bg-white/80 px-4 py-1.5 text-xs font-medium text-forest-700 backdrop-blur dark:border-forest-800 dark:bg-zen-900/80 dark:text-forest-300">
            <Sparkles className="h-3.5 w-3.5" />
            {dict.common.tagline}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-zen-900 dark:text-zen-50 md:text-5xl lg:text-6xl">
            {dict.home.heroTitle}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zen-600 dark:text-zen-300">
            {dict.home.heroSubtitle}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href={`/${locale}/contact`}>
                {dict.common.ctaFirstTime}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={`/${locale}/events`}>{dict.common.ctaEvents}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
