import { Event } from "@/components/events/event-card";

export const events: Event[] = [
  {
    id: "1",
    title: "Monday Night Sit",
    date: "Montag, 16. Dezember",
    time: "19:00 – 20:30",
    location: "Zürich Kreis 4",
    type: "Meditation",
    description:
      "Gemeinsame stille Meditation, kurze Anleitung und offener Austausch in einer freundlichen Runde.",
  },
  {
    id: "2",
    title: "Exploration Lab: Bewusstsein & Alltag",
    date: "Donnerstag, 19. Dezember",
    time: "19:00 – 21:00",
    location: "Zürich Zentrum",
    type: "Workshop",
    description:
      "Praktische Übungen, Reflektion und Dialog zu Achtsamkeit, Emotionen und Verbundenheit im Alltag.",
  },
  {
    id: "3",
    title: "Neujahrs-Retreat: Stille & Intention",
    date: "4. – 5. Januar 2025",
    time: "Ganztägig",
    location: "Zürichsee Region",
    type: "Retreat",
    description:
      "Ein Wochenende der Stille, Meditation und Reflektion zum Jahresbeginn. Mit geführten Sessions und Zeit in der Natur.",
  },
  {
    id: "4",
    title: "Community Brunch",
    date: "Sonntag, 22. Dezember",
    time: "11:00 – 14:00",
    location: "Café Zähringer, Zürich",
    type: "Community",
    description:
      "Entspanntes Zusammensein, Kennenlernen und Austausch bei Kaffee und Brunch.",
  },
];
