"use client";

import Glow from "@/components/ui/Glow";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { useCallback, useRef } from "react";
import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function TestimonialCard({ testimonial }) {
  return (
    <article className="flex h-full flex-col gap-5 rounded-2xl border border-sand-100/6 bg-soot-900/55 px-6 py-7 backdrop-blur-sm transition-all duration-500 sm:px-7 sm:py-8">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-copper-900/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-copper-300">
          {testimonial.flag}
        </span>
        <span className="font-heading text-[2.6rem] leading-none text-gold-400/30 sm:text-5xl">
          &ldquo;
        </span>
      </div>
      <p className="text-[0.98rem] leading-8 text-sand-200/70">
        {testimonial.quote}
      </p>
      <div className="mt-auto border-t border-gold-300/10 pt-4">
        <p className="font-medium text-sand-50">{testimonial.name}</p>
        <p className="text-sm text-sand-200/45">{testimonial.role}</p>
      </div>
    </article>
  );
}

export default function TestimonialRail({ heading, testimonials }) {
  const progressRef = useRef(null);

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
        className="-right-16 bottom-0 opacity-15"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1420px] px-0 py-16 sm:py-20 lg:py-24">
        <Reveal className="mb-12 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            description={heading.description}
            eyebrow={heading.eyebrow}
            title={heading.title}
            dark
          />
        </Reveal>

        <div className="testimonial-slider">
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
            centeredSlides
            grabCursor
            speed={700}
            breakpoints={{
              0: { slidesPerView: 1.12, spaceBetween: 16 },
              520: { slidesPerView: 1.35, spaceBetween: 20 },
              768: { slidesPerView: 1.8, spaceBetween: 24 },
              1024: { slidesPerView: 2.4, spaceBetween: 28 },
              1280: { slidesPerView: 2.8, spaceBetween: 32 },
            }}
            onAutoplayTimeLeft={handleAutoplayTimeLeft}
            onSlideChange={handleSlideChange}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide className="h-auto" key={testimonial.name}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination + autoplay progress */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="testimonial-pagination flex justify-center gap-2" />

            <div className="relative h-[2px] w-20 overflow-hidden rounded-full bg-sand-200/8">
              <div
                ref={progressRef}
                className="tst-progress absolute inset-y-0 left-0 rounded-full bg-gold-400/50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
