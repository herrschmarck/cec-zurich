import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Hero } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about-section";
import { UpcomingEvents } from "@/components/home/upcoming-events";

interface HomePageProps {
  params: { locale: Locale };
}

export default async function HomePage({ params }: HomePageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <>
      <Hero locale={params.locale} dict={dict} />
      <AboutSection locale={params.locale} dict={dict} />
      <UpcomingEvents locale={params.locale} dict={dict} />
    </>
  );
}
