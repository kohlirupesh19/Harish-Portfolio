import { useState } from 'react';
import { COURSES } from '../data/professorData';
import { Course } from '../types';
import { 
  BookOpen, 
  Terminal, 
  Layers, 
  CheckCircle2, 
  FileText, 
  ExternalLink,
  GraduationCap,
  FlaskConical,
  Library
} from 'lucide-react';

export function TeachingSection() {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const activeCourse = COURSES[selectedCourseIndex];

  return (
    <section id="teaching" className="py-14 sm:py-16 border-b border-[#E3E3DC] bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold text-[#0F2942]">
              Instruction & Pedagogy
            </div>
            <h2 className="font-serif-academic text-2xl sm:text-3xl lg:text-4xl text-[#0F2942] mt-1">
              Courses Taught & Laboratory Curriculum
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#52525B] max-w-2xl leading-relaxed">
              Curriculum delivered for Savitribai Phule Pune University (SPPU) Bachelor of Engineering (B.E.) in Computer Engineering, emphasizing deep systems foundations, lab rigor, and industry standards.
            </p>
          </div>

          <div className="text-xs text-[#64748B] bg-white px-3 py-1.5 rounded-md border border-[#E2E8F0] shadow-2xs">
            <span>SPPU Pune Affiliated Syllabus</span>
          </div>
        </div>

        {/* Course Navigation Pills / Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-3 mb-6 scrollbar-thin">
          {COURSES.map((course, idx) => {
            const isSelected = selectedCourseIndex === idx;
            return (
              <button
                key={course.code}
                onClick={() => setSelectedCourseIndex(idx)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0F2942] text-white shadow-xs'
                    : 'bg-white text-[#475569] border border-[#E2E8F0] hover:bg-[#F1F5F9]'
                }`}
              >
                <span className="font-mono text-[11px] opacity-80">{course.code}</span>
                <span>{course.title.split('(')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Course Detail Card */}
        <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-6 sm:p-8 space-y-6">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#F1F5F9]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 text-xs font-mono font-bold bg-[#0F2942] text-white rounded-xs">
                  {activeCourse.code}
                </span>
                <span className="px-2 py-0.5 text-xs font-medium bg-[#F1F5F9] text-[#334155] rounded-xs border border-[#E2E8F0]">
                  {activeCourse.level}
                </span>
                <span className="text-xs text-[#64748B] font-medium">
                  {activeCourse.semester}
                </span>
              </div>
              <h3 className="font-serif-academic text-2xl sm:text-3xl font-bold text-[#0F2942]">
                {activeCourse.title}
              </h3>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href="#resources"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0F2942] bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-md transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Lab Manuals & Notes</span>
              </a>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
            {activeCourse.description}
          </p>

          {/* Two Columns: Lecture Topics & Lab Experiments */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
            {/* Lecture Syllabus Topics */}
            <div className="bg-[#F8FAFC] p-5 rounded-lg border border-[#E2E8F0] space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F2942] uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-[#0F2942]" />
                <span>Key Theoretical Modules & Units</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#334155]">
                {activeCourse.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#0F2942] font-semibold text-xs mt-0.5">{i + 1}.</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical Laboratory Assignments */}
            <div className="bg-[#F8FAFC] p-5 rounded-lg border border-[#E2E8F0] space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F2942] uppercase tracking-wider">
                <FlaskConical className="w-4 h-4 text-emerald-700" />
                <span>Hands-on Laboratory Assignments</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#334155]">
                {activeCourse.labHighlights.map((lab, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{lab}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recommended Textbook Footer */}
          <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E7E2D8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#52525B]">
            <div className="flex items-center gap-2">
              <Library className="w-4 h-4 text-[#0F2942] shrink-0" />
              <span>
                <strong>Primary Recommended Textbook:</strong> {activeCourse.recommendedText}
              </span>
            </div>
            <span className="text-[11px] text-[#71717A] italic">
              Compliant with SPPU Syllabus & Credit System (CBCS)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
