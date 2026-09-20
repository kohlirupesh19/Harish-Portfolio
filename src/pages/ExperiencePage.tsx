import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
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
  Award, 
  CheckCircle2, 
  FileText, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Sparkles
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
    <div className="bg-[#FBFBF9] min-h-screen">
      <PageHeader
        category="Academic Trajectory"
        title="Appointments, Education & Leadership"
        description="Comprehensive chronological record of academic teaching appointments, educational milestones, and institutional administrative leadership spanning over a decade."
        breadcrumb="Experience"
        badge="12+ Years University Service"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* CV Direct Download / View Banner */}
        <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-[#0F2942] text-white flex items-center justify-center font-bold">
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
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0F2942] hover:bg-[#1A3E61] rounded-md transition-colors shadow-xs shrink-0 self-start sm:self-auto"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Open Dedicated CV Page</span>
          </Link>
        </div>

        {/* Section 1: Educational Qualifications */}
        <div className="space-y-6">
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
              Scholarly Foundation
            </div>
            <h2 className="font-serif-academic text-2xl font-bold text-[#0F2942] mt-0.5">
              Degrees & Formal Qualifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {EDUCATION_HISTORY.map((edu: Education, idx: number) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-2xs space-y-3 relative hover:border-[#CBD5E1] transition-colors"
              >
                <div className="flex items-start justify-between">
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
                  <h3 className="text-base font-bold text-[#0F2942]">
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
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Academic & Industry Appointments Timeline */}
        <div className="space-y-6">
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
              Professional Trajectory
            </div>
            <h2 className="font-serif-academic text-2xl font-bold text-[#0F2942] mt-0.5">
              Academic Teaching & Administrative Appointments
            </h2>
          </div>

          <div className="relative border-l-2 border-[#CBD5E1] ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8">
            {PROFESSIONAL_ROLES.map((item: AcademicRole, idx: number) => (
              <div key={idx} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1 w-6 h-6 rounded-full bg-[#0F2942] text-white flex items-center justify-center ring-4 ring-[#FBFBF9]">
                  {item.type === 'industry' ? (
                    <Briefcase className="w-3 h-3 text-emerald-300" />
                  ) : item.badge?.includes('Leadership') ? (
                    <ShieldCheck className="w-3 h-3 text-amber-300" />
                  ) : (
                    <Building2 className="w-3 h-3" />
                  )}
                </div>

                <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-2xs space-y-2 hover:border-[#CBD5E1] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-mono text-xs font-bold text-[#0F2942]">
                      {item.period}
                    </span>
                    <span className="text-xs text-[#64748B] font-medium">
                      {item.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-[#0F2942]">
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
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Institutional Roles & Campus Service */}
        <div className="space-y-6">
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
              Institutional Service
            </div>
            <h2 className="font-serif-academic text-2xl font-bold text-[#0F2942] mt-0.5">
              Departmental & Committee Responsibilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DEPARTMENT_COMMITTEES.map((role, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-2xs space-y-2 hover:border-[#CBD5E1] transition-colors"
              >
                <div className="w-9 h-9 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center text-[#0F2942]">
                  <Building2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#0F2942]">
                  {role.role}
                </h3>
                <div className="text-xs text-[#64748B] font-medium">
                  {role.scope} • {role.period}
                </div>
                <p className="text-xs text-[#334155] leading-relaxed pt-1">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
