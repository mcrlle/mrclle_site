import React, { useState, useEffect } from 'react';
import { ScrollReveal } from './ui/ScrollReveal';

const Hero: React.FC = () => {
  const [activeInfo, setActiveInfo] = useState(0);
  
  const infoFeeds = [
    "Focusing on the duality of visual architecture and strategic intent.",
    "Using my voice to build bridges for other women as a University Ambassador at WoMakersCode.",
    "Navigating complexity and conscious leadership through McKinsey Forward at McKinsey & Company.",
    "Cultivating global leadership and resilient perspectives with the Aspire Institute, founded by Harvard faculty.",
    "Curating digital legacy through creative technology & AI.",
    "Based in Rio de Janeiro • Delivering Future-Ready Solutions."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveInfo((prev) => (prev + 1) % infoFeeds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleEntryClick = () => {
    const statementSection = document.getElementById('statement');
    if (statementSection) {
      statementSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.02]">
        <span className="text-[40vw] font-display font-black leading-none">M.</span>
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-12">
            <ScrollReveal delay={100}>
              <div className="flex flex-col gap-2">
                <span className="text-[7px] text-neutral-600 tracking-[0.6em] uppercase">Archive Classification</span>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-white/10"></div>
                  <span className="text-[9px] font-mono text-white/40 tracking-widest">VOL_26.01</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="hidden md:block">
              <div className="border-l border-white/[0.02] pl-4 py-4 space-y-6">
                <div className="h-20 flex items-start">
                  <p key={activeInfo} className="text-[8px] text-neutral-400 tracking-[0.3em] uppercase leading-relaxed max-w-[180px] animate-fade-in">
                    {infoFeeds[activeInfo]}
                  </p>
                </div>
                
                <div className="flex gap-2 items-center">
                  {infoFeeds.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-[2px] transition-all duration-700 ease-in-out ${
                        idx === activeInfo 
                        ? 'w-6 bg-white opacity-80' 
                        : 'w-1.5 bg-white/5'
                      }`}
                    />
                  ))}
                  <span className="text-[6px] font-mono text-neutral-800 ml-2">INDEX_0{activeInfo + 1}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-8 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <ScrollReveal delay={300}>
              <div className="relative inline-block mt-12 lg:mt-0">
                <div className="absolute -top-8 left-0 lg:left-1 flex items-center gap-2">
                   <span className="text-[8px] font-medium text-white/20 tracking-[1em] uppercase">Creative Tech Lead</span>
                   <div className="w-4 h-4 border border-white/10 flex items-center justify-center">
                      <div className="w-[1px] h-[1px] bg-white"></div>
                   </div>
                </div>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-light text-white uppercase leading-[0.9] tracking-tighter">
                  <span className="block opacity-40">Marcelle</span>
                  <span className="block font-black tracking-[-0.05em] -mt-2 md:-mt-4">Campeche</span>
                </h1>

                <div className="absolute -top-4 -left-4 w-4 h-4 border-t border-l border-white/10"></div>
                <div className="absolute -bottom-4 -right-4 w-4 h-4 border-b border-r border-white/10"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} className="mt-16">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                 <h2 className="text-[10px] md:text-[11px] lg:text-xs font-semibold text-neutral-400 tracking-[0.5em] uppercase">
                    Creative Technologist, Product Designer & Design Strategist
                 </h2>
                 <div className="hidden md:block w-12 h-[1px] bg-white/5"></div>
                 <span className="text-[8px] md:text-[9px] text-neutral-700 tracking-[0.4em] uppercase">Est. 2026 / RJ</span>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-12 lg:col-span-3 lg:pt-32 flex flex-col items-center lg:items-end text-center lg:text-right gap-12 mt-12 lg:mt-0">
             <ScrollReveal delay={500}>
               <div className="inline-flex flex-col gap-2">
                  <span className="text-[7px] text-white/30 uppercase tracking-[1em] mb-2">Manifesto</span>
                  <p className="text-[10px] text-neutral-500 leading-relaxed tracking-wider uppercase max-w-[220px]">
                    Form as the essential trace of intent. Design as a catalyst for social impact & legacy.
                  </p>
               </div>
             </ScrollReveal>

             <ScrollReveal delay={600} className="mt-auto">
                <button 
                  onClick={handleEntryClick}
                  className="group cursor-pointer inline-flex items-center gap-4 bg-transparent border-none focus:outline-none"
                >
                   <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-white/40 group-hover:scale-110 transition-all duration-500">
                      <div className="w-1 h-1 bg-white animate-pulse"></div>
                   </div>
                   <span className="text-[8px] uppercase tracking-[0.8em] text-neutral-600 group-hover:text-white transition-colors">
                      Entry
                   </span>
                </button>
             </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="absolute top-0 bottom-0 left-[15%] w-[1px] bg-white/[0.01] hidden lg:block"></div>
      <div className="absolute top-0 bottom-0 right-[15%] w-[1px] bg-white/[0.01] hidden lg:block"></div>
    </section>
  );
};

export default Hero;