import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, SectionTitle, SectionLabel } from "@/components/SiteLayout";
import { ServiceFeatures, CTASection } from "@/components/ServiceFeatures";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services/siupal")({ component: Page });

const entities = ["Limited Liability Companies (PT)", "State-Owned Enterprises (BUMN)", "Regional-Owned Enterprises (BUMD)", "Cooperatives specifically established for shipping"];
const legal = [
  "Law Number 17 of 2008 concerning Shipping",
  "Government Regulation Number 20 of 2010 concerning Water Transportation",
  "Minister of Transportation Decree Number KM.33 of 2001",
];
const requirements = [
  "Company Deed of Establishment",
  "Approval Decree from Ministry of Law and Human Rights",
  "Investment License from BKPM",
  "Company Domicile / OSS Location Permit",
  "ID Card (KTP) and NPWP of Directors and Shareholders, including Company NPWP",
];
const vesselReqs = [
  "Tonnage Certificate (Surat Ukur)",
  "Certificate of Registry / Ship Registration (Surat Laut)",
  "Gross Deed (Grosse Akta)",
  "Construction Safety Certificate",
  "Equipment Safety Certificate",
  "Proof of Expert Personnel",
  "SIUPAL Application Letter",
];
const procedure = [
  { t: "Application Submission", d: "The application letter is submitted to the Director General of Sea Transportation (Dirjen Hubla) through the Ditlala Service Unit." },
  { t: "Directorate Review Process", d: "The Directorate forwards the application to the relevant Sub-Directorate and subsequently to the related section for verification." },
  { t: "Section Verification Process", d: "The section conducts document verification, vessel legal status checks, and prepares SIUPAL and SIOPSUS draft documents." },
  { t: "Sub-Directorate Process", d: "Official minutes, verification reports, and notification letters are signed and initialed; complete files are forwarded to the Directorate." },
  { t: "Directorate Approval", d: "Documents and approval initials are provided on SIUPAL and SIOPSUS drafts for applications with complete documentation." },
  { t: "Administrative Registration", d: "Records and assigns official numbers to memorandums before forwarding files to the Director General of Sea Transportation." },
  { t: "Signing of SIUPAL and SIOPSUS", d: "Documents are officially signed by the authorized authority." },
  { t: "Number Registration", d: "Official registration numbers for SIUPAL and SIOPSUS are issued." },
  { t: "Collection of SIUPAL and SIOPSUS", d: "The approved SIUPAL and SIOPSUS documents are ready for collection by the applicant." },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero breadcrumb="SERVICES / SIUPAL" title="SIUPAL Licensing Services" subtitle="Sea Transportation Company Business License processing for Indonesian shipping companies." />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <SectionLabel>OVERVIEW</SectionLabel>
          <SectionTitle>Professional SIUPAL Licensing Consultant</SectionTitle>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>SIUPAL is a license granted to Indonesian shipping companies established as:</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {entities.map((e) => <li key={e} className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>{e}</span></li>)}
            </ul>
            <h3 className="font-serif text-2xl text-foreground mt-8">Legal References</h3>
            <ul className="space-y-2">
              {legal.map((l) => <li key={l} className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>{l}</span></li>)}
            </ul>
            <h3 className="font-serif text-2xl text-foreground mt-8">Minimum Capital Requirements</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-secondary/50 p-6 border-l-4 border-primary">
                <div className="text-xs tracking-widest text-muted-foreground">Authorized Capital</div>
                <div className="font-serif text-2xl text-primary mt-1">IDR 50,000,000,000</div>
              </div>
              <div className="bg-secondary/50 p-6 border-l-4 border-primary">
                <div className="text-xs tracking-widest text-muted-foreground">Paid-up Capital</div>
                <div className="font-serif text-2xl text-primary mt-1">IDR 12,500,000,000</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceFeatures />

      <section className="py-20 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <SectionTitle>SIUPAL Requirements</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-xl mb-4 text-primary">Company Requirements</h3>
              <ul className="space-y-3">
                {requirements.map((r) => <li key={r} className="flex gap-3 bg-white p-3 border border-border"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-sm">{r}</span></li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4 text-primary">Vessel Data Requirements</h3>
              <ul className="space-y-3">
                {vesselReqs.map((r) => <li key={r} className="flex gap-3 bg-white p-3 border border-border"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-sm">{r}</span></li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <SectionTitle>SIUPAL Application Procedures</SectionTitle>
          <div className="space-y-4">
            {procedure.map((p, i) => (
              <div key={p.t} className="flex gap-5 p-6 bg-secondary/40 border-l-4 border-primary">
                <span className="font-serif text-3xl text-primary w-10 shrink-0">{i + 1}</span>
                <div>
                  <h4 className="font-serif text-lg font-semibold">{p.t}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-primary/5 border border-primary/20 p-6">
            <h4 className="font-serif text-lg mb-2 text-primary">Processing Time</h4>
            <p className="text-sm text-muted-foreground">Based on Government Regulation No. 20 of 2010, the SIUPAL processing period is approximately 30 working days after the complete application documents are officially received.</p>
          </div>
        </div>
      </section>

      <CTASection title="Need Help Processing Your SIUPAL?" />
    </SiteLayout>
  );
}
