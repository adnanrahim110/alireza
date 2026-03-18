"use client";

import Glow from "@/components/ui/Glow";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { useId } from "react";
import { A11y, Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card flex h-full min-h-80 flex-col gap-4 overflow-hidden rounded-2xl border border-sand-100/6 bg-soot-900/55 px-5 py-6 backdrop-blur-sm transition-all duration-500 sm:min-h-96 sm:gap-5 sm:px-7 sm:py-8">
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
  const paginationId = useId().replace(/:/g, "");
  const paginationClassName = `testimonial-pagination-${paginationId}`;
  const canAutoplay = testimonials.length > 1;
  const canLoop = testimonials.length > 3;

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

        <div className="testimonial-slider">
          <Swiper
            modules={[A11y, Autoplay, Keyboard, Pagination]}
            pagination={{
              clickable: true,
              el: `.${paginationClassName}`,
              bulletClass: "tst-bullet",
              bulletActiveClass: "tst-bullet-active",
            }}
            autoplay={
              canAutoplay
                ? {
                    delay: 5600,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    waitForTransition: true,
                  }
                : false
            }
            keyboard={{ enabled: true, onlyInViewport: true }}
            a11y={{ enabled: true }}
            loop={canLoop}
            loopAdditionalSlides={
              canLoop ? Math.min(testimonials.length, 3) : 0
            }
            slidesPerView="auto"
            centeredSlides
            centerInsufficientSlides={!canLoop}
            grabCursor={canAutoplay}
            observer
            observeParents
            watchSlidesProgress
            speed={850}
            spaceBetween={18}
            breakpoints={{
              520: { spaceBetween: 20 },
              768: { spaceBetween: 24 },
              1024: { spaceBetween: 28 },
              1280: { spaceBetween: 32 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                className="tst-slide"
                key={`${testimonial.name}-${index}`}
              >
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10">
            <div
              className={`${paginationClassName} testimonial-pagination flex justify-center gap-2.5`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
