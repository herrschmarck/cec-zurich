import Link from "next/link";
import { Locale } from "@/i18n.config";
import { Dictionary } from "@/lib/i18n/dictionaries/types";
import { EventCard } from "@/components/events/event-card";
import { events } from "@/lib/data/events";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface UpcomingEventsProps {
  locale: Locale;
  dict: Dictionary;
}

export function UpcomingEvents({ locale, dict }: UpcomingEventsProps) {
  // Show first 3 events
  const upcomingEvents = events.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zen-900 dark:text-zen-50 md:text-3xl">
            {dict.home.nextEventsTitle}
          </h2>
        </div>
        <Button variant="ghost" asChild>
          <Link href={`/${locale}/events`}>
            {dict.common.viewAll}
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {upcomingEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
