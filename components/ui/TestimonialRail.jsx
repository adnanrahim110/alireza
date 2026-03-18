"use client";

import Glow from "@/components/ui/Glow";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function TestimonialCard({ testimonial }) {
  return (
    <article
      data-tst-card
      className="flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-sand-100/6 bg-soot-900/55 px-5 py-6 backdrop-blur-sm transition-all duration-500 sm:gap-5 sm:px-7 sm:py-8"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-copper-900/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-copper-300">
          {testimonial.flag}
        </span>
        <span className="font-heading text-[2.2rem] leading-none text-gold-400/30 sm:text-5xl">
          &ldquo;
        </span>
      </div>
      <p className="text-[0.92rem] leading-7 text-sand-200/70 sm:text-[0.98rem] sm:leading-8">
        {testimonial.quote}
      </p>
      <div className="mt-auto border-t border-gold-300/10 pt-3 sm:pt-4">
        <p className="font-medium text-sand-50">{testimonial.name}</p>
        <p className="text-sm text-sand-200/45">{testimonial.role}</p>
      </div>
    </article>
  );
}

export default function TestimonialRail({ heading, testimonials }) {
  const progressRef = useRef(null);
  const swiperRef = useRef(null);
  const railRef = useRef(null);

  // ---- Width proportional to content length ----
  const widthRatios = useMemo(() => {
    const lengths = testimonials.map((t) => t.quote.length);
    const min = Math.min(...lengths);
    const max = Math.max(...lengths);
    if (max === min) return testimonials.map(() => 0.5);
    return lengths.map((len) => (len - min) / (max - min));
  }, [testimonials]);

  // ---- Sync all cards to the shortest card's height ----
  const syncHeights = useCallback(() => {
    const el = railRef.current;
    if (!el) return;

    const cards = el.querySelectorAll("[data-tst-card]");
    if (!cards.length) return;

    // Reset so we measure natural heights
    cards.forEach((c) => (c.style.height = ""));

    requestAnimationFrame(() => {
      const heights = Array.from(cards).map((c) => c.offsetHeight);
      const minH = Math.min(...heights);

      cards.forEach((c) => (c.style.height = `${minH}px`));

      // Tell Swiper to recalculate positions after height change
      if (swiperRef.current) swiperRef.current.update();
    });
  }, []);

  useEffect(() => {
    const ro = new ResizeObserver(syncHeights);
    if (railRef.current) ro.observe(railRef.current);
    return () => ro.disconnect();
  }, [syncHeights]);

  const handleAutoplayTimeLeft = useCallback((_swiper, _time, progress) => {
    if (progressRef.current) {
      progressRef.current.style.width = `${(1 - progress) * 100}%`;
    }
  }, []);

  const handleSlideChange = useCallback(() => {
    if (progressRef.current) {
      progressRef.current.style.transition = "none";
      progressRef.current.style.width = "0%";
      requestAnimationFrame(() => {
        if (progressRef.current) {
          progressRef.current.style.transition = "";
        }
      });
    }
  }, []);

  return (
    <section className="section-dark relative overflow-hidden">
      <Glow
        color="gold"
        size="28rem"
        className="left-1/2 -translate-x-1/2 -top-28 opacity-25"
      />
      <Glow
        color="copper"
        size="18rem"
        className="-right-16 bottom-0 opacity-15 glow-hide-mobile"
      />

      <div className="relative z-10 mx-auto w-full max-w-355 px-0 py-12 sm:py-20 lg:py-24">
        <Reveal className="mb-8 px-5 sm:mb-12 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            description={heading.description}
            eyebrow={heading.eyebrow}
            title={heading.title}
            dark
          />
        </Reveal>

        <div className="testimonial-slider" ref={railRef}>
          <Swiper
            modules={[Autoplay, Keyboard, Pagination]}
            pagination={{
              clickable: true,
              el: ".testimonial-pagination",
              bulletClass: "tst-bullet",
              bulletActiveClass: "tst-bullet-active",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            keyboard={{ enabled: true }}
            loop={testimonials.length > 2}
            slidesPerView="auto"
            centeredSlides
            grabCursor
            speed={700}
            spaceBetween={16}
            breakpoints={{
              520: { spaceBetween: 20 },
              768: { spaceBetween: 24 },
              1024: { spaceBetween: 28 },
              1280: { spaceBetween: 32 },
            }}
            onSwiper={(s) => {
              swiperRef.current = s;
              syncHeights();
            }}
            onAutoplayTimeLeft={handleAutoplayTimeLeft}
            onSlideChange={handleSlideChange}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                className="tst-slide"
                key={testimonial.name}
                style={{ "--content-ratio": widthRatios[index] }}
              >
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10">
            <div className="testimonial-pagination flex justify-center gap-2.5" />
          </div>
        </div>
      </div>
    </section>
  );
}
