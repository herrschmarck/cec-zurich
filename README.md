# Consciousness Explorers Club Zürich - Website

Eine moderne, mehrsprachige Website für den Consciousness Explorers Club Zürich – eine Meditationsgruppe in Zürich.

## Tech Stack

- **Next.js 14** mit App Router
- **TypeScript**
- **Tailwind CSS** für Styling
- **shadcn/ui** Komponenten
- **next-themes** für Dark Mode
- **lucide-react** für Icons

## Features

- 🌐 **Mehrsprachig** (DE/EN) mit URL-basiertem Routing (`/de/...`, `/en/...`)
- 🌙 **Dark Mode** Support
- 📱 **Responsive Design** für alle Geräte
- 🎨 **Zen-inspiriertes Design** mit natürlicher Farbpalette

## Seiten

1. **Home** (`/[locale]`)
   - Hero mit Tagline
   - Kurze Beschreibung der Gruppe
   - Nächste Events
   - CTA "Zum ersten Mal dabei?"

2. **Über uns** (`/[locale]/about`)
   - Was ist der CEC?
   - Unsere Praxis
   - Community in Zürich

3. **Events** (`/[locale]/events`)
   - Liste der kommenden Sessions
   - Filter nach Typ (Meditation, Workshop, Retreat, Community)

4. **Ressourcen** (`/[locale]/resources`)
   - Meditationsanleitungen
   - Empfohlene Bücher
   - Podcasts
   - Wissenschaftliche Ressourcen

5. **Kontakt** (`/[locale]/contact`)
   - Info für Erstbesucher
   - Kontaktformular

## Installation

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Für Produktion bauen
npm run build
npm start
```

## Projektstruktur

```
src/
├── app/
│   ├── globals.css
│   └── [locale]/
│       ├── layout.tsx
│       ├── page.tsx
│       ├── about/
│       ├── events/
│       ├── resources/
│       └── contact/
├── components/
│   ├── layout/
│   │   ├── nav.tsx
│   │   ├── footer.tsx
│   │   ├── theme-toggle.tsx
│   │   ├── language-toggle.tsx
│   │   └── providers.tsx
│   ├── home/
│   │   ├── hero.tsx
│   │   ├── about-section.tsx
│   │   └── upcoming-events.tsx
│   ├── events/
│   │   ├── event-card.tsx
│   │   └── event-filter.tsx
│   ├── resources/
│   │   └── resource-card.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── lib/
│   ├── utils.ts
│   ├── data/
│   │   ├── events.ts
│   │   └── resources.ts
│   └── i18n/
│       ├── get-dictionary.ts
│       └── dictionaries/
│           ├── types.ts
│           ├── de.ts
│           └── en.ts
└── i18n.config.ts
```

## Anpassungen

### Texte ändern
Bearbeite die Dictionaries in `src/lib/i18n/dictionaries/de.ts` und `en.ts`.

### Events hinzufügen
Bearbeite `src/lib/data/events.ts`.

### Ressourcen hinzufügen
Bearbeite `src/lib/data/resources.ts`.

### Farben anpassen
Bearbeite die Farbpalette in `tailwind.config.ts`.

### Bilder hinzufügen
Lege Bilder in `public/images/` ab und referenziere sie in den Komponenten.

## Deployment

Das Projekt kann auf Vercel, Netlify oder anderen Next.js-kompatiblen Plattformen deployed werden.

```bash
# Vercel
npx vercel

# Netlify
npm run build
# Deploy den .next Ordner
```

## Lizenz

MIT
