import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { PageTransition } from '../components/PageTransition';
import { GUIDED_STUDENT_PROJECTS, WORKSHOPS_AND_EVENTS } from '../data/professorData';
import { 
  Calendar, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export function ProjectsPage() {
  return (
    <PageTransition>
      <div className="bg-[#FBFBF9] min-h-screen">
        <PageHeader
          category="Pedagogical Mentorship"
          title="Student Capstone Projects & Workshops"
          description="A showcase of supervised final-year engineering capstone projects, technical symposiums, and national AICTE workshops organized under Prof. Harish Bhabad's direction."
          breadcrumb="Projects & Workshops"
          badge="B.E. Capstone Supervision"
        />

        <div className="academic-container py-10 sm:py-12 space-y-12 sm:space-y-16">
          {/* Section 1: Supervised Student Capstone Projects */}
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[#E2E8F0] pb-3">
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
                  Supervised Research
                </div>
                <h2 className="font-serif-academic text-xl sm:text-2xl font-bold text-[#0F2942] mt-0.5">
                  Final Year B.E. Capstone Innovations
                </h2>
              </div>
              <span className="text-xs text-[#64748B]">
                LoGMIEER Computer Engineering Department
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {GUIDED_STUDENT_PROJECTS.map((proj, idx) => (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.35, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-lg border border-[#E2E8F0] p-5 sm:p-6 shadow-2xs space-y-4 hover:border-[#94A3B8] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#0F2942] text-white rounded-xs">
                        {proj.batch}
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-xs border border-emerald-200">
                        Guided by Prof. H. P. Bhabad
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#0F2942] leading-snug break-words">
                      {proj.title}
                    </h3>

                    <div className="text-xs font-medium text-[#475569] flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#0F2942] shrink-0" />
                      <span>Domain: <strong className="text-[#1E293B]">{proj.category}</strong></span>
                    </div>

                    <div className="pt-1 text-xs">
                      <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md space-y-1">
                        <strong className="text-[#0F2942] block font-semibold">Demonstrated Outcome & Impact:</strong>
                        <span className="text-[#475569] leading-relaxed block break-words">{proj.outcome}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#F1F5F9]">
                    <div className="text-[11px] font-semibold text-[#64748B] mb-1.5">
                      Implemented Technologies:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 text-[11px] bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] rounded-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section 2: Technical Workshops & Symposiums Organized */}
          <section className="space-y-6">
            <div className="border-b border-[#E2E8F0] pb-3">
              <div className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
                Professional Development & Symposiums
              </div>
              <h2 className="font-serif-academic text-xl sm:text-2xl font-bold text-[#0F2942] mt-0.5">
                Workshops, Conferences & Training Programs Organized
              </h2>
            </div>

            <div className="space-y-4">
              {WORKSHOPS_AND_EVENTS.map((event, idx) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.35, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-lg border border-[#E2E8F0] p-5 sm:p-6 shadow-2xs space-y-3 hover:border-[#94A3B8] transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 text-xs font-bold bg-[#0F2942] text-white rounded-xs">
                        {event.role}
                      </span>
                      <span className="text-xs text-[#64748B] font-medium break-words">
                        {event.organizedBy}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-mono shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-[#0F2942]" />
                      <span>{event.date}</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0F2942] break-words">
                    {event.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed break-words">
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
                          <span className="break-words">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section 3: Capstone Mentorship Protocol for Prospective Students */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4 }}
            className="bg-[#FAF8F5] rounded-lg border border-[#E7E2D8] p-5 sm:p-8 space-y-4"
          >
            <div className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
              Mentorship Protocol
            </div>
            <h3 className="font-serif-academic text-xl font-bold text-[#0F2942]">
              B.E. Final Year Capstone Project Supervision Guidelines
            </h3>
            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed max-w-3xl">
              Students interested in undertaking B.E. final-year capstone project work under the guidance of Prof. Harish Bhabad are advised to prepare a comprehensive technical synopsis adhering to SPPU academic norms. Preferred project domains include <strong>Post-Quantum Cryptographic Prototypes, Applied Machine Learning, Edge AI Computer Vision, and Decentralized Smart Infrastructure</strong>.
            </p>
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs font-semibold text-[#0F2942]">
              <div className="p-2.5 bg-white border border-[#E7E2D8] rounded-md flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#0F2942] text-white flex items-center justify-center text-[10px] shrink-0">1</span>
                <span>Synopsis Submission</span>
              </div>
              <div className="p-2.5 bg-white border border-[#E7E2D8] rounded-md flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#0F2942] text-white flex items-center justify-center text-[10px] shrink-0">2</span>
                <span>Feasibility Defense</span>
              </div>
              <div className="p-2.5 bg-white border border-[#E7E2D8] rounded-md flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#0F2942] text-white flex items-center justify-center text-[10px] shrink-0">3</span>
                <span>Bi-weekly Sprint Check-ins</span>
              </div>
              <div className="p-2.5 bg-white border border-[#E7E2D8] rounded-md flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#0F2942] text-white flex items-center justify-center text-[10px] shrink-0">4</span>
                <span>Paper Publication</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
