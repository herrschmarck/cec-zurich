import Link from "next/link";
import { Locale } from "@/i18n.config";
import { Dictionary } from "@/lib/i18n/dictionaries/types";
import { Heart } from "lucide-react";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  return (
    <footer className="border-t border-zen-200/60 bg-zen-50/50 dark:border-zen-800/60 dark:bg-zen-950/50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zen-900 dark:text-zen-50">
              {dict.common.brand}
            </h3>
            <p className="text-sm text-zen-600 dark:text-zen-400">
              {dict.common.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-zen-900 dark:text-zen-50">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                href={`/${locale}/about`}
                className="text-sm text-zen-600 transition-colors hover:text-forest-700 dark:text-zen-400 dark:hover:text-forest-400"
              >
                {dict.common.nav.about}
              </Link>
              <Link
                href={`/${locale}/events`}
                className="text-sm text-zen-600 transition-colors hover:text-forest-700 dark:text-zen-400 dark:hover:text-forest-400"
              >
                {dict.common.nav.events}
              </Link>
              <Link
                href={`/${locale}/resources`}
                className="text-sm text-zen-600 transition-colors hover:text-forest-700 dark:text-zen-400 dark:hover:text-forest-400"
              >
                {dict.common.nav.resources}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="text-sm text-zen-600 transition-colors hover:text-forest-700 dark:text-zen-400 dark:hover:text-forest-400"
              >
                {dict.common.nav.contact}
              </Link>
            </nav>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-zen-900 dark:text-zen-50">
              Zürich, Switzerland
            </h4>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zen-200/60 pt-8 dark:border-zen-800/60 md:flex-row">
          <p className="text-xs text-zen-500 dark:text-zen-500">
            © {new Date().getFullYear()} Consciousness Explorers Club Zürich
          </p>
          <p className="flex items-center gap-1 text-xs text-zen-500 dark:text-zen-500">
            Made with <Heart className="h-3 w-3 text-forest-600" /> in Zürich
          </p>
        </div>
      </div>
    </footer>
  );
}
