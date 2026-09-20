import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { AUTHORED_BOOK, PROFESSOR_INFO } from '../data/professorData';
import { 
  BookOpen, 
  Copy, 
  Check, 
  ShieldCheck, 
  ExternalLink, 
  Download, 
  Layers, 
  CheckCircle2,
  Mail,
  GraduationCap
} from 'lucide-react';

export function BookPage() {
  const [copiedBibtex, setCopiedBibtex] = useState(false);
  const [copiedApa, setCopiedApa] = useState(false);
  const [showInspectionModal, setShowInspectionModal] = useState(false);
  const [inspectionSubmitted, setInspectionSubmitted] = useState(false);

  const apaCitation = `${AUTHORED_BOOK.author} (${AUTHORED_BOOK.publicationYear}). ${AUTHORED_BOOK.title}: ${AUTHORED_BOOK.subtitle}. Academic Publishing House. ISBN: ${AUTHORED_BOOK.isbn}.`;

  const copyCitation = (text: string, format: 'bibtex' | 'apa') => {
    navigator.clipboard.writeText(text);
    if (format === 'bibtex') {
      setCopiedBibtex(true);
      setTimeout(() => setCopiedBibtex(false), 2000);
    } else {
      setCopiedApa(true);
      setTimeout(() => setCopiedApa(false), 2000);
    }
  };

  return (
    <div className="bg-[#FBFBF9] min-h-screen">
      <PageHeader
        category="Scholarly Monograph"
        title={AUTHORED_BOOK.title}
        description={AUTHORED_BOOK.subtitle}
        breadcrumb="Authored Book"
        badge={`ISBN: ${AUTHORED_BOOK.isbn}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Main Book Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Realistic Academic Hardcover Representation */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="w-full max-w-sm bg-[#0F2942] text-white rounded-lg shadow-xl border border-[#1E3A5F] p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[11px] uppercase tracking-widest font-bold text-amber-300">
                  Academic Monograph
                </span>
                <span className="text-xs font-mono text-slate-300">
                  {AUTHORED_BOOK.publicationYear}
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="font-serif-academic text-2xl font-bold leading-snug text-white">
                  {AUTHORED_BOOK.title}
                </h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {AUTHORED_BOOK.subtitle}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-2 text-xs">
                <div className="text-slate-300">
                  <span className="text-slate-400 block text-[10px] uppercase">Author:</span>
                  <span className="font-bold text-white">{AUTHORED_BOOK.author}</span>
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-400 block text-[10px] uppercase">Affiliation:</span>
                  <span>{PROFESSOR_INFO.institution}</span>
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-400 block text-[10px] uppercase">ISBN-13:</span>
                  <span className="font-mono text-amber-200">{AUTHORED_BOOK.isbn}</span>
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-400 block text-[10px] uppercase">Target Scope:</span>
                  <span>Post-Graduate & Research Engineering</span>
                </div>
              </div>
            </div>

            <div className="mt-6 w-full max-w-sm space-y-2">
              <button
                onClick={() => setShowInspectionModal(true)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0F2942] hover:bg-[#1A3E61] rounded-md transition-colors shadow-xs cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Request Academic Inspection Copy</span>
              </button>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-[#334155] bg-white border border-[#CBD5E1] hover:bg-[#F8FAFC] rounded-md transition-colors"
              >
                <span>Inquire About Syllabus Adoption</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Book Overview & Technical Contributions */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 sm:p-8 shadow-2xs space-y-4">
              <div className="text-xs uppercase font-bold tracking-widest text-[#0F2942]">
                Book Synopsis & Context
              </div>
              <h3 className="font-serif-academic text-xl sm:text-2xl font-bold text-[#0F2942]">
                Architectural Foundations for Resilient Smart Cities
              </h3>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                {AUTHORED_BOOK.description}
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#334155]">
                <div className="p-3 bg-[#F8FAFC] rounded-md border border-[#E2E8F0]">
                  <strong className="text-[#0F2942] block mb-1">
                    Distributed Ledger Consensus
                  </strong>
                  Detailed comparison between Proof-of-Work, Proof-of-Stake, and Practical Byzantine Fault Tolerance (PBFT) in high-throughput urban IoT meshes.
                </div>
                <div className="p-3 bg-[#F8FAFC] rounded-md border border-[#E2E8F0]">
                  <strong className="text-[#0F2942] block mb-1">
                    Cryptographic Privacy Controls
                  </strong>
                  Homomorphic encryption and zero-knowledge verification frameworks that enable analytics over municipal sensor telemetry without exposing citizen identity.
                </div>
              </div>
            </div>

            {/* Complete Chapters Breakdown */}
            <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 sm:p-8 shadow-2xs space-y-6">
              <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4">
                <div>
                  <div className="text-xs uppercase font-bold tracking-widest text-[#0F2942]">
                    Table of Contents
                  </div>
                  <h3 className="font-serif-academic text-lg sm:text-xl font-bold text-[#0F2942] mt-0.5">
                    Complete Chapter Breakdown
                  </h3>
                </div>
                <span className="text-xs text-[#64748B] font-medium">
                  {AUTHORED_BOOK.chapters.length} Core Chapters
                </span>
              </div>

              <div className="space-y-4">
                {AUTHORED_BOOK.chapters.map((chap, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] space-y-1 hover:border-[#CBD5E1] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 text-xs font-bold bg-[#0F2942] text-white rounded-xs">
                        Chapter {idx + 1}
                      </span>
                      <h4 className="font-bold text-sm text-[#0F2942]">
                        {chap}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Citation Formats */}
            <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-2xs space-y-4">
              <div className="text-xs uppercase font-bold tracking-widest text-[#0F2942]">
                Scholarly Reference
              </div>
              <h3 className="font-serif-academic text-base font-bold text-[#0F2942]">
                Cite This Book
              </h3>

              {/* APA */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#475569]">APA 7th Edition</span>
                  <button
                    onClick={() => copyCitation(apaCitation, 'apa')}
                    className="text-xs font-semibold text-[#0F2942] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    {copiedApa ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy APA</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md text-xs text-[#334155] leading-relaxed">
                  {apaCitation}
                </div>
              </div>

              {/* BibTeX */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#475569]">BibTeX Format</span>
                  <button
                    onClick={() => copyCitation(AUTHORED_BOOK.bibtex, 'bibtex')}
                    className="text-xs font-semibold text-[#0F2942] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    {copiedBibtex ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy BibTeX</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-3 bg-[#0F1D2B] text-slate-200 rounded-md text-xs font-mono overflow-x-auto leading-relaxed">
                  {AUTHORED_BOOK.bibtex}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inspection Copy Modal */}
      {showInspectionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-lg border border-[#CBD5E1] shadow-xl max-w-lg w-full p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
                  Academic Inspection Request
                </span>
                <h3 className="text-base font-bold text-[#0F2942] mt-0.5">
                  Request Desk Copy for Course Evaluation
                </h3>
              </div>
              <button
                onClick={() => {
                  setShowInspectionModal(false);
                  setInspectionSubmitted(false);
                }}
                className="text-[#94A3B8] hover:text-[#0F2942] p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {inspectionSubmitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-md text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <div className="text-sm font-bold text-emerald-900">
                  Request Recorded
                </div>
                <p className="text-xs text-emerald-800">
                  Thank you, Professor. Your request has been routed to Prof. Harish Bhabad's office. You will receive digital evaluation access coordinates shortly.
                </p>
                <button
                  onClick={() => {
                    setShowInspectionModal(false);
                    setInspectionSubmitted(false);
                  }}
                  className="mt-2 px-4 py-1.5 text-xs font-semibold text-white bg-emerald-700 rounded-md hover:bg-emerald-800 cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInspectionSubmitted(true);
                }}
                className="space-y-3 text-xs"
              >
                <p className="text-[#64748B]">
                  Complimentary inspection copies are available to verified faculty adopting or considering this text for B.E./B.Tech or M.Tech curricula.
                </p>
                <div>
                  <label className="block font-semibold text-[#334155] mb-1">
                    Faculty Name & Title *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Dr. Rajesh Sharma, Associate Professor"
                    className="w-full p-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded-md text-xs focus:outline-hidden focus:border-[#0F2942]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#334155] mb-1">
                    University / College Institution *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Pune University Affiliated College"
                    className="w-full p-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded-md text-xs focus:outline-hidden focus:border-[#0F2942]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#334155] mb-1">
                    Institutional Email (.edu / .ac.in) *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="rsharma@college.edu.in"
                    className="w-full p-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded-md text-xs focus:outline-hidden focus:border-[#0F2942]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#334155] mb-1">
                    Course Title & Expected Student Strength
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Distributed Systems & Security (75 Students)"
                    className="w-full p-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded-md text-xs focus:outline-hidden focus:border-[#0F2942]"
                  />
                </div>
                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowInspectionModal(false)}
                    className="px-3 py-1.5 text-xs text-[#64748B] hover:text-[#0F2942] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 text-xs font-semibold text-white bg-[#0F2942] hover:bg-[#1A3E61] rounded-md cursor-pointer"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
