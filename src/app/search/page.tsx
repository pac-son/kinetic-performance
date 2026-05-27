import Image from "next/image";

// Temporary data array to keep the JSX clean and prepare for future database integration
const trainers = [
  {
    id: 1,
    name: "MARCUS T.",
    title: "Strength & Conditioning Specialist",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrHxY9g4M2xiQFPO0amTwAD-KQj6VJvz4lZg_ftGYtBquX-bXl3puG66DRVdlH17D2Kbrf-M54GPPUw9yz91AAnBdGv0OlCpeOaGJFw7vdHxIYqfb7Z3zdQNPiUlUttqo3_wVxH7wkKT5dBVLcqPRV1d2c50jdpS4bgvugApi9QKTHX4z1La9LE18n-TVnFcpqlMk-9Q3DOjMFLwlrKtMi_OLmEv5WSMf70VbtNhyvvt3ly0I69sGRj5A7z_O0X_qFrsNYtfPfJemD",
    rating: "4.9",
    reviews: "128",
    tags: ["Bodybuilding", "HIIT"],
    location: "Chelsea, London",
    price: "£65",
    badge: { text: "Level: Pro", type: "solid" }
  },
  {
    id: 2,
    name: "SARAH J.",
    title: "Functional Movement & Yoga",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHxLkalCarDKhRL5tWR4ClaxIEFX9zVUXjC2kqh8wdolgmglMF2kMLVd3T3KpPgJjv10HC0yVlY9VfLyOrq3lGBMN6UHQechEOisn4TJhJ_72G0AuA9mqTax-mggcvZ_DStasvFl-hSmxsz7YC-ag-uCD34R8qjjwwuE05fqA8M47SqrR0D1mpyG3Ip4eEbhYT8KiDp8_UH5YA2hK1juOG3semMGyJEC4Aqpldu8Bj7VCuqo8y1lc01ZRgvgPvXnFuEv2m0tmAuUNN",
    rating: "5.0",
    reviews: "94",
    tags: ["Mobility", "Vinyasa"],
    location: "Shoreditch, London",
    price: "£55",
    badge: { text: "Top Rated", type: "glass" }
  },
  {
    id: 3,
    name: "DAVID L.",
    title: "Elite Athlete Performance",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVYYRb2P-CuLjt4DaATnc48s8YM-8UKeiB-brd3F59YcFqRW7uXY1hgt0OokzSM2Ig6SAf0FYzLqVmIeBCbr59ma1KklAhXGGlO97INEfIKFgvSsyiQnKLLuso-pTlBCJC32tiPIusoPo_BkmI9m9NL8WMGSGi-LhbysHo6IBuh9dO3NbTPzMTLrlz1A8ShmKCMAgvufo2cDsZY-jcLK6odTWC1dCGenFGswvwvk87nd_yMwhK6Zpm6ucigPNrDZUArt6_oTkKr-tE",
    rating: "4.8",
    reviews: "210",
    tags: ["Sports Science", "Boxing"],
    location: "Mayfair, London",
    price: "£80",
    badge: null
  },
  {
    id: 4,
    name: "ELENA R.",
    title: "Pilates & Post-Natal Specialist",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdMkdwHkQZ7unzBTI7sduFEVEYM0u_npTNng0KXXma_S_ASg6MGDGdfE1L9oaaP59pWhzET_wwzng62GNNboSBLsmtRnjXUEBZqciCDvTEgKO-fn6Do56XkQ-g--ympNb8fWlgq2E8v_GP4hcmRe7kCAuhgyCYeKrLmKjA2nRs4Is63fCWnFsh8OYf9XNyC-QlFAgJGOSFRB7YYw-sFmtqsOhbFREet_tMDqBe0hTXGUDezlEa43FygvbJY3U6djyqXXltebAbxK_P",
    rating: "4.9",
    reviews: "42",
    tags: ["Reformer", "Posture"],
    location: "Hampstead, London",
    price: "£70",
    badge: null
  }
];

