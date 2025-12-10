"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Locale, locales, localeNames } from "@/i18n.config";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  currentLocale: Locale;
}

export function LanguageToggle({ currentLocale }: LanguageToggleProps) {
  const pathname = usePathname();

  // Get the path without the locale prefix
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/";

  // Get the other locale
  const otherLocale = locales.find((l) => l !== currentLocale) as Locale;

  return (
    <Button variant="ghost" size="sm" asChild>
      <Link href={`/${otherLocale}${pathWithoutLocale}`}>
        <Globe className="mr-1.5 h-4 w-4" />
        {localeNames[otherLocale]}
      </Link>
    </Button>
  );
}
