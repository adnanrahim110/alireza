import IconBadge from "@/components/ui/IconBadge";
import PageHero from "@/components/ui/PageHero";
import { siteContent } from "@/content/site-content";

export default function AuthorHero() {
  const { hero } = siteContent.author;

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
        <IconBadge label="Author profile" tone="gold-dark" />
        <p className="font-heading text-[1.5rem] leading-tight text-sand-50 sm:text-[1.7rem]">
          {siteContent.authorProfile.name}
        </p>
        <p className="text-sm leading-7 text-sand-200/55">
          {siteContent.authorProfile.summary}
        </p>
      </div>
    </PageHero>
  );
}
