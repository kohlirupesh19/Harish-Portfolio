import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PROFESSOR_INFO } from '../data/professorData';
import professorPortrait from '../assets/prof_harish_bhabad.png';
import { 
  Menu, 
  X, 
  FileText, 
  Mail, 
  ExternalLink,
  GraduationCap
} from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Overview', to: '/' },
    { name: 'Research', to: '/research' },
    { name: 'Publications', to: '/publications' },
    { name: 'Book', to: '/book' },
    { name: 'Teaching', to: '/teaching' },
    { name: 'Experience', to: '/experience' },
    { name: 'Projects', to: '/projects' },
    { name: 'Resources', to: '/resources' },
    { name: 'Contact', to: '/contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  // Monitor scroll for header elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Close menu on route navigation
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <header
      id="main-navigation"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#CBD5E1] shadow-xs'
          : 'bg-white/98 backdrop-blur-xs border-b border-[#E2E8F0]'
      }`}
    >
      {/* Micro-bar for institutional affiliation */}
      <div className="bg-[#0F2942] text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
            <a 
              href={PROFESSOR_INFO.instituteProfileUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium tracking-wide hover:underline hover:text-amber-200 transition-colors"
            >
              {PROFESSOR_INFO.institution}
            </a>
            <span className="hidden md:inline text-slate-400">|</span>
            <a 
              href={PROFESSOR_INFO.universityUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:inline text-slate-300 hover:underline hover:text-white transition-colors"
            >
              {PROFESSOR_INFO.universityAffiliation}
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-2.5 text-[11px] text-slate-300">
            <span>Dept. T&P Coordinator</span>
            <span>•</span>
            <span className="text-amber-300 font-medium">Ph.D. Scholar (CSE)</span>
          </div>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand with Portrait Thumbnail */}
          <Link
            to="/"
            id="nav-brand-link"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#0F2942] rounded-md p-1 -ml-1 transition-all"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#CBD5E1] shadow-2xs group-hover:ring-2 group-hover:ring-[#0F2942] transition-all shrink-0">
              <img
                src={professorPortrait}
                alt="Prof. Harish Parshuram Bhabad"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left">
              <div className="font-semibold text-[#0F2942] text-sm sm:text-base leading-tight tracking-tight group-hover:text-[#1A3E61] transition-colors">
                {PROFESSOR_INFO.name}
              </div>
              <div className="text-[11px] sm:text-xs text-[#64748B] font-normal leading-snug truncate max-w-[200px] sm:max-w-none">
                Assistant Professor • LoGMIEER Computer Engineering
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links (with animated active pill indicator) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className={`relative px-2.5 xl:px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-[#0F2942] font-bold'
                      : 'text-[#475569] hover:text-[#0F2942] hover:bg-[#F8FAFC]'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#F1F5F9] border border-[#E2E8F0] rounded-md z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2">
            <Link
              to="/cv"
              id="nav-cv-button"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border transition-all shadow-2xs hover:-translate-y-0.5 active:translate-y-0 ${
                location.pathname === '/cv'
                  ? 'text-white bg-[#0F2942] border-[#0F2942]'
                  : 'text-[#0F2942] bg-white border-[#CBD5E1] hover:bg-[#F8FAFC] hover:border-[#94A3B8]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </Link>

            <Link
              to="/contact"
              id="nav-contact-button"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all shadow-2xs hover:-translate-y-0.5 active:translate-y-0 ${
                location.pathname === '/contact'
                  ? 'text-white bg-[#1A3E61]'
                  : 'text-white bg-[#0F2942] hover:bg-[#1A3E61]'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-1.5">
            <Link
              to="/cv"
              className="p-2 text-xs font-semibold text-[#0F2942] bg-white border border-[#CBD5E1] rounded-md min-w-[40px] min-h-[40px] flex items-center justify-center hover:bg-[#F8FAFC] transition-colors"
              title="View CV"
            >
              <FileText className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="nav-mobile-toggle"
              className="p-2 text-[#475569] hover:text-[#0F2942] rounded-md min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-b border-[#E2E8F0] bg-white shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1.5 max-h-[calc(100vh-120px)] overflow-y-auto safe-area-bottom">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.025, duration: 0.2 }}
                >
                  <NavLink
                    to={link.to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3.5 py-2.5 text-sm font-medium rounded-md min-h-[44px] transition-colors ${
                        isActive
                          ? 'text-[#0F2942] bg-[#F1F5F9] font-bold border-l-3 border-[#0F2942]'
                          : 'text-[#334155] hover:bg-[#F8FAFC] hover:text-[#0F2942]'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                  </NavLink>
                </motion.div>
              ))}

              <div className="pt-4 mt-2 border-t border-[#E2E8F0] grid grid-cols-2 gap-2">
                <Link
                  to="/cv"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-[#0F2942] bg-white border border-[#CBD5E1] rounded-md min-h-[44px] active:bg-[#F8FAFC]"
                >
                  <FileText className="w-4 h-4" />
                  <span>Curriculum Vitae</span>
                </Link>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-white bg-[#0F2942] rounded-md min-h-[44px] active:bg-[#1A3E61]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Office</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
