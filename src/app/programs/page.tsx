import Link from "next/link";

export default function ProgramsPage() {
  return (
    <div className="pt-16 pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-gutter group mt-8 md:mt-12">
        <div className="absolute inset-0 z-0">
          <img
            alt="Remote Training"
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbgFeykuCWnr9OsCnWFT7nrPlsQLmncpiMW8FfPnZ7cNc12d-VWStYsz0PPJ-Ljsg0MOsO82KvNXYHSfIedLIugjoqFmXwHfhP-FhwnKsQQWGA-ySZsFWFgOBB3FkCbP9r6HZxw-5yq0Gy6sU2F3G72jXZ4OMxcqynSq7L8WsDTU67mq35FtRByJ1BKu2Xm8ihbVzUOCgOx5ZXHXgUZJ66yP2Gp5tNWcoGIBJrPHURvcD9xZWmBwOZenkDM2KVCINALtPLB5MgQrTG"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center h-full max-w-2xl px-6 md:px-12">
          <span className="font-label-md text-primary-fixed bg-on-primary-fixed-variant px-3 py-1 rounded-full w-fit mb-6 uppercase tracking-widest text-[10px] md:text-xs">
            Global Coaching Platform
          </span>
          <h2 className="font-display-lg-mobile md:font-display-lg text-primary mb-4 leading-none">
            ELITE RESULTS,<br />WHEREVER YOU ARE.
          </h2>
          <p className="font-body-md md:font-body-lg text-on-surface-variant mb-8 max-w-md md:max-w-full">
            Professional-grade training delivered through a high-performance digital interface. No excuses, just technical precision and focused energy.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary-container text-on-primary-container px-8 py-3 font-label-md rounded hover:opacity-90 transition-all active:scale-95 glow-shadow-primary h-[48px] uppercase tracking-widest">
              Start Training
            </button>
            {/* UPDATED: Converted button to Next.js Link pointing to /pricing */}
            <Link href="/pricing" className="flex items-center justify-center border border-outline-variant text-primary px-8 py-3 font-label-md rounded hover:bg-surface-variant transition-all h-[48px] uppercase tracking-widest">
              View Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Bento Dashboard Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        
        {/* Progress Tracking Chart (Bento Large) */}
        <div className="col-span-1 lg:col-span-8 glass-card p-6 md:p-8 rounded-xl flex flex-col">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h3 className="font-headline-lg text-primary uppercase">Progress Tracking</h3>
              <p className="font-label-md text-on-surface-variant uppercase tracking-widest text-xs mt-1">
                Weekly Intensity Load
              </p>
            </div>
            <div className="text-right">
              <span className="font-display-lg text-headline-xl text-primary-fixed">84%</span>
              <p className="font-label-md text-on-surface-variant text-[10px] uppercase tracking-widest">Goal Reached</p>
            </div>
          </div>
          
          <div className="flex items-end justify-between h-48 gap-1 md:gap-2 px-2 md:px-4 mt-auto">
            {/* Chart Bars - Using Tailwind origin-bottom and scale-y for pure CSS hover effects */}
            {[
              { day: 'MON', height: '40%', val: '40%', defaultColor: 'bg-surface-container-highest' },
              { day: 'TUE', height: '85%', val: '85%', defaultColor: 'bg-primary-fixed' },
              { day: 'WED', height: '30%', val: '30%', defaultColor: 'bg-surface-container-highest' },
              { day: 'THU', height: '95%', val: '95%', defaultColor: 'bg-primary-fixed' },
              { day: 'FRI', height: '60%', val: '60%', defaultColor: 'bg-surface-container-highest' },
              { day: 'SAT', height: '75%', val: '75%', defaultColor: 'bg-primary-fixed' },
              { day: 'SUN', height: '100%', val: 'MAX', defaultColor: 'bg-secondary-container text-on-secondary' },
            ].map((stat, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-4 group">
                <div 
                  className={`w-full ${stat.defaultColor} rounded-t-sm transition-transform duration-300 origin-bottom group-hover:scale-y-110 relative`}
                  style={{ height: stat.height }}
                >
                  <div className={`absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] md:text-xs px-2 py-1 rounded font-bold transition-opacity ${
                    stat.day === 'SUN' ? 'bg-secondary-container text-on-secondary' : 'bg-primary-fixed text-on-primary-fixed'
                  }`}>
                    {stat.val}
                  </div>
                </div>
                <span className="font-label-md text-[10px] md:text-xs text-on-surface-variant">{stat.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Up Next & Stats */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-gutter">
          
          {/* Up Next Session Card */}
          <div className="glass-card flex-1 p-6 rounded-xl relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-lg text-primary uppercase">Up Next</h3>
                <span className="bg-secondary-container text-white text-[10px] px-2 py-1 rounded font-bold tracking-tighter">
                  LIVE IN 2H
                </span>
              </div>
              <h4 className="font-headline-md text-primary leading-tight">
                HYPERTROPHY PHASE II:<br />UPPER BODY FOCUS
              </h4>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-on-surface-variant">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span className="font-label-md text-xs">60 MINS</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-secondary-container">bolt</span>
                  <span className="font-label-md text-xs text-secondary-container">PRO LEVEL</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 relative z-10">
              <button className="w-full bg-primary text-black font-label-md py-3 rounded hover:bg-primary-fixed transition-all mb-3 flex items-center justify-center gap-2 uppercase tracking-widest active:scale-95">
                <span className="material-symbols-outlined">play_circle</span>
                Preview Session
              </button>
              <button className="w-full bg-transparent border border-outline-variant text-primary font-label-md py-3 rounded hover:bg-surface-variant transition-all uppercase tracking-widest active:scale-95">
                Reschedule
              </button>
            </div>
            
            {/* Subtle BG Graphic */}
            <div className="absolute bottom-[-20px] right-[-20px] opacity-[0.03] pointer-events-none">
              <span className="material-symbols-outlined text-[150px]">fitness_center</span>
            </div>
          </div>

          {/* Small Stat Card */}
          <div className="glass-card p-6 rounded-xl flex items-center justify-between group cursor-pointer hover:border-primary-fixed/30 transition-colors">
            <div>
              <p className="font-label-md text-xs text-on-surface-variant uppercase mb-1">Current Streak</p>
              <p className="font-headline-lg text-primary transition-transform group-hover:scale-105 origin-left">14 DAYS</p>
            </div>
            <div className="bg-primary-container/10 p-4 rounded-full group-hover:bg-primary-container/20 transition-colors">
              <span className="material-symbols-outlined text-primary-fixed text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                local_fire_department
              </span>
            </div>
          </div>
        </div>

        {/* Program Overview (Lower Row) */}
        <div className="col-span-1 lg:col-span-12 glass-card p-6 md:p-8 rounded-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-48 h-48 rounded-xl overflow-hidden flex-shrink-0 group">
              <img
                alt="Program Focus"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6zMi0K9mtTRh4mGpey4Ntt1x5tA-XZ8xDnGl0cpyKO7dcnBBTMk5L029e9_msVvSTRGANv3qIz0sMDOOXLzja-fVV4qPV0W7PNUVvfccbzGh-ZOlZaN5wXk3j9G-8FcQOu7-I5N_CvytJK9Epm8jmofzz6991lYjQZDC1Iyxu2G2HuCe8QbgUyafXyKmcpD3JZIEFDHeZ9f0Twj0erM1Vhv1Y-A2807WR6xqbkK3AxiYL930oXJAEMXvSSyzb63tBNSRvbg5Y6Joc"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="text-secondary-container font-label-md text-xs tracking-widest uppercase">
                  Enrolled Program
                </span>
                <div className="h-px bg-outline-variant flex-1 hidden md:block max-w-[200px]"></div>
              </div>
              <h3 className="font-display-lg-mobile md:font-headline-xl text-primary mb-2 uppercase">
                Industrial Strength 4.0
              </h3>
              <p className="font-body-md text-on-surface-variant max-w-xl mx-auto md:mx-0">
                Advanced methodology focusing on raw power output and metabolic conditioning. Tailored for professionals who demand maximum efficiency from their training schedule.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto mt-4 md:mt-0 shrink-0">
              <div className="flex justify-between items-center bg-surface-container-low p-4 rounded border border-outline-variant gap-8">
                <span className="font-label-md text-on-surface-variant text-xs uppercase tracking-widest">Next Reassessment</span>
                <span className="font-headline-md text-primary uppercase">In 3 Days</span>
              </div>
              <button className="bg-secondary-container text-white font-label-md py-4 px-8 rounded hover:brightness-110 active:scale-95 transition-all w-full uppercase tracking-widest text-sm">
                Manage Enrollment
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}