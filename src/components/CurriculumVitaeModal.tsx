import { PROFESSOR_INFO, EDUCATION_HISTORY, PROFESSIONAL_ROLES, PUBLICATIONS, AUTHORED_BOOK, COURSES } from '../data/professorData';
import professorPortrait from '../assets/prof_harish_bhabad.png';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, GraduationCap, Award } from 'lucide-react';

interface CurriculumVitaeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CurriculumVitaeModal({ isOpen, onClose }: CurriculumVitaeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full my-8 max-h-[92vh] flex flex-col border border-[#CBD5E1]">
        {/* Sticky Modal Bar (hidden during print) */}
        <div className="no-print flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0] bg-[#F8FAFC] shrink-0">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#0F2942]" />
            <h2 className="text-sm sm:text-base font-bold text-[#0F2942]">
              Curriculum Vitae — Prof. Harish Parshuram Bhabad
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              id="cv-print-button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#0F2942] rounded-md hover:bg-[#1E3A5F] transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              id="cv-close-button"
              className="p-1.5 text-[#64748B] hover:text-[#0F2942] rounded-md cursor-pointer"
              aria-label="Close CV Dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Body */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans text-[#1E293B] space-y-8 print:p-0">
          {/* Header */}
          <div className="border-b-2 border-[#0F2942] pb-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={professorPortrait}
                  alt="Prof. Harish Parshuram Bhabad"
                  className="w-16 sm:w-20 h-auto aspect-[864/1024] object-cover rounded-md border border-[#CBD5E1] shadow-2xs shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h1 className="font-serif-academic text-2xl sm:text-3xl font-bold text-[#0F2942] tracking-tight">
                    {PROFESSOR_INFO.name}
                  </h1>
                  <span className="text-xs sm:text-sm font-semibold text-[#475569] block">
                    Assistant Professor & Researcher
                  </span>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    {PROFESSOR_INFO.department}, {PROFESSOR_INFO.institution}
                  </p>
                </div>
              </div>

              <div className="text-xs text-left sm:text-right text-[#475569] space-y-1">
                <div><strong>Email:</strong> {PROFESSOR_INFO.email}</div>
                <div><strong>Phone:</strong> {PROFESSOR_INFO.phone}</div>
                <div><strong>ORCID:</strong> {PROFESSOR_INFO.orcidId}</div>
              </div>
            </div>
          </div>

          {/* Section: Academic Summary */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase font-bold tracking-widest text-[#0F2942] border-b border-[#E2E8F0] pb-1">
              Professional & Academic Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
              {PROFESSOR_INFO.summary}
            </p>
          </div>

          {/* Section: Education */}
          <div className="space-y-3">
            <h2 className="text-xs uppercase font-bold tracking-widest text-[#0F2942] border-b border-[#E2E8F0] pb-1">
              Educational Qualifications
            </h2>
            <div className="space-y-2.5 text-xs sm:text-sm">
              {EDUCATION_HISTORY.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <div>
                    <div className="font-bold text-[#0F2942]">{edu.degree}</div>
                    <div className="text-xs text-[#475569]">{edu.institution} — {edu.universityOrBoard}</div>
                    {edu.focusArea && (
                      <div className="text-[11px] text-[#64748B]">Focus: {edu.focusArea}</div>
                    )}
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="font-semibold text-[#0F2942]">{edu.year}</span>
                    {edu.gradeOrScore && (
                      <div className="text-[11px] text-emerald-800 font-medium">{edu.gradeOrScore}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Professional Experience */}
          <div className="space-y-3">
            <h2 className="text-xs uppercase font-bold tracking-widest text-[#0F2942] border-b border-[#E2E8F0] pb-1">
              Academic & Professional Appointments
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              {PROFESSIONAL_ROLES.map((role, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                    <span className="font-bold text-[#0F2942]">{role.role}</span>
                    <span className="text-xs text-[#64748B] font-medium">{role.period} | {role.location}</span>
                  </div>
                  <div className="text-xs font-semibold text-[#475569]">{role.organization}</div>
                  <ul className="list-disc list-inside text-xs text-[#334155] space-y-1 pt-0.5">
                    {role.responsibilities.slice(0, 3).map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Authored Book */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase font-bold tracking-widest text-[#0F2942] border-b border-[#E2E8F0] pb-1">
              Authored Scholarly Books
            </h2>
            <div className="text-xs sm:text-sm">
              <span className="font-bold text-[#0F2942]">"{AUTHORED_BOOK.title}"</span> ({AUTHORED_BOOK.publicationYear}). {AUTHORED_BOOK.subtitle}. Publisher: {AUTHORED_BOOK.publisher}. ISBN: {AUTHORED_BOOK.isbn}.
            </div>
          </div>

          {/* Section: Publications List */}
          <div className="space-y-3">
            <h2 className="text-xs uppercase font-bold tracking-widest text-[#0F2942] border-b border-[#E2E8F0] pb-1">
              Selected Peer-Reviewed Research Publications
            </h2>
            <div className="space-y-3 text-xs">
              {PUBLICATIONS.map((pub, idx) => (
                <div key={pub.id} className="leading-relaxed">
                  <span className="font-semibold text-[#0F2942]">{idx + 1}. </span>
                  <span className="font-semibold text-[#1E293B]">"{pub.title}"</span>. {pub.authors.join(', ')}. <em className="text-[#475569]">{pub.venue}</em>, {pub.year}. {pub.doi && `DOI: ${pub.doi}`}.
                </div>
              ))}
            </div>
          </div>

          {/* Section: Core Courses */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase font-bold tracking-widest text-[#0F2942] border-b border-[#E2E8F0] pb-1">
              Core Teaching Competencies (Savitribai Phule Pune University)
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-[#334155]">
              {COURSES.map((c) => (
                <div key={c.code} className="p-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xs">
                  <div className="font-mono font-bold text-[#0F2942]">{c.code}</div>
                  <div className="text-[11px] font-medium">{c.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Institutional Stamp & Signature Line */}
          <div className="pt-6 border-t border-[#CBD5E1] flex justify-between items-end text-xs text-[#64748B]">
            <div>
              Verified Faculty Profile • Department of Computer Engineering
              <br />
              LoGMIEER, Nashik (SPPU Affiliation)
            </div>
            <div className="text-right">
              <div className="font-serif-academic text-base font-bold text-[#0F2942]">
                Harish P. Bhabad
              </div>
              <div className="text-[11px]">Assistant Professor</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
