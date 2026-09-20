import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
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

  return (
    <header
      id="main-navigation"
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-2xs"
    >
      {/* Micro-bar for institutional affiliation */}
      <div className="bg-[#0F2942] text-white text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
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
          <div className="hidden sm:flex items-center gap-3 text-[11px] text-slate-300">
            <span>Dept. Training & Placement Coordinator</span>
            <span>•</span>
            <span className="text-amber-300 font-medium">Ph.D. Research Scholar (CSE)</span>
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
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <img
              src={professorPortrait}
              alt="Prof. Harish Parshuram Bhabad"
              className="w-10 h-10 rounded-full object-cover object-top border border-[#CBD5E1] shadow-2xs group-hover:ring-2 group-hover:ring-[#0F2942] transition-all"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="font-semibold text-[#0F2942] text-sm sm:text-base leading-tight tracking-tight">
                {PROFESSOR_INFO.name}
              </div>
              <div className="text-[11px] sm:text-xs text-[#64748B] font-normal leading-snug">
                Assistant Professor • LoGMIEER Computer Engineering
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links - Clean, Uncrowded */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-[#0F2942] bg-[#F1F5F9] font-semibold border border-[#E2E8F0]'
                      : 'text-[#475569] hover:text-[#0F2942] hover:bg-[#F8FAFC]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2">
            <Link
              to="/cv"
              id="nav-cv-button"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors shadow-2xs ${
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
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors shadow-2xs ${
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
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/cv"
              className="p-1.5 text-xs font-semibold text-[#0F2942] bg-white border border-[#CBD5E1] rounded-md"
              title="View CV"
            >
              <FileText className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="nav-mobile-toggle"
              className="p-2 text-[#475569] hover:text-[#0F2942] rounded-md focus:outline-hidden cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E2E8F0] bg-white px-4 pt-2 pb-4 space-y-1 shadow-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-3 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? 'text-[#0F2942] bg-[#F1F5F9] font-semibold'
                    : 'text-[#334155] hover:bg-[#F8FAFC] hover:text-[#0F2942]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-[#E2E8F0] flex gap-2">
            <Link
              to="/cv"
              onClick={closeMenu}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0F2942] bg-white border border-[#CBD5E1] rounded-md"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Full CV</span>
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#0F2942] rounded-md"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Office</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
