import ContactForm from "@/components/ui/ContactForm";
import Glow from "@/components/ui/Glow";
import Reveal from "@/components/ui/Reveal";
import {
  BriefcaseBusiness,
  Clock3,
  Mail,
  MapPinned,
  Phone,
} from "lucide-react";

const methodIcons = {
  email: Mail,
  briefcase: BriefcaseBusiness,
  clock: Clock3,
  map: MapPinned,
  phone: Phone,
};

export default function ContactSection({
  heading,
  contact,
  compact = false,
  id = "contact",
}) {
  return (
    <section className="scroll-mt-24" id={id}>
      <div className="grid lg:grid-cols-2">
        <div className="section-light relative overflow-hidden px-5 py-12 sm:px-10 sm:py-20 lg:flex lg:flex-col lg:justify-center lg:px-14 lg:py-24">
          <Glow
            color="gold"
            size="22rem"
            className="-left-20 -top-20 opacity-25 glow-hide-mobile"
          />
          <Glow
            color="copper"
            size="16rem"
            className="-bottom-16 -right-8 opacity-20 glow-hide-mobile"
          />

          <div className="relative z-10 max-w-lg lg:ml-auto lg:mr-0">
            <Reveal>
              <p className="eyebrow">{heading.eyebrow}</p>
              <h2 className="mt-3 font-heading text-[1.75rem] leading-[1.08] text-soot-950 sm:mt-4 sm:text-[2.5rem] lg:text-[3rem]">
                {heading.title}
              </h2>
              {heading.description ? (
                <p className="mt-4 max-w-md text-[0.95rem] leading-7 text-soot-700/85 sm:mt-5 sm:text-[1.04rem] sm:leading-8">
                  {heading.description}
                </p>
              ) : null}
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 space-y-5 border-t border-soot-950/10 pt-6 sm:mt-10 sm:pt-8">
                {contact.methods.map((method) => {
                  const Icon = methodIcons[method.kind] ?? Mail;

                  return (
                    <div key={method.label} className="flex items-start gap-3 sm:gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-soot-950/5 text-copper-600">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-soot-700/55">
                          {method.label}
                        </p>
                        {method.href ? (
                          <a
                            className="mt-1 block text-[0.92rem] leading-7 text-soot-900 transition hover:text-copper-700 sm:text-[0.95rem]"
                            href={method.href}
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-[0.92rem] leading-7 text-soot-700/90 sm:text-[0.95rem]">
                            {method.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="section-light px-5 py-12 sm:px-10 sm:py-20 lg:flex lg:flex-col lg:justify-center lg:px-14 lg:py-24">
          <div className="relative z-10 max-w-lg">
            <Reveal delay={0.06}>
              <p className="eyebrow">Inquiry form</p>
              <h3 className="mt-3 max-w-md font-heading text-[1.6rem] leading-[1.12] text-soot-950 sm:mt-4 sm:text-[2.2rem]">
                A thoughtful space to send your message, designed with clarity
                and care
              </h3>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-6 sm:mt-8">
                <ContactForm notice={contact.formNotice} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
