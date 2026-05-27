"use client";

import { useState } from "react";
import Link from "next/link";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("monthly");

  // Calculate pricing based on the cycle
  const getPrice = (monthlyPrice: number) => {
    if (billingCycle === "quarterly") {
      // 15% discount for quarterly, rounded to nearest whole number
      return Math.round(monthlyPrice * 0.85);
    }
    return monthlyPrice;
  };

  return (
    <div className="pt-16 pb-32 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Header Section */}
      <header className="mb-16 text-center mt-12 md:mt-20">
        <span className="font-label-md text-primary-container tracking-widest uppercase mb-4 block">
          Membership Tiers
        </span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-6 leading-none tracking-tighter">
          INVEST IN YOUR <br className="hidden md:block" />{" "}
          <span className="text-primary-container text-shadow-glow">EVOLUTION</span>
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          Transparent pricing. Elite standards. Choose the level of integration that matches your performance goals.
        </p>

        {/* Billing Toggle */}
        <div className="bg-surface-container-highest p-1 rounded-full inline-flex relative">
          <button 
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-3 rounded-full font-label-md text-sm relative z-10 transition-all duration-300 ${
              billingCycle === "monthly" 
                ? "bg-primary text-black shadow-md" 
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            MONTHLY
          </button>
          <button 
            onClick={() => setBillingCycle("quarterly")}
            className={`px-6 py-3 rounded-full font-label-md text-sm relative z-10 transition-all duration-300 ${
              billingCycle === "quarterly" 
                ? "bg-primary text-black shadow-md" 
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            QUARTERLY <span className="text-primary-fixed-variant ml-1 hidden md:inline">(SAVE 15%)</span>
          </button>
        </div>
      </header>

      {/* Pricing Cards Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* Tier 1: Digital Protocol */}
        <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-8 lg:p-10 flex flex-col h-full hover-lift transition-transform">
          <div className="mb-8">
            <h3 className="font-headline-lg text-primary mb-2">DIGITAL PROTOCOL</h3>
            <p className="font-body-md text-on-surface-variant h-12">
              For self-driven athletes needing elite programming.
            </p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="font-display-lg text-primary text-[48px]">£{getPrice(29)}</span>
              <span className="font-label-md text-on-surface-variant">/mo</span>
            </div>
            {billingCycle === "quarterly" && (
              <p className="text-primary-fixed-dim font-label-md text-xs mt-1 uppercase tracking-widest">
                Billed £{getPrice(29) * 3} every 3 months
              </p>
            )}
          </div>
          <ul className="space-y-4 mb-10 grow font-body-md text-on-surface">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-container text-xl shrink-0">check</span>
              <span>Access to 50+ pre-built training protocols</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-container text-xl shrink-0">check</span>
              <span>Basic metric tracking (Weight, Reps, Sets)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-container text-xl shrink-0">check</span>
              <span>Community forum access</span>
            </li>
            <li className="flex items-start gap-3 opacity-50">
              <span className="material-symbols-outlined text-outline-variant text-xl shrink-0">close</span>
              <span>1-on-1 Trainer communication</span>
            </li>
          </ul>
          <button className="w-full border border-outline-variant text-primary font-label-md px-6 py-4 rounded-lg hover:bg-surface-variant transition-colors active:scale-95">
            START DIGITAL
          </button>
        </div>

        {/* Tier 2: Hybrid Elite (Highlighted) */}
        <div className="glass-card border border-primary-container relative rounded-2xl p-8 lg:p-10 flex flex-col h-full transform lg:scale-105 z-10 shadow-2xl shadow-primary-container/10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-container text-black font-label-md text-xs px-4 py-1 rounded-full uppercase tracking-widest font-bold">
            Most Popular
          </div>
          <div className="mb-8">
            <h3 className="font-headline-lg text-primary-container mb-2">HYBRID ELITE</h3>
            <p className="font-body-md text-on-surface-variant h-12">
              The perfect balance of digital precision and expert oversight.
            </p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="font-display-lg text-primary text-[56px]">£{getPrice(149)}</span>
              <span className="font-label-md text-on-surface-variant">/mo</span>
            </div>
            {billingCycle === "quarterly" && (
              <p className="text-primary-fixed-dim font-label-md text-xs mt-1 uppercase tracking-widest">
                Billed £{getPrice(149) * 3} every 3 months
              </p>
            )}
          </div>
          <ul className="space-y-4 mb-10 grow font-body-md text-white">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-container text-xl shrink-0">check</span>
              <span>Everything in Digital Protocol</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-container text-xl shrink-0">check</span>
              <span>Customized monthly programming</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-container text-xl shrink-0">check</span>
              <span>Weekly asynchronous video check-ins</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-container text-xl shrink-0">check</span>
              <span>Advanced biometric syncing (Apple Health, Garmin)</span>
            </li>
          </ul>
          <button className="w-full bg-primary-container text-black font-label-md px-6 py-4 rounded-lg hover:scale-[1.02] active:scale-95 transition-all neon-glow-primary font-bold">
            START HYBRID
          </button>
        </div>

        {/* Tier 3: Full Immersion */}
        <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-8 lg:p-10 flex flex-col h-full hover-lift transition-transform">
          <div className="mb-8">
            <h3 className="font-headline-lg text-primary mb-2">FULL IMMERSION</h3>
            <p className="font-body-md text-on-surface-variant h-12">
              Uncompromising dedication. 24/7 access to your performance coach.
            </p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="font-display-lg text-primary text-[48px]">£{getPrice(299)}</span>
              <span className="font-label-md text-on-surface-variant">/mo</span>
            </div>
            {billingCycle === "quarterly" && (
              <p className="text-primary-fixed-dim font-label-md text-xs mt-1 uppercase tracking-widest">
                Billed £{getPrice(299) * 3} every 3 months
              </p>
            )}
          </div>
          <ul className="space-y-4 mb-10 grow font-body-md text-on-surface">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-container text-xl shrink-0">check</span>
              <span>Everything in Hybrid Elite</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-container text-xl shrink-0">check</span>
              <span>Unlimited real-time messaging</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-container text-xl shrink-0">check</span>
              <span>Daily form analysis & micro-adjustments</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-container text-xl shrink-0">check</span>
              <span>Priority booking for in-person sessions</span>
            </li>
          </ul>
          <button className="w-full border border-outline-variant text-primary font-label-md px-6 py-4 rounded-lg hover:bg-surface-variant transition-colors active:scale-95">
            APPLY NOW
          </button>
        </div>

      </section>

      {/* Enterprise / Corporate Section */}
      <section className="mt-24 border-t border-outline-variant pt-24 text-center max-w-3xl mx-auto">
        <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-6">corporate_fare</span>
        <h2 className="font-headline-lg text-primary mb-4">CORPORATE & TEAM PACKAGES</h2>
        <p className="font-body-md text-on-surface-variant mb-8">
          Elevate your workforce or athletic team with customized FitLink enterprise solutions. Includes aggregated performance reporting and dedicated account management.
        </p>
        <Link href="/support" className="inline-flex items-center gap-2 text-primary-container hover:text-primary-fixed transition-colors font-label-md uppercase tracking-widest">
          Contact Enterprise Team
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </section>
    </div>
  );
}