import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, Phone, MapPin, Globe, Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT US" },
  { to: "/services", label: "SERVICES" },
  { to: "/news", label: "NEWS" },
  { to: "/contact", label: "CONTACT" },
];

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="SIS logo" className="h-12 w-12 object-contain" width={48} height={48} />
            <div className="leading-tight">
              <div className="font-serif font-bold text-primary text-lg tracking-wide">SAMUDERA</div>
              <div className="text-[11px] tracking-[0.2em] text-foreground/80">INDONESIA SHAKTI</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-semibold tracking-wider text-foreground/80 hover:text-primary transition-colors [&.active]:text-primary relative [&.active]:after:absolute [&.active]:after:left-0 [&.active]:after:right-0 [&.active]:after:-bottom-2 [&.active]:after:h-0.5 [&.active]:after:bg-primary"
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-xs font-bold tracking-widest hover:bg-primary/90 transition"
            >
              CONTACT US <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-4 py-3 flex flex-col gap-3">
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm font-semibold tracking-wider py-2">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-navy text-white/90">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="SIS" className="h-12 w-12 object-contain bg-white rounded" width={48} height={48} />
              <div>
                <div className="font-serif font-bold text-white">SAMUDERA</div>
                <div className="text-[10px] tracking-widest">INDONESIA SHAKTI</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Delivering trusted maritime services with integrity, professionalism, and international standards.
            </p>
            <div className="flex gap-3 mt-5 text-gold">
              <a href="#" aria-label="LinkedIn"><Globe className="w-5 h-5" /></a>
              <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="#" aria-label="Youtube"><Youtube className="w-5 h-5" /></a>
              <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-gold text-sm font-bold tracking-widest mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}><Link to={l.to} className="hover:text-gold">{l.label.charAt(0) + l.label.slice(1).toLowerCase()}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-gold text-sm font-bold tracking-widest mb-4">SERVICES</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/siuppak" className="hover:text-gold">SIUPPAK</Link></li>
              <li><Link to="/services/siupal" className="hover:text-gold">SIUPAL</Link></li>
              <li><Link to="/services/siupkk" className="hover:text-gold">SIUPKK</Link></li>
              <li><Link to="/services" className="hover:text-gold">SIOPSUS</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold text-sm font-bold tracking-widest mb-4">CONTACT US</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3"><MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Jakarta, Indonesia</li>
              <li className="flex gap-3"><Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" /> +62 21 1234 5678</li>
              <li className="flex gap-3"><Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" /> info@samuderaindonesiashakti.com</li>
              <li className="flex gap-3"><Globe className="w-4 h-4 text-gold shrink-0 mt-0.5" /> www.samuderaindonesiashakti.com</li>
            </ul>
          </div>
        </div>
        <div className="bg-primary text-center py-3 text-xs text-white/90">
          © {new Date().getFullYear()} PT. Samudera Indonesia Shakti. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export function PageHero({ title, subtitle, breadcrumb }: { title: string; subtitle?: string; breadcrumb?: string }) {
  return (
    <section className="bg-navy text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {breadcrumb && <div className="text-gold text-xs tracking-[0.3em] mb-3">{breadcrumb}</div>}
        <h1 className="font-serif text-4xl md:text-5xl font-semibold">{title}</h1>
        {subtitle && <p className="mt-4 text-white/70 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 text-gold text-xs tracking-[0.3em] mb-3">
      <span>{children}</span>
      <span className="w-6 h-px bg-gold" />
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-12">
      <h2 className="font-serif text-3xl md:text-4xl font-semibold relative inline-block">
        {children}
        <span className="block w-12 h-0.5 bg-primary mx-auto mt-3" />
      </h2>
    </div>
  );
}
