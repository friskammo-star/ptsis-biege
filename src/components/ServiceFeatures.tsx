import { ShieldCheck, Zap, MessageCircle, Heart } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "OFFICIAL LEGALITY", desc: "Our processing services follow official procedures in accordance with applicable government regulations." },
  { icon: Zap, title: "FAST PROCESS", desc: "The licensing process will be handled more efficiently and professionally to save your valuable time." },
  { icon: MessageCircle, title: "FREE CONSULTATION", desc: "We provide free consultation services regarding licensing requirements and procedures." },
  { icon: Heart, title: "FRIENDLY SERVICE", desc: "We are committed to serving you wholeheartedly. Your satisfaction is always our priority." },
];

export function ServiceFeatures() {
  return (
    <section className="bg-secondary/50 py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((i) => (
          <div key={i.title} className="text-center px-4">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-5">
              <i.icon className="w-7 h-7" strokeWidth={1.4} />
            </div>
            <h4 className="font-bold tracking-[0.15em] text-xs text-primary mb-3">{i.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CTASection({ title }: { title: string }) {
  return (
    <section className="bg-navy text-white py-20 md:py-28 text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-5 leading-tight">{title}</h2>
        <p className="text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          PT SIS Samudera Indonesia Shakti is ready to assist you with professional, reliable, and efficient processing services.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-xs font-bold tracking-[0.2em] hover:bg-primary/90 transition-all duration-500"
        >
          CONTACT US
        </a>
      </div>
    </section>
  );
}
