import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { PageTransition } from '../components/PageTransition';
import { COURSES, PROFESSOR_INFO } from '../data/professorData';
import { 
  BookOpen, 
  Terminal, 
  FlaskConical, 
  ChevronRight, 
  Download, 
  ExternalLink
} from 'lucide-react';

export function TeachingPage() {
  const [activeCourseId, setActiveCourseId] = useState<string>(COURSES[0].code);

  const activeCourse = COURSES.find((c) => c.code === activeCourseId) || COURSES[0];

  return (
    <PageTransition>
      <div className="bg-[#FBFBF9] min-h-screen">
        <PageHeader
          category="Academic Pedagogy"
          title="Coursework & Laboratory Instruction"
          description="Comprehensive undergraduate course delivery, laboratory experiments, and instructional frameworks aligned with Savitribai Phule Pune University (SPPU) Computer Engineering standards."
          breadcrumb="Teaching"
          badge="SPPU Curriculum"
        />

        <div className="academic-container py-10 sm:py-12 space-y-8 sm:space-y-10">
          {/* SPPU Curriculum Standards Banner */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-lg border border-[#E2E8F0] p-5 sm:p-6 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
                University Standards & Affiliation
              </div>
              <h2 className="text-base sm:text-lg font-bold text-[#0F2942] mt-0.5">
                Savitribai Phule Pune University (SPPU) Curriculum
              </h2>
              <p className="text-xs text-[#64748B] mt-1 max-w-2xl leading-relaxed">
                All courses are structured according to SPPU Board of Studies in Computer Engineering, integrating hands-on Unix shell scripting, kernel synchronization, cryptographic implementations, and forensic analysis.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <Link
                to="/resources"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#0F2942] hover:bg-[#1A3E61] rounded-md transition-all shadow-xs min-h-[40px]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Lab Manuals & Courseware</span>
              </Link>
              <a
                href={PROFESSOR_INFO.universityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#334155] bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-md transition-colors min-h-[40px]"
              >
                <span>SPPU Syllabus Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Interactive Master-Detail Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Column: Course Selector List */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs uppercase font-bold tracking-wider text-[#64748B] px-1">
                Courses Taught (6 Core Subjects)
              </div>

              <div className="space-y-2">
                {COURSES.map((course) => {
                  const isSelected = course.code === activeCourseId;
                  return (
                    <button
                      key={course.code}
                      onClick={() => setActiveCourseId(course.code)}
                      className={`w-full text-left p-4 rounded-lg border transition-all cursor-pointer min-h-[44px] ${
                        isSelected
                          ? 'bg-[#0F2942] text-white border-[#0F2942] shadow-sm ring-1 ring-[#0F2942]'
                          : 'bg-white text-[#1E293B] border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FAFC]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-mono text-xs font-bold ${isSelected ? 'text-amber-300' : 'text-[#0F2942]'}`}>
                          {course.code}
                        </span>
                        <span className={`text-[11px] ${isSelected ? 'text-slate-300' : 'text-[#64748B]'}`}>
                          {course.level}
                        </span>
                      </div>

                      <div className="font-bold text-sm mt-1 leading-snug break-words">
                        {course.title}
                      </div>

                      <div className={`text-xs mt-1 ${isSelected ? 'text-slate-300' : 'text-[#64748B]'}`}>
                        {course.semester}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Quick Consultation CTA */}
              <div className="p-4 bg-[#FAF8F5] border border-[#E7E2D8] rounded-lg text-xs space-y-2">
                <strong className="text-[#0F2942] block font-bold">
                  Student Consultation Hours:
                </strong>
                <p className="text-[#52525B]">
                  {PROFESSOR_INFO.officeHours}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 font-semibold text-[#0F2942] hover:underline pt-1 min-h-[36px]"
                >
                  <span>Schedule Academic Meeting</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Right Column: Deep Course Syllabus & Laboratory Detail */}
            <div className="lg:col-span-8 bg-white rounded-lg border border-[#E2E8F0] p-5 sm:p-8 shadow-2xs space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCourse.code}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="space-y-8"
                >
                  {/* Header of Active Course */}
                  <div className="border-b border-[#F1F5F9] pb-6 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-1 text-xs font-bold font-mono bg-[#0F2942] text-white rounded-xs">
                        {activeCourse.code}
                      </span>
                      <span className="text-xs text-[#64748B]">
                        SPPU B.E. Computer Engineering • {activeCourse.semester}
                      </span>
                    </div>

                    <h3 className="font-serif-academic text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F2942] break-words">
                      {activeCourse.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed pt-1 break-words">
                      {activeCourse.description}
                    </p>
                  </div>

                  {/* Course Syllabus Topics */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#0F2942] shrink-0" />
                      <h4 className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
                        Core Syllabus Modules & Topics
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {activeCourse.topics.map((topic, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] space-y-1 hover:border-[#CBD5E1] transition-colors"
                        >
                          <span className="font-mono font-bold text-[#0F2942] block">
                            Module {idx + 1}
                          </span>
                          <span className="font-semibold text-[#1E293B] block break-words">
                            {topic}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Laboratory Assignments */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-[#0F2942] shrink-0" />
                        <h4 className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
                          Prescribed Laboratory Practical Experiments
                        </h4>
                      </div>

                      <Link
                        to="/resources"
                        className="text-xs font-semibold text-[#0F2942] hover:underline flex items-center gap-1"
                      >
                        <Download className="w-3 h-3" />
                        <span>Download Lab Manual</span>
                      </Link>
                    </div>

                    <div className="space-y-2 text-xs">
                      {activeCourse.labHighlights.map((lab, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-3"
                        >
                          <span className="w-6 h-6 rounded-full bg-[#0F2942] text-white flex items-center justify-center font-mono font-bold text-[11px] shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-[#334155] leading-relaxed break-words">
                            {lab}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Prescribed Textbooks & References */}
                  <div className="space-y-4 pt-2 border-t border-[#F1F5F9]">
                    <div className="flex items-center gap-2">
                      <FlaskConical className="w-4 h-4 text-[#0F2942] shrink-0" />
                      <h4 className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
                        Prescribed Textbook & Authoritative Reference
                      </h4>
                    </div>

                    <div className="p-3.5 bg-[#FAF8F5] border border-[#E7E2D8] rounded-md text-xs text-[#334155]">
                      <strong className="text-[#0F2942] block mb-1">Recommended University Reference:</strong>
                      <span className="leading-relaxed block break-words">{activeCourse.recommendedText}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
