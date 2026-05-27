
import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { useNavigate, useLocation } from 'react-router-dom';

const GmailIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.65 21 0 20.35 0 19.5v-15c0-1.21 1.34-1.908 2.33-1.207L12 9.773l9.67-6.48c.99-.701 2.33-.003 2.33 1.207z"/>
  </svg>
);

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (target: string, isPage: boolean) => {
    if (isPage) {
      navigate(target);
      window.scrollTo(0, 0);
    } else {
      if (location.pathname !== '/') {
        navigate({ pathname: '/', hash: target });
      } else {
        const element = document.getElementById(target);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="contato" className="relative border-t border-white/[0.02] bg-black pt-32 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
          <div className="md:col-span-12">
            <ScrollReveal>
              <h2 className="text-meta mb-8 opacity-40">Direct Contact</h2>
              <div className="space-y-6">
                <a href="mailto:campechemarcelle@gmail.com" className="block text-5xl md:text-8xl font-light tracking-tighter uppercase text-white hover:text-neutral-500 transition-colors leading-none">
                  Send Intention
                </a>
                <p className="text-[10px] md:text-xs text-neutral-500 font-light uppercase tracking-[0.3em] max-w-2xl leading-relaxed">
                  Available for collaborations.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/[0.02] pt-12 mb-16">
          <div>
            <span className="text-meta block mb-6">Navigation</span>
            <div className="flex flex-col gap-3">
              <button onClick={() => handleNavigation('/', true)} className="text-[9px] text-neutral-500 hover:text-white uppercase tracking-[0.3em] text-left">Index</button>
              <button onClick={() => handleNavigation('/trajetoria', true)} className="text-[9px] text-neutral-500 hover:text-white uppercase tracking-[0.3em] text-left">About</button>
              <button onClick={() => handleNavigation('/studio', true)} className="text-[9px] text-neutral-500 hover:text-white uppercase tracking-[0.3em] text-left">Studio</button>
              <button onClick={() => handleNavigation('contato', false)} className="text-[9px] text-neutral-500 hover:text-white uppercase tracking-[0.3em] text-left">Contact</button>
            </div>
          </div>
          <div>
            <span className="text-meta block mb-6">Presence</span>
            <div className="flex flex-col gap-3">
              <a href="https://www.linkedin.com/in/marcellecampeche/" target="_blank" className="text-[9px] text-neutral-500 hover:text-white uppercase tracking-[0.3em]">LinkedIn</a>
              <a href="https://www.behance.net/marcellecampeche" target="_blank" className="text-[9px] text-neutral-500 hover:text-white uppercase tracking-[0.3em]">Behance</a>
              <a href="https://github.com/mcrlle" target="_blank" className="text-[9px] text-neutral-500 hover:text-white uppercase tracking-[0.3em]">GitHub</a>
            </div>
          </div>
          <div className="col-span-2 md:text-right flex flex-col md:items-end">
             <span className="text-meta block mb-6">Direct</span>
             <a 
               href="mailto:campechemarcelle@gmail.com" 
               className="text-neutral-600 hover:text-white transition-all duration-500 group"
               aria-label="Email Marcelle Campeche"
             >
                <GmailIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-500" />
             </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.02] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[8px] font-medium tracking-[0.5em] text-neutral-700 uppercase">
              © 2026 M.CAMPECHE — CREATIVE TECHNOLOGY
            </span>
          </div>
          <span className="text-[8px] font-medium tracking-[0.5em] text-neutral-800 uppercase italic">
            Form as the essential trace of intent.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
