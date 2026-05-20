import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, SectionTitle, SectionLabel } from "@/components/SiteLayout";
import { ServiceFeatures, CTASection } from "@/components/ServiceFeatures";
import { Check, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/services/siupkk")({ component: Page });

const reqs = [
  "Original scanned copy of SIUPKK application letter",
  "Original scanned copy of Company Deed of Establishment",
  "Original scanned copy of Approval Decree from Kemenkumham",
  "Original scanned copy of Amendment Deed and Approval Decree (if any)",
  "Original scanned copy of Company Domicile Certificate / Location Permit",
  "Original scanned copy of Responsible Person's Identification Document",
  "Original scanned copy of Proof of Business Premises Ownership or 2-Year Lease",
  "Expert Staff Certificate with minimum ANT/ATT III or D3 in Maritime Administration",
  "Original scanned copy of Bank Reference Letter",
  "Original scanned copy of Appointment Letter as Expert Staff",
  "SIMLALA Account",
];

const obligations = [
  "Carry out all provisions and requirements stipulated in the business license.",
  "Commence operational activities no later than 3 months after the business license is issued.",
  "Comply with all applicable maritime laws and regulations.",
  "Submit written monthly reports to the licensing authority.",
  "Report any changes regarding responsible person, ownership, or company domicile to the licensing authority.",
];

const revocation = [
  "Conducts activities that endanger national security",
  "Acts as an agent for unseaworthy vessels resulting in loss of life or property damage",
  "Obtains the business license through unlawful means",
  "Declares company dissolution based on the decision of the authorized authority",
];

function Page() {
  return (
    <SiteLayout>
      <PageHero breadcrumb="SERVICES / SIUPKK" title="SIUPKK Licensing Services" subtitle="Ship Agency Company Business License — mandatory license under Indonesian maritime laws." />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <SectionLabel>OVERVIEW</SectionLabel>
          <SectionTitle>Trusted SIUPKK Licensing Services</SectionTitle>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>Ship Agency Company Business License (SIUPKK) is a mandatory business license regulated under Indonesian maritime laws and established in accordance with the regulations of the Ministry of Transportation based on comprehensive regulatory assessments.</p>
            <p>Processing a SIUPKK can be complex, as it requires various supporting documents and often takes considerable time to complete. PT SIS Samudera Indonesia Shakti is your trusted solution for professional and reliable SIUPKK processing services.</p>
          </div>
        </div>
      </section>

      <ServiceFeatures />

      <section className="py-20 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <SectionTitle>SIUPKK Requirements</SectionTitle>
          <ul className="grid md:grid-cols-2 gap-4">
            {reqs.map((r) => (
              <li key={r} className="flex gap-3 bg-white p-4 border border-border">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-sm">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Obligations of SIUPKK Holders</h3>
            <ul className="space-y-3">
              {obligations.map((o) => <li key={o} className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-sm text-muted-foreground">{o}</span></li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Revocation of SIUPKK</h3>
            <p className="text-sm text-muted-foreground mb-3">The SIUPKK may be revoked immediately without prior warning if the company:</p>
            <ul className="space-y-3">
              {revocation.map((o) => <li key={o} className="flex gap-3"><AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-sm text-muted-foreground">{o}</span></li>)}
            </ul>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 lg:px-8 mt-10">
          <div className="bg-primary/5 border border-primary/20 p-6">
            <p className="text-sm text-muted-foreground">The SIUPKK is valid throughout the territory of the Republic of Indonesia from the date of issuance, as long as the company continues its business operations.</p>
          </div>
        </div>
      </section>

      <CTASection title="Need Help Processing Your SIUPKK?" />
    </SiteLayout>
  );
}
