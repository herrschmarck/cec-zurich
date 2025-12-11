"use client";

import { useState } from "react";
import { Locale } from "@/i18n.config";
import { de } from "@/lib/i18n/dictionaries/de";
import { en } from "@/lib/i18n/dictionaries/en";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Send, CheckCircle } from "lucide-react";

interface ContactPageClientProps {
  locale: Locale;
}

export function ContactPageClient({ locale }: ContactPageClientProps) {
  const dict = locale === "en" ? en : de;

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    experience: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to an API
    console.log("Form submitted:", formState);
    setIsSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-zen-900 dark:text-zen-50 md:text-4xl">
          {dict.contact.title}
        </h1>
        <p className="mt-4 text-lg text-zen-600 dark:text-zen-300">
          {dict.contact.subtitle}
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* First time info */}
        <Card className="h-fit bg-gradient-to-br from-forest-50 to-sky-50 dark:from-forest-950/30 dark:to-sky-950/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Heart className="h-5 w-5 text-forest-600 dark:text-forest-400" />
              {dict.contact.firstTimeTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zen-600 dark:text-zen-300 leading-relaxed">
              {dict.contact.firstTimeText}
            </p>
          </CardContent>
        </Card>

        {/* Contact form */}
        <Card>
          <CardContent className="pt-6">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-forest-100 text-forest-600 dark:bg-forest-900/30 dark:text-forest-400">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <p className="text-lg font-medium text-zen-900 dark:text-zen-50">
                  {dict.contact.formSuccess}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-zen-700 dark:text-zen-200"
                  >
                    {dict.contact.formName}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-zen-700 dark:text-zen-200"
                  >
                    {dict.contact.formEmail}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="experience"
                    className="mb-1.5 block text-sm font-medium text-zen-700 dark:text-zen-200"
                  >
                    {dict.contact.formExperience}
                  </label>
                  <select
                    id="experience"
                    className="flex h-10 w-full rounded-lg border border-zen-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2 dark:border-zen-700 dark:bg-zen-900 dark:ring-offset-zen-950 dark:focus-visible:ring-forest-400"
                    value={formState.experience}
                    onChange={(e) =>
                      setFormState({ ...formState, experience: e.target.value })
                    }
                  >
                    <option value="">—</option>
                    {dict.contact.formExperienceOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-zen-700 dark:text-zen-200"
                  >
                    {dict.contact.formMessage}
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  {dict.contact.formSubmit}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
