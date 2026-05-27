import React, { useState, useEffect, useRef } from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Primeiros Passinhos",
    slug: "primeiros-passinhos",
    metadata: "UI Design • UX Research • 2025",
    desc: "Plataforma gamificada focada no desenvolvimento infantil na primeira infância.",
    image: "https://i.pinimg.com/736x/9b/3a/45/9b3a451f25d175577fd730a4f7ae0adf.jpg",
    number: "01"
  },
  {
    id: 2,
    title: "BOTI+",
    slug: "boti-plus",
    metadata: "ESG • UX Strategy • 2025",
    desc: "Conectando a Geração Z ao ecossistema de impacto socioambiental do Grupo Boticário.",
    image: "https://i.pinimg.com/736x/25/2f/4a/252f4aed1392187105d1335e5ae4a571.jpg",
    number: "02"
  },
  {
    id: 3,
    title: "Arcane Hub",
    slug: "arcane-hub",
    metadata: "Product Design • UX Research • 2024",
    desc: "Centro de comando digital para gerenciamento estratégico de campanhas de RPG.",
    image: "https://i.pinimg.com/736x/cf/a4/06/cfa40665e6215f24dbfd93d5c53ad3a9.jpg",
    number: "03"
  }
];

const Studio: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'core' | 'exec' | 'lab' | 'journal'>('core');
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabChange = (tab: 'core' | 'exec' | 'lab' | 'journal') => {
    setActiveTab(tab);
    
    // Custom ultra-smooth cubic transition scroll with adjustable duration
    requestAnimationFrame(() => {
      setTimeout(() => {
        if (contentRef.current) {
          const element = contentRef.current;
          const elementRect = element.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          
          const viewportHeight = window.innerHeight;
          const elementHeight = elementRect.height;
          const targetY = Math.max(0, absoluteElementTop - (viewportHeight / 2) + (elementHeight / 2) - 40);
          
          // Premium easing and animation for custom smooth scroll
          const startY = window.pageYOffset;
          const difference = targetY - startY;
          const duration = 1100; // Slower, more fluid and majestic scroll duration
          let startTime: number | null = null;

          const easeInOutCubic = (t: number): number => {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
          };

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easedProgress = easeInOutCubic(progress);
            
            window.scrollTo(0, startY + difference * easedProgress);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };

          window.requestAnimationFrame(step);
        }
      }, 100);
    });
  };

  return (
    <div className="pt-40 pb-32 min-h-screen bg-black text-white relative">
      {/* Premium inject of custom animations (cubic-bezier transition + elegant blur fade-in-up) */}
      <style>{`
        @keyframes studioSlideUp {
          0% {
            transform: translateY(24px);
            opacity: 0;
            filter: blur(8px);
          }
          100% {
            transform: translateY(0);
            opacity: 1;
            filter: blur(0);
          }
        }
        .animate-studio-slide-up {
          animation: studioSlideUp 1200ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Title Block */}
        <ScrollReveal className="mb-16">
          <Link to="/" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-neutral-500 hover:text-white transition-colors mb-16 group">
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back to Index
          </Link>
          <div className="border-b border-white/[0.05] pb-10">
            <div>
              <span className="text-[10px] font-mono tracking-[0.4em] text-neutral-500 uppercase">STUDIO SYSTEM</span>
              <h1 className="text-6xl md:text-8xl font-display font-light text-white uppercase tracking-tighter mt-4 leading-none">
                Studio<span className="text-neutral-700">.</span>
              </h1>
              <p className="text-[10px] md:text-xs font-light text-neutral-400 max-w-2xl uppercase tracking-[0.3em] leading-relaxed mt-6">
                Ambiente de convergência criativa. Projetos autorais, experimentos de código executáveis e laboratório interativo.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Tab Selection */}
        <ScrollReveal className="mb-16">
          <div className="flex justify-start gap-4 md:gap-8 border-b border-white/[0.03] pb-1 shadow-inner relative overflow-x-auto select-none no-scrollbar">
            <button
              onClick={() => handleTabChange('core')}
              className={`text-left pb-4 relative group transition-all duration-300 shrink-0 ${activeTab === 'core' ? 'text-white font-bold' : 'text-neutral-500 hover:text-white'}`}
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] opacity-40">01 //</span>
                <span className="text-[10px] lg:text-[11px] font-display uppercase tracking-[0.4em]">CORE</span>
              </div>
              <span className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-500 ${activeTab === 'core' ? 'w-full' : 'w-0 group-hover:w-1/2'}`}></span>
            </button>

            <button
              onClick={() => handleTabChange('exec')}
              className={`text-left pb-4 relative group transition-all duration-300 shrink-0 ${activeTab === 'exec' ? 'text-white font-bold' : 'text-neutral-500 hover:text-white'}`}
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] opacity-40">02 //</span>
                <span className="text-[10px] lg:text-[11px] font-display uppercase tracking-[0.4em]">EXEC.</span>
              </div>
              <span className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-500 ${activeTab === 'exec' ? 'w-full' : 'w-0 group-hover:w-1/2'}`}></span>
            </button>

            <button
              onClick={() => handleTabChange('lab')}
              className={`text-left pb-4 relative group transition-all duration-300 shrink-0 ${activeTab === 'lab' ? 'text-white font-bold' : 'text-neutral-500 hover:text-white'}`}
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] opacity-40">03 //</span>
                <span className="text-[10px] lg:text-[11px] font-display uppercase tracking-[0.4em]">LAB</span>
              </div>
              <span className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-500 ${activeTab === 'lab' ? 'w-full' : 'w-0 group-hover:w-1/2'}`}></span>
            </button>

            <button
              onClick={() => handleTabChange('journal')}
              className={`text-left pb-4 relative group transition-all duration-300 shrink-0 ${activeTab === 'journal' ? 'text-white font-bold' : 'text-neutral-500 hover:text-white'}`}
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] opacity-40">04 //</span>
                <span className="text-[10px] lg:text-[11px] font-display uppercase tracking-[0.4em]">JOURNAL</span>
              </div>
              <span className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-500 ${activeTab === 'journal' ? 'w-full' : 'w-0 group-hover:w-1/2'}`}></span>
            </button>
          </div>
        </ScrollReveal>

        {/* Tab Content Rendering with stable min-height for fluid scrolling */}
        <div ref={contentRef} className="min-h-[480px] flex flex-col justify-center scroll-mt-28">
          {/* TAB 01: CORE */}
          {activeTab === 'core' && (
            <div key="core" className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 animate-studio-slide-up w-full">
              {projects.map((project, idx) => (
                <ScrollReveal key={project.id} delay={idx * 100} className="h-full">
                  <div
                    onClick={() => navigate(`/projetos/${project.slug}`)}
                    className="group cursor-pointer bg-[#050505]/40 border border-white/[0.04] p-6 hover:border-white/20 transition-all duration-700 rounded-none h-full flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Preview Container */}
                      <div className="relative aspect-[16/10] overflow-hidden grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-95 transition-all duration-1000 mb-8 max-w-full">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                        />
                        <div className="absolute top-4 left-4 bg-black/80 px-2 py-0.5 border border-white/5 text-[8px] font-mono tracking-widest text-white/50">
                          {project.number}
                        </div>
                      </div>

                      <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                        {project.metadata}
                      </span>
                      <h3 className="text-xl md:text-2xl font-light text-white uppercase tracking-tight group-hover:text-purple-400 transition-colors mb-3">
                        {project.title}
                      </h3>
                      <p className="text-[10px] text-neutral-400 tracking-wide font-light leading-relaxed mb-8 uppercase">
                        {project.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-neutral-500 group-hover:text-white transition-colors pt-4 border-t border-white/[0.02]">
                      Explorar estúdio de caso <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* TAB 02: EXEC. */}
          {activeTab === 'exec' && (
            <div key="exec" className="animate-studio-slide-up flex flex-col items-center justify-center py-20 md:py-28 text-center w-full">
              <span className="text-[10px] font-mono tracking-[0.4em] text-neutral-500 uppercase">02 // EXECUTABLE HUB</span>
              <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-white uppercase mt-4 mb-6 leading-none">
                EXEC<span className="text-neutral-700">.</span>
              </h2>
              <div className="w-12 h-[1px] bg-white/10 mx-auto mb-10"></div>
              <p className="text-xs md:text-sm font-light text-neutral-500 uppercase tracking-[0.5em] animate-pulse">
                Em breve
              </p>
              <div className="mt-16 text-[8px] font-mono tracking-[0.5em] text-neutral-700 uppercase italic">
                Future executables in progress
              </div>
            </div>
          )}

          {/* TAB 03: LAB */}
          {activeTab === 'lab' && (
            <div key="lab" className="animate-studio-slide-up flex flex-col items-center justify-center py-20 md:py-28 text-center w-full">
              <span className="text-[10px] font-mono tracking-[0.4em] text-neutral-500 uppercase">03 // CREATIVE RESEARCH</span>
              <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-white uppercase mt-4 mb-6 leading-none">
                LAB<span className="text-neutral-700">.</span>
              </h2>
              <div className="w-12 h-[1px] bg-white/10 mx-auto mb-10"></div>
              <p className="text-xs md:text-sm font-light text-neutral-500 uppercase tracking-[0.5em] animate-pulse">
                Em breve
              </p>
              <div className="mt-16 text-[8px] font-mono tracking-[0.5em] text-neutral-700 uppercase italic">
                Experiments in progress
              </div>
            </div>
          )}

          {/* TAB 04: JOURNAL */}
          {activeTab === 'journal' && (
            <div key="journal" className="animate-studio-slide-up flex flex-col items-center justify-center py-20 md:py-28 text-center w-full">
              <span className="text-[10px] font-mono tracking-[0.4em] text-neutral-500 uppercase">04 // JOURNAL SYSTEM</span>
              <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-white uppercase mt-4 mb-6 leading-none">
                JOURNAL<span className="text-neutral-700">.</span>
              </h2>
              <div className="w-12 h-[1px] bg-white/10 mx-auto mb-10"></div>
              <p className="text-xs md:text-sm font-light text-neutral-500 uppercase tracking-[0.5em] animate-pulse">
                Em breve
              </p>
              <div className="mt-16 text-[8px] font-mono tracking-[0.5em] text-neutral-700 uppercase italic">
                Thoughts & reflections in progress
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Studio;
