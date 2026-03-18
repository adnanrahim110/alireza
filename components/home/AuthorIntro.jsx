import Button from "@/components/ui/Button";
import Glow from "@/components/ui/Glow";
import IconBadge from "@/components/ui/IconBadge";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteContent } from "@/content/site-content";
import { Feather, LibraryBig, Mountain } from "lucide-react";
import Image from "next/image";

const icons = [Feather, LibraryBig, Mountain];

export default function AuthorIntro() {
  const { authorIntro } = siteContent.home;
  const portrait = siteContent.assets.authorPortrait;

  return (
    <section className="section-dark relative overflow-hidden">
      <Glow
        color="copper"
        size="22rem"
        className="-left-20 top-12 opacity-30 glow-hide-mobile"
      />

      <div className="section-shell relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-14">
          <Reveal>
            <SectionHeading
              description={authorIntro.description}
              eyebrow={authorIntro.eyebrow}
              title={authorIntro.title}
              dark
            />
            <p className="mt-5 text-[0.95rem] leading-7 text-sand-200/70 sm:mt-6 sm:text-base sm:leading-8">
              {siteContent.authorProfile.summary}
            </p>
            <div className="mt-6 sm:mt-7">
              <Button href={authorIntro.action.href} dark>
                {authorIntro.action.label}
              </Button>
            </div>
          </Reveal>

          <div className="space-y-6 sm:space-y-8">
            <Reveal delay={0.06} variant="slide-right">
              <div className="relative aspect-3/4 max-h-[68vh] overflow-hidden rounded-[1.75rem] border border-gold-300/20 bg-soot-900 shadow-[0_24px_60px_rgba(0,0,0,0.35)] md:max-h-none">
                <Image
                  alt={portrait.alt}
                  className="object-cover object-top"
                  fill
                  sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                  src={portrait.src}
                />
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-2 grid gap-3 sm:gap-4 md:grid-cols-[0.9fr_0.9fr_1.2fr]">
            {authorIntro.pillars.map((pillar, index) => {
              const Icon = icons[index];

              return (
                <Reveal key={pillar.title} delay={0.1 + index * 0.06}>
                  <div className="rounded-2xl border border-sand-100/8 bg-soot-900/50 px-4 py-5 backdrop-blur-sm transition-colors duration-300 hover:border-sand-100/15 hover:bg-soot-900/70 sm:px-6 sm:py-6">
                    <IconBadge
                      icon={Icon}
                      label={pillar.title}
                      tone="copper-dark"
                      className="text-[9px]!"
                    />
                    <p className="mt-3 text-[0.92rem] leading-7 text-sand-200/70 sm:mt-4 sm:text-base sm:leading-8">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
