"use client";

import { EventType } from "./event-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EventFilterProps {
  activeFilter: EventType | "all";
  onFilterChange: (filter: EventType | "all") => void;
  labels: {
    all: string;
    meditation: string;
    workshop: string;
    retreat: string;
    community: string;
  };
}

const filters: { value: EventType | "all"; key: keyof EventFilterProps["labels"] }[] = [
  { value: "all", key: "all" },
  { value: "Meditation", key: "meditation" },
  { value: "Workshop", key: "workshop" },
  { value: "Retreat", key: "retreat" },
  { value: "Community", key: "community" },
];

export function EventFilter({ activeFilter, onFilterChange, labels }: EventFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={activeFilter === filter.value ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(filter.value)}
          className={cn(
            activeFilter === filter.value
              ? ""
              : "bg-white/80 dark:bg-zen-900/80"
          )}
        >
          {labels[filter.key]}
        </Button>
      ))}
    </div>
  );
}
