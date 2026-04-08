import Button from "@/components/ui/Button";
import IconBadge from "@/components/ui/IconBadge";
import QuoteBlock from "@/components/ui/QuoteBlock";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteContent } from "@/content/site-content";
import { Landmark, Sparkles, Wheat } from "lucide-react";
import Image from "next/image";

const icons = [Landmark, Wheat, Sparkles];

export default function BookIntro() {
  const { bookIntro } = siteContent.home;

  return (
    <section className="section-light">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-14">
          <div className="space-y-6 sm:space-y-8">
            <Reveal>
              <SectionHeading
                description={bookIntro.description}
                eyebrow={bookIntro.eyebrow}
                title={bookIntro.title}
              />
            </Reveal>

            <div className="grid gap-3 sm:gap-4">
              {bookIntro.facets.map((facet, index) => {
                const Icon = icons[index];

                return (
                  <Reveal key={facet.title} delay={index * 0.06}>
                    <div className="rounded-2xl border border-gold-300/35 bg-sand-50/65 px-4 py-4 transition-colors duration-300 hover:border-gold-300/55 hover:bg-sand-50/85 sm:px-5 sm:py-5">
                      <IconBadge icon={Icon} label={facet.title} />
                      <p className="mt-3 text-[0.92rem] leading-7 text-soot-800 sm:mt-4 sm:text-base sm:leading-8">
                        {facet.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal>
              <div className="flex flex-wrap gap-4 items-center">
                <Button href={bookIntro.action.href}>
                  {bookIntro.action.label}
                </Button>
                <Button href={siteContent.assets.buyLink} variant="outline">
                  Buy Book on Amazon
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <Reveal delay={0.08} variant="slide-right">
              <Image
                alt={siteContent.assets.backCover.alt}
                width={1080}
                height={1080}
                className="w-full h-auto rounded-2xl"
                src={siteContent.assets.backCover.src}
              />
            </Reveal>

            <Reveal delay={0.14}>
              <QuoteBlock quote={siteContent.bookProfile.blurb} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
