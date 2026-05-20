import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { ArrowRight, FileBadge, Ship, Anchor, Compass } from "lucide-react";

export const Route = createFileRoute("/services")({ component: ServicesPage });

const services = [
  { to: "/services/siuppak", icon: FileBadge, code: "SIUPPAK", title: "Shipping Crew Recruitment and Placement Business License", desc: "License for crew recruitment and placement, issued through the Directorate General of Sea Transportation (HUBLA)." },
  { to: "/services/siupal", icon: Ship, code: "SIUPAL", title: "Sea Transportation Company Business License", desc: "License for Indonesian shipping companies operating as PT, BUMN, BUMD, or maritime cooperatives." },
  { to: "/services/siupkk", icon: Anchor, code: "SIUPKK", title: "Ship Agency Company Business License", desc: "Mandatory business license regulated under Indonesian maritime laws and Ministry of Transportation regulations." },
  { to: "/services", icon: Compass, code: "SIOPSUS", title: "Special Operational License — Surat Izin Operasi Khusus", desc: "Special operational license for specific maritime activities under Indonesian sea transportation regulations." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero breadcrumb="OUR SERVICES" title="Maritime Licensing Services" subtitle="Comprehensive licensing solutions handled by professionals for Indonesian maritime operations." />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <Link key={s.code} to={s.to} className="group bg-white border border-border p-8 hover:shadow-lg transition flex gap-6">
              <div className="shrink-0 w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center">
                <s.icon className="w-8 h-8" strokeWidth={1.3} />
              </div>
              <div>
                <div className="text-gold text-xs tracking-[0.3em] font-bold">{s.code}</div>
                <h3 className="font-serif text-xl font-semibold mt-1 mb-2 group-hover:text-primary">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <span className="text-xs font-bold tracking-widest text-primary inline-flex items-center gap-2">
                  LEARN MORE <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
