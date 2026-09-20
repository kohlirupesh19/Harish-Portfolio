import { useState } from 'react';
import { Link } from 'react-router-dom';
import professorPortrait from '../assets/prof_harish_bhabad.png';
import { 
  PROFESSOR_INFO, 
  EDUCATION_HISTORY, 
  PROFESSIONAL_ROLES, 
  PUBLICATIONS, 
  AUTHORED_BOOK, 
  COURSES 
} from '../data/professorData';
import { Education, AcademicRole, Publication, Course } from '../types';
import { 
  Printer, 
  Download, 
  ChevronLeft
} from 'lucide-react';

const DEPARTMENTAL_COMMITTEES = [
  {
    role: 'Training & Placement (T&P) Coordinator',
    scope: 'Institutional & Industry Relations',
    period: '2018 – Present',
    description: 'Leading campus recruitment drives, company relations, student technical aptitude bootcamps, and institutional placement statistics.'
  },
  {
    role: 'AICTE-SANKALP HPC Coordinator',
    scope: 'National Supercomputing Initiative',
    period: '2024 – Present',
    description: 'Spearheading capacity-building workshops on High Performance Computing (HPC) clusters, parallel architectures, and supercomputing paradigms.'
  },
  {
    role: 'Laboratory In-Charge (OS & Forensics)',
    scope: 'Infrastructure & Linux Kernel Lab',
    period: '2016 – Present',
    description: 'Overseeing hardware, POSIX-compliant Linux kernel modules, digital forensic software, and student practical examinations.'
  }
];

