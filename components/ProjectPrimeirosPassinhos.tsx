
import React, { useEffect } from 'react';
import { ArrowLeft, Smartphone, Presentation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { ScrollReveal } from './ui/ScrollReveal';

const ProjectPrimeirosPassinhos: React.FC = () => {
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
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-light tracking-tighter text-white uppercase leading-none">Primeiros<br />Passinhos<span className="text-neutral-700">.</span></h1>
            <div className="text-right">
                <span className="text-[9px] text-neutral-600 uppercase tracking-[0.6em]">CASE STUDY / 001</span>
            </div>
          </div>
          <p className="mt-12 text-lg md:text-2xl font-light text-neutral-400 max-w-3xl leading-relaxed uppercase tracking-tight">
            Estruturando a jornada do cuidado através do design centrado no usuário.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mb-32 border-t border-white/5 pt-20">
          {/* Sidebar Info */}
          <div className="md:col-span-4 space-y-16">
            <div>
              <h4 className="text-[9px] font-semibold text-white/20 uppercase tracking-[0.5em] mb-6">Services</h4>
              <ul className="text-[11px] text-neutral-400 space-y-3 uppercase tracking-[0.3em] font-medium">
                <li className="flex items-center gap-3"><span className="w-1 h-[1px] bg-white/20"></span> UX Research</li>
                <li className="flex items-center gap-3"><span className="w-1 h-[1px] bg-white/20"></span> UI Design</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[9px] font-semibold text-white/20 uppercase tracking-[0.5em] mb-6">Tech Stack</h4>
              <ul className="text-[11px] text-neutral-400 space-y-3 uppercase tracking-[0.3em] font-medium">
                <li className="flex items-center gap-3"><span className="w-1 h-[1px] bg-white/20"></span> Figma & Miro</li>
              </ul>
            </div>

            <div className="space-y-12">
              <h4 className="text-[9px] font-semibold text-white/20 uppercase tracking-[0.5em] mb-8">Analytics Context</h4>
              <div className="space-y-12">
                <div className="group">
                  <span className="text-6xl font-light text-white tracking-tighter group-hover:text-neutral-400 transition-colors">87%</span>
                  <p className="text-[9px] text-neutral-600 mt-3 uppercase tracking-[0.4em] font-bold leading-relaxed">Sobrecarga cognitiva <br/>identificada em pesquisa</p>
                </div>
                <div className="group">
                  <span className="text-6xl font-light text-white tracking-tighter group-hover:text-neutral-400 transition-colors">78,3%</span>
                  <p className="text-[9px] text-neutral-600 mt-3 uppercase tracking-[0.4em] font-bold leading-relaxed">Dos responsáveis relatam <br/>exaustão extrema</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-8 space-y-24">
            <section className="space-y-10">
              <div className="flex items-center gap-6">
                <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">01</span>
                <h3 className="text-xs font-bold text-white uppercase tracking-[0.6em]">Visão Geral</h3>
                <div className="flex-grow h-[1px] bg-white/5"></div>
              </div>
              <p className="text-neutral-400 leading-relaxed text-base md:text-lg font-light max-w-3xl">
                O Primeiros Passinhos é uma solução ecossistêmica desenvolvida em regime de squad dentro do Programa Desenvolve (Grupo Boticário), desenhada para ser o suporte estrutural de pais e responsáveis de primeira viagem. O projeto vai além do simples registro de dados, atuando como um facilitador cognitivo que organiza a complexidade da rotina infantil — abrangendo desde a gestão de sono e alimentação até o apoio comunitário. Focamos em traduzir dores profundas identificadas em pesquisa em uma interface minimalista e funcional, onde a tecnologia serve à sensibilidade do cuidado, garantindo que o usuário tenha clareza e segurança em cada etapa da jornada.
              </p>
            </section>

            <section className="space-y-10">
              <div className="flex items-center gap-6">
                <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">02</span>
                <h3 className="text-xs font-bold text-white uppercase tracking-[0.6em]">O Desafio</h3>
                <div className="flex-grow h-[1px] bg-white/5"></div>
              </div>
              <p className="text-neutral-400 leading-relaxed text-base md:text-lg font-light max-w-3xl">
                O desafio central foi mitigar a sobrecarga mental de novos responsáveis diante do excesso de informações e tarefas diárias. O objetivo estratégico foi unificar a gestão de saúde, sono e nutrição em um fluxo intuitivo. Arquitetamos uma solução que elimina o ruído operacional, transformando a complexidade de uma nova rotina em uma experiência digital fluida, segura e acolhedora
              </p>
            </section>
          </div>
        </div>

        <section className="flex flex-col md:flex-row gap-6 justify-center items-center py-24 border-t border-white/5">
            <a href="https://www.figma.com/proto/A41j079Fh25XjiudsdpoKk/Primeiros-Passinhos-%7C-Mobile?node-id=0-1&t=LlG6i8vxAOnwfQza-1" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                <Button className="w-full md:min-w-[320px] gap-4">
                    <Smartphone className="w-3.5 h-3.5" /> Interactive Prototype
                </Button>
            </a>
            <a href="https://www.figma.com/deck/FxBuw6VJHSfyl8O6EOX91Q" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                <Button variant="outline" className="w-full md:min-w-[320px] gap-4">
                    <Presentation className="w-3.5 h-3.5" /> Interactive Presentation
                </Button>
            </a>
        </section>

      </div>
    </div>
  );
};

export default ProjectPrimeirosPassinhos;
