import { GUIDED_STUDENT_PROJECTS, WORKSHOPS_AND_EVENTS } from '../data/professorData';
import { 
  FolderGit2, 
  Sparkles, 
  Calendar, 
  Award, 
  Users, 
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Building2
} from 'lucide-react';

export function ProjectsAndRoles() {
  return (
    <section id="projects" className="py-14 sm:py-16 border-b border-[#E3E3DC] bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section 1: Mentored Capstone Projects */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest font-semibold text-[#0F2942]">
                Student Guidance & Innovation
              </div>
              <h2 className="font-serif-academic text-2xl sm:text-3xl lg:text-4xl text-[#0F2942] mt-1">
                Guided Capstone Projects & Innovations
              </h2>
              <p className="mt-2 text-sm text-[#52525B] max-w-2xl leading-relaxed">
                Mentoring final-year B.E. Computer Engineering student cohorts in bridging software engineering theory with deployed prototypes, publications, and competitive exhibitions.
              </p>
            </div>

            <div className="text-xs text-[#64748B] flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#0F2942]" />
              <span>35+ B.E. Capstone Teams Supervised</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GUIDED_STUDENT_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-2xs hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2 py-0.5 text-xs font-semibold bg-[#F1F5F9] text-[#334155] rounded-xs border border-[#E2E8F0]">
                      {proj.category}
                    </span>
                    <span className="text-xs text-[#64748B] font-medium">
                      {proj.batch}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F2942] leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] mt-2.5 leading-relaxed">
                    <strong className="text-[#334155]">Outcome & Recognition:</strong> {proj.outcome}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F1F5F9]">
                  <div className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mb-1.5">
                    Stack & Frameworks
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[11px] bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0] rounded-xs font-mono"
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

        {/* Section 2: Workshops & Technical Initiatives */}
        <div className="pt-6 border-t border-[#E3E3DC]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest font-semibold text-[#0F2942]">
                Institutional Leadership & Workshops
              </div>
              <h2 className="font-serif-academic text-2xl sm:text-3xl text-[#0F2942] mt-1">
                Workshops Coordinated & Keynote Lectures
              </h2>
              <p className="mt-2 text-sm text-[#52525B] max-w-2xl leading-relaxed">
                Orchestrating government-funded initiatives, AICTE technical training, and state-level engineering symposiums at LoGMIEER Nashik.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {WORKSHOPS_AND_EVENTS.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-2xs hover:border-[#CBD5E1] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 text-xs font-semibold bg-[#0F2942] text-white rounded-xs">
                        {event.role}
                      </span>
                      <span className="text-xs text-[#64748B] flex items-center gap-1 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        {event.date}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#0F2942] pt-1">
                      {event.title}
                    </h3>

                    <p className="text-xs text-[#64748B]">
                      {event.organizedBy}
                    </p>

                    <p className="text-xs sm:text-sm text-[#334155] pt-2 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F1F5F9] grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#475569]">
                  {event.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
