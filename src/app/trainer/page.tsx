"use client";

import { useState, useEffect, useRef } from "react";

export default function TrainerProfilePage() {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<number>(16);
  const imageRef = useRef<HTMLImageElement>(null);

  // Parallax effect for the profile image
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scroll = window.scrollY;
        imageRef.current.style.transform = `translateY(${scroll * 0.05}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const availableTimes = ["08:00 AM", "10:30 AM", "02:00 PM", "04:30 PM"];
  const calendarDays = [
    { day: "M", date: 14 },
    { day: "T", date: 15 },
    { day: "W", date: 16 },
    { day: "T", date: 17 },
    { day: "F", date: 18 },
    { day: "S", date: 19 },
    { day: "S", date: 20 },
  ];

  return (
    <div className="pt-8 md:pt-16 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
        
        {/* Left Column: Media & Core Bio */}
        <div className="col-span-1 md:col-span-12 lg:col-span-4 space-y-gutter">
          <div className="relative group">
            <div className="aspect-3/4 rounded-xl overflow-hidden bg-surface-container border border-outline-variant relative">
              <img
                ref={imageRef}
                alt="Marcus R."
                className="w-full h-[110%] object-cover grayscale hover:grayscale-0 transition-all duration-700 absolute top-[-5%]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe83BVxsEJmdwBX0UV5MzfYXVSxY96gQZeB8EJj45KAZuLYe4pFfWgUzyMGFiOKQvWG1TS7EqSBWkr0gfCzn5lF3pTdcDNcUUjCR4VawE49Cn6PYiJj1lKIK0Xf9L11P6pVAnwP9BSF7VQJ48V8UFisO0mFc1N9nvtXL8pb2sKruVknptEw01FaufMgasvqY1pJwG5NQCfLlHZpMFxxb72E6nNdyfIPh6JoiRs3Z1DSFzu9fTMiNEpwG5Hpi0VApcmoCucOrDZSZH6"
              />
            </div>
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full font-label-md flex items-center gap-1 shadow-lg text-[10px] md:text-xs tracking-widest uppercase">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                Verified
              </span>
            </div>
            <div className="absolute bottom-4 right-4 bg-surface/80 backdrop-blur-md px-3 py-2 rounded-lg border border-outline-variant">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="font-headline-md text-primary">4.9</span>
                <span className="text-on-surface-variant font-label-md text-xs">(124)</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-xl space-y-4 border border-outline-variant/30">
            <h3 className="font-headline-md text-primary uppercase">Specializations</h3>
            <div className="flex flex-wrap gap-2">
              {["STRENGTH TRAINING", "HYPERTROPHY", "ATHLETIC PERFORMANCE", "MOBILITY"].map((spec) => (
                <span key={spec} className="bg-surface-container-highest border border-outline-variant px-3 py-1 rounded font-label-md text-[10px] md:text-xs text-on-surface tracking-widest">
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 rounded-xl space-y-4 border border-outline-variant/30">
            <h3 className="font-headline-md text-primary uppercase">Certifications</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-fixed-dim mt-0.5">check_circle</span>
                <div>
                  <p className="text-on-surface font-label-md uppercase tracking-widest text-sm">NASM Master Trainer</p>
                  <p className="text-on-surface-variant text-xs mt-1">National Academy of Sports Medicine</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-fixed-dim mt-0.5">check_circle</span>
                <div>
                  <p className="text-on-surface font-label-md uppercase tracking-widest text-sm">Precision Nutrition Level 2</p>
                  <p className="text-on-surface-variant text-xs mt-1">Advanced Nutrition Coaching</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Column: Details & Reviews */}
        <div className="col-span-1 md:col-span-12 lg:col-span-5 space-y-12 mt-8 lg:mt-0">
          <section>
            <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-2 tracking-tight">MARCUS R.</h1>
            <p className="font-label-md text-primary-fixed-dim uppercase tracking-widest mb-8">Elite Strength & Conditioning Coach</p>
            
            <div className="space-y-6">
              <h2 className="font-headline-md text-primary border-b border-outline-variant pb-3 uppercase">About Marcus</h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                With over a decade of experience in the high-performance sector, Marcus specializes in transforming physiques through evidence-based strength and hypertrophy protocols. His approach merges industrial-strength grit with technical precision, ensuring every client reaches their peak physical potential.
              </p>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Marcus has coached professional athletes and high-level executives, tailoring periodized programs that fit demanding lifestyles without sacrificing results. His philosophy is simple: results are earned through consistency and calculated intensity.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-headline-md text-primary border-b border-outline-variant pb-3 uppercase">Client Reviews</h2>
            <div className="space-y-4">
              {/* Review 1 */}
              <div className="glass-card p-6 rounded-xl border-l-4 border-l-primary-fixed-dim border-y-outline-variant/30 border-r-outline-variant/30">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-label-md text-primary tracking-widest">JAMES W.</span>
                  <div className="flex gap-0.5 text-primary-fixed-dim">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                </div>
                <p className="text-on-surface-variant italic font-body-md">
                  "The hypertrophy program Marcus designed was a game changer. I've added 5kg of lean mass in 12 weeks while improving my squat form significantly."
                </p>
              </div>

              {/* Review 2 */}
              <div className="glass-card p-6 rounded-xl border border-outline-variant/30">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-label-md text-primary tracking-widest">SARAH L.</span>
                  <div className="flex gap-0.5 text-primary-fixed-dim">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                </div>
                <p className="text-on-surface-variant italic font-body-md">
                  "Technical precision and accountability. Marcus doesn't just train you; he educates you on the 'why' behind every movement."
                </p>
              </div>
            </div>
            <button className="w-full py-4 text-primary font-label-md tracking-widest border border-outline-variant rounded-lg hover:bg-surface-variant transition-colors uppercase text-xs">
              View All Reviews
            </button>
          </section>
        </div>

        {/* Right Column: Sticky Booking Widget */}
        <div className="col-span-1 md:col-span-12 lg:col-span-3 sticky top-24 mt-8 lg:mt-0">
          <div className="glass-card rounded-xl overflow-hidden shadow-2xl border border-outline-variant/50">
            <div className="p-6 bg-surface-container-high border-b border-outline-variant">
              <div className="flex items-baseline gap-2">
                <span className="font-display-lg text-headline-xl text-primary-fixed-dim">£85</span>
                <span className="text-on-surface-variant font-label-md uppercase text-xs tracking-widest">/ Hour</span>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Date Selection */}
              <div>
                <label className="block font-label-md text-on-surface-variant uppercase mb-3 text-[10px] tracking-widest">Select Date</label>
                <div className="grid grid-cols-7 gap-1 text-center bg-surface-container-lowest p-2 rounded-lg border border-outline-variant">
                  {calendarDays.map((item, idx) => (
                    <span key={`day-${idx}`} className="text-[10px] text-on-surface-variant font-label-md">{item.day}</span>
                  ))}
                  {calendarDays.map((item, idx) => (
                    <button 
                      key={`date-${idx}`} 
                      onClick={() => setSelectedDate(item.date)}
                      className={`p-1.5 rounded text-xs font-label-md transition-colors ${
                        selectedDate === item.date 
                          ? "bg-primary-container text-black font-bold" 
                          : "text-on-surface hover:bg-surface-variant"
                      }`}
                    >
                      {item.date}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <label className="block font-label-md text-on-surface-variant uppercase mb-3 text-[10px] tracking-widest">Available Times</label>
                <div className="grid grid-cols-2 gap-2">
                  {availableTimes.map((time) => (
                    <button 
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-2 border rounded font-label-md text-[10px] tracking-widest uppercase transition-all ${
                        selectedTime === time 
                          ? "bg-primary-container text-black border-primary-container" 
                          : "border-outline-variant text-on-surface hover:border-primary-fixed-dim"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <button className="w-full py-4 bg-primary-fixed text-black font-label-md tracking-widest rounded-lg shadow-lg active:scale-95 transition-all hover:brightness-110 uppercase text-xs">
                  Book Session
                </button>
                <button className="w-full py-4 bg-transparent border border-outline text-primary font-label-md tracking-widest rounded-lg active:scale-95 transition-all hover:bg-surface-variant uppercase text-xs">
                  Enquire Now
                </button>
              </div>

              <div className="pt-4 flex items-center justify-center gap-2 border-t border-outline-variant">
                <span className="material-symbols-outlined text-primary-fixed-dim text-sm">bolt</span>
                <span className="text-on-surface-variant text-[10px] font-label-md uppercase tracking-widest">Fast response: 1 hr</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-on-surface-variant font-label-md text-xs uppercase tracking-widest mb-4">Share Profile</p>
            <div className="flex justify-center gap-4">
              <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:text-primary-fixed-dim transition-colors text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">share</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:text-primary-fixed-dim transition-colors text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">content_copy</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}