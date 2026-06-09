import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, SectionLabel, SectionTitle } from "@/components/SiteLayout";
import { ArrowRight, Play, Ship, FileText, Compass, Globe, Users, Award, ShieldCheck } from "lucide-react";
import hero from "@/assets/hero-yacht.jpg";
import about from "@/assets/about-yacht.jpg";
import newsYacht from "@/assets/news-yacht.jpg";
import newsDocs from "@/assets/news-docs.jpg";
import newsCargo from "@/assets/news-cargo.jpg";

export const Route = createFileRoute("/")({ component: Index });

const services = [
  { icon: Ship, title: "Ship & Yacht Management", desc: "Full management solution for vessels and yachts with high operational standards." },
  { icon: FileText, title: "Documentation Services", desc: "Reliable and efficient handling of vessel documentation and certification." },
  { icon: Compass, title: "Marine Consulting", desc: "Professional consultancy support for maritime and regulatory matters." },
  { icon: Globe, title: "Import & Export Services", desc: "Global logistics and shipping support with secure and timely delivery." },
];

const stats = [
  { icon: Ship, value: "250+", label: "Vessels Managed" },
  { icon: Users, value: "120+", label: "Happy Clients" },
  { icon: Globe, value: "15+", label: "Years of Experience" },
  { icon: ShieldCheck, value: "100%", label: "Commitment to Quality" },
];

const news = [
  { date: "20 MAY 2026", img: newsYacht, title: "SIS Expands Yacht Management Services in Indonesia" },
  { date: "15 MAY 2026", img: newsDocs, title: "New Partnership for Global Maritime Solutions" },
  { date: "08 MAY 2026", img: newsCargo, title: "Enhancing Import & Export Services for Better Efficiency" },
];

function Index() {
  return (
    <SiteLayout>
      {/* ═══ HERO ═══ */}
      <section className="relative bg-navy text-white overflow-hidden min-h-[90vh] flex items-center">
        <img src={hero} alt="Luxury yacht at sunset" className="absolute inset-0 w-full h-full object-cover opacity-50" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-32 md:py-48 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-gold text-xs tracking-[0.25em] mb-5">
              WELCOME TO <span className="w-10 h-px bg-gold/70" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95]">
              Samudera<br />Indonesia Shakti
            </h1>
            <div className="w-14 h-px bg-primary my-8" />
            <p className="text-white/70 max-w-lg text-lg leading-relaxed mb-10">
              Delivering trusted maritime services with integrity, professionalism, and international standards.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link to="/about" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs font-bold tracking-[0.2em] hover:bg-primary/90 transition-all duration-500">
                DISCOVER MORE <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-white/80 hover:text-white transition-colors duration-500">
                <span className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center"><Play className="w-4 h-4 fill-white" /></span>
                WATCH COMPANY PROFILE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <SectionLabel>WHAT WE DO</SectionLabel>
          <SectionTitle>Our Services</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-card border border-border p-10 text-center hover:shadow-lg transition-all duration-500 group">
                <s.icon className="w-12 h-12 mx-auto text-gold mb-6" strokeWidth={1.2} />
                <h3 className="font-serif text-lg font-semibold mb-3">{s.title}</h3>
                <span className="block w-8 h-px bg-primary mx-auto mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <Link to="/services" className="text-xs font-bold tracking-[0.2em] text-primary inline-flex items-center gap-2 group-hover:text-gold transition-colors duration-500">
                  LEARN MORE <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="grid md:grid-cols-2">
        <div className="bg-secondary/40 p-12 md:p-20 lg:p-24 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-primary text-xs tracking-[0.25em] mb-4">
            ABOUT US <span className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-snug">
            Navigating the Future<br />with Strength and Trust
          </h2>
          <span className="block w-12 h-px bg-primary my-6" />
          <p className="text-muted-foreground leading-relaxed mb-8">
            PT. Samudera Indonesia Shakti is a maritime service company committed to providing high-quality, reliable, and professional solutions to support the global maritime industry.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-xs font-bold tracking-[0.2em] w-fit hover:bg-primary/90 transition-all duration-500">
            READ MORE <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="relative min-h-[500px]">
          <img src={about} alt="Yacht deck at sunset" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1500ms]" width={1200} height={800} loading="lazy" />
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center ${i > 0 ? "md:border-l border-white/10" : ""}`}>
              <s.icon className="w-8 h-8 mx-auto text-gold mb-4" strokeWidth={1.2} />
              <div className="font-serif text-4xl md:text-5xl text-white">{s.value}</div>
              <div className="text-sm text-white/50 mt-2 tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ NEWS ═══ */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <SectionLabel>LATEST NEWS</SectionLabel>
          <SectionTitle>News &amp; Updates</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((n) => (
              <article key={n.title} className="bg-card border border-border group">
                <img src={n.img} alt={n.title} className="w-full h-56 object-cover grayscale group-hover:grayscale-0 transition-all duration-[1500ms]" width={800} height={512} loading="lazy" />
                <div className="p-8">
                  <div className="text-primary text-xs tracking-[0.15em] font-semibold mb-3">{n.date}</div>
                  <h3 className="font-serif text-lg font-semibold mb-4 leading-snug">{n.title}</h3>
                  <Link to="/news" className="text-xs font-bold tracking-[0.2em] text-primary inline-flex items-center gap-2 group-hover:text-gold transition-colors duration-500">
                    READ MORE <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
