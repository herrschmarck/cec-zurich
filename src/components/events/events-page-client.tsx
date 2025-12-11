"use client";

import { useState } from "react";
import { Locale } from "@/i18n.config";
import { EventCard, EventType } from "@/components/events/event-card";
import { EventFilter } from "@/components/events/event-filter";
import { events } from "@/lib/data/events";
import { Dictionary } from "@/lib/i18n/dictionaries/types";

interface EventsPageClientProps {
  locale: Locale;
  dict: Dictionary;
}

export function EventsPageClient({ locale, dict }: EventsPageClientProps) {
  const [activeFilter, setActiveFilter] = useState<EventType | "all">("all");

  const filteredEvents =
    activeFilter === "all"
      ? events
      : events.filter((event) => event.type === activeFilter);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-zen-900 dark:text-zen-50 md:text-4xl">
          {dict.events.title}
        </h1>
        <p className="mt-4 text-lg text-zen-600 dark:text-zen-300">
          {dict.events.subtitle}
        </p>
      </header>

      {/* Filter */}
      <div className="mb-8">
        <EventFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          labels={{
            all: dict.events.filterAll,
            meditation: dict.events.filterMeditation,
            workshop: dict.events.filterWorkshop,
            retreat: dict.events.filterRetreat,
            community: dict.events.filterCommunity,
          }}
        />
      </div>

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-zen-200/60 bg-white/80 p-12 text-center backdrop-blur dark:border-zen-800/60 dark:bg-zen-900/50">
          <p className="text-zen-600 dark:text-zen-400">{dict.events.noEvents}</p>
        </div>
      )}
    </div>
  );
}
