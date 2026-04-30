import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_LINK } from '../lib/constants';
import { cn } from '../lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Adriana Santarém Logo" 
            className={cn("transition-all duration-500", isScrolled ? "h-16" : "h-24")}
            referrerPolicy="no-referrer"
            onError={(e) => {
               // Fallback if logo.png is not found
               e.currentTarget.style.display = 'none';
               e.currentTarget.parentElement?.insertAdjacentHTML('afterbegin', '<span class="font-serif italic text-xl text-rose-dark">Adriana Santarém</span>');
            }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="text-lead font-medium hover:text-rose-dark transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2 px-6 text-sm"
          >
            Encomende Agora
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-lead"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-rose-light overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href}
                  className="text-lg font-medium text-lead"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href={WHATSAPP_LINK} 
                className="btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Faça sua Encomenda
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
