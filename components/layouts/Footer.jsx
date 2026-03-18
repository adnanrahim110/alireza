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
        className="-bottom-20 -right-20 opacity-30 glow-hide-mobile"
      />

      <div className="relative mx-auto max-w-330 px-5 pt-14 pb-10 text-center sm:px-6 sm:pt-20 sm:pb-12 lg:px-8">
        <p className="font-heading text-[1.5rem] leading-[1.22] text-gold-300/70 sm:text-[2.4rem] lg:text-[3rem]">
          {siteContent.bookProfile.blurb}
        </p>
      </div>

      <div className="mx-auto h-px w-full max-w-330 px-5 sm:px-6 lg:px-8">
        <div className="h-full bg-linear-to-r from-transparent via-gold-300/25 to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-330 gap-8 px-5 py-10 sm:gap-10 sm:px-6 sm:py-14 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
        <div className="flex max-w-lg flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-11 overflow-hidden rounded-2xl border border-gold-400/20 bg-soot-900">
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
            {siteContent.assets.authorPortrait ? (
              <div className="relative ml-auto h-12 w-12 overflow-hidden rounded-full border border-gold-300/20 bg-soot-900 shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                <Image
                  alt={siteContent.assets.authorPortrait.alt}
                  className="object-cover object-top"
                  fill
                  sizes="48px"
                  src={siteContent.assets.authorPortrait.src}
                />
              </div>
            ) : null}
          </div>
          <p className="text-sm leading-7 text-sand-100/60">
            {siteContent.footer.blurb}
          </p>
        </div>

        <div>
          <div>
            <p className="eyebrow-light text-gold-300/60">Navigate</p>
            <div className="mt-4 flex flex-row flex-wrap gap-x-6 gap-y-3 sm:mt-5 sm:flex-col sm:gap-3">
              {siteContent.nav.map((link) => (
                <Link
                  key={link.href}
                  className="group relative inline-block w-fit text-sm text-sand-100/60 transition hover:text-gold-200 focus-visible:outline-none focus-visible:text-gold-200"
                  href={link.href}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-400/50 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gold-300/8">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-2 px-5 py-4 text-xs uppercase tracking-[0.14em] text-sand-100/35 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-6 lg:px-8">
          <p>{siteContent.siteName}</p>
          <p>{year} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
