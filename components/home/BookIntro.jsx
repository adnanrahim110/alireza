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
      <div className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-14">
          {/* Left — text + facets */}
          <div className="space-y-8">
            <Reveal>
              <SectionHeading
                description={bookIntro.description}
                eyebrow={bookIntro.eyebrow}
                title={bookIntro.title}
              />
            </Reveal>

            <div className="grid gap-4">
              {bookIntro.facets.map((facet, index) => {
                const Icon = icons[index];

                return (
                  <Reveal key={facet.title} delay={index * 0.06}>
                    <div className="rounded-2xl border border-gold-300/35 bg-sand-50/65 px-5 py-5">
                      <IconBadge icon={Icon} label={facet.title} />
                      <p className="mt-4 text-base leading-8 text-soot-800">
                        {facet.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal>
              <Button href={bookIntro.action.href}>
                {bookIntro.action.label}
              </Button>
            </Reveal>
          </div>

          {/* Right — image + quote */}
          <div className="space-y-8">
            <Reveal delay={0.08} variant="slide-right">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-gold-300/50 bg-gold-100 shadow-[0_24px_60px_rgba(82,36,9,0.1)]">
                <Image
                  alt={siteContent.assets.backCover.alt}
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  src={siteContent.assets.backCover.src}
                />
              </div>
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