export function CurriculumVitaePage() {
  const [downloading, setDownloading] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    setDownloading(true);
    const content = `CURRICULUM VITAE
Prof. Harish Parshuram Bhabad
Assistant Professor, Department of Computer Engineering
Loknete Gopinathji Munde Institute of Engineering Education and Research (LoGMIEER), Nashik
Affiliated to Savitribai Phule Pune University (SPPU)

Contact: ${PROFESSOR_INFO.email} | Phone: ${PROFESSOR_INFO.phone}
Office: ${PROFESSOR_INFO.officeLocation}
ORCID: ${PROFESSOR_INFO.orcidId}
Google Scholar: ${PROFESSOR_INFO.googleScholarUrl}

==================================================
1. ACADEMIC SUMMARY
==================================================
${PROFESSOR_INFO.summary}

==================================================
2. EDUCATIONAL QUALIFICATIONS
==================================================
${EDUCATION_HISTORY.map((e: Education) => `* ${e.degree} in ${e.discipline} (${e.year})
  Institution: ${e.institution}, ${e.universityOrBoard}
  Grade: ${e.gradeOrScore || 'Pursuing'}
  ${e.focusArea ? `Focus: ${e.focusArea}` : ''}`).join('\n\n')}

==================================================
3. PROFESSIONAL & ACADEMIC APPOINTMENTS
==================================================
${PROFESSIONAL_ROLES.map((a: AcademicRole) => `* ${a.period}: ${a.role}
  Institution: ${a.organization}, ${a.location}
  Responsibilities: ${a.responsibilities.join('; ')}`).join('\n\n')}

==================================================
4. PUBLISHED SCHOLARLY BOOK
==================================================
Title: ${AUTHORED_BOOK.title}
Subtitle: ${AUTHORED_BOOK.subtitle}
Author: ${AUTHORED_BOOK.author}
Year: ${AUTHORED_BOOK.publicationYear} | ISBN: ${AUTHORED_BOOK.isbn}
Chapters: ${AUTHORED_BOOK.chapters.length} Chapters

==================================================
5. PEER-REVIEWED PUBLICATIONS (${PUBLICATIONS.length}+ PAPERS)
==================================================
${PUBLICATIONS.map((p: Publication, i: number) => `[${i + 1}] ${p.authors.join(', ')} (${p.year}). "${p.title}". ${p.venue}.${p.doi ? ` DOI: ${p.doi}` : ''}`).join('\n\n')}

==================================================
6. TEACHING & PEDAGOGY (SPPU CURRICULUM)
==================================================
${COURSES.map((c: Course) => `* ${c.code}: ${c.title} (${c.semester}, ${c.level})`).join('\n')}

==================================================
7. ADMINISTRATIVE & UNIVERSITY SERVICE
==================================================
${DEPARTMENTAL_COMMITTEES.map((r) => `* ${r.role} (${r.period}) - ${r.scope}: ${r.description}`).join('\n')}
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Prof_Harish_Bhabad_Academic_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setTimeout(() => setDownloading(false), 1000);
  };

  return (
    <div className="bg-[#FBFBF9] min-h-screen">
      {/* Non-print toolbar */}
      <div className="print:hidden bg-white border-b border-[#E2E8F0] py-4 sticky top-17 z-30 shadow-2xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2942] hover:text-[#183B5E]"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Return to Overview</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadText}
              disabled={downloading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0F2942] bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-md transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloading ? 'Downloading...' : 'Export Plaintext'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-[#0F2942] hover:bg-[#1A3E61] rounded-md transition-colors shadow-2xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main CV Sheet Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 print:py-0 print:px-0">
        <div className="bg-white border border-[#CBD5E1] rounded-lg shadow-sm p-8 sm:p-12 print:border-none print:shadow-none print:p-0 space-y-8 font-serif-academic text-[#1E293B]">
          
          {/* Header Block with Portrait */}
          <div className="border-b-2 border-[#0F2942] pb-6 space-y-4 font-sans">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-5">
                <img
                  src={professorPortrait}
                  alt="Prof. Harish Parshuram Bhabad"
                  className="w-20 sm:w-24 h-auto aspect-[865/1024] object-cover rounded-md border border-[#CBD5E1] shadow-2xs shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h1 className="font-serif-academic text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2942]">
                    {PROFESSOR_INFO.name}
                  </h1>
                  <p className="text-sm sm:text-base text-[#475569] font-medium mt-0.5">
                    {PROFESSOR_INFO.title} • {PROFESSOR_INFO.department}
                  </p>
                  <p className="text-xs text-[#64748B]">
                    {PROFESSOR_INFO.institution} • {PROFESSOR_INFO.universityAffiliation}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3 text-xs text-[#0F2942] font-mono">
                    <span>ORCID: {PROFESSOR_INFO.orcidId}</span>
                    <span>•</span>
                    <a href={PROFESSOR_INFO.googleScholarUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Google Scholar
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-xs text-left sm:text-right space-y-1 text-[#475569] border-t sm:border-t-0 pt-3 sm:pt-0 w-full sm:w-auto">
                <div className="font-semibold text-[#0F2942]">{PROFESSOR_INFO.email}</div>
                <div>{PROFESSOR_INFO.phone}</div>
                <div>{PROFESSOR_INFO.officeLocation}</div>
                <div className="text-[11px] text-[#64748B]">{PROFESSOR_INFO.society}</div>
              </div>
            </div>
          </div>

          {/* Section 1: Academic Summary */}
          <div className="space-y-2">
            <h2 className="text-sm uppercase font-bold tracking-wider text-[#0F2942] border-b border-[#CBD5E1] pb-1 font-sans">
              1. Academic & Scholarly Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
              {PROFESSOR_INFO.summary}
            </p>
          </div>

          {/* Section 2: Education */}
          <div className="space-y-3">
            <h2 className="text-sm uppercase font-bold tracking-wider text-[#0F2942] border-b border-[#CBD5E1] pb-1 font-sans">
              2. Educational Qualifications
            </h2>
            <div className="space-y-3 font-sans text-xs">
              {EDUCATION_HISTORY.map((edu: Education, idx: number) => (
                <div key={idx} className="flex justify-between items-start gap-4">
                  <div>
                    <div className="font-bold text-[#0F2942] text-sm">
                      {edu.degree} in {edu.discipline}
                    </div>
                    <div className="text-[#475569]">
                      {edu.institution}, {edu.universityOrBoard}
                    </div>
                    {edu.focusArea && (
                      <div className="text-[#64748B] text-[11px] mt-0.5">
                        Focus Area: {edu.focusArea}
                      </div>
                    )}
                  </div>
                  <div className="text-right font-mono shrink-0">
                    <div className="font-bold text-[#0F2942]">{edu.year}</div>
                    {edu.gradeOrScore && <div className="text-[#64748B] text-[11px]">{edu.gradeOrScore}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Professional Appointments */}
          <div className="space-y-3">
            <h2 className="text-sm uppercase font-bold tracking-wider text-[#0F2942] border-b border-[#CBD5E1] pb-1 font-sans">
              3. Academic Appointments & Experience
            </h2>
            <div className="space-y-3 font-sans text-xs">
              {PROFESSIONAL_ROLES.map((item: AcademicRole, idx: number) => (
                <div key={idx} className="flex justify-between items-start gap-4">
                  <div>
                    <div className="font-bold text-[#0F2942]">
                      {item.role}
                    </div>
                    <div className="text-[#475569]">
                      {item.organization}, {item.location}
                    </div>
                    <div className="text-[#64748B] text-[11px] mt-0.5">
                      {item.responsibilities.slice(0, 2).join('. ')}
                    </div>
                  </div>
                  <div className="text-right font-mono text-[#0F2942] font-semibold shrink-0">
                    {item.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Authored Scholarly Book */}
          <div className="space-y-2">
            <h2 className="text-sm uppercase font-bold tracking-wider text-[#0F2942] border-b border-[#CBD5E1] pb-1 font-sans">
              4. Authored Scholarly Monograph
            </h2>
            <div className="font-sans text-xs p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md space-y-1">
              <div className="font-bold text-[#0F2942] text-sm">
                "{AUTHORED_BOOK.title}: {AUTHORED_BOOK.subtitle}"
              </div>
              <div className="text-[#475569]">
                Author: <strong>{AUTHORED_BOOK.author}</strong> • Publication Year: {AUTHORED_BOOK.publicationYear}
              </div>
              <div className="text-[#64748B] font-mono text-[11px]">
                ISBN-13: {AUTHORED_BOOK.isbn} • {AUTHORED_BOOK.chapters.length} Chapters
              </div>
            </div>
          </div>

          {/* Section 5: Peer-Reviewed Publications */}
          <div className="space-y-3">
            <h2 className="text-sm uppercase font-bold tracking-wider text-[#0F2942] border-b border-[#CBD5E1] pb-1 font-sans">
              5. Peer-Reviewed Publications ({PUBLICATIONS.length} Scientific Works)
            </h2>
            <div className="space-y-3 font-sans text-xs">
              {PUBLICATIONS.map((pub: Publication, idx: number) => (
                <div key={pub.id} className="leading-relaxed">
                  <span className="font-bold text-[#0F2942]">[{idx + 1}]</span>{' '}
                  <span className="font-medium text-[#1E293B]">{pub.authors.join(', ')}</span>{' '}
                  ({pub.year}).{' '}
                  <span className="font-semibold text-[#0F2942]">"{pub.title}"</span>.{' '}
                  <em className="text-[#475569]">{pub.venue}</em>.{' '}
                  {pub.doi && <span className="font-mono text-[#64748B] text-[11px]">DOI: {pub.doi}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Administrative & Institutional Service */}
          <div className="space-y-3">
            <h2 className="text-sm uppercase font-bold tracking-wider text-[#0F2942] border-b border-[#CBD5E1] pb-1 font-sans">
              6. Institutional Responsibilities & Committee Service
            </h2>
            <div className="space-y-2 font-sans text-xs">
              {DEPARTMENTAL_COMMITTEES.map((role, idx) => (
                <div key={idx} className="flex justify-between items-start gap-4">
                  <div>
                    <span className="font-bold text-[#0F2942]">{role.role}</span>
                    <span className="text-[#64748B]"> — {role.scope}</span>
                    <p className="text-[#475569] text-[11px] mt-0.5">{role.description}</p>
                  </div>
                  <div className="font-mono text-[#64748B] shrink-0 text-right">
                    {role.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 7: Teaching Portfolio */}
          <div className="space-y-2">
            <h2 className="text-sm uppercase font-bold tracking-wider text-[#0F2942] border-b border-[#CBD5E1] pb-1 font-sans">
              7. University Teaching Portfolio
            </h2>
            <div className="grid grid-cols-2 gap-2 font-sans text-xs">
              {COURSES.map((course: Course) => (
                <div key={course.code} className="p-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xs">
                  <span className="font-mono font-bold text-[#0F2942]">{course.code}</span>: {course.title}
                  <div className="text-[11px] text-[#64748B]">{course.semester}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Signature Block */}
          <div className="pt-8 border-t border-[#CBD5E1] font-sans text-xs flex justify-between items-end text-[#64748B]">
            <div>
              <div>Location: Nashik, Maharashtra, India</div>
              <div>Certified true & verified from institutional archives.</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-[#0F2942] text-sm">{PROFESSOR_INFO.name}</div>
              <div>Department of Computer Engineering, LoGMIEER</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
