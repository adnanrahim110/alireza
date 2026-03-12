"use client";

import Button from "@/components/ui/Button";
import { siteContent } from "@/content/site-content";
import useScrollDirection from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { direction, scrollY } = useScrollDirection(12);
  const reduceMotion = useReducedMotion();

  const scrolled = scrollY > 80;
  const hidden = direction === "down" && scrolled && !open;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        hidden && !reduceMotion && "-translate-y-full",
        scrolled
          ? "border-b border-gold-300/15 bg-soot-950/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" href="/">
          <div className="relative h-12 w-10 overflow-hidden rounded-[0.95rem] border border-gold-300/30 bg-soot-900 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
            <Image
              alt={siteContent.assets.cover.alt}
              className="object-cover"
              fill
              sizes="40px"
              src={siteContent.assets.cover.src}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg tracking-[0.18em] text-sand-50">
              {siteContent.bookProfile.title}
            </span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-sand-200/60">
              {siteContent.authorProfile.name}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-sand-100/10 bg-soot-900/40 p-1 backdrop-blur-md lg:flex">
          {siteContent.nav.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-gold-400/20 text-gold-200 shadow-[0_4px_16px_rgba(207,174,64,0.1)]"
                    : "text-sand-200/70 hover:bg-sand-100/8 hover:text-sand-50",
                )}
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact#contact" size="sm" tone="gold">
            Inquire
          </Button>
        </div>

        <button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-100/15 bg-soot-900/50 text-sand-100 backdrop-blur-md lg:hidden"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-soot-950/95 backdrop-blur-lg lg:hidden"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              aria-label="Close navigation"
              className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-100/15 text-sand-100 sm:top-5 sm:right-6"
              onClick={() => setOpen(false)}
              type="button"
            >
              <X className="h-5 w-5" />
            </button>

            <nav className="flex flex-col items-center gap-5">
              {siteContent.nav.map((link, index) => {
                const isActive = pathname === link.href;

                return (
                  <motion.div
                    key={link.href}
                    initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.08 + index * 0.06,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      className={cn(
                        "font-heading text-[2rem] transition sm:text-[2.4rem]",
                        isActive
                          ? "text-gold-300"
                          : "text-sand-100/70 hover:text-sand-50",
                      )}
                      href={link.href}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              className="mt-10"
              initial={reduceMotion ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
            >
              <Button
                href="/contact#contact"
                size="lg"
                tone="gold"
                onClick={() => setOpen(false)}
              >
                Start an inquiry
              </Button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
