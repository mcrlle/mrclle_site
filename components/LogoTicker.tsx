import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';

const LogoTicker: React.FC = () => {
  const skills = [
    "Design Strategy", "Creative Technology", "AI Strategy",
    "Visual Strategy", "Systems Thinking", "Futurology",
    "Product Design", "Design Systems", "User Experience ",
    "Information Architecture", "Gamification", "Experience Design",
    "AI-Driven Design", "Emerging Tech", "Digital Legacy"
  ];

  return (
    <section className="py-20 border-y border-white/[0.02] overflow-hidden bg-black/20">
      <ScrollReveal delay={200}>
        <div className="relative w-full overflow-hidden mask-gradient-x">
          <div className="flex w-max animate-marquee-infinite transition-all">
            <div className="flex items-center gap-16 pr-16">
              {skills.map((skill, idx) => (
                <div key={`skill-1-${idx}`} className="flex items-center gap-16">
                  <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.4em] text-neutral-600 hover:text-white transition-colors cursor-default whitespace-nowrap">
                    {skill}
                  </span>
                  <span className="w-1 h-1 bg-white/10 rounded-full shrink-0"></span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-16 pr-16" aria-hidden="true">
              {skills.map((skill, idx) => (
                <div key={`skill-2-${idx}`} className="flex items-center gap-16">
                  <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.4em] text-neutral-600 hover:text-white transition-colors cursor-default whitespace-nowrap">
                    {skill}
                  </span>
                  <span className="w-1 h-1 bg-white/10 rounded-full shrink-0"></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default LogoTicker;