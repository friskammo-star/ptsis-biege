import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, SectionTitle, SectionLabel } from "@/components/SiteLayout";
import { ServiceFeatures, CTASection } from "@/components/ServiceFeatures";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services/siuppak")({ component: Page });

const evaluations = [
  "Company licenses and legal documents",
  "Company deed and office domicile",
  "Cooperation agreements with related parties",
  "Quality Management System (QMS) implemented by the company",
  "Recruitment and crew placement procedures",
  "Operational and administrative audits",
];

const processSteps = [
  "Receive application letter and submit to DIRJEN HUBLA",
  "Disposition for evaluation to the Directorate of Shipping and Seafarers",
  "Evaluation process by the Sub-Directorate",
  "Evaluation process by the Section Head",
  "Assignment to operational staff",
  "Verification of document validity and reporting to the Section Head",
  "Scheduling company audit by authorized auditors",
  "Audit Process",
  "On-site verification",
  "Auditor's audit report submission to the Section Head and Sub-Directorate",
  "Corrective actions by the auditee (applicant company)",
  "Sub-Directorate report to the Director for SIUPPAK issuance",
  "Director's report to the Director General of Sea Transportation",
  "SIUPPAK approval and signing by DIRJEN HUBLA",
  "Distribution of SIUPPAK to the applicant",
];

const requirements = [
  "Application letter addressed to the Director General of Sea Transportation",
  "Trading Business License (SIUP)",
  "Company Deed of Establishment",
  "Amendment Deed (if any)",
  "Approval Decree from the Ministry of Law and Human Rights (if any)",
  "Company Tax Identification Number (NPWP)",
  "Company Domicile Certificate",
  "Copy of Company Owner's ID Card (KTP)",
  "Copy of Quality Management System documents",
  "Copy of Seafarer Database previously placed onboard vessels",
  "Manning Agreement with Principal",
  "Letter of Appointment endorsed by the Indonesian representative office",
  "Principal's Commercial Registration endorsed by the Indonesian representative office",
  "Collective Bargaining Agreement (CBA/KKB) with labor union",
  "Power of Attorney for crew recruitment and placement",
  "List of expert personnel",
  "Certified copies of competency certificates and/or sea service records",
];

function Page() {
  return (
    <SiteLayout>
      <PageHero breadcrumb="SERVICES / SIUPPAK" title="SIUPPAK Licensing Services" subtitle="Shipping Crew Recruitment and Placement Business License." />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <SectionLabel>OVERVIEW</SectionLabel>
          <SectionTitle>Trusted SIUPPAK Licensing Services</SectionTitle>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>SIUPPAK is a Shipping Crew Recruitment and Placement Business License issued and authorized by the Ministry of Transportation through the Directorate General of Sea Transportation (HUBLA).</p>
            <p>The SIUPPAK application process involves complex procedures and comprehensive audits. The applicant company's legality and operational system will be thoroughly evaluated, including:</p>
            <ul className="grid sm:grid-cols-2 gap-3 mt-4">
              {evaluations.map((e) => (
                <li key={e} className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>{e}</span></li>
              ))}
            </ul>
            <p>To simplify and accelerate the SIUPPAK application process, PT SIS Samudera Indonesia Shakti provides professional SIUPPAK licensing consultancy services.</p>
          </div>
        </div>
      </section>

      <ServiceFeatures />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <SectionTitle>SIUPPAK Application Process</SectionTitle>
          <ol className="space-y-3">
            {processSteps.map((s, i) => (
              <li key={s} className="flex gap-4 p-4 bg-secondary/40 border-l-4 border-primary">
                <span className="font-serif text-2xl text-primary w-8 shrink-0">{i + 1}</span>
                <span className="text-muted-foreground self-center">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <SectionTitle>SIUPPAK Requirements</SectionTitle>
          <ul className="grid md:grid-cols-2 gap-4">
            {requirements.map((r) => (
              <li key={r} className="flex gap-3 bg-white p-4 border border-border">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span className="text-sm">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title="Need Help Processing Your SIUPPAK?" />
    </SiteLayout>
  );
}
