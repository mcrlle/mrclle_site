
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Index', href: '/', isPage: true },
    { name: 'About', href: '/trajetoria', isPage: true },
    { name: 'Studio', href: '/studio', isPage: true },
    { name: 'Contact', href: 'contato', isPage: false },
  ];

  const handleNavigation = (target: string, isPage: boolean) => {
    setIsMobileMenuOpen(false);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${isScrolled ? 'bg-[#050505]/90 backdrop-blur-xl py-3 border-b border-white/[0.01]' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => window.scrollTo(0, 0)}>
          <div className="flex flex-col items-start">
            <span className="text-[9px] font-display font-medium tracking-[0.4em] text-white/30 uppercase group-hover:text-white/70 transition-all duration-700">
              M.Campeche
            </span>
            <div className="flex gap-[2px] mt-1 opacity-10 group-hover:opacity-30 transition-opacity duration-700">
               <div className="w-[8px] h-[1px] bg-white"></div>
               <div className="w-[3px] h-[1px] bg-white"></div>
               <div className="w-[12px] h-[1px] bg-white"></div>
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
             <button
                key={link.name}
                onClick={() => handleNavigation(link.href, link.isPage)}
                className="text-[8px] lg:text-[9px] font-semibold uppercase tracking-[0.5em] text-neutral-600 hover:text-white transition-all duration-500 focus:outline-none relative group"
             >
                <span className="opacity-40 group-hover:opacity-100 transition-opacity">0{navLinks.indexOf(link) + 1}.</span> {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/20 transition-all duration-700 group-hover:w-full"></span>
             </button>
          ))}
        </div>

        <button className="md:hidden text-neutral-500" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={14} /> : <Menu size={14} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#080808] p-8 flex flex-col items-center justify-center gap-8 animate-fade-in">
          <button className="absolute top-10 right-6 text-white" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={18} />
          </button>
          {navLinks.map((link) => (
            <button
                key={link.name} 
                onClick={() => handleNavigation(link.href, link.isPage)}
                className="text-2xl font-display font-light text-white uppercase tracking-[0.2em]"
            >
                {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
