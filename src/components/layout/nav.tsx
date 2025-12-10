"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n.config";
import { Dictionary } from "@/lib/i18n/dictionaries/types";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface NavProps {
  locale: Locale;
  dict: Dictionary;
}

export function Nav({ locale, dict }: NavProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: `/${locale}`, label: dict.common.nav.home },
    { href: `/${locale}/about`, label: dict.common.nav.about },
    { href: `/${locale}/events`, label: dict.common.nav.events },
    { href: `/${locale}/resources`, label: dict.common.nav.resources },
    { href: `/${locale}/contact`, label: dict.common.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zen-200/60 bg-white/80 backdrop-blur-md dark:border-zen-800/60 dark:bg-zen-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="text-sm font-semibold tracking-tight text-zen-900 dark:text-zen-50"
        >
          CEC Zürich
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm transition-colors",
                isActive(item.href)
                  ? "bg-forest-100 font-medium text-forest-800 dark:bg-forest-900/30 dark:text-forest-300"
                  : "text-zen-600 hover:bg-zen-100 hover:text-zen-900 dark:text-zen-400 dark:hover:bg-zen-800 dark:hover:text-zen-100"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          <LanguageToggle currentLocale={locale} />
          <ThemeToggle />

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="border-t border-zen-200/60 bg-white/95 px-4 py-4 backdrop-blur-md dark:border-zen-800/60 dark:bg-zen-950/95 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition-colors",
                  isActive(item.href)
                    ? "bg-forest-100 font-medium text-forest-800 dark:bg-forest-900/30 dark:text-forest-300"
                    : "text-zen-600 hover:bg-zen-100 hover:text-zen-900 dark:text-zen-400 dark:hover:bg-zen-800 dark:hover:text-zen-100"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
