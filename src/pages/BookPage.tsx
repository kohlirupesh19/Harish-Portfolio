import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { PageTransition } from '../components/PageTransition';
import { AUTHORED_BOOK, PROFESSOR_INFO } from '../data/professorData';
import professorPortrait from '../assets/prof_harish_bhabad.png';
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
  GraduationCap,
  X
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
    <PageTransition className="bg-[#FBFBF9] min-h-screen overflow-hidden">
      <PageHeader
        category="Scholarly Monograph"
        title={AUTHORED_BOOK.title}
        description={AUTHORED_BOOK.subtitle}
        breadcrumb="Authored Book"
        badge={`ISBN: ${AUTHORED_BOOK.isbn}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-10 sm:space-y-12">
        {/* Main Book Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Realistic Academic Hardcover Representation */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="w-full max-w-sm bg-[#0F2942] text-white rounded-lg shadow-xl border border-[#1E3A5F] p-6 sm:p-8 space-y-6 relative overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[11px] uppercase tracking-widest font-bold text-amber-300">
                  Academic Monograph
                </span>
                <span className="text-xs font-mono text-slate-300">
                  {AUTHORED_BOOK.publicationYear}
                </span>
              </div>

              <div className="space-y-2 py-4">
                <h2 className="font-serif-academic text-2xl sm:text-3xl font-bold leading-tight text-white text-break-academic">
                  {AUTHORED_BOOK.title}
                </h2>
                <p className="text-xs text-amber-200 font-medium tracking-wide">
                  {AUTHORED_BOOK.subtitle}
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2 text-xs text-slate-300">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Author:</span>
                  <span className="font-bold text-white">{AUTHORED_BOOK.author}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Publisher:</span>
                  <span>{AUTHORED_BOOK.publisher}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Affiliation:</span>
                  <span>{PROFESSOR_INFO.institution}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">ISBN-13:</span>
                  <span className="font-mono text-amber-200">{AUTHORED_BOOK.isbn}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Target Scope:</span>
                  <span>Post-Graduate & Research Engineering</span>
                </div>
              </div>
            </motion.div>

            <div className="mt-6 w-full max-w-sm space-y-2">
              <button
                onClick={() => setShowInspectionModal(true)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0F2942] hover:bg-[#1A3E61] rounded-md transition-all shadow-xs cursor-pointer min-h-[44px] hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail className="w-4 h-4" />
                <span>Request Academic Inspection Copy</span>
              </button>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-[#334155] bg-white border border-[#CBD5E1] hover:bg-[#F8FAFC] rounded-md transition-all min-h-[44px] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Inquire About Syllabus Adoption</span>
              </Link>
            </div>

            {/* Author Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mt-6 w-full max-w-sm bg-white rounded-lg border border-[#E2E8F0] p-4 shadow-2xs space-y-3 card-academic-interactive"
            >
              <div className="text-[11px] uppercase font-bold tracking-wider text-[#64748B]">
                About the Author
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={professorPortrait}
                  alt={PROFESSOR_INFO.name}
                  className="w-14 h-auto aspect-[864/1024] object-cover rounded-md border border-[#CBD5E1] shadow-2xs shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="font-bold text-sm text-[#0F2942]">
                    {PROFESSOR_INFO.name}
                  </h3>
                  <div className="text-xs text-[#475569]">
                    {PROFESSOR_INFO.title}
                  </div>
                  <div className="text-[11px] text-[#64748B]">
                    {PROFESSOR_INFO.institution}
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed border-t border-[#F1F5F9] pt-2.5">
                Researcher specializing in Post-Quantum Cryptography, Blockchain, and Machine Learning with over a decade of university engineering education leadership.
              </p>
              <div className="flex items-center justify-between pt-1 text-xs">
                <Link to="/cv" className="font-semibold text-[#0F2942] hover:underline min-h-[32px] inline-flex items-center">
                  View Full CV →
                </Link>
                <Link to="/contact" className="text-[#64748B] hover:text-[#0F2942] min-h-[32px] inline-flex items-center">
                  Contact Desk
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Book Overview & Technical Contributions */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="bg-white rounded-lg border border-[#E2E8F0] p-5 sm:p-8 shadow-2xs space-y-4 card-academic-interactive"
            >
              <div className="text-xs uppercase font-bold tracking-widest text-[#0F2942]">
                Book Synopsis & Context
              </div>
              <h3 className="font-serif-academic text-xl sm:text-2xl font-bold text-[#0F2942] text-break-academic">
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
            </motion.div>

            {/* Complete Chapters Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="bg-white rounded-lg border border-[#E2E8F0] p-5 sm:p-8 shadow-2xs space-y-6"
            >
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

              <div className="space-y-3 sm:space-y-4">
                {AUTHORED_BOOK.chapters.map((chap, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] space-y-1 hover:border-[#CBD5E1] transition-colors"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="px-2 py-0.5 text-xs font-bold bg-[#0F2942] text-white rounded-xs shrink-0 mt-0.5">
                        Chapter {idx + 1}
                      </span>
                      <h4 className="font-bold text-xs sm:text-sm text-[#0F2942] text-break-academic">
                        {chap}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Citation Formats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="bg-white rounded-lg border border-[#E2E8F0] p-5 sm:p-6 shadow-2xs space-y-4"
            >
              <div className="text-xs uppercase font-bold tracking-widest text-[#0F2942]">
                Scholarly Reference
              </div>
              <h3 className="font-serif-academic text-base font-bold text-[#0F2942]">
                Citation & Reference Metadata
              </h3>

              <div className="space-y-3">
                <div className="p-3 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0F2942]">APA Format</span>
                    <button
                      onClick={() => copyCitation(apaCitation, 'apa')}
                      className="inline-flex items-center gap-1 text-[#0F2942] hover:underline font-semibold cursor-pointer min-h-[32px]"
                    >
                      {copiedApa ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedApa ? 'Copied APA!' : 'Copy Citation'}</span>
                    </button>
                  </div>
                  <p className="text-xs text-[#475569] font-mono leading-relaxed text-break-academic">
                    {apaCitation}
                  </p>
                </div>

                <div className="p-3 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0F2942]">BibTeX Entry</span>
                    <button
                      onClick={() => copyCitation(AUTHORED_BOOK.bibtex, 'bibtex')}
                      className="inline-flex items-center gap-1 text-[#0F2942] hover:underline font-semibold cursor-pointer min-h-[32px]"
                    >
                      {copiedBibtex ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedBibtex ? 'Copied BibTeX!' : 'Copy BibTeX'}</span>
                    </button>
                  </div>
                  <pre className="text-[11px] font-mono text-[#334155] overflow-x-auto whitespace-pre p-2 bg-white rounded-sm border border-[#CBD5E1]">
                    {AUTHORED_BOOK.bibtex}
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Inspection Modal */}
      <AnimatePresence>
        {showInspectionModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-lg border border-[#CBD5E1] shadow-xl max-w-lg w-full p-5 sm:p-6 space-y-4 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif-academic text-lg font-bold text-[#0F2942]">
                    Request Faculty Inspection Copy
                  </h3>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    "Blockchain Enabled Secure Big Data Computing for Smart Cities"
                  </p>
                </div>
                <button
                  onClick={() => setShowInspectionModal(false)}
                  className="p-1.5 text-[#94A3B8] hover:text-[#0F2942] rounded-md min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {inspectionSubmitted ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-md text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <div className="text-sm font-bold text-emerald-900">
                    Request Recorded
                  </div>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Thank you, Professor. Your request has been routed to Prof. Harish Bhabad's office. You will receive digital evaluation access coordinates shortly.
                  </p>
                  <button
                    onClick={() => {
                      setShowInspectionModal(false);
                      setInspectionSubmitted(false);
                    }}
                    className="mt-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 rounded-md hover:bg-emerald-800 cursor-pointer min-h-[38px]"
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
                      className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-md text-xs focus-visible:outline-2 focus-visible:outline-[#0F2942] min-h-[40px]"
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
                      className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-md text-xs focus-visible:outline-2 focus-visible:outline-[#0F2942] min-h-[40px]"
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
                      className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-md text-xs focus-visible:outline-2 focus-visible:outline-[#0F2942] min-h-[40px]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-[#334155] mb-1">
                      Course Title & Expected Student Strength
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Distributed Systems & Security (75 Students)"
                      className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-md text-xs focus-visible:outline-2 focus-visible:outline-[#0F2942] min-h-[40px]"
                    />
                  </div>
                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowInspectionModal(false)}
                      className="px-3.5 py-2 text-xs text-[#64748B] hover:text-[#0F2942] cursor-pointer min-h-[40px]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#0F2942] hover:bg-[#1A3E61] rounded-md cursor-pointer min-h-[40px]"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
