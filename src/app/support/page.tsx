"use client";

import { useState } from "react";
import Link from "next/link";

export default function SupportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after success
      setTimeout(() => {
        setIsSuccess(false);
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 1500);
  };

  return (
    <div className="pt-16 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      {/* Header Section */}
      <header className="mb-16">
        <h1 className="font-display-lg text-display-lg text-primary mb-4 uppercase">Get In Touch</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Have a question about your training plan or need technical assistance? Our elite performance support team is on hand to keep you moving forward.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Left Column: Support Form */}
        <div className="col-span-1 md:col-span-12 lg:col-span-7">
          <section className="glass-panel p-6 md:p-10 rounded-xl relative overflow-hidden group">
            {/* Atmospheric Background Element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl group-hover:bg-primary-container/10 transition-colors duration-700"></div>
            
            <h2 className="font-headline-xl text-headline-xl text-primary mb-8 relative z-10">Send A Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block font-label-md text-label-md text-on-surface-variant uppercase">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. James Wilson" 
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-4 text-white focus:border-primary-fixed-dim focus:ring-1 focus:ring-primary-fixed-dim outline-none transition-all placeholder:opacity-30" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-label-md text-label-md text-on-surface-variant uppercase">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="james@performance.com" 
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-4 text-white focus:border-primary-fixed-dim focus:ring-1 focus:ring-primary-fixed-dim outline-none transition-all placeholder:opacity-30" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block font-label-md text-label-md text-on-surface-variant uppercase">Subject</label>
                <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-4 text-white focus:border-primary-fixed-dim focus:ring-1 focus:ring-primary-fixed-dim outline-none transition-all">
                  <option>Technical Support</option>
                  <option>Billing & Memberships</option>
                  <option>Training Plan Query</option>
                  <option>Corporate Partnerships</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="block font-label-md text-label-md text-on-surface-variant uppercase">Message</label>
                <textarea 
                  required
                  rows={6} 
                  placeholder="How can we help you reach your goals today?" 
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-4 text-white focus:border-primary-fixed-dim focus:ring-1 focus:ring-primary-fixed-dim outline-none transition-all placeholder:opacity-30"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className={`w-full h-14 font-headline-md text-headline-md rounded-lg flex items-center justify-center gap-2 transition-all ${
                  isSuccess 
                    ? 'bg-green-600 text-white' 
                    : isSubmitting 
                      ? 'bg-primary-fixed-dim/80 text-on-primary cursor-not-allowed' 
                      : 'bg-primary-fixed-dim text-on-primary hover:brightness-110 active:scale-[0.98] glow-shadow-lime'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">sync</span> SENDING...
                  </>
                ) : isSuccess ? (
                  <>
                    <span className="material-symbols-outlined">check_circle</span> MESSAGE SENT
                  </>
                ) : (
                  <>
                    SEND MESSAGE <span className="material-symbols-outlined">send</span>
                  </>
                )}
              </button>
            </form>
          </section>
        </div>

        {/* Right Column: Sidebar */}
        <div className="col-span-1 md:col-span-12 lg:col-span-5 space-y-gutter mt-8 lg:mt-0">
          {/* Quick Contact Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel p-6 rounded-xl flex flex-col items-center text-center group hover:border-primary-fixed-dim/50 transition-colors">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-primary-fixed-dim">mail</span>
              </div>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase mb-1">Email Us</p>
              <p className="font-body-md text-body-md text-primary truncate w-full">support@fitlink.uk</p>
            </div>
            <div className="glass-panel p-6 rounded-xl flex flex-col items-center text-center group hover:border-secondary-container/50 transition-colors">
              <div className="w-12 h-12 bg-secondary-container/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary-container/10 transition-colors">
                <span className="material-symbols-outlined text-secondary-container">chat_bubble</span>
              </div>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase mb-1">WhatsApp</p>
              <p className="font-body-md text-body-md text-primary">+44 7700 900542</p>
            </div>
          </div>

          {/* Office Locations */}
          <section className="glass-panel p-6 md:p-8 rounded-xl">
            <h3 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-fixed-dim">corporate_fare</span>
              OFFICE LOCATIONS
            </h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
                  <img 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmBZxnFO5FmwpcNJ-vdDokEKPh3ELe9wn5vV5t9Peu7G0TdZSdHPM4R-9jOaQHAFGHbXscTO_UGO4pZQoTMgITGSoGlmMnHqtBOZ3SPs-iAi0-WEOOIwNQy3OQ3wNu9r8-QbD3plrj6eoizAP2bXpHhY-kJ3qVvZPPXfFqLBXvvngYXobWtrGfz1RUIyXEFyKUyeSQ5v3R46FcZc4ewatPEaIUvX8oYlyvDP8gsZrykPOFL-MRfnQwhcPpLJ2KQNJ8EL-IoYG3tVO4" 
                    alt="London Office" 
                  />
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-primary uppercase">LONDON HUB</h4>
                  <p className="text-on-surface-variant mt-1 text-sm md:text-base">Level 42, The Leadenhall Building<br />122 Leadenhall Street<br />London, EC3V 4AB</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
                  <img 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC81Oo5Y-IQAiZzYlonLuRZ4zg-NvJj9N0FoOe6bRtF-SmmFDSplB_wT6YhOS-lSbhfMRLJUvNPeqzv66sajQTSTn6gzY5eGNevGiJXAakC8OEVCwqtOOB9eiMMbpdCk40WsWuzQwq_Lf1kj7lL8PQxR9MBMYYNGrBH--KL09H1PxekoYSHMdTMlMompuq4LT6N__miulvpfHLKsT3oJ677akrQBCTThOTuSnY7xyxnh9lL9ON4__7d3lgTogcBVeFyLCFwRZzrjLFs" 
                    alt="Manchester Office" 
                  />
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-primary uppercase">MANCHESTER HUB</h4>
                  <p className="text-on-surface-variant mt-1 text-sm md:text-base">Foundry Building, MediaCityUK<br />Salford Quays<br />Manchester, M50 2EQ</p>
                </div>
              </div>
            </div>
          </section>

          {/* Help Center CTA */}
          <div className="relative rounded-xl overflow-hidden group h-40">
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZAmUlpDHOVVKKX6esAlNfe7ybMFlIalN99yDe5TUWv7oryYyLuex10IIAGoFw2UqLAsfyOW-rxCTLuhU-XPvb-Wp5-sjNZglQtU4n1FKfCG-iEN-kLP6xoftE5bylt9ZRhn1g9_MZcIWGUmOIHnE-u8nRM4ekuAmJivQWW4DJo5Q81RDywLpGu_y5E_MI2mYtTbw8fQtBCMobIetCp8TuDGHBzKAWHZ2vtAUTYJspMrTpsyL4G8NvvRROkJlzVP8yLf0txM_Jcx7h" 
              alt="Knowledge Base" 
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/20 flex flex-col justify-center p-8">
              <h4 className="font-headline-md text-headline-md text-primary">KNOWLEDGE BASE</h4>
              <p className="text-on-surface-variant text-sm mb-4">Instant answers to common questions.</p>
              <Link href="#" className="text-primary-fixed-dim font-label-md flex items-center gap-1 hover:gap-2 transition-all">
                BROWSE FAQ <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}