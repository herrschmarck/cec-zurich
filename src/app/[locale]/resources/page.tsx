import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { resources, ResourceType } from "@/lib/data/resources";
import { ResourceCard } from "@/components/resources/resource-card";

interface ResourcesPageProps {
  params: { locale: Locale };
}

export default async function ResourcesPage({ params }: ResourcesPageProps) {
  const dict = await getDictionary(params.locale);

  const sections: { type: ResourceType; title: string }[] = [
    { type: "guide", title: dict.resources.guidesTitle },
    { type: "book", title: dict.resources.booksTitle },
    { type: "podcast", title: dict.resources.podcastsTitle },
    { type: "science", title: dict.resources.scienceTitle },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-3xl font-bold tracking-tight text-zen-900 dark:text-zen-50 md:text-4xl">
          {dict.resources.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zen-600 dark:text-zen-300">
          {dict.resources.subtitle}
        </p>
      </header>

      {/* Resource sections */}
      <div className="space-y-16">
        {sections.map((section) => {
          const sectionResources = resources.filter(
            (r) => r.type === section.type
          );
          if (sectionResources.length === 0) return null;

          return (
            <section key={section.type}>
              <h2 className="mb-6 text-xl font-semibold text-zen-900 dark:text-zen-50">
                {section.title}
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {sectionResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
