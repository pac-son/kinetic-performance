"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function SuccessStoriesPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Setup Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Target all cards with the 'animate-on-scroll' class
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="pt-16 pb-40 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative">
      
      {/* Floating Action Button (FAB) */}
      <button className="fixed bottom-10 right-10 md:bottom-12 md:right-12 w-16 h-16 bg-secondary-container text-white rounded-full shadow-2xl flex items-center justify-center group hover:scale-110 transition-all z-40">
        <span className="material-symbols-outlined text-[32px]">calendar_add_on</span>
        <span className="absolute right-20 bg-secondary-container text-white px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          START ASSESSMENT
        </span>
      </button>

      {/* Hero Section */}
      <header className="mb-24 text-center mt-12">
        <span className="font-label-md text-label-md text-primary-container tracking-widest uppercase mb-4 block">
          Archive 001: Results
        </span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-6 leading-none tracking-tighter">
          TRANSFORMATIONS BUILT <br className="hidden md:block" />{" "}
          <span className="text-primary-container text-shadow-glow">IN THE SHADOWS</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          No filters. No shortcuts. Just raw data and physical evidence of the discipline forged in our facility.
        </p>
      </header>

      {/* Evidence Grid (Bento Style) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        
        {/* Row 1: Marcus T (8) + Protocol (4) */}
        <div className="col-span-1 md:col-span-12 lg:col-span-8 group relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container-low h-125 md:h-150 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <img
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWC5HR4DJT0qFeDHV68ikHrqDsljfN9TvnktBh0z5ChOT3cX9yRCqlZI_EII0nv-RjfTgSqyC5g80WWKWqRvkwfPHzmGMEbupViQd5igswu9CzZzXhKabPIo5Or890UjeaSp-gfNyhaS9dwpLjk27-W-aFWAocmleIx7bbLVPhJyoxbCb4ie_pYG0dZnu9j6E6G2XqyLEJwKSTCw7LvqUwMH21PkSN4RP10s1GA6S7Kp-ecjdgXOdsdH6JKkEIdXIPgKXMoSUZi1sH"
            alt="Marcus T. Transformation"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent"></div>
          <div className="absolute bottom-0 p-6 md:p-8 w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <span className="bg-secondary-container text-white px-3 py-1 font-label-md text-[10px] md:text-xs rounded mb-4 inline-block">
                  12 WEEK PROTOCOL
                </span>
                <h3 className="font-headline-xl text-primary">MARCUS T.</h3>
                <p className="font-body-md text-on-surface-variant max-w-md hidden md:block">
                  Decreased body fat by 14% while increasing bench press max by 30kg. Transitioned from corporate fatigue to competitive athlete status.
                </p>
              </div>
              <div className="text-left md:text-right">
                <div className="text-primary-container font-display-lg text-[40px] md:text-[48px] leading-none">
                  88KG → 82KG
                </div>
                <div className="font-label-md text-on-surface-variant uppercase tracking-widest text-xs mt-1">
                  Lean Mass Optimized
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-12 lg:col-span-4 glass-card rounded-xl p-6 md:p-8 flex flex-col justify-between border border-primary/10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out h-125 md:h-150">
          <div>
            <div className="flex items-center gap-2 mb-6 text-primary-container">
              <span className="material-symbols-outlined">analytics</span>
              <span className="font-label-md uppercase tracking-tighter">Performance Log Snippet</span>
            </div>
            <h4 className="font-headline-md text-primary mb-4">ENDURANCE PROTOCOL X-4</h4>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-outline-variant pb-3">
                <span className="text-on-surface-variant font-body-md">Resting HR</span>
                <span className="text-primary font-bold">42 BPM</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant pb-3">
                <span className="text-on-surface-variant font-body-md">VO2 Max Increase</span>
                <span className="text-primary font-bold">+18.5%</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant pb-3">
                <span className="text-on-surface-variant font-body-md">Lactate Threshold</span>
                <span className="text-primary font-bold">172 BPM</span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="font-body-md text-on-surface-variant italic leading-relaxed">
              "The metrics don't lie. We didn't just train harder; we trained with surgical precision."
            </p>
          </div>
        </div>

        {/* Row 2: Testimonial (4) + Liam D (8) */}
        <div className="col-span-1 md:col-span-12 lg:col-span-4 glass-card rounded-xl p-6 md:p-8 border border-secondary-container/20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col justify-center h-auto md:h-100">
          <div className="flex gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
            ))}
          </div>
          <p className="font-body-lg text-primary mb-8">
            "The environment at Fitlink is unlike anything else in the UK. It’s not just a gym; it’s an industrial-grade lab for human optimization."
          </p>
          <div className="flex items-center gap-4 mt-auto">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden">
              <img
                alt="Sarah Jenkins"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7kze4qJY9svWzrihG6vM1g0RrB44AYXH3mWKSEui4zp_3usCcFvbxhAolRFYyfdQVkHniJT0Xowpx3baz60OsoTOHV6qfZ-hTeDhTCrv69167LvkzwHTp9eMJu3DXijs1l3HC1uYbEpurgLwtjZPQYdpwfMIRSc0JQLjo9_bCBYsrJz73VnTULfWRGtxRPDKVK2d7D9ekBfdUI42pneEDyonQIG9T4DKs-9BJC9uah9TUKpMkS4G6-Lr9vD20MwNEVn_xlCHk9-My"
              />
            </div>
            <div>
              <div className="font-label-md text-primary uppercase">Sarah Jenkins</div>
              <div className="text-on-surface-variant text-sm font-body-md">Tech Executive</div>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-12 lg:col-span-8 group relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container-low h-100 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out">
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8hIal9hilTlx3y6b3JS_jfra00RuaMdqtzJq2ul6-Ue9uzwCnLoiYkEKq80HuRWzC2gABZ_Ou86zlyUkuG5DQIXGNs6KDzewr83BtBY1PCw1W7wVf7Df3BXYoZ8GIqtiyc8F-yGrmMtab2xzE-578sD_w1asIAebj2Pa3CPwvhzat0jvqGYrfidLOJLjZBdV_ACGCMmDIBaVTvv6fTgvjZkVoEocy1fZYDWnH1N6uUXKhqgY2EugXq8rsQdR56xXzUVZM6FfAqdeI"
            alt="Liam D. Training"
          />
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/60 to-transparent"></div>
          <div className="relative h-full p-6 md:p-8 flex flex-col justify-end">
            <span className="bg-primary-container text-black px-3 py-1 font-label-md text-[10px] md:text-xs rounded mb-4 w-fit">
              STRENGTH PROTOCOL
            </span>
            <h3 className="font-headline-xl text-primary">LIAM D.</h3>
            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-4">
              <div>
                <div className="text-on-surface-variant text-[10px] md:text-xs uppercase tracking-widest">Squat</div>
                <div className="text-primary font-headline-md">+60KG</div>
              </div>
              <div>
                <div className="text-on-surface-variant text-[10px] md:text-xs uppercase tracking-widest">Deadlift</div>
                <div className="text-primary font-headline-md">+85KG</div>
              </div>
              <div>
                <div className="text-on-surface-variant text-[10px] md:text-xs uppercase tracking-widest">Timeframe</div>
                <div className="text-primary font-headline-md">6 MOS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Elena V (4) + James K (8) */}
        <div className="col-span-1 md:col-span-12 lg:col-span-4 group relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container-low h-100 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <img
            alt="Elena V."
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtAXYtWvp49aY6I2KGOI4LyDwaZYxjjmBObfOgnlxqK0x_pvGh1-HAnyGuO8TjdJeXf-8eJkuAQzXwKyykBlPBDSxuqkZL4KjViQUbTrHaICSCvKlxB_0MpW203NmjFZtPiu77g7NhmU9akj-1tpp4l6L4eSbbHQGrtXxtDKqJwPwSwoE_Doxz4ISBGzZeTC05030nebqlBmOBEqAsGkUFHw7ZJ1v-CSAgNIOZeYj6OoCZdA3Flr6mFvC3BzyBI9_KF1ucsuLHcUHX"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent"></div>
          <div className="relative h-full p-6 md:p-8 flex flex-col justify-end">
            <span className="bg-secondary-container text-white px-3 py-1 font-label-md text-[10px] md:text-xs rounded mb-4 w-fit">
              FAT LOSS PROTOCOL
            </span>
            <h3 className="font-headline-xl text-primary">ELENA V.</h3>
            <div className="mt-4">
              <div className="text-on-surface-variant text-xs uppercase tracking-widest">Reduction</div>
              <div className="text-secondary-container font-headline-md">-12KG BODY FAT</div>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-12 lg:col-span-8 group relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container-low h-100 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out">
          <img
            alt="James K."
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvixtsGjiBz6LvYwshKdEKcTxBb1lBy5o_BbAYV0WXGFy5mze5YfFxuJ0eKFlFW5eA9tvABAL0wFSgVQdM9zlWLCLLUiRbOK9ULK-ipucDHYQVYhyeEJnFazL_dPoILY8bGWRxVzxCvrSP4IjRzRMQ41f_Sp6kChChwTLhq3POfG-Y1nVFkJyRFAiDC4UVjGfmQKisj805DZDHkdt_uVtIRqvZkaxhzk24taEkvnnSMfY2lWeyxms5MuINd34w-f5JDabO_8fIG5rS"
          />
          <div className="absolute inset-0 bg-linear-to-r from-background to-transparent"></div>
          <div className="relative h-full p-6 md:p-8 flex flex-col justify-end">
            <span className="bg-primary-container text-black px-3 py-1 font-label-md text-[10px] md:text-xs rounded mb-4 w-fit">
              HYPERTROPHY X-1
            </span>
            <h3 className="font-headline-xl text-primary">JAMES K.</h3>
            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-4">
              <div>
                <div className="text-on-surface-variant text-[10px] md:text-xs uppercase tracking-widest">Shoulder Girth</div>
                <div className="text-primary font-headline-md">+14CM</div>
              </div>
              <div>
                <div className="text-on-surface-variant text-[10px] md:text-xs uppercase tracking-widest">Bench Max</div>
                <div className="text-primary font-headline-md">+15KG</div>
              </div>
              <div>
                <div className="text-on-surface-variant text-[10px] md:text-xs uppercase tracking-widest">Lean Mass</div>
                <div className="text-primary font-headline-md">+5.2KG</div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 4: Sophie R (6) + David M (6) */}
        <div className="col-span-1 md:col-span-12 lg:col-span-6 group relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container-low h-100 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <img
            alt="Sophie R."
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtrQhKxtCmZi1P1Oivkw_3KBNNH0NGPIqQhvZWx1fpRJ9BDA4dJ7pMbqsp2kvMy8PL8cTOi8Skj7DrFoTBe4Efu4Ge-VMCRlOjUAp0dqRqN8j68fn9X3TB7kHeRHLn_IEJfgxhavc9XZTaHD5EBjlEjkixVMA6jQJFQPozf_YbXlv5jpGbUDl0XKL7NOdLnL1xpYxp2yY4XSm4HJs_OP-ADx90-voHt-DdzqZMieRvjv3XRMZVZw6tOEm2w7a9n1YcHg9Yuvg1BGnY"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background to-transparent"></div>
          <div className="relative h-full p-6 md:p-8 flex flex-col justify-end">
            <span className="bg-primary-container text-black px-3 py-1 font-label-md text-[10px] md:text-xs rounded mb-4 w-fit">
              ATHLETIC PEAK
            </span>
            <h3 className="font-headline-xl text-primary">SOPHIE R.</h3>
            <div className="mt-4">
              <div className="text-on-surface-variant text-xs uppercase tracking-widest">Body Fat</div>
              <div className="text-primary-container font-headline-md">6% REDUCTION</div>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-12 lg:col-span-6 group relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container-low h-100 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out">
          <img
            alt="David M."
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW1qZVuryOfg-0E1k7wH2ixtEm5ZKfnpmskVvL07PbZPd-Eu5w_7ZJbaNPFTMpbO10QZdHHeIZKhXFOleCj2R985-dg7yaPLZseeJtsI-pd-AVYTaAv_ptAihkBHOIOOzL5dJKhBRVj2rB-Gms3AFNUf1txBwLbGTgnMX-JJ3xKgxFj4fWu2fwpOkXhHuQLB6NzJXmHyPP0L-YPVtsmy6YqRGlvLp2ttdjRSbg0vBfX1XEfweOqN4BZYTKwz2tFiP09bBfFiXcovxI"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background to-transparent"></div>
          <div className="relative h-full p-6 md:p-8 flex flex-col justify-end">
            <span className="bg-secondary-container text-white px-3 py-1 font-label-md text-[10px] md:text-xs rounded mb-4 w-fit">
              RECOMP PROTOCOL
            </span>
            <h3 className="font-headline-xl text-primary">DAVID M.</h3>
            <div className="grid grid-cols-2 gap-8 mt-4">
              <div>
                <div className="text-on-surface-variant text-xs uppercase tracking-widest">Body Fat</div>
                <div className="text-secondary-container font-headline-md">-9%</div>
              </div>
              <div>
                <div className="text-on-surface-variant text-xs uppercase tracking-widest">Deadlift</div>
                <div className="text-primary font-headline-md">+45KG</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="mt-32 relative overflow-hidden rounded-2xl bg-surface-container-high border border-outline-variant p-8 md:p-20 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
        <div className="relative z-10">
          <h2 className="font-display-lg-mobile md:font-display-lg text-primary mb-8 tracking-tight">
            READY TO DOCUMENT <br className="hidden md:block" />{" "}
            <span className="text-secondary-container">YOUR OWN EVOLUTION?</span>
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto mb-10">
            Our initial assessment is a 90-minute deep dive into your biomechanics, metabolic rate, and psychological barriers. We don't guess. We measure.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="w-full md:w-auto bg-primary-container text-on-primary-container font-label-md px-10 py-5 rounded-lg hover:scale-105 transition-transform flex items-center justify-center gap-3">
              BOOK INITIAL ASSESSMENT
              <span className="material-symbols-outlined">trending_flat</span>
            </button>
            <button className="w-full md:w-auto border border-outline text-primary font-label-md px-10 py-5 rounded-lg hover:bg-white/5 transition-colors">
              VIEW PROGRAMS
            </button>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-container/10 blur-[100px] rounded-full pointer-events-none"></div>
      </section>
    </div>
  );
}