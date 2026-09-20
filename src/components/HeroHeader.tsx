import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PROFESSOR_INFO } from '../data/professorData';
import professorPortrait from '../assets/prof_harish_bhabad.png';
import { AnimatedCounter } from './AnimatedCounter';
import { ResearchNetworkBackground } from './ResearchNetworkBackground';
import { 
  GraduationCap, 
  BookOpen, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export function HeroHeader() {
  return (
    <section id="overview" className="relative pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-[#E2E8F0] bg-[#FAF9F6] overflow-hidden">
      {/* Ambient Research Network Background */}
      <ResearchNetworkBackground className="opacity-70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Academic Credentials, Bio & Key Navigation */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Institution & Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#0F2942] text-white tracking-wide shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Assistant Professor of Computer Engineering</span>
            </motion.div>

            {/* Step 2 & 3: Main Name & Institutional Affiliations */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <h1 className="font-serif-academic text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F2942] leading-[1.12] text-break-academic">
                {PROFESSOR_INFO.name}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-[#334155]">
                {PROFESSOR_INFO.institution}
              </p>
              <p className="text-xs sm:text-sm text-[#64748B]">
                {PROFESSOR_INFO.society} • Affiliated with{' '}
                <a 
                  href={PROFESSOR_INFO.universityUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#0F2942] hover:underline font-medium"
                >
                  {PROFESSOR_INFO.universityAffiliation}
                </a>
              </p>
            </motion.div>

            {/* Step 4: Academic Focus Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-[#334155] leading-relaxed space-y-3 font-normal"
            >
              <p>
                {PROFESSOR_INFO.summary}
              </p>
              <p className="text-xs sm:text-sm text-[#475569] bg-white/80 backdrop-blur-xs p-3.5 rounded-lg border border-[#E2E8F0] leading-relaxed">
                <strong className="text-[#0F2942] font-semibold">Current Research Thrusts:</strong> Post-Quantum Cryptographic Access Control, Consortium Blockchain Protocols for Electronic Health Records & Smart Grids, Tri-Modal Zero-Day Malware Forensics, and High-Performance Parallel Computing.
              </p>
            </motion.div>

            {/* Step 5: Primary Action Links */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1"
            >
              <Link
                to="/publications"
                id="hero-view-publications-btn"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0F2942] hover:bg-[#1A3E61] rounded-md transition-all shadow-xs min-h-[44px] hover:-translate-y-0.5 active:translate-y-0"
              >
                <BookOpen className="w-4 h-4" />
                <span>View Publications (14+)</span>
              </Link>

              <Link
                to="/cv"
                id="hero-view-cv-btn"
                className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#0F2942] bg-white border border-[#CBD5E1] hover:bg-[#F8FAFC] hover:border-[#94A3B8] rounded-md transition-all shadow-2xs min-h-[44px] hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText className="w-4 h-4 text-[#0F2942]" />
                <span>Curriculum Vitae</span>
              </Link>

              <Link
                to="/research"
                id="hero-view-research-btn"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm font-medium text-[#334155] bg-white/80 hover:bg-white border border-[#E2E8F0] rounded-md transition-all min-h-[44px] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Research Areas</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#64748B]" />
              </Link>

              <Link
                to="/contact"
                id="hero-contact-btn"
                className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-3.5 py-2.5 text-xs sm:text-sm font-medium text-[#334155] hover:text-[#0F2942] transition-colors min-h-[44px]"
              >
                <span>Contact Office</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Fast Contact Coordinates */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.32 }}
              className="pt-4 border-t border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs text-[#475569]"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0F2942] shrink-0" />
                <a 
                  href={`mailto:${PROFESSOR_INFO.email}`} 
                  className="hover:text-[#0F2942] hover:underline truncate"
                  title={PROFESSOR_INFO.email}
                >
                  {PROFESSOR_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0F2942] shrink-0" />
                <a 
                  href={`tel:${PROFESSOR_INFO.phone.replace(/[^0-9+]/g, '')}`} 
                  className="hover:text-[#0F2942] hover:underline"
                >
                  {PROFESSOR_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0F2942] shrink-0" />
                <span className="truncate">{PROFESSOR_INFO.officeLocation}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-Resolution Official Portrait & Scholarly Identity */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl border border-[#CBD5E1] p-4 sm:p-5 shadow-sm max-w-sm sm:max-w-md w-full space-y-4"
            >
              
              {/* Official Photo Container - Exact Watermark-free Portrait */}
              <div className="relative rounded-xl overflow-hidden bg-white aspect-[864/1024] border border-[#E2E8F0] shadow-2xs group">
                <img
                  src={professorPortrait}
                  alt="Official Portrait of Prof. Harish Parshuram Bhabad"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>

              {/* Faculty Status Bar Below Photo */}
              <div className="bg-[#0F2942] text-white px-3.5 py-2.5 rounded-lg flex items-center justify-between shadow-2xs">
                <div>
                  <div className="font-bold text-xs sm:text-sm leading-tight">
                    Prof. Harish P. Bhabad
                  </div>
                  <div className="text-[11px] text-slate-300">
                    M.Tech. (CSE) • Ph.D. Scholar
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/70 px-2 py-0.5 rounded-xs border border-emerald-500/40 shrink-0">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  Verified Faculty
                </span>
              </div>

              {/* Verified Metrics with Animated Counter */}
              <div className="grid grid-cols-3 divide-x divide-[#E2E8F0] py-2 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] text-center">
                <div className="px-2">
                  <div className="text-lg sm:text-xl font-bold text-[#0F2942] font-mono">
                    <AnimatedCounter value={12} suffix="+" duration={800} />
                  </div>
                  <div className="text-[10px] uppercase font-semibold tracking-wider text-[#64748B]">
                    Years Exp.
                  </div>
                </div>
                <div className="px-2">
                  <div className="text-lg sm:text-xl font-bold text-[#0F2942] font-mono">
                    <AnimatedCounter value={14} suffix="+" duration={900} />
                  </div>
                  <div className="text-[10px] uppercase font-semibold tracking-wider text-[#64748B]">
                    Publications
                  </div>
                </div>
                <div className="px-2">
                  <div className="text-lg sm:text-xl font-bold text-[#0F2942] font-mono">
                    <AnimatedCounter value={1} duration={700} />
                  </div>
                  <div className="text-[10px] uppercase font-semibold tracking-wider text-[#64748B]">
                    Book Authored
                  </div>
                </div>
              </div>

              {/* Verified External Profile Badges */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={PROFESSOR_INFO.googleScholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-md bg-white hover:bg-[#F1F5F9] border border-[#CBD5E1] transition-all min-h-[40px] group hover:-translate-y-0.5"
                >
                  <span className="font-medium text-[#1E293B] truncate">Google Scholar</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#0F2942] shrink-0" />
                </a>

                <a
                  href={PROFESSOR_INFO.orcidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-md bg-white hover:bg-[#F1F5F9] border border-[#CBD5E1] transition-all min-h-[40px] group hover:-translate-y-0.5"
                >
                  <span className="font-medium text-[#1E293B] truncate">ORCID iD</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#0F2942] shrink-0" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
