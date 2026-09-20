import { Link } from 'react-router-dom';
import { HeroHeader } from '../components/HeroHeader';
import { 
  PROFESSOR_INFO, 
  RESEARCH_AREAS, 
  PUBLICATIONS, 
  AUTHORED_BOOK, 
  COURSES,
  WORKSHOPS_AND_EVENTS,
  GUIDED_STUDENT_PROJECTS
} from '../data/professorData';
import { 
  BookOpen, 
  ShieldCheck, 
  Cpu, 
  Terminal, 
  Network, 
  Boxes, 
  ArrowRight, 
  FileText, 
  Sparkles, 
  Calendar, 
  Award, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Users
} from 'lucide-react';

export function HomePage() {
  const featuredPubs = PUBLICATIONS.filter(p => p.highlight).slice(0, 3);
  const featuredCourses = COURSES.slice(0, 3);
  const recentEvent = WORKSHOPS_AND_EVENTS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#0F2942]" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-[#0F2942]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#0F2942]" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-[#0F2942]" />;
      case 'Network': return <Network className="w-5 h-5 text-[#0F2942]" />;
      default: return <Sparkles className="w-5 h-5 text-[#0F2942]" />;
    }
  };

  return (
    <div className="space-y-0">
      {/* Hero Header with Profile & Bio */}
      <HeroHeader />

      {/* Section 1: Research Thrusts Teaser */}
      <section className="py-14 sm:py-16 border-b border-[#E3E3DC] bg-[#F7F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest font-semibold text-[#0F2942]">
                Scholarly Research Focus
              </div>
              <h2 className="font-serif-academic text-2xl sm:text-3xl lg:text-4xl text-[#0F2942] mt-1 font-normal">
                Core Research Domains & Programs
              </h2>
              <p className="mt-2 text-sm text-[#52525B] max-w-2xl leading-relaxed">
                Investigating quantum-resistant cryptography, consortium blockchain architectures, and applied machine learning models for critical infrastructure.
              </p>
            </div>

            <Link
              to="/research"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2942] hover:text-[#183B5E] group"
            >
              <span>Explore All Research Programs</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESEARCH_AREAS.slice(0, 3).map((area) => (
              <div
                key={area.id}
                className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-2xs hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center mb-4">
                    {getIcon(area.icon)}
                  </div>
                  <h3 className="text-base font-bold text-[#0F2942] leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F1F5F9]">
                  <div className="flex flex-wrap gap-1.5">
                    {area.keyTopics.slice(0, 2).map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[11px] bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0] rounded-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Featured Publications Teaser */}
      <section className="py-14 sm:py-16 border-b border-[#E3E3DC] bg-[#FBFBF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest font-semibold text-[#0F2942]">
                Scholarly Dissemination
              </div>
              <h2 className="font-serif-academic text-2xl sm:text-3xl lg:text-4xl text-[#0F2942] mt-1 font-normal">
                Featured Peer-Reviewed Publications
              </h2>
              <p className="mt-2 text-sm text-[#52525B] max-w-2xl leading-relaxed">
                Selected recent publications across international journals and conference proceedings in post-quantum cryptography, blockchain security, and cyber forensics.
              </p>
            </div>

            <Link
              to="/publications"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2942] hover:text-[#183B5E] group"
            >
              <span>View Full Repository (14+ Papers)</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="space-y-4">
            {featuredPubs.map((pub) => (
              <div
                key={pub.id}
                className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-2xs hover:border-[#CBD5E1] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-xs font-semibold bg-[#0F2942] text-white rounded-xs">
                      {pub.type}
                    </span>
                    <span className="text-xs text-[#64748B] font-medium">
                      {pub.domain}
                    </span>
                  </div>
                  <span className="text-xs text-[#64748B] font-mono">
                    {pub.year}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0F2942] leading-snug">
                  {pub.title}
                </h3>

                <p className="text-xs text-[#475569] mt-1">
                  {pub.authors.join(', ')} • <em className="text-[#334155]">{pub.venue}</em>
                </p>

                <p className="text-xs sm:text-sm text-[#334155] mt-2.5 line-clamp-2 leading-relaxed">
                  {pub.abstract}
                </p>

                <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {pub.keywords.slice(0, 3).map((kw, i) => (
                      <span key={i} className="px-2 py-0.5 text-[11px] bg-[#F1F5F9] text-[#475569] rounded-xs">
                        {kw}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/publications"
                    className="inline-flex items-center gap-1 font-semibold text-[#0F2942] hover:underline"
                  >
                    <span>Read Paper Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Authored Book Spotlight */}
      <section className="py-14 sm:py-16 border-b border-[#E3E3DC] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-[#0F2942] text-white p-6 sm:p-8 rounded-lg shadow-xl border border-[#1E3A5F] max-w-sm w-full relative overflow-hidden">
                <div className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
                  Scholarly Monograph
                </div>
                <div className="font-serif-academic text-xl sm:text-2xl font-bold mt-2 leading-tight text-white">
                  {AUTHORED_BOOK.title}
                </div>
                <div className="text-xs text-slate-300 mt-2">
                  {AUTHORED_BOOK.subtitle}
                </div>
                <div className="mt-6 pt-4 border-t border-white/20 text-xs text-slate-300 space-y-1">
                  <div><strong>Author:</strong> {AUTHORED_BOOK.author}</div>
                  <div><strong>ISBN:</strong> {AUTHORED_BOOK.isbn}</div>
                  <div><strong>Year:</strong> {AUTHORED_BOOK.publicationYear}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs uppercase tracking-widest font-semibold text-[#0F2942]">
                Published Monograph
              </div>
              <h2 className="font-serif-academic text-2xl sm:text-3xl lg:text-4xl text-[#0F2942] font-normal">
                {AUTHORED_BOOK.title}
              </h2>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                {AUTHORED_BOOK.description}
              </p>
              <div className="pt-2">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0F2942] hover:bg-[#1A3E61] rounded-md transition-colors shadow-xs"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>View Chapter Outline & Book Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Teaching & Student Guidance Teaser */}
      <section className="py-14 sm:py-16 border-b border-[#E3E3DC] bg-[#FBFBF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Teaching Preview */}
            <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-2xs space-y-5">
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#0F2942]">
                  University Pedagogy
                </div>
                <Link to="/teaching" className="text-xs font-semibold text-[#0F2942] hover:underline flex items-center gap-1">
                  <span>View All 6 Courses</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>

              <h3 className="font-serif-academic text-xl sm:text-2xl font-bold text-[#0F2942]">
                Savitribai Phule Pune University Coursework
              </h3>
              <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                Delivering core B.E. Computer Engineering curriculum with rigorous laboratory assignments, kernel programming, and forensics pipelines.
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                {featuredCourses.map((c) => (
                  <div key={c.code} className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-[#0F2942]">{c.code}</span>
                      <span className="text-[11px] text-[#64748B]">{c.level}</span>
                    </div>
                    <div className="font-semibold text-[#1E293B] mt-0.5">{c.title}</div>
                    <div className="text-xs text-[#64748B] mt-0.5">{c.semester}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Institutional & Workshop Leadership */}
            <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-2xs space-y-5">
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#0F2942]">
                  Institutional Leadership
                </div>
                <Link to="/projects" className="text-xs font-semibold text-[#0F2942] hover:underline flex items-center gap-1">
                  <span>View Projects & Events</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>

              <h3 className="font-serif-academic text-xl sm:text-2xl font-bold text-[#0F2942]">
                Departmental & Campus Coordination
              </h3>
              <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                Active service in undergraduate placement readiness, national AICTE supercomputing initiatives, and laboratory leadership.
              </p>

              <div className="p-4 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-xs font-semibold bg-[#0F2942] text-white rounded-xs">
                    Featured Workshop
                  </span>
                  <span className="text-xs text-[#64748B]">{recentEvent.date}</span>
                </div>
                <div className="font-bold text-sm text-[#0F2942]">
                  {recentEvent.title}
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {recentEvent.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  to="/resources"
                  className="p-3 bg-[#FAF8F5] border border-[#E7E2D8] rounded-md text-xs hover:border-[#CBD5E1] transition-colors"
                >
                  <div className="font-bold text-[#0F2942]">Student Downloads</div>
                  <div className="text-[11px] text-[#64748B] mt-0.5">Lab manuals & study materials</div>
                </Link>
                <Link
                  to="/contact"
                  className="p-3 bg-[#FAF8F5] border border-[#E7E2D8] rounded-md text-xs hover:border-[#CBD5E1] transition-colors"
                >
                  <div className="font-bold text-[#0F2942]">Office Consultation</div>
                  <div className="text-[11px] text-[#64748B] mt-0.5">Room 204, LoGMIEER Nashik</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
