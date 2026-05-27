import Link from "next/link";

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-2xl border-t border-surface-variant flex justify-around items-center px-4 py-3 pb-safe shadow-lg rounded-t-xl">
      <Link href="/" className="flex flex-col items-center justify-center text-primary-container bg-primary/10 rounded-full px-4 py-1 transition-colors">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
        <span className="font-label-md text-[10px] mt-1">Home</span>
      </Link>
      
      <Link href="/search" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
        <span className="material-symbols-outlined">search</span>
        <span className="font-label-md text-[10px] mt-1">Search</span>
      </Link>
      
      <Link href="/bookings" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
        <span className="material-symbols-outlined">calendar_today</span>
        <span className="font-label-md text-[10px] mt-1">Bookings</span>
      </Link>
      
      <Link href="/programs" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
        <span className="material-symbols-outlined">fitness_center</span>
        <span className="font-label-md text-[10px] mt-1">Programs</span>
      </Link>
      
      <Link href="/support" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
        <span className="material-symbols-outlined">more_horiz</span>
        <span className="font-label-md text-[10px] mt-1">More</span>
      </Link>
    </nav>
  );
}