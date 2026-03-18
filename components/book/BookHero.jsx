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
      <div className="relative space-y-4 text-center sm:space-y-6 lg:text-left">
        <FloatingBook
          alt={siteContent.assets.cover.alt}
          height={siteContent.assets.cover.height}
          src={siteContent.assets.cover.src}
          width={siteContent.assets.cover.width}
        />

        <div className="rounded-[1.35rem] border border-gold-300/20 bg-soot-900/55 p-4 backdrop-blur-sm sm:p-6">
          <IconBadge
            className="mx-auto lg:mx-0"
            label="Literary fantasy"
            tone="gold-dark"
          />
          <p className="mt-2.5 font-heading text-[1.35rem] leading-tight text-sand-50 sm:mt-3 sm:text-[1.7rem]">
            {siteContent.bookProfile.title}
          </p>
          <p className="mt-1.5 text-[0.85rem] leading-6 text-sand-200/65 sm:mt-2 sm:text-sm sm:leading-7">
            {siteContent.bookProfile.subtitle}
          </p>
        </div>
      </div>
    </PageHero>
  );
}
