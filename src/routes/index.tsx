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
      {/* Hero */}
      <section className="relative bg-navy text-white overflow-hidden">
        <img src={hero} alt="Luxury yacht at sunset" className="absolute inset-0 w-full h-full object-cover opacity-60" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-28 md:py-40">
          <div className="flex items-center gap-3 text-gold text-xs tracking-[0.3em] mb-4">
            WELCOME TO <span className="w-8 h-px bg-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-medium leading-tight">
            Samudera<br />Indonesia Shakti
          </h1>
          <div className="w-12 h-0.5 bg-primary my-6" />
          <p className="text-white/80 max-w-md mb-8">
            Delivering trusted maritime services with integrity, professionalism, and international standards.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/about" className="inline-flex items-center gap-3 bg-primary px-6 py-4 text-xs font-bold tracking-widest hover:bg-primary/90">
              DISCOVER MORE <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="inline-flex items-center gap-3 text-xs font-bold tracking-widest text-white">
              <span className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center"><Play className="w-4 h-4 fill-white" /></span>
              WATCH COMPANY PROFILE
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <SectionLabel>WHAT WE DO</SectionLabel>
          <SectionTitle>Our Services</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white p-8 text-center border border-border hover:shadow-lg transition">
                <s.icon className="w-12 h-12 mx-auto text-gold mb-5" strokeWidth={1.2} />
                <h3 className="font-serif text-lg font-semibold mb-2">{s.title}</h3>
                <span className="block w-8 h-0.5 bg-primary mx-auto my-3" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <Link to="/services" className="text-xs font-bold tracking-widest text-primary inline-flex items-center gap-2">
                  LEARN MORE <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="grid md:grid-cols-2">
        <div className="bg-secondary/40 p-12 md:p-20 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-primary text-xs tracking-[0.3em] mb-3">
            ABOUT US <span className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-snug">
            Navigating the Future<br />with Strength and Trust
          </h2>
          <span className="block w-12 h-0.5 bg-primary my-5" />
          <p className="text-muted-foreground leading-relaxed mb-6">
            PT. Samudera Indonesia Shakti is a maritime service company committed to providing high-quality, reliable, and professional solutions to support the global maritime industry.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-4 text-xs font-bold tracking-widest w-fit hover:bg-primary/90">
            READ MORE <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="relative min-h-[400px]">
          <img src={about} alt="Yacht deck at sunset" className="absolute inset-0 w-full h-full object-cover" width={1200} height={800} loading="lazy" />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center ${i > 0 ? "md:border-l border-white/15" : ""}`}>
              <s.icon className="w-8 h-8 mx-auto text-gold mb-3" strokeWidth={1.2} />
              <div className="font-serif text-4xl md:text-5xl">{s.value}</div>
              <div className="text-sm text-white/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* News */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <SectionLabel>LATEST NEWS</SectionLabel>
          <SectionTitle>News &amp; Updates</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((n) => (
              <article key={n.title} className="bg-white border border-border">
                <img src={n.img} alt={n.title} className="w-full h-52 object-cover" width={800} height={512} loading="lazy" />
                <div className="p-6">
                  <div className="text-primary text-xs tracking-widest font-semibold mb-2">{n.date}</div>
                  <h3 className="font-serif text-lg font-semibold mb-4 leading-snug">{n.title}</h3>
                  <Link to="/news" className="text-xs font-bold tracking-widest text-primary inline-flex items-center gap-2">
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