export default function SearchPage() {
  return (
    <div className="container mx-auto px-margin-mobile md:px-margin-desktop py-12 max-w-container-max">
      
      {/* Search & Filter Section */}
      <section className="mb-12">
        <div className="flex flex-col gap-6">
          {/* Search Bar */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-on-surface-variant group-focus-within:text-primary-container transition-colors">
                search
              </span>
            </div>
            <input 
              className="w-full bg-surface-container-low border border-outline-variant rounded-xl py-5 pl-16 pr-6 font-body-lg text-primary focus:ring-1 focus:ring-primary-container focus:border-primary-container transition-all outline-none" 
              placeholder="Search for Elite Trainers, Yoga Instructors, or Crossfit Coaches..." 
              type="text"
            />
          </div>

          {/* Filter Row */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 px-6 py-3 bg-surface-container-high border border-outline-variant rounded-full text-on-surface hover:border-primary-container transition-all">
              <span className="material-symbols-outlined text-[18px]">tune</span>
              <span className="font-label-md">All Filters</span>
            </button>
            <div className="h-8 w-px bg-outline-variant mx-2 hidden md:block"></div>
            
            {/* Filter Chips */}
            <div className="flex gap-3 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
              {['Location: London', 'Goal: Muscle Gain', 'Price: £40 - £80', 'Availability'].map((filter, idx) => (
                <button key={idx} className="flex shrink-0 items-center gap-2 px-5 py-3 bg-surface-container border border-outline-variant rounded-full text-on-surface hover:bg-surface-container-high transition-all">
                  <span className="font-label-md">{filter}</span>
                  <span className="material-symbols-outlined text-[16px]">expand_more</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h2 className="font-headline-xl text-primary uppercase">Elite Results</h2>
          <p className="font-body-md text-on-surface-variant">Showing 24 elite performance specialists in London</p>
        </div>
        <div className="flex items-center gap-2 font-label-md text-on-surface-variant">
          <span>Sort by:</span>
          <button className="text-primary-container flex items-center gap-1 hover:opacity-80 transition-opacity">
            Highest Rated
            <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
          </button>
        </div>
      </div>

      {/* Trainer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="glass-card rounded-xl overflow-hidden group flex flex-col transition-transform duration-300 hover:-translate-y-2">
            
            {/* Card Image Header */}
            <div className="relative h-64 overflow-hidden">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                src={trainer.img} 
                alt={trainer.name} 
              />
              
              {/* Conditional Badges */}
              {trainer.badge && (
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full font-label-md text-[10px] uppercase tracking-widest ${
                    trainer.badge.type === 'solid' 
                      ? 'bg-secondary-container text-white' 
                      : 'bg-primary/20 backdrop-blur-md text-primary-container border border-primary-container/30'
                  }`}>
                    {trainer.badge.text}
                  </span>
                </div>
              )}

              {/* Rating Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-linear-to-t from-black to-transparent">
                <div className="flex items-center gap-1 text-primary-container">
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-label-md">{trainer.rating} ({trainer.reviews} reviews)</span>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 grow flex flex-col justify-between">
              <div>
                <h3 className="font-headline-md text-primary mb-1">{trainer.name}</h3>
                <p className="font-body-md text-on-surface-variant mb-4">{trainer.title}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {trainer.tags.map((tag, idx) => (
                    <span key={idx} className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-lg text-[12px] font-label-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 text-on-surface-variant mb-6">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                    <span className="text-[14px]">{trainer.location}</span>
                  </div>
                </div>
              </div>
              
              {/* Card Footer */}
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <span className="block text-[12px] uppercase text-on-surface-variant font-label-md">From</span>
                  <span className="text-[24px] font-headline-md text-primary">
                    {trainer.price} <span className="text-[14px] font-body-md text-on-surface-variant">/hr</span>
                  </span>
                </div>
                <button className="glow-shadow-primary bg-primary-container text-on-primary-container px-6 py-3 rounded-xl font-label-md uppercase transition-all active:scale-95">
                  Book Session
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-16 flex justify-center">
        <button className="px-10 py-4 bg-transparent border border-primary-container text-primary-container rounded-full font-label-md uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all">
          Load More Specialists
        </button>
      </div>
    </div>
  );
}