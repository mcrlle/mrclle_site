
import React, { useEffect } from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Journal: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <Link to="/" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-neutral-600 hover:text-white transition-colors mb-16 group">
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back to Index
          </Link>
          
          <h1 className="text-6xl md:text-9xl font-light tracking-tighter text-white mb-6 uppercase leading-none">
            Journal<span className="text-neutral-700">.</span>
          </h1>
          <div className="w-12 h-[1px] bg-white/10 mx-auto mb-12"></div>
          <p className="text-sm md:text-base font-light text-neutral-500 uppercase tracking-[0.5em] animate-pulse">
            Em breve
          </p>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <span className="text-[8px] font-medium tracking-[0.5em] text-neutral-800 uppercase italic">
          Thoughts & reflections in progress
        </span>
      </div>
    </div>
  );
};

export default Journal;
