import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero breadcrumb="CONTACT" title="Get In Touch" subtitle="Reach out for professional maritime licensing consultancy. Free consultation available." />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl font-semibold mb-2">Contact Information</h2>
            <span className="block w-12 h-0.5 bg-primary mb-6" />
            <p className="text-muted-foreground mb-8">Our team is ready to assist with SIUPPAK, SIUPAL, SIUPKK, and SIOPSUS licensing.</p>
            <ul className="space-y-5">
              {[
                { icon: MapPin, label: "Address", value: "Jl. Marina Indah No. 1, Jakarta 14470, Indonesia" },
                { icon: Phone, label: "Phone", value: "+62 21 1234 5678" },
                { icon: Mail, label: "Email", value: "info@samuderaindonesiashakti.com" },
                { icon: Globe, label: "Website", value: "www.samuderaindonesiashakti.com" },
              ].map((c) => (
                <li key={c.label} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs tracking-widest text-muted-foreground">{c.label.toUpperCase()}</div>
                    <div className="font-medium mt-1">{c.value}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-secondary/40 p-8 space-y-4 border border-border"
          >
            <h3 className="font-serif text-2xl font-semibold">Send us a message</h3>
            <input className="w-full bg-white border border-border px-4 py-3 text-sm" placeholder="Full Name" required />
            <input type="email" className="w-full bg-white border border-border px-4 py-3 text-sm" placeholder="Email Address" required />
            <input className="w-full bg-white border border-border px-4 py-3 text-sm" placeholder="Phone Number" />
            <select className="w-full bg-white border border-border px-4 py-3 text-sm">
              <option>Service of Interest</option>
              <option>SIUPPAK</option>
              <option>SIUPAL</option>
              <option>SIUPKK</option>
              <option>SIOPSUS</option>
              <option>Other</option>
            </select>
            <textarea rows={5} className="w-full bg-white border border-border px-4 py-3 text-sm" placeholder="Your Message" required />
            <button type="submit" className="bg-primary text-primary-foreground px-6 py-4 text-xs font-bold tracking-widest hover:bg-primary/90 w-full">
              SEND MESSAGE
            </button>
            {sent && <p className="text-sm text-primary">Thank you — we'll be in touch shortly.</p>}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
