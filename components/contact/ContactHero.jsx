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
      <div className="space-y-5">
        <IconBadge label="Inquiry-ready contact" tone="copper" />
        <div className="rounded-[1.35rem] border border-copper-300/35 bg-sand-50/70 p-5 backdrop-blur-sm sm:p-6">
          <p className="text-sm leading-7 text-soot-700/90">
            A focused contact entry point for publishing, collaboration, or
            event conversations, with a form design that stays clear about its
            current non-live status.
          </p>
        </div>
      </div>
    </PageHero>
  );
}
