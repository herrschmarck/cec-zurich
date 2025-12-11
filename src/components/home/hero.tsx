import Image from "next/image";
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
    <section className="relative min-h-[70vh] overflow-hidden md:min-h-[80vh]">
      {/* Hero Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Meditation in Gemeinschaft"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay with gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-zen-950/90 via-zen-950/50 to-zen-950/30" />

      {/* Content */}
      <div className="relative flex min-h-[70vh] items-center md:min-h-[80vh]">
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              {dict.common.tagline}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl">
              {dict.home.heroTitle}
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zen-100 drop-shadow-md">
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
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                asChild
              >
                <Link href={`/${locale}/events`}>{dict.common.ctaEvents}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
