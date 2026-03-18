import IconBadge from "@/components/ui/IconBadge";
import PageHero from "@/components/ui/PageHero";
import { siteContent } from "@/content/site-content";

export default function AuthorHero() {
  const { hero } = siteContent.author;
  const portrait = siteContent.assets.authorPortrait;

  return (
    <PageHero
      description={hero.description}
      eyebrow={hero.eyebrow}
      fullScreen
      primaryAction={hero.primaryAction}
      secondaryAction={hero.secondaryAction}
      title={hero.title}
    >
      <div className="relative space-y-4 sm:space-y-5">
        <IconBadge label="Author profile" tone="gold" />

        <div className="rounded-[1.35rem] border border-gold-300/30 bg-sand-50/65 p-4 backdrop-blur-sm sm:p-6">
          <p className="font-heading text-[1.35rem] leading-tight text-soot-950 sm:text-[1.7rem]">
            {siteContent.authorProfile.name}
          </p>
          <p className="mt-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-copper-700/90 sm:mt-2 sm:text-[0.72rem] sm:tracking-[0.18em]">
            {siteContent.authorProfile.role}
          </p>
          <p className="mt-3 text-[0.85rem] leading-6 text-soot-700/90 sm:mt-4 sm:text-sm sm:leading-7">
            {siteContent.authorProfile.summary}
          </p>
        </div>
      </div>
    </PageHero>
  );
}
