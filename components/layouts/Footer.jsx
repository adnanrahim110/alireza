import Glow from "@/components/ui/Glow";
import { siteContent } from "@/content/site-content";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-gold-300/10 bg-soot-950 text-sand-100">
      <Glow
        color="gold"
        size="32rem"
        className="-top-40 left-1/2 -translate-x-1/2 opacity-40"
      />
      <Glow
        color="copper"
        size="20rem"
        className="-bottom-20 -right-20 opacity-30"
      />

      {/* Signature closing quote */}
      <div className="relative mx-auto max-w-[1320px] px-4 pt-20 pb-12 text-center sm:px-6 lg:px-8">
        <p className="mx-auto max-w-3xl font-heading text-[1.8rem] leading-[1.22] text-gold-300/70 sm:text-[2.4rem] lg:text-[3rem]">
          {siteContent.bookProfile.blurb}
        </p>
      </div>

      {/* Divider */}
      <div className="mx-auto h-px w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="h-full bg-gradient-to-r from-transparent via-gold-300/25 to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1320px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
        <div className="flex max-w-lg flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-11 overflow-hidden rounded-[1rem] border border-gold-400/20 bg-soot-900">
              <Image
                alt={siteContent.assets.cover.alt}
                className="object-cover"
                fill
                sizes="44px"
                src={siteContent.assets.cover.src}
              />
            </div>
            <div>
              <p className="font-heading text-2xl text-gold-300">
                {siteContent.bookProfile.title}
              </p>
              <p className="text-[11px] uppercase tracking-[0.22em] text-sand-200/50">
                {siteContent.authorProfile.name}
              </p>
            </div>
          </div>
          <p className="text-sm leading-7 text-sand-100/60">
            {siteContent.footer.blurb}
          </p>
          <p className="text-xs uppercase tracking-[0.16em] text-gold-200/45">
            {siteContent.footer.note}
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:gap-8">
          <div>
            <p className="eyebrow-light text-gold-300/60">Navigate</p>
            <div className="mt-5 flex flex-col gap-3">
              {siteContent.nav.map((link) => (
                <Link
                  key={link.href}
                  className="group relative inline-block w-fit text-sm text-sand-100/60 transition hover:text-gold-200"
                  href={link.href}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-400/50 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow-light text-gold-300/60">Contact status</p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-sand-100/60">
              {siteContent.contact.methods.map((method) => (
                <p key={method.label}>
                  <span className="font-medium text-gold-200/80">
                    {method.label}:
                  </span>{" "}
                  {method.value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gold-300/8">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-3 px-4 py-4 text-xs uppercase tracking-[0.14em] text-sand-100/35 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>{siteContent.siteName}</p>
          <p>{year} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
