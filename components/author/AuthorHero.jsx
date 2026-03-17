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
      <div className="relative space-y-5">
        <IconBadge label="Author profile" tone="gold" />

        <div className="rounded-[1.35rem] border border-gold-300/30 bg-sand-50/65 p-5 backdrop-blur-sm sm:p-6">
          <p className="font-heading text-[1.5rem] leading-tight text-soot-950 sm:text-[1.7rem]">
            {siteContent.authorProfile.name}
          </p>
          <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-copper-700/90">
            {siteContent.authorProfile.role}
          </p>
          <p className="mt-4 text-sm leading-7 text-soot-700/90">
            {siteContent.authorProfile.summary}
          </p>
        </div>
      </div>
    </PageHero>
  );
}
