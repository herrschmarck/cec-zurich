import { Resource, ResourceType } from "@/lib/data/resources";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Headphones, FileText, FlaskConical, ExternalLink } from "lucide-react";

const typeIcons: Record<ResourceType, typeof BookOpen> = {
  guide: FileText,
  book: BookOpen,
  podcast: Headphones,
  science: FlaskConical,
};

const typeColors: Record<ResourceType, string> = {
  guide: "bg-forest-100 text-forest-700 dark:bg-forest-900/30 dark:text-forest-300",
  book: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  podcast: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  science: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
};

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const Icon = typeIcons[resource.type];

  const content = (
    <Card className="group h-full transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${typeColors[resource.type]}`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <CardTitle className="flex items-center gap-2 text-base leading-snug">
              {resource.title}
              {resource.url && (
                <ExternalLink className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              )}
            </CardTitle>
            {resource.author && (
              <p className="mt-1 text-xs text-zen-500 dark:text-zen-400">
                {resource.author}
              </p>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-zen-600 dark:text-zen-300">
          {resource.description}
        </p>
      </CardContent>
    </Card>
  );

  if (resource.url) {
    return (
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}
