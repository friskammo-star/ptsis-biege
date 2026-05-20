import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, SectionLabel, SectionTitle } from "@/components/SiteLayout";
import { Award, Briefcase, Clock, ShieldCheck } from "lucide-react";
import about from "@/assets/about-yacht.jpg";

export const Route = createFileRoute("/about")({ component: AboutPage });

const reasons = [
  { icon: Award, title: "Proven Maritime Expertise", desc: "Our team consists of experienced maritime professionals with strong knowledge of shipping regulations, licensing procedures, and maritime operational standards." },
  { icon: Briefcase, title: "Customized Business Solutions", desc: "We provide tailored maritime licensing and consultancy solutions that align with your business objectives and industry requirements." },
  { icon: Clock, title: "Operational Efficiency", desc: "Through streamlined processes and industry best practices, we help accelerate permit processing and improve operational effectiveness." },
  { icon: ShieldCheck, title: "Safety & Regulatory Compliance", desc: "We ensure every licensing process and maritime service follows the applicable Indonesian maritime regulations and standards." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero breadcrumb="ABOUT US" title="Professional & Trusted Maritime Licensing Consultant" subtitle="Experienced Maritime Licensing & Shipping Documentation Services." />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <img src={about} alt="Yacht" className="w-full h-[500px] object-cover" width={1200} height={800} loading="lazy" />
          <div>
            <div className="flex items-center gap-3 text-primary text-xs tracking-[0.3em] mb-3">ABOUT US <span className="w-8 h-px bg-primary" /></div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-snug">Experienced Maritime Licensing & Shipping Documentation Services</h2>
            <span className="block w-12 h-0.5 bg-primary my-5" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>With PT SIS Samudera Indonesia Shakti, managing maritime permits and shipping documentation is now easier and more efficient. You no longer need to deal with complicated administrative processes — leave everything to our professional team.</p>
              <p>In today's dynamic and highly competitive maritime industry, managing shipping operations and regulatory compliance requires expertise, precision, and reliability. Every operational detail can significantly affect the smooth movement of vessels, cargo, and marine activities.</p>
              <p>That is why PT SIS Samudera Indonesia Shakti is committed to becoming your trusted maritime partner, ensuring your business operations continue running safely, efficiently, and in compliance with Indonesian maritime regulations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <SectionLabel>WHY US</SectionLabel>
          <SectionTitle>Why Choose PT SIS Samudera Indonesia Shakti</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white p-8 border border-border flex gap-5">
                <div className="shrink-0 w-14 h-14 bg-primary/10 text-primary flex items-center justify-center">
                  <r.icon className="w-7 h-7" strokeWidth={1.4} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-20 text-center px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Join PT SIS Samudera Indonesia Shakti Today!</h2>
        <p className="max-w-2xl mx-auto text-white/70">With PT SIS Samudera Indonesia Shakti by your side, you are not just receiving ordinary consultancy services — you are gaining a trusted partner who genuinely cares about the success of your business.</p>
      </section>
    </SiteLayout>
  );
}
