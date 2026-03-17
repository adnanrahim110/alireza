import FloatingBook from "@/components/ui/FloatingBook";
import IconBadge from "@/components/ui/IconBadge";
import PageHero from "@/components/ui/PageHero";
import { siteContent } from "@/content/site-content";

export default function BookHero() {
  const { hero } = siteContent.book;

  return (
    <PageHero
      description={hero.description}
      dark
      eyebrow={hero.eyebrow}
      fullScreen
      primaryAction={hero.primaryAction}
      secondaryAction={hero.secondaryAction}
      title={hero.title}
    >
      <div className="relative space-y-6 text-center lg:text-left">
        <FloatingBook
          alt={siteContent.assets.cover.alt}
          height={siteContent.assets.cover.height}
          src={siteContent.assets.cover.src}
          width={siteContent.assets.cover.width}
        />

        <div className="rounded-[1.35rem] border border-gold-300/20 bg-soot-900/55 p-5 backdrop-blur-sm sm:p-6">
          <IconBadge
            className="mx-auto lg:mx-0"
            label="Literary fantasy"
            tone="gold-dark"
          />
          <p className="mt-3 font-heading text-[1.5rem] leading-tight text-sand-50 sm:text-[1.7rem]">
            {siteContent.bookProfile.title}
          </p>
          <p className="mt-2 text-sm leading-7 text-sand-200/65">
            {siteContent.bookProfile.subtitle}
          </p>
        </div>
      </div>
    </PageHero>
  );
}
