import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pb-32">
      {/* Hero Section: Forging the UK's Fitness Future */}
      <section className="relative min-h-204.75 flex items-center overflow-hidden px-margin-mobile md:px-margin-desktop -mt-16 pt-16">
        <div className="absolute inset-0 z-0 bg-black">
          <img
            className="w-full h-full object-cover opacity-40"
            alt="High-intensity industrial gym"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZpn8SdlUA_zDfOMvUrvITfbOYricxyGldFlbfSsZokl543y3kB5HdQiACOA0zXtaEtO7apP8Fe4Z52mdK1Kgv8obF0PZYQeQprGuEuVzNcxElCNsXUkiFF2r-ik3GbQ7UQRg8CBSdSifCn6pa3dbz0ewRMWCO6EFgXj0VljH90EKEE9SeLI9nZackTEvbdjGyTSeBf61yvC8nF0IVdoGhtlUsh_aKmevJj9F6Z36LZLJpd6IcJvcF1wwHa7WCLDs8wO1pBeRs9lom"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl space-y-6">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white leading-none tracking-tight">
            FORGING THE UK&apos;S<br />
            <span className="text-primary-container">FITNESS FUTURE</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            FitLink UK isn&apos;t just an app. It&apos;s a high-performance ecosystem designed for those who demand elite results. We bridge the gap between world-class trainers and dedicated athletes through a framework of trust, technology, and transparency.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary-container text-on-primary-container px-8 py-4 font-label-md text-label-md rounded-lg font-bold hover:scale-105 transition-transform neon-glow-primary active:scale-95 duration-100">
              JOIN THE NETWORK
            </button>
            <button className="border border-outline-variant text-primary px-8 py-4 font-label-md text-label-md rounded-lg font-bold hover:bg-surface-variant transition-colors active:scale-95 duration-100">
              OUR PROTOCOL
            </button>
          </div>
        </div>
      </section>

      {/* Bento Grid Section: Identity & Scale */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 glass-card p-6 md:p-8 rounded-xl flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="font-headline-xl text-headline-xl text-white mb-4">THE UNBREAKABLE NETWORK</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mb-8">
                We&apos;ve cultivated a community of over 50,000 elite professionals and fitness enthusiasts across the United Kingdom. From private studios in London to high-performance facilities in Manchester, our network is built on shared values of discipline and excellence.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 relative z-10">
              <div>
                <p className="font-headline-lg text-headline-lg text-primary-container">50K+</p>
                <p className="font-label-md text-label-md uppercase opacity-60">Members</p>
              </div>
              <div>
                <p className="font-headline-lg text-headline-lg text-primary-container">2.5K</p>
                <p className="font-label-md text-label-md uppercase opacity-60">Verified Pros</p>
              </div>
              <div>
                <p className="font-headline-lg text-headline-lg text-primary-container">15+</p>
                <p className="font-label-md text-label-md uppercase opacity-60">Major Cities</p>
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-transparent font-display-lg text-[120px] leading-none" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.3)' }}>UK</span>
            </div>
          </div>
          
          <div className="md:col-span-4 bg-secondary-container rounded-xl p-8 flex flex-col justify-center items-center text-center space-y-4 shadow-lg overflow-hidden relative">
            <span className="material-symbols-outlined text-[64px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            <h3 className="font-headline-lg text-headline-lg text-white">100% VETTED</h3>
            <p className="font-label-md text-label-md text-white/90">Every professional on FitLink UK undergoes our rigorous 4-step verification protocol.</p>
          </div>
        </div>
      </section>

      {/* Detailed Section: The Vetting Protocol */}
      <section className="py-24 bg-surface-container-low px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="mb-16">
            <span className="font-label-md text-label-md text-primary-container tracking-[0.2em] uppercase">Security & Standards</span>
            <h2 className="font-headline-xl text-headline-xl text-white md:text-display-lg-mobile mt-2">THE VETTING PROTOCOL</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Identity Check */}
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-full border border-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-container text-3xl">badge</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-white">01. IDENTITY LOCK</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Multi-factor identification checks through government-issued IDs and DBS background checks to ensure the highest safety standards for all on-site training sessions.
              </p>
              <ul className="space-y-3 font-label-md text-label-md text-on-surface">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container text-sm">check_circle</span>
                  Biometric ID Matching
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container text-sm">check_circle</span>
                  DBS Background Verification
                </li>
              </ul>
            </div>
            
            {/* Insurance & Accreditations */}
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-full border border-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-container text-3xl">shield_with_heart</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-white">02. COMPLIANCE SHIELD</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We verify professional indemnity and public liability insurance. Only trainers with current, valid accreditation from recognized UK bodies (CIMSPA, REPs) are permitted.
              </p>
              <ul className="space-y-3 font-label-md text-label-md text-on-surface">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container text-sm">check_circle</span>
                  £5M Liability Coverage Minimum
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container text-sm">check_circle</span>
                  Professional Certification Audit
                </li>
              </ul>
            </div>
            
            {/* Performance Reviews */}
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-full border border-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-container text-3xl">query_stats</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-white">03. PERFORMANCE DATA</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Real-time performance metrics and client feedback loops. We maintain an uncompromising quality threshold—trainers falling below a 4.5/5 rating are subject to protocol review.
              </p>
              <ul className="space-y-3 font-label-md text-label-md text-on-surface">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container text-sm">check_circle</span>
                  Verified User Reviews Only
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container text-sm">check_circle</span>
                  Quarterly Quality Assessments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Anchor: Training Excellence */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto relative h-125 rounded-2xl overflow-hidden group">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Personal trainer guiding an athlete"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeO0RbpDPHMd6Nl1m0IX15jI_koGpfjNr9OBOngLgH_oeIbacmDXI4aTvGk5JR9DFEEYEmxntPGP8ekKclipLsvmdjXjQd58QsvhVU2csiyn-oZ8opDJHgTD7nl1MhPRGeWyFlH1ZBucpw4f-ohneh92uwooFE1IGO-p_XWu8StExwFrJMzkUh4jxbODponau01mTufyqmPt-dgFsZriBKRr8cLHnYW6L-orFLjLZ6hLgG9dBu2R-bbOBNCUSbHd2JviVxdHcyTl1G"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="max-w-xl">
              <h3 className="font-headline-xl text-headline-xl text-white">THE STANDARDS WE HOLD</h3>
              <p className="font-body-md text-body-md text-white/80 mt-2">
                Every session booked through FitLink UK is backed by our guarantee of professional integrity and athletic results. We don&apos;t just find you a trainer; we find you a partner in your peak performance journey.
              </p>
            </div>
            <button className="bg-primary text-black px-10 py-5 font-headline-md text-headline-md rounded-lg hover:bg-primary-container transition-colors shrink-0">
              START YOUR JOURNEY
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}