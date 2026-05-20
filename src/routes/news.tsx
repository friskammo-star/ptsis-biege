import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { ArrowRight } from "lucide-react";
import a from "@/assets/news-yacht.jpg";
import b from "@/assets/news-docs.jpg";
import c from "@/assets/news-cargo.jpg";

export const Route = createFileRoute("/news")({ component: NewsPage });

const articles = [
  { date: "20 MAY 2026", img: a, title: "SIS Expands Yacht Management Services in Indonesia", excerpt: "We are proud to announce the expansion of our yacht management services across major Indonesian ports." },
  { date: "15 MAY 2026", img: b, title: "New Partnership for Global Maritime Solutions", excerpt: "Strengthening our global network to better serve Indonesian shipping operators worldwide." },
  { date: "08 MAY 2026", img: c, title: "Enhancing Import & Export Services for Better Efficiency", excerpt: "Optimizing logistics and licensing workflows to accelerate cross-border maritime trade." },
];

function NewsPage() {
  return (
    <SiteLayout>
      <PageHero breadcrumb="NEWS" title="News & Updates" subtitle="Latest stories and announcements from PT Samudera Indonesia Shakti." />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-6">
          {articles.map((n) => (
            <article key={n.title} className="bg-white border border-border">
              <img src={n.img} alt={n.title} className="w-full h-52 object-cover" width={800} height={512} loading="lazy" />
              <div className="p-6">
                <div className="text-primary text-xs tracking-widest font-semibold mb-2">{n.date}</div>
                <h3 className="font-serif text-lg font-semibold mb-3">{n.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{n.excerpt}</p>
                <a href="#" className="text-xs font-bold tracking-widest text-primary inline-flex items-center gap-2">READ MORE <ArrowRight className="w-3 h-3" /></a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
