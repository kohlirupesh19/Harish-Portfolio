import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PROFESSOR_INFO } from '../data/professorData';
import professorPortrait from '../assets/prof_harish_bhabad.png';
import { ExternalLink, ArrowUp, Mail, Phone } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F1D2B] text-slate-300 text-xs py-12 border-t border-[#1E2E40] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {/* Brand / Profile Info */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={professorPortrait}
                alt={PROFESSOR_INFO.name}
                className="w-10 h-10 rounded-full object-cover object-top border-2 border-white/20 shadow-xs"
              />
              <div>
                <div className="font-bold text-white text-base leading-tight">
                  {PROFESSOR_INFO.name}
                </div>
                <div className="text-xs text-slate-400">
                  {PROFESSOR_INFO.title} • {PROFESSOR_INFO.department}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              <strong className="text-slate-300">{PROFESSOR_INFO.institution}</strong>
              <br />
              {PROFESSOR_INFO.society}
              <br />
              {PROFESSOR_INFO.universityAffiliation}
            </p>

            <div className="pt-2 text-[11px] text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <a href={`mailto:${PROFESSOR_INFO.email}`} className="hover:text-white transition-colors truncate">
                  {PROFESSOR_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <a href={`tel:${PROFESSOR_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {PROFESSOR_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Academic Portal Pages */}
          <div className="lg:col-span-3 space-y-2">
            <div className="text-[11px] uppercase font-bold tracking-widest text-slate-200">
              Site Navigation
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors inline-block py-0.5">
                  Academic Overview
                </Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-white transition-colors inline-block py-0.5">
                  Research Domains & Programs
                </Link>
              </li>
              <li>
                <Link to="/publications" className="hover:text-white transition-colors inline-block py-0.5">
                  Publications Repository (14+)
                </Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-white transition-colors inline-block py-0.5">
                  Authored Scholarly Book
                </Link>
              </li>
              <li>
                <Link to="/teaching" className="hover:text-white transition-colors inline-block py-0.5">
                  Courses & Laboratory Pedagogy
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-white transition-colors inline-block py-0.5">
                  Academic Qualifications & Roles
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors inline-block py-0.5">
                  Mentored Projects & Workshops
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors inline-block py-0.5">
                  Student Resources & Manuals
                </Link>
              </li>
              <li>
                <Link to="/cv" className="hover:text-white transition-colors text-amber-300 inline-block py-0.5">
                  Curriculum Vitae (CV)
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified External Scholarly Portals */}
          <div className="lg:col-span-3 space-y-2">
            <div className="text-[11px] uppercase font-bold tracking-widest text-slate-200">
              Verified External Portals
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href={PROFESSOR_INFO.googleScholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 py-0.5"
                >
                  <ExternalLink className="w-3 h-3 text-slate-500 shrink-0" />
                  <span>Google Scholar Citations</span>
                </a>
              </li>
              <li>
                <a
                  href={PROFESSOR_INFO.orcidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 py-0.5"
                >
                  <ExternalLink className="w-3 h-3 text-slate-500 shrink-0" />
                  <span>ORCID Profile ({PROFESSOR_INFO.orcidId})</span>
                </a>
              </li>
              <li>
                <a
                  href={PROFESSOR_INFO.instituteProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 py-0.5"
                >
                  <ExternalLink className="w-3 h-3 text-slate-500 shrink-0" />
                  <span>LoGMIEER Official Portal</span>
                </a>
              </li>
              <li>
                <a
                  href={PROFESSOR_INFO.universityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 py-0.5"
                >
                  <ExternalLink className="w-3 h-3 text-slate-500 shrink-0" />
                  <span>Savitribai Phule Pune University</span>
                </a>
              </li>
              <li>
                <a
                  href={PROFESSOR_INFO.originalGoogleSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 py-0.5"
                >
                  <ExternalLink className="w-3 h-3 text-slate-500 shrink-0" />
                  <span>Original Google Sites Portfolio</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Campus Location & Return */}
          <div className="lg:col-span-2 space-y-3 text-left lg:text-right">
            <div className="text-[11px] uppercase font-bold tracking-widest text-slate-200">
              Department Campus
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Room 204, Comp. Engg.
              <br />
              LoGMIEER Campus
              <br />
              Canada Corner / Tidke Colony
              <br />
              Nashik - 422002, India
            </p>
            <div className="pt-1">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 rounded-sm border border-white/10 transition-colors cursor-pointer min-h-[36px]"
              >
                <ArrowUp className="w-3 h-3" />
                <span>Return to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Notice Strip */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Prof. Harish Parshuram Bhabad. Built with verified academic records from the original LoGMIEER Google Site & scholarly repository.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-3">
            <a href={PROFESSOR_INFO.aicteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              AICTE Approved
            </a>
            <span>•</span>
            <a href={PROFESSOR_INFO.dteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              DTE Maharashtra
            </a>
            <span>•</span>
            <a href={PROFESSOR_INFO.universityUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              SPPU Affiliation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
