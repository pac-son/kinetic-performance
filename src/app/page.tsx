import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden -mt-16 pt-16">
        <div className="absolute inset-0 z-0 bg-black">
          <img
            alt="High-end gym interior"
            className="w-full h-full object-cover brightness-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRk2jPkqMm40E5_zL008_OqFHprh1NuLqdkjpzct1cSus3OW5cuHEKs8_nxz7RxklFaDuAJctHAqUzEoufqb2XBVhrbsraCGvHo2tOdLnNBzCJQ45KH44cPpdhF2sol36z0Hanw3W_0vP6YF4FEOjkzkpxSDU4EXjW-HRCSfj-vDDaWaItBpmtX1MWOsarm-dlITAKLOdwmck-nvS_fMAnCWO8DpDXTKv54PUW1347wC2iteMOJVf0IkRutMJacdgcZJHIKru_Xqfa"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-background"></div>
        </div>
        
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-block py-1 px-3 bg-secondary-container rounded-sm">
              <span className="font-label-md text-white uppercase tracking-tighter">
                New Program: Elite Performance 2.0
              </span>
            </div>
            
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white leading-none tracking-tight">
              UNLEASH YOUR <br />{" "}
              <span className="text-primary-container text-glow">TRUE POTENTIAL</span>
            </h1>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Experience the pinnacle of British fitness. We connect you with world-class trainers and precision-engineered programs designed for the elite. No excuses, just results.
            </p>
            
            <div className="flex flex-wrap gap-gutter pt-8">
              <Link href="/search" className="h-14 px-10 bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-widest rounded-sm hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2">
                Find Your Trainer
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link href="/programs" className="h-14 px-10 border-2 border-white text-white font-label-md text-label-md uppercase tracking-widest rounded-sm hover:bg-white hover:text-black active:scale-95 transition-all flex items-center justify-center">
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Discipline Grid */}
      <section className="py-24 bg-background px-margin-mobile md:px-margin-desktop">
        <div className="container mx-auto max-w-container-max">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div className="space-y-2">
              <span className="font-label-md text-primary-container uppercase tracking-widest">
                Disciplines
              </span>
              <h2 className="font-headline-xl text-headline-xl text-white">SELECT YOUR PATH</h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-xs md:text-right">
              Specialized training modules tailored to your physiological goals and lifestyle requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter h-auto md:h-150">
            {/* Muscle Building */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl cursor-pointer hover-lift h-64 md:h-auto">
              <img
                alt="Muscle Building"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5M8ortD3cs0v5er0ZNf8N2L2kJgXJI_J6CLknoTJ9CbwQEzAzUMyVW2waOCpW_gmyMsgs5BCesAkoENQyrN9AK7vtHSPUcy7TdRSgpqEp2cmKzin8zerRWoEIAhZxUgVDRVYnV3NGv1Si4pkTukGC-jSk5gFyzuxIQEXIvqZgML2niF9U2Ciu8GCehiWF4h3wOFZSmwC4Xq60DRJZ2W5yuAJYcwtfYimHZgteoMegTFnSGmrL7co7XZY9IvDrqEDwoolVPd4soLmO"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 space-y-2">
                <span className="inline-block px-2 py-0.5 bg-primary-container text-black font-label-md text-xs uppercase">Power</span>
                <h3 className="font-headline-lg text-headline-lg text-white">MUSCLE BUILDING</h3>
                <p className="font-body-md text-on-surface-variant max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                  Hypertrophy focused programming using advanced periodization for maximum strength gains and structural definition.
                </p>
              </div>
            </div>

            {/* HIIT */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-xl cursor-pointer hover-lift h-64 md:h-auto">
              <img
                alt="HIIT Training"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtT90XjqqO0P1fNDpweIgp8-Ax7EiQb9QcK0ptu5FDNvl_ue8T3bSVdeBuuBTwGq2SemGmRfZcrbtv2DCZsK7YoREIyv6SWXXedZL7CG1pCO0aVgSScOl30ZCR6p25EZNXMTliXSJK-IfNeRa7THvWPwE_nd7LLPLdeGVJv5rNCgTdtaELiO04Z8HzeCGFfXmPe4YjiOZmkENbsywggH19sv72BywOu79g5EiHtep8ej01VxJx1ry0kctNnd-cpxBQtuWs1QDxnUYf"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 space-y-2">
                <span className="inline-block px-2 py-0.5 bg-secondary-container text-white font-label-md text-xs uppercase">Intensity</span>
                <h3 className="font-headline-lg text-headline-lg text-white">HIIT</h3>
              </div>
            </div>

            {/* Yoga */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-xl cursor-pointer hover-lift h-64 md:h-auto">
              <img
                alt="Yoga and Recovery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuARR_QLcZRU4FEQLV8JAKwOfcFBK_tbNmF1G-iewTyOac8_0mlbeDX50_W2VvJVThB4YXFzBgRI01oT2rac5cRd0yE9_A6yS3baZ0_k2wSZ8PNVbB9AZSXW3Vrwb0ewutO9GG9F0l9UDzfAmp92RiRWetmrlNjCPVCCfTmWM733jHFN-0W4baqwD2lYkctHIXp_8TQYxDn6ec5bdveDqWywVucT52ySgixccfamDwR5H4hpc6pZcNnLqBZvIIWZMwNfXu5-D7RxfkAy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 space-y-2">
                <span className="inline-block px-2 py-0.5 bg-tertiary-container text-black font-label-md text-xs uppercase">Precision</span>
                <h3 className="font-headline-lg text-headline-lg text-white">YOGA & RECOVERY</h3>
              </div>
            </div>

            {/* Performance Metrics (Bento Extra) */}
            <div className="md:col-span-8 bg-surface-container-high rounded-xl p-8 flex flex-col justify-between border border-outline-variant hover-lift cursor-pointer group h-64 md:h-auto">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-primary-container text-4xl">monitoring</span>
                <div className="text-right">
                  <span className="block font-headline-md text-white">98% Success Rate</span>
                  <span className="font-label-md text-on-surface-variant">Client Achievement Metric</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-headline-lg text-headline-lg text-white">REAL-TIME PERFORMANCE LINK</h3>
                <p className="font-body-md text-on-surface-variant">
                  Our proprietary tech stack syncs your biometrics with your trainer's dashboard, ensuring every rep is optimized for your specific physiology.
                </p>
                <div className="flex gap-2">
                  <div className="h-1 flex-1 bg-primary-container rounded-full"></div>
                  <div className="h-1 flex-1 bg-surface-variant rounded-full"></div>
                  <div className="h-1 flex-1 bg-surface-variant rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Section */}
      <section className="py-24 bg-surface-container-low px-margin-mobile md:px-margin-desktop">
        <div className="container mx-auto max-w-container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative">
              <div className="aspect-square bg-surface-container-highest rounded-2xl overflow-hidden relative">
                <img
                  alt="Professional Personal Trainer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlrvdopnDM03O6l2hZwll4UxkLGyVEFyIPXiKpSfZ6TurYvhmaATKJ3LQvqcZszYOX7wXCq4C6TV5C2y7Za0kka_vFgrHBEbc4oUm6Pyt4iiy106FuTARG0jvCWdyW6Wr0l9-6WeD-Nu-sdzfq2B3m8QohznuiHkq6fH5VH4Af1GXdMU2lpSdqON2GGuVQxAuoKq1SRjxOywVV4nul4mizOTHCljZUpsO8ibBmxceBQ8KU8vSYoYaaOK4uBsQmpm9SRdfngZ9pyWa4"
                />
              </div>
              {/* Stats Card Floating */}
              <div className="absolute -bottom-6 -right-2 md:-right-6 glass-panel p-4 md:p-6 rounded-xl shadow-2xl border-primary-container/20 border">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-container rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-black">verified</span>
                  </div>
                  <div>
                    <p className="font-headline-md text-white text-lg md:text-2xl">500+ EXPERTS</p>
                    <p className="font-label-md text-primary-container text-xs md:text-sm">Certified UK Trainers</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 mt-12 md:mt-0">
              <h2 className="font-headline-xl text-headline-xl text-white leading-tight">
                YOUR JOURNEY, <br className="hidden md:block"/>GUIDED BY THE BEST.
              </h2>
              <p className="font-body-lg text-on-surface-variant">
                Stop guessing. Our network of elite trainers in London, Manchester, and Birmingham are vetted through a rigorous 12-point performance check. Whether you need a competitive edge or a total lifestyle overhaul, we have the specialist for you.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 font-body-md text-white">
                  <span className="material-symbols-outlined text-primary-container">check_circle</span>
                  Personalized 1-on-1 Biometric Assessments
                </li>
                <li className="flex items-center gap-4 font-body-md text-white">
                  <span className="material-symbols-outlined text-primary-container">check_circle</span>
                  Nutrition Mapping & Supplement Strategy
                </li>
                <li className="flex items-center gap-4 font-body-md text-white">
                  <span className="material-symbols-outlined text-primary-container">check_circle</span>
                  24/7 Digital Concierge Support
                </li>
              </ul>
              <Link href="/search" className="inline-block h-14 px-10 bg-secondary-container text-white font-label-md text-label-md uppercase tracking-widest rounded-sm hover:brightness-110 active:scale-95 transition-all leading-14 text-center">
                Find Your Match
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}