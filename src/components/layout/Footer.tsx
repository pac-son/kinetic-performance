import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant py-16 px-margin-mobile md:px-margin-desktop pb-32 md:pb-16">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <h2 className="font-display-lg text-headline-xl text-primary-container tracking-tight">
            FITLINK UK
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-sm">
            The UK's premier performance platform. Connecting ambition with expertise across the nation. Industrial sophistication in every rep.
          </p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary-container hover:text-black transition-colors">
              <span className="material-symbols-outlined text-xl">share</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary-container hover:text-black transition-colors">
              <span className="material-symbols-outlined text-xl">public</span>
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-6">
          <h4 className="font-label-md text-white uppercase tracking-widest">Platform</h4>
          <nav className="flex flex-col gap-4">
            <Link href="/search" className="font-body-md text-on-surface-variant hover:text-primary-container transition-colors">Find Trainers</Link>
            <Link href="/programs" className="font-body-md text-on-surface-variant hover:text-primary-container transition-colors">Elite Programs</Link>
            <Link href="/success-stories" className="font-body-md text-on-surface-variant hover:text-primary-container transition-colors">Success Stories</Link>
            <Link href="/about" className="font-body-md text-on-surface-variant hover:text-primary-container transition-colors">Gym Partners</Link>
          </nav>
        </div>

        <div className="space-y-6">
          <h4 className="font-label-md text-white uppercase tracking-widest">Corporate</h4>
          <nav className="flex flex-col gap-4">
            <Link href="/about" className="font-body-md text-on-surface-variant hover:text-primary-container transition-colors">About Us</Link>
            <Link href="/support" className="font-body-md text-on-surface-variant hover:text-primary-container transition-colors">Contact</Link>
            <Link href="#" className="font-body-md text-on-surface-variant hover:text-primary-container transition-colors">Careers</Link>
            <Link href="#" className="font-body-md text-on-surface-variant hover:text-primary-container transition-colors">Privacy Policy</Link>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-container-max mx-auto mt-16 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-md text-xs text-on-surface-variant uppercase tracking-widest">
          © {new Date().getFullYear()} FITLINK UK. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8">
          <span className="font-label-md text-xs text-on-surface-variant uppercase tracking-widest">LONDON</span>
          <span className="font-label-md text-xs text-on-surface-variant uppercase tracking-widest">MANCHESTER</span>
          <span className="font-label-md text-xs text-on-surface-variant uppercase tracking-widest">BIRMINGHAM</span>
        </div>
      </div>
    </footer>
  );
}