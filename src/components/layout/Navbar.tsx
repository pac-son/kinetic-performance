"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b border-surface-variant flex justify-between items-center px-margin-mobile md:px-margin-desktop transition-all duration-300 ${
        scrolled ? "bg-background/90 py-2 shadow-2xl h-14" : "bg-surface/70 h-16"
      }`}
    >
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-primary text-2xl" aria-hidden="true">
          location_on
        </span>
        <Link href="/" className="font-display-lg text-headline-md text-primary tracking-tight">
          FITLINK UK
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="font-label-md text-primary tracking-widest uppercase hover:opacity-80 transition-opacity">
          Home
        </Link>
        <Link href="/search" className="font-label-md text-on-surface-variant tracking-widest uppercase hover:text-primary transition-colors">
          Search
        </Link>
        <Link href="/bookings" className="font-label-md text-on-surface-variant tracking-widest uppercase hover:text-primary transition-colors">
          Bookings
        </Link>
        <Link href="/programs" className="font-label-md text-on-surface-variant tracking-widest uppercase hover:text-primary transition-colors">
          Programs
        </Link>
        <Link href="/support" className="font-label-md text-on-surface-variant tracking-widest uppercase hover:text-primary transition-colors">
          Support
        </Link>
      </div>

      {/* User Avatar */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full border border-primary-container overflow-hidden bg-surface-container-high cursor-pointer hover:border-primary-fixed-dim transition-colors">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNMMGL28XeG6EFWPNFkPVs0p1vyTyEnKzEMWDxKCuukhXbOSXkWYT3Ds_JGShA_XwTx8DCPh-xpSOZv6j9RJRQohBLrn5ULR-zOedLIHAixEVknYkpMKVhWKfNgXZya-F_wlmw0fHGWCAXtUuT8yDnKiu8xdA__0BGZLJzOhtff2CrmQY0b0Q2r3Kic1Fe6hrNPxGH-sgPpebbUMZULRe2FcdFfgQ6270TVc3PZchYsEJQX4ZAXfPpMnh_86z3pRKjvuJXZ1BBUB4h"
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
}