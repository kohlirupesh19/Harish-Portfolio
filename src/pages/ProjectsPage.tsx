import { PageHeader } from '../components/PageHeader';
import { GUIDED_STUDENT_PROJECTS, WORKSHOPS_AND_EVENTS, PROFESSOR_INFO } from '../data/professorData';
import { 
  Briefcase, 
  Users, 
  Award, 
  Calendar, 
  Tag, 
  ExternalLink,
  Sparkles,
  Terminal,
  Layers,
  CheckCircle2
} from 'lucide-react';

export function ProjectsPage() {
  return (
    <div className="bg-[#FBFBF9] min-h-screen">
      <PageHeader
        category="Pedagogical Mentorship"
        title="Student Capstone Projects & Workshops"
        description="A showcase of supervised final-year engineering capstone projects, technical symposiums, and national AICTE workshops organized under Prof. Harish Bhabad's direction."
        breadcrumb="Projects & Workshops"
        badge="B.E. Capstone Supervision"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Section 1: Supervised Student Capstone Projects */}
        <div className="space-y-6">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
                Supervised Research
              </div>
              <h2 className="font-serif-academic text-2xl font-bold text-[#0F2942] mt-0.5">
                Final Year B.E. Capstone Innovations
              </h2>
            </div>
            <span className="text-xs text-[#64748B]">
              LoGMIEER Computer Engineering Department
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GUIDED_STUDENT_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-2xs space-y-4 hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#0F2942] text-white rounded-xs">
                      {proj.batch}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-xs border border-emerald-200">
                      Guided by Prof. H. P. Bhabad
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0F2942] leading-snug">
                    {proj.title}
                  </h3>

                  <div className="text-xs font-medium text-[#475569] flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#0F2942]" />
                    <span>Domain: <strong>{proj.category}</strong></span>
                  </div>

                  <div className="pt-2 text-xs">
                    <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md space-y-1">
                      <strong className="text-[#0F2942] block">Demonstrated Outcome & Impact:</strong>
                      <span className="text-[#475569] leading-relaxed block">{proj.outcome}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F1F5F9]">
                  <div className="text-[11px] font-semibold text-[#64748B] mb-1.5">
                    Implemented Technologies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[11px] bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] rounded-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Technical Workshops & Symposiums Organized */}
        <div className="space-y-6">
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
              Professional Development & Symposiums
            </div>
            <h2 className="font-serif-academic text-2xl font-bold text-[#0F2942] mt-0.5">
              Workshops, Conferences & Training Programs Organized
            </h2>
          </div>

          <div className="space-y-4">
            {WORKSHOPS_AND_EVENTS.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-2xs space-y-3 hover:border-[#CBD5E1] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 text-xs font-bold bg-[#0F2942] text-white rounded-xs">
                      {event.role}
                    </span>
                    <span className="text-xs text-[#64748B] font-medium">
                      {event.organizedBy}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{event.date}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0F2942]">
                  {event.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  {event.description}
                </p>

                <div className="pt-2 border-t border-[#F1F5F9] space-y-1.5">
                  <div className="text-[11px] font-bold text-[#0F2942] uppercase tracking-wider">
                    Program Highlights:
                  </div>
                  <ul className="space-y-1 text-xs text-[#475569]">
                    {event.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Capstone Mentorship Protocol for Prospective Students */}
        <div className="bg-[#FAF8F5] rounded-lg border border-[#E7E2D8] p-6 sm:p-8 space-y-4">
          <div className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
            Mentorship Protocol
          </div>
          <h3 className="font-serif-academic text-xl font-bold text-[#0F2942]">
            B.E. Final Year Capstone Project Supervision Guidelines
          </h3>
          <p className="text-xs sm:text-sm text-[#334155] leading-relaxed max-w-3xl">
            Students interested in undertaking B.E. final-year capstone project work under the guidance of Prof. Harish Bhabad are advised to prepare a comprehensive technical synopsis adhering to SPPU academic norms. Preferred project domains include <strong>Post-Quantum Cryptographic Prototypes, Applied Machine Learning, Edge AI Computer Vision, and Decentralized Smart Infrastructure</strong>.
          </p>
          <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-[#0F2942]">
            <span>1. Synopsis Submission</span>
            <span>→</span>
            <span>2. Feasibility Defense</span>
            <span>→</span>
            <span>3. Bi-weekly Sprint Check-ins</span>
            <span>→</span>
            <span>4. Conference Paper Publication</span>
          </div>
        </div>
      </div>
    </div>
  );
}
