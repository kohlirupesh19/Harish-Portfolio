import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { PageTransition } from '../components/PageTransition';
import { 
  PROFESSOR_INFO, 
  EDUCATION_HISTORY, 
  PROFESSIONAL_ROLES 
} from '../data/professorData';
import { Education, AcademicRole } from '../types';
import { 
  GraduationCap, 
  Briefcase, 
  Building2, 
  FileText, 
  ShieldCheck,
  MapPin
} from 'lucide-react';

const DEPARTMENT_COMMITTEES = [
  {
    role: 'Training & Placement (T&P) Coordinator',
    scope: 'Institutional & Industry Relations',
    period: '2018 – Present',
    description: 'Leading campus recruitment drives, industry MoU formulations, alumni networks, and organizing technical interview training bootcamps for engineering graduates.'
  },
  {
    role: 'AICTE-SANKALP HPC Coordinator',
    scope: 'National Supercomputing Initiative',
    period: '2024 – Present',
    description: 'Spearheading awareness and practical capacity-building workshops on High Performance Computing (HPC) clusters, parallel architectures, and supercomputing paradigms.'
  },
  {
    role: 'Laboratory In-Charge (OS & Forensics)',
    scope: 'Infrastructure & Linux Kernel Lab',
    period: '2016 – Present',
    description: 'Managing system software infrastructure, POSIX compliant operating systems workstations, and digital forensic investigative software suites for practical coursework.'
  }
];

export function ExperiencePage() {
  return (
    <PageTransition className="bg-[#FBFBF9] min-h-screen overflow-hidden">
      <PageHeader
        category="Academic Trajectory"
        title="Appointments, Education & Leadership"
        description="Comprehensive chronological record of academic teaching appointments, educational milestones, and institutional administrative leadership spanning over a decade."
        breadcrumb="Experience"
        badge="12+ Years University Service"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-10 sm:space-y-12">
        {/* CV Direct Download / View Banner */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="bg-white rounded-lg border border-[#E2E8F0] p-5 sm:p-6 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 card-academic-interactive"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-[#0F2942] text-white flex items-center justify-center font-bold shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0F2942]">
                Official Curriculum Vitae (CV) Document
              </div>
              <div className="text-xs text-[#64748B]">
                Complete academic dossier formatted for institutional evaluation, accreditation, and offline review.
              </div>
            </div>
          </div>

          <Link
            to="/cv"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-[#0F2942] hover:bg-[#1A3E61] rounded-md transition-all shadow-xs shrink-0 self-start sm:self-auto min-h-[42px] hover:-translate-y-0.5 active:translate-y-0"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Open Dedicated CV Page</span>
          </Link>
        </motion.div>

        {/* Section 1: Educational Qualifications */}
        <div className="space-y-6">
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
              Scholarly Foundation
            </div>
            <h2 className="font-serif-academic text-2xl font-bold text-[#0F2942] mt-0.5 text-break-academic">
              Degrees & Formal Qualifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {EDUCATION_HISTORY.map((edu: Education, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="bg-white rounded-lg border border-[#E2E8F0] p-5 sm:p-6 shadow-2xs space-y-3 relative card-academic-interactive"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="px-2.5 py-1 text-xs font-bold font-mono bg-[#0F2942] text-white rounded-xs">
                    {edu.year}
                  </span>
                  {edu.gradeOrScore && (
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-xs border border-emerald-200">
                      {edu.gradeOrScore}
                    </span>
                  )}
                  {edu.status === 'Pursuing' && (
                    <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-xs border border-amber-200">
                      Research Scholar
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#0F2942] text-break-academic">
                    {edu.degree}
                  </h3>
                  <div className="text-xs font-semibold text-[#475569] mt-0.5">
                    {edu.discipline}
                  </div>
                  <div className="text-xs text-[#64748B] mt-1">
                    {edu.institution}
                  </div>
                  <div className="text-[11px] text-[#64748B]">
                    {edu.universityOrBoard}
                  </div>
                </div>

                {edu.focusArea && (
                  <div className="pt-2 border-t border-[#F1F5F9] text-xs text-[#334155]">
                    <strong>Research Focus / Area:</strong> {edu.focusArea}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Academic & Industry Appointments Timeline */}
        <div className="space-y-6">
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
              Professional Trajectory
            </div>
            <h2 className="font-serif-academic text-2xl font-bold text-[#0F2942] mt-0.5 text-break-academic">
              Academic Teaching & Administrative Appointments
            </h2>
          </div>

          <div className="relative border-l-2 border-[#CBD5E1] ml-5 sm:ml-7 space-y-6 sm:space-y-8 pl-5 sm:pl-8">
            {PROFESSIONAL_ROLES.map((item: AcademicRole, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] sm:-left-[43px] top-1 w-6 h-6 rounded-full bg-[#0F2942] text-white flex items-center justify-center ring-4 ring-[#FBFBF9]">
                  {item.type === 'industry' ? (
                    <Briefcase className="w-3 h-3 text-emerald-300" />
                  ) : item.badge?.includes('Leadership') ? (
                    <ShieldCheck className="w-3 h-3 text-amber-300" />
                  ) : (
                    <Building2 className="w-3 h-3" />
                  )}
                </div>

                <div className="bg-white rounded-lg border border-[#E2E8F0] p-5 sm:p-6 shadow-2xs space-y-2 card-academic-interactive">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-mono text-xs font-bold text-[#0F2942]">
                      {item.period}
                    </span>
                    <span className="text-xs text-[#64748B] font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#94A3B8]" />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-[#0F2942] text-break-academic">
                      {item.role}
                    </h3>
                    {item.badge && (
                      <span className="px-2 py-0.5 text-[11px] font-semibold bg-[#F1F5F9] text-[#334155] rounded-xs border border-[#E2E8F0]">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="text-xs sm:text-sm font-medium text-[#475569]">
                    {item.organization}
                  </div>

                  <ul className="text-xs sm:text-sm text-[#334155] leading-relaxed pt-2 space-y-1.5 list-disc pl-4">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3: Institutional Roles & Campus Service */}
        <div className="space-y-6">
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
              Institutional Service
            </div>
            <h2 className="font-serif-academic text-2xl font-bold text-[#0F2942] mt-0.5 text-break-academic">
              Departmental & Committee Responsibilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {DEPARTMENT_COMMITTEES.map((comm, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-white rounded-lg border border-[#E2E8F0] p-5 shadow-2xs space-y-3 card-academic-interactive"
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="font-mono text-xs font-bold text-[#0F2942]">
                    {comm.period}
                  </span>
                  <span className="text-[11px] text-[#64748B]">
                    {comm.scope}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0F2942]">
                    {comm.role}
                  </h3>
                </div>

                <p className="text-xs text-[#475569] leading-relaxed pt-2 border-t border-[#F1F5F9]">
                  {comm.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
