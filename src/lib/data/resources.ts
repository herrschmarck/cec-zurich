export type ResourceType = "guide" | "book" | "podcast" | "science";

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  url?: string;
  author?: string;
}

export const resources: Resource[] = [
  // Guides
  {
    id: "1",
    title: "Einführung in die Achtsamkeitsmeditation",
    description:
      "Eine einfache Anleitung für Anfänger, um mit der täglichen Meditationspraxis zu beginnen.",
    type: "guide",
    url: "#",
  },
  {
    id: "2",
    title: "Body Scan Meditation",
    description:
      "Schritt-für-Schritt Anleitung für eine entspannende Körperwahrnehmungsübung.",
    type: "guide",
    url: "#",
  },
  {
    id: "3",
    title: "Loving-Kindness Meditation (Metta)",
    description:
      "Kultiviere Mitgefühl und Wohlwollen für dich selbst und andere.",
    type: "guide",
    url: "#",
  },

  // Books
  {
    id: "4",
    title: "The Mind Illuminated",
    description:
      "Ein umfassender Leitfaden für Meditation, der traditionelle Weisheit mit moderner Wissenschaft verbindet.",
    type: "book",
    author: "Culadasa (John Yates)",
  },
  {
    id: "5",
    title: "Waking Up",
    description:
      "Eine Erkundung von Spiritualität ohne Religion, mit praktischen Anleitungen zur Meditation.",
    type: "book",
    author: "Sam Harris",
  },
  {
    id: "6",
    title: "Wherever You Go, There You Are",
    description:
      "Klassiker über Achtsamkeit im Alltag vom Begründer der MBSR-Methode.",
    type: "book",
    author: "Jon Kabat-Zinn",
  },

  // Podcasts
  {
    id: "7",
    title: "Waking Up Podcast",
    description:
      "Gespräche über Bewusstsein, Meditation und die grossen Fragen des Lebens.",
    type: "podcast",
    author: "Sam Harris",
    url: "https://www.wakingup.com",
  },
  {
    id: "8",
    title: "Ten Percent Happier",
    description:
      "Praktische Weisheit von Meditationslehrern und Wissenschaftlern.",
    type: "podcast",
    author: "Dan Harris",
    url: "https://www.tenpercent.com/podcast",
  },
  {
    id: "9",
    title: "Deconstructing Yourself",
    description:
      "Tiefgehende Gespräche über Meditation, Bewusstsein und Erwachen.",
    type: "podcast",
    author: "Michael Taft",
    url: "https://deconstructingyourself.com/podcast",
  },

  // Science
  {
    id: "10",
    title: "Altered Traits",
    description:
      "Was die Wissenschaft über die Auswirkungen von Meditation auf Gehirn und Körper sagt.",
    type: "science",
    author: "Daniel Goleman & Richard Davidson",
  },
  {
    id: "11",
    title: "Mindfulness-Based Stress Reduction (MBSR)",
    description:
      "Wissenschaftlich fundiertes 8-Wochen-Programm zur Stressreduktion durch Achtsamkeit.",
    type: "science",
    url: "https://www.umassmed.edu/cfm/mindfulness-based-programs/",
  },
];
