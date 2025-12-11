import Link from "next/link";
import { Locale } from "@/i18n.config";
import { Dictionary } from "@/lib/i18n/dictionaries/types";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, Compass } from "lucide-react";

interface AboutSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function AboutSection({ locale, dict }: AboutSectionProps) {
  const features = [
    {
      icon: Compass,
      title: "Exploration",
      description:
        "Wir erforschen verschiedene Meditationstechniken und Bewusstseinspraktiken mit Neugier und Offenheit.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Eine warme, einladende Gemeinschaft von Menschen auf dem Weg der Selbsterforschung.",
    },
    {
      icon: Heart,
      title: "Verbundenheit",
      description:
        "Gemeinsam praktizieren, teilen und wachsen – in einer Atmosphäre von Akzeptanz und Mitgefühl.",
    },
  ];

  return (
    <section className="bg-white/50 dark:bg-zen-900/30">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text content */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-zen-900 dark:text-zen-50 md:text-3xl">
              {dict.home.aboutTitle}
            </h2>
            <p className="text-zen-600 dark:text-zen-300">{dict.home.aboutText}</p>
            <Button variant="outline" asChild>
              <Link href={`/${locale}/about`}>
                {dict.common.learnMore}
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Feature cards */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-stretch gap-4 rounded-xl border border-zen-200/60 bg-white/80 p-4 backdrop-blur dark:border-zen-800/60 dark:bg-zen-900/50"
              >
                <div className="flex h-full w-12 shrink-0 items-center justify-center rounded-lg bg-forest-100 text-forest-700 dark:bg-forest-900/30 dark:text-forest-300">
                  <feature.icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-medium text-zen-900 dark:text-zen-50">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-zen-600 dark:text-zen-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
