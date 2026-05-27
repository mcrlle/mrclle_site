import React, { useEffect } from 'react';
import { ArrowLeft, Presentation, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { ScrollReveal } from './ui/ScrollReveal';

const ProjectBotiPlus: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-40 pb-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <ScrollReveal className="mb-32">
          <Link to="/studio" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-neutral-500 hover:text-white transition-colors mb-16 group">
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back to Studio
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-8">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-light tracking-tighter text-white uppercase leading-none">BOTI<span className="font-bold">+</span><span className="text-neutral-700">.</span></h1>
            <div className="text-right">
                <span className="text-[9px] text-neutral-600 uppercase tracking-[0.6em]">CASE STUDY / 002</span>
            </div>
          </div>
          <p className="mt-12 text-lg md:text-2xl font-light text-neutral-400 max-w-3xl leading-relaxed uppercase tracking-tight">
            Conectando a Geração Z ao ecossistema de impacto socioambiental.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mb-32 border-t border-white/5 pt-20">
          {/* Sidebar Info - Padronizado com Primeiros Passinhos (col-span-4) */}
          <div className="md:col-span-4 space-y-16">
            <div>
              <h4 className="text-[9px] font-semibold text-white/20 uppercase tracking-[0.5em] mb-6">Services</h4>
              <ul className="text-[11px] text-neutral-400 space-y-3 uppercase tracking-[0.3em] font-medium">
                <li className="flex items-center gap-3"><span className="w-1 h-[1px] bg-white/20"></span> Design Strategy</li>
                <li className="flex items-center gap-3"><span className="w-1 h-[1px] bg-white/20"></span> UX Research & Strategy</li>
                <li className="flex items-center gap-3"><span className="w-1 h-[1px] bg-white/20"></span> UI Design</li>
                <li className="flex items-center gap-3"><span className="w-1 h-[1px] bg-white/20"></span> Gamification</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[9px] font-semibold text-white/20 uppercase tracking-[0.5em] mb-6">Tech Stack</h4>
              <ul className="text-[11px] text-neutral-400 space-y-3 uppercase tracking-[0.3em] font-medium">
                <li className="flex items-center gap-3"><span className="w-1 h-[1px] bg-white/20"></span> Figma, PS & AI Tools</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[9px] font-semibold text-white/20 uppercase tracking-[0.5em] mb-6">Collaboration</h4>
              <p className="text-[10px] text-neutral-500 leading-relaxed uppercase tracking-[0.3em] font-light">
                Parceria com <span className="text-neutral-400 font-medium">M. Duarte</span> responsável por Artes e Logotipia.
              </p>
            </div>

            <div className="pt-8 border-t border-white/5">
              <h4 className="text-[9px] font-semibold text-white/20 uppercase tracking-[0.5em] mb-6">Core Insight</h4>
              <div className="relative group">
                <div className="absolute -top-6 -left-2 text-4xl text-white/[0.05] font-serif pointer-events-none select-none">
                  “
                </div>
                <div className="pl-6 border-l border-white/10">
                  <p className="text-sm text-neutral-400 font-light leading-relaxed tracking-tight italic">
                    Transformando o voluntariado em um movimento de marca fluido, intencional e recompensável.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Padronizado com Primeiros Passinhos (col-span-8) */}
          <div className="md:col-span-8 space-y-24">
            <section className="space-y-10">
              <div className="flex items-center gap-6">
                <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">01</span>
                <h3 className="text-xs font-bold text-white uppercase tracking-[0.6em]">Visão Geral</h3>
                <div className="flex-grow h-[1px] bg-white/5"></div>
              </div>
              <p className="text-neutral-400 leading-relaxed text-base md:text-lg font-light max-w-3xl">
                O BOTI+ é uma solução de engajamento desenvolvida para o Grupo Boticário, integrando os pilares de governança ESG à tecnologia móvel. O projeto converte diretrizes complexas de sustentabilidade numa jornada digital interativa e conectada com os valores da Geração Z. Minha atuação uniu pesquisa de mercado e design estratégico para transformar o voluntariado e a consciência socioambiental num movimento de marca fluido, intencional e recompensável. Com esta abordagem, estabelecemos um novo padrão de conexão entre o propósito corporativo e o engajamento real da comunidade.
              </p>
            </section>

            <section className="space-y-10">
              <div className="flex items-center gap-6">
                <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">02</span>
                <h3 className="text-xs font-bold text-white uppercase tracking-[0.6em]">O Desafio</h3>
                <div className="flex-grow h-[1px] bg-white/5"></div>
              </div>
              <p className="text-neutral-400 leading-relaxed text-base md:text-lg font-light max-w-3xl">
                O desafio central consistiu em diminuir a distância entre uma marca consolidada e um público jovem que exige transparência, inovação e identificação constante. Precisamos traduzir conceitos densos de impacto social em uma interface visualmente estimulante, utilizando mecânicas de gamificação e uma curadoria estética de alto nível para eliminar a barreira do desinteresse corporativo. O objetivo foi arquitetar um fluxo de experiência que comunicasse os valores do Grupo e transformasse a participação em causas ecológicas em uma experiência digital instintiva, lúdica e de alto valor.
              </p>
            </section>
          </div>
        </div>

        <section className="flex flex-col md:flex-row gap-6 justify-center items-center py-24 border-t border-white/5">
            <a href="https://www.figma.com/proto/M4stFHnKH9tVyeGmQ1Rrmw/Boti--%7C-Projeto-de-Bloco-1?node-id=131-53&starting-point-node-id=131%3A56&t=ejBBYRGfjOtlF3Ot-1" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                <Button className="w-full md:min-w-[320px] gap-4">
                    <Smartphone className="w-3.5 h-3.5" /> Interactive Prototype
                </Button>
            </a>
            <a href="https://www.figma.com/deck/rdAw18Uhsn6FfgIR0NemPJ/BOTI---Projeto-de-Bloco?node-id=223-27&t=B5x5HbtNbNYARkao-1" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                <Button variant="outline" className="w-full md:min-w-[320px] gap-4">
                    <Presentation className="w-3.5 h-3.5" /> Interactive Presentation
                </Button>
            </a>
        </section>

      </div>
    </div>
  );
};

export default ProjectBotiPlus;