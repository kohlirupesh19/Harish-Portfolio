import { motion } from 'motion/react';
import { EDUCATION_HISTORY, PROFESSIONAL_ROLES } from '../data/professorData';
import { GraduationCap, Briefcase, MapPin } from 'lucide-react';

export function AcademicTimeline() {
  return (
    <section id="experience" className="py-12 sm:py-16 border-b border-[#E3E3DC] bg-[#F7F7F4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-10"
        >
          <div className="text-xs uppercase tracking-widest font-semibold text-[#0F2942]">
            Background & Trajectory
          </div>
          <h2 className="font-serif-academic text-2xl sm:text-3xl lg:text-4xl text-[#0F2942] mt-1 text-break-academic">
            Education & Professional Career
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#52525B] max-w-2xl leading-relaxed">
            A comprehensive record of formal academic degrees, pedagogical appointments, administrative leadership, and software engineering practice.
          </p>
        </motion.div>

        {/* Dual Grid Layout: Education & Appointments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Column 1: Academic Degrees */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-[#E2E8F0]">
              <div className="w-8 h-8 rounded-md bg-[#0F2942] text-white flex items-center justify-center shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0F2942] leading-tight">
                  Educational Qualifications
                </h3>
                <span className="text-xs text-[#64748B]">Degrees & Research Candidacy</span>
              </div>
            </div>

            <div className="space-y-4">
              {EDUCATION_HISTORY.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-lg border border-[#E2E8F0] p-4 sm:p-5 shadow-2xs space-y-2 card-academic-interactive"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 sm:gap-2">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#0F2942] leading-snug">
                        {edu.degree}
                      </h4>
                      <p className="text-xs font-semibold text-[#475569] mt-0.5">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-[#64748B]">
                        {edu.universityOrBoard}
                      </p>
                    </div>

                    <span
                      className={`px-2 py-0.5 text-xs font-semibold rounded-xs shrink-0 self-start sm:self-auto ${
                        edu.status === 'Pursuing'
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : 'bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0]'
                      }`}
                    >
                      {edu.year}
                    </span>
                  </div>

                  {edu.gradeOrScore && (
                    <div className="inline-block text-xs font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-xs border border-emerald-200">
                      Score / Merit: {edu.gradeOrScore}
                    </div>
                  )}

                  {edu.focusArea && (
                    <p className="text-xs text-[#475569] leading-relaxed pt-1 border-t border-[#F1F5F9]">
                      <strong className="text-[#334155]">Focus:</strong> {edu.focusArea}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Professional & Administrative Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-[#E2E8F0]">
              <div className="w-8 h-8 rounded-md bg-[#0F2942] text-white flex items-center justify-center shrink-0">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0F2942] leading-tight">
                  Professional Appointments & Leadership
                </h3>
                <span className="text-xs text-[#64748B]">Academic Service & Industry Practice</span>
              </div>
            </div>

            <div className="space-y-4">
              {PROFESSIONAL_ROLES.map((role, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-lg border border-[#E2E8F0] p-4 sm:p-5 shadow-2xs space-y-3 card-academic-interactive"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 sm:gap-2">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#0F2942] leading-snug">
                        {role.role}
                      </h4>
                      <p className="text-xs font-semibold text-[#475569] mt-0.5">
                        {role.organization}
                      </p>
                      <p className="text-[11px] text-[#64748B] flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#94A3B8]" />
                        <span>{role.location}</span>
                      </p>
                    </div>

                    <div className="sm:text-right shrink-0">
                      <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-xs bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0]">
                        {role.period}
                      </span>
                      {role.badge && (
                        <div className="text-[10px] text-[#0F2942] font-semibold mt-1">
                          {role.badge}
                        </div>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-xs text-[#334155] pt-1 border-t border-[#F1F5F9]">
                    {role.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-1.5 leading-relaxed">
                        <span className="text-[#0F2942] font-bold mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
