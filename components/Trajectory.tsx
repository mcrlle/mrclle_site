import React, { useEffect } from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Trajectory: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const volunteeringPath = [
    {
      date: "2026 — Pres.",
      title: "University Ambassador",
      institution: "WoMakersCode",
      desc: "Fomento à presença feminina na tecnologia",
    }
  ];

  const academicPath = [
    {
      date: "2026",
      title: "McKinsey Forward '26",
      institution: "McKinsey & Company",
      desc: "Liderança, Negócios e Competências Digitais",
    },
    {
      date: "2026",
      title: "Aspire Leaders Program '26",
      institution: "Aspire Institute, founded by Harvard faculty",
      desc: "Liderança Global e Comunicação Intercultural",
    },
    {
      date: "2025 — Pres.",
      title: "Game Design",
      institution: "ECDD",
      desc: "Escola de Comunicação e Design Digital",
    },
    {
      date: "2018 — 2020",
      title: "Psychology",
      institution: "UNISUAM",
      desc: "Foco em comportamento humano e percepção",
    }
  ];

  const certifications = [
    {
      date: "DEZ 2025",
      title: "Future of Design: UX Design & AI Specialization",
      institution: "CollabDesign",
    },
    {
      date: "NOV 2025",
      title: "UX Design: Strategic Projects & Persona Development",
      institution: "Alura",
    },
    {
      date: "OUT 2025",
      title: "Desenvolve Program: UX Design Specialization",
      institution: "Grupo Boticário",
    },
    {
      date: "JUN 2025",
      title: "Desenvolve Program: Tech Journey",
      institution: "Grupo Boticário",
    },
    {
      date: "ABR 2025",
      title: "Graphic and Visual Design",
      institution: "CollabDesign",
    }
  ];

  const workshops = [
    {
      date: "FEV 2026",
      title: "AI Lab (7th Edition)",
      institution: "Estúdio Kimura",
    },
    {
      date: "JAN 2026",
      title: "From Zero to Motion",
      institution: "Layer Lemonade",
    },
    {
      date: "JUL 2025",
      title: "NLW Agents",
      institution: "Rocketseat",
    }
  ];

  const renderSection = (title: string, items: any[], metaLabel: string) => (
    <div className="mb-32">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-meta text-white/40">{title}</h2>
          <div className="flex-grow h-[1px] bg-white/5"></div>
          <span className="text-[7px] text-neutral-800 tracking-[0.4em] uppercase">{metaLabel}</span>
        </div>
      </ScrollReveal>
      
      <div className="space-y-0">
        {items.map((item, index) => (
          <ScrollReveal key={index} delay={index * 50}>
            <div className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-white/5 hover:bg-white/[0.01] transition-colors px-2">
              <div className="md:col-span-2 text-[8px] font-medium uppercase tracking-[0.4em] text-neutral-600 self-center">
                {item.date}
              </div>
              <div className="md:col-span-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-4">
                    <h3 className="text-lg md:text-xl font-light text-neutral-300 group-hover:text-white transition-colors uppercase tracking-tight">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className="text-[7px] px-2 py-0.5 border border-white/10 text-neutral-600 uppercase tracking-[0.2em] font-medium">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-neutral-500 font-medium text-[9px] uppercase tracking-[0.2em]">{item.institution}</span>
                    {item.desc && (
                      <>
                        <span className="text-neutral-800">•</span>
                        <span className="text-neutral-600 font-light text-[9px] uppercase tracking-[0.1em]">{item.desc}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );

  return (
    <div className="pt-40 pb-32 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <ScrollReveal className="mb-24">
          <Link to="/" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-neutral-500 hover:text-white transition-colors mb-16 group">
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back to Index
          </Link>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white mb-10 leading-none uppercase">
            Trajectory & <br /> <span className="text-neutral-600">Impact</span>
          </h1>
          <p className="text-[10px] md:text-xs font-light text-neutral-500 leading-relaxed max-w-2xl uppercase tracking-[0.3em]">
            Designing futures through technology, strategy, and social impact.
          </p>
        </ScrollReveal>

        <section className="mt-32">
          {renderSection("Social Impact", volunteeringPath, "COMMUNITY & LEGACY")}
          {renderSection("Academic Context", academicPath, "EDUCATIONAL EXPERIENCE")}
          {renderSection("Certifications", certifications, "LICENSES & SPECIALIZATIONS")}
          {renderSection("Intensive Training", workshops, "TECHNICAL WORKSHOPS")}
        </section>

        {/* Footer Trajectory Meta */}
        <ScrollReveal delay={400} className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
          <div className="text-[8px] uppercase tracking-[0.5em] text-neutral-500">
            Last updated: Q1 2026
          </div>
          <div className="text-[8px] uppercase tracking-[0.5em] text-neutral-500">
            Curated with Intention
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default Trajectory;