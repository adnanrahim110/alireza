import Button from "@/components/ui/Button";
import Glow from "@/components/ui/Glow";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteContent } from "@/content/site-content";
import { Feather, LibraryBig, Mountain } from "lucide-react";

const previewItems = [
  {
    icon: Feather,
    title: "Biography from Kerman to Vaasa",
  },
  {
    icon: LibraryBig,
    title: "Research and writing path",
  },
  {
    icon: Mountain,
    title: "Themes of place, ritual, and power",
  },
];

export default function AuthorIntro() {
  const { authorIntro } = siteContent.home;

  return (
    <section className="section-dark relative overflow-hidden">
      <Glow
        color="copper"
        size="22rem"
        className="-left-20 top-12 opacity-30"
      />

      <div className="section-shell relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-12">
          <Reveal>
            <SectionHeading
              eyebrow={authorIntro.eyebrow}
              title={authorIntro.title}
              dark
            />
            <p className="mt-6 max-w-2xl text-base leading-8 text-sand-200/70">
              Alireza Kakoee was born in Kerman province, Iran, and now lives
              in Vaasa, Finland, where he continues his work in energy research
              alongside his writing.
            </p>
            <div className="mt-7">
              <Button
                href={authorIntro.action.href}
                variant="outline"
                className="text-sand-200/80 border border-sand-200/15 hover:bg-sand-100/8 hover:text-sand-50"
              >
                {authorIntro.action.label}
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-4">
            <Reveal delay={0.06}>
              <div className="rounded-[1.6rem] border border-sand-100/10 bg-soot-900/50 p-5 backdrop-blur-sm sm:p-6">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-copper-300/80">
                  On the author page
                </p>
                <div className="mt-4 grid gap-3">
                  {previewItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <Reveal key={item.title} delay={0.1 + index * 0.06}>
                        <div className="rounded-2xl border border-sand-100/8 bg-soot-950/25 px-4 py-4">
                          <div className="flex items-start gap-3">
                            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-copper-300" />
                            <p className="text-sm leading-6 text-sand-100/78 sm:text-[0.95rem]">
                              {item.title}
                            </p>
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
