import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type EventType = "Meditation" | "Workshop" | "Retreat" | "Community";

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: EventType;
  description: string;
}

interface EventCardProps {
  event: Event;
}

const typeColors: Record<EventType, string> = {
  Meditation:
    "bg-forest-100 text-forest-700 dark:bg-forest-900/30 dark:text-forest-300",
  Workshop: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
  Retreat:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  Community:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
};

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="group h-full transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base leading-snug">{event.title}</CardTitle>
          <span
            className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide ${typeColors[event.type]}`}
          >
            {event.type}
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-3 text-xs text-zen-600 dark:text-zen-400">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {event.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {event.time}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {event.location}
          </span>
        </div>
        <p className="text-sm text-zen-600 dark:text-zen-300">
          {event.description}
        </p>
      </CardContent>
    </Card>
  );
}
