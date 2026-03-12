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
      <div className="space-y-4">
        <IconBadge label="Inquiry-ready contact" tone="gold-dark" />
        <p className="text-sm leading-7 text-sand-200/55">
          A focused contact entry point for publishing, collaboration, or event
          conversations, with a form design that stays clear about its current
          non-live status.
        </p>
      </div>
    </PageHero>
  );
}
