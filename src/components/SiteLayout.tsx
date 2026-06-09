import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Mail, Phone, MapPin, Globe, Facebook, Instagram, Youtube, ArrowRight, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT US" },
  { to: "/services", label: "SERVICES" },
  { to: "/news", label: "NEWS" },
  { to: "/contact", label: "CONTACT" },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="SIS logo" className="h-12 w-12 object-contain" width={48} height={48} />
            <div className="leading-tight">
              <div className="font-serif font-bold text-primary text-lg tracking-wide">SAMUDERA</div>
              <div className="text-[11px] tracking-[0.25em] text-muted-foreground">INDONESIA SHAKTI</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-xs font-semibold tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors duration-500 [&.active]:text-primary relative [&.active]:after:absolute [&.active]:after:left-0 [&.active]:after:right-0 [&.active]:after:-bottom-2 [&.active]:after:h-px [&.active]:after:bg-primary"
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-xs font-bold tracking-[0.2em] hover:bg-primary/90 transition-all duration-500"
            >
              CONTACT US <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t bg-background">
            <div className="px-4 py-3 flex flex-col gap-3">
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-xs font-semibold tracking-wider py-2">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer ref={footerRef} className="bg-navy text-white/90">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="SIS" className="h-12 w-12 object-contain bg-white/10 rounded" width={48} height={48} />
              <div>
                <div className="font-serif font-bold text-white text-lg">SAMUDERA</div>
                <div className="text-[10px] tracking-[0.25em] text-white/60">INDONESIA SHAKTI</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Delivering trusted maritime services with integrity, professionalism, and international standards.
            </p>
            <div className="flex gap-4 mt-6 text-gold">
              <a href="#" aria-label="LinkedIn"><Globe className="w-5 h-5 hover:text-white transition-colors duration-500" /></a>
              <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5 hover:text-white transition-colors duration-500" /></a>
              <a href="#" aria-label="Youtube"><Youtube className="w-5 h-5 hover:text-white transition-colors duration-500" /></a>
              <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5 hover:text-white transition-colors duration-500" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-gold text-xs font-bold tracking-[0.2em] mb-6">QUICK LINKS</h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}><Link to={l.to} className="text-white/60 hover:text-gold transition-colors duration-500">{l.label.charAt(0) + l.label.slice(1).toLowerCase()}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-gold text-xs font-bold tracking-[0.2em] mb-6">SERVICES</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/siuppak" className="text-white/60 hover:text-gold transition-colors duration-500">SIUPPAK</Link></li>
              <li><Link to="/services/siupal" className="text-white/60 hover:text-gold transition-colors duration-500">SIUPAL</Link></li>
              <li><Link to="/services/siupkk" className="text-white/60 hover:text-gold transition-colors duration-500">SIUPKK</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-gold transition-colors duration-500">SIOPSUS</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold text-xs font-bold tracking-[0.2em] mb-6">CONTACT US</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3"><MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Jakarta, Indonesia</li>
              <li className="flex gap-3"><Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" /> +62 21 1234 5678</li>
              <li className="flex gap-3"><Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" /> info@samuderaindonesiashakti.com</li>
              <li className="flex gap-3"><Globe className="w-4 h-4 text-gold shrink-0 mt-0.5" /> www.samuderaindonesiashakti.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 text-center py-4 text-xs text-white/40">
          © {new Date().getFullYear()} PT. Samudera Indonesia Shakti. All Rights Reserved.
        </div>
      </footer>

      {/* Floating button: WhatsApp ↔ Back to Top */}
      <div className="fixed bottom-6 right-6 z-50 w-14 h-14">
        <a
          href="https://wa.me/622112345678"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className={`absolute inset-0 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-500 ease-out ${
            isFooterVisible ? "opacity-0 scale-75 pointer-events-none rotate-90" : "opacity-100 scale-100 rotate-0"
          }`}
        >
          <WhatsAppIcon className="w-7 h-7" />
        </a>
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className={`absolute inset-0 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-500 ease-out ${
            isFooterVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 pointer-events-none -rotate-90"
          }`}
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export function PageHero({ title, subtitle, breadcrumb }: { title: string; subtitle?: string; breadcrumb?: string }) {
  return (
    <section className="bg-navy text-white py-24 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        {breadcrumb && <div className="text-gold text-xs tracking-[0.25em] mb-4">{breadcrumb}</div>}
        <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-tight">{title}</h1>
        {subtitle && <p className="mt-5 text-white/60 max-w-2xl leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 text-gold text-xs tracking-[0.25em] mb-4">
      <span className="w-6 h-px bg-gold/50" />
      <span>{children}</span>
      <span className="w-6 h-px bg-gold/50" />
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-14">
      <h2 className="font-serif text-3xl md:text-4xl font-semibold relative inline-block">
        {children}
      </h2>
      <span className="block w-12 h-px bg-primary mx-auto mt-4" />
    </div>
  );
}
