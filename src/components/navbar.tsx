import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { HOTEL_INFO, NAV_LINKS } from '../lib/constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById('intro') || document.getElementById('stay');
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        // The navbar remains transparent over the dark hero canvas,
        // and transitions into solid luxury state once the rising intro section meets the header.
        setIsScrolled(rect.top <= 80);
      } else {
        setIsScrolled(window.scrollY > window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'py-3.5 bg-[#F8F5EF]/90 backdrop-blur-md border-b border-[#EDE7DC] shadow-[0_4px_24px_rgba(26,36,30,0.04)]'
            : 'py-6 sm:py-8 bg-gradient-to-b from-black/40 via-black/15 to-transparent'
        }`}
      >
        <div className="w-full px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          {/* Brand Identity on the Left */}
          <a
            href="#home"
            className="group flex items-center focus:outline-none"
          >
            <span
              className={`font-serif-luxury text-2xl sm:text-3xl font-light tracking-[0.22em] uppercase transition-colors duration-300 ${
                isScrolled ? 'text-[#1A2E26]' : 'text-[#FAF7F2]'
              }`}
            >
              {HOTEL_INFO.name}
            </span>
          </a>

          {/* All Other Navigation Items Shifted to the Right Side */}
          <div className="flex items-center gap-7 lg:gap-10">
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative text-[14px] lg:text-[15px] tracking-[0.14em] uppercase font-medium transition-colors duration-300 py-1 group ${
                    isScrolled
                      ? 'text-[#2C4339] hover:text-[#1A2E26]'
                      : 'text-[#FAF7F2]/85 hover:text-[#FFFFFF]'
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C8AC83] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Action: CTA & Mobile Toggle */}
            <a
              href="#book"
              className={`hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm tracking-[0.14em] uppercase font-medium transition-all duration-300 shadow-sm ${
                isScrolled
                  ? 'bg-[#1A2E26] text-[#F8F5EF] hover:bg-[#2C4339] hover:shadow-md'
                  : 'bg-[#F8F5EF]/95 text-[#1A2E26] hover:bg-[#FFFFFF] hover:shadow-lg'
              }`}
            >
              <span>{HOTEL_INFO.ctaText}</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`md:hidden p-2 rounded-full transition-colors duration-300 ${
                isScrolled
                  ? 'text-[#1A2E26] hover:bg-[#EDE7DC]'
                  : 'text-[#FDFCF7] hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Luxury Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#F8F5EF] flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            {/* Nav list */}
            <div className="flex flex-col gap-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#84796B] font-medium border-b border-[#EDE7DC] pb-3">
                Navigation
              </span>
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index + 0.1, duration: 0.3 }}
                  className="font-serif-luxury text-3xl text-[#1A2E26] hover:text-[#C8AC83] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile Footer & CTA */}
            <div className="space-y-6 pt-6 border-t border-[#EDE7DC]">
              <a
                href="#book"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#1A2E26] text-[#F8F5EF] text-xs tracking-[0.2em] uppercase font-medium shadow-md"
              >
                <span>{HOTEL_INFO.ctaText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="text-center text-xs text-[#84796B] font-light">
                <p>{HOTEL_INFO.location}</p>
                <p className="text-[10px] tracking-widest uppercase mt-1 text-[#B8ADA0]">
                  Boutique Hotel · {HOTEL_INFO.owner}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
