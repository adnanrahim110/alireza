import IconBadge from "@/components/ui/IconBadge";
import PageHero from "@/components/ui/PageHero";
import { siteContent } from "@/content/site-content";

export default function ContactHero() {
  const { hero } = siteContent.contactPage;

  return (
    <PageHero
      description={hero.description}
      eyebrow={hero.eyebrow}
      fullScreen
      primaryAction={hero.primaryAction}
      secondaryAction={hero.secondaryAction}
      title={hero.title}
    >
      <div className="space-y-4 sm:space-y-5">
        <IconBadge label="Reader-Centered" tone="copper" />
        <div className="rounded-[1.35rem] border border-copper-300/35 bg-sand-50/70 p-4 backdrop-blur-sm sm:p-6">
          <p className="text-[0.85rem] leading-6 text-soot-700/90 sm:text-sm sm:leading-7">
            A welcoming point for readers to share thoughts, questions, or
            reflections on the story, with a form designed to stay clear and
            usable before going fully live.
          </p>
        </div>
      </div>
    </PageHero>
  );
}
