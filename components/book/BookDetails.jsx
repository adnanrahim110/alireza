import QuoteBlock from "@/components/ui/QuoteBlock";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteContent } from "@/content/site-content";

export default function BookDetails() {
  const { details } = siteContent.book;

  return (
    <section className="section-light">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
          <Reveal>
            <SectionHeading
              description={details.description}
              eyebrow={details.eyebrow}
              title={details.title}
            />
            <div className="mt-5 flex flex-wrap gap-2 sm:mt-7">
              {details.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gold-300/45 bg-gold-100/70 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-soot-800 sm:text-xs sm:tracking-[0.16em]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 space-y-4 sm:mt-7 sm:space-y-5">
              {siteContent.bookProfile.details.map((detail) => (
                <p key={detail} className="text-[0.92rem] leading-7 text-soot-700 sm:text-base sm:leading-8">
                  {detail}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-3 sm:gap-4">
            {details.sections.map((section, index) => (
              <Reveal
                key={section.title}
                delay={index * 0.06}
                variant="slide-right"
              >
                <div className="rounded-2xl border border-gold-300/35 bg-sand-50/65 px-4 py-5 transition-colors duration-300 hover:border-gold-300/55 hover:bg-sand-50/85 sm:px-6 sm:py-6">
                  <p className="font-heading text-xl text-soot-950 sm:text-2xl">
                    {section.title}
                  </p>
                  <p className="mt-2.5 text-[0.92rem] leading-7 text-soot-700 sm:mt-3 sm:text-base sm:leading-8">
                    {section.description}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.18}>
              <QuoteBlock quote={details.pullQuote} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
