import { AUTHORED_BOOK } from '../data/professorData';
import { BookMarked, Layers, CheckCircle2, Quote, BookOpen } from 'lucide-react';
import { useState } from 'react';

export function BookHighlight() {
  const [copiedBib, setCopiedBib] = useState(false);

  const bookBibtex = `@book{bhabad2023blockchain,
  author    = {Harish Parshuram Bhabad},
  title     = {Blockchain Enabled Secure Big Data Computing for Smart Cities},
  publisher = {Academic Academician Press and Institutional Publications},
  year      = {2023},
  isbn      = {978-93-94812-44-1}
}`;

  const copyBibtex = async () => {
    try {
      await navigator.clipboard.writeText(bookBibtex);
      setCopiedBib(true);
      setTimeout(() => setCopiedBib(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="book" className="py-14 sm:py-16 border-b border-[#E3E3DC] bg-[#F3F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-[#D5D5CA] p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Book Cover Graphic */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-64 sm:w-72 bg-[#0F2942] text-white rounded-md p-6 shadow-xl border-l-8 border-[#1A3E61] relative overflow-hidden flex flex-col justify-between aspect-3/4">
                {/* Header Banner */}
                <div className="border-b border-white/20 pb-4">
                  <div className="text-[10px] tracking-widest uppercase font-mono text-amber-300">
                    Scholarly Monograph
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    Academician Press
                  </div>
                </div>

                {/* Title */}
                <div className="my-auto py-4">
                  <div className="font-serif-academic text-2xl font-bold leading-tight text-white">
                    Blockchain Enabled Secure Big Data Computing
                  </div>
                  <div className="text-xs text-amber-200 mt-2 font-medium tracking-wide">
                    for Smart Cities
                  </div>
                </div>

                {/* Author Footer */}
                <div className="border-t border-white/20 pt-4">
                  <div className="text-xs font-semibold text-white">
                    {AUTHORED_BOOK.author}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    ISBN {AUTHORED_BOOK.isbn} • {AUTHORED_BOOK.publicationYear}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Book Content & Chapters */}
            <div className="lg:col-span-8 space-y-5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold bg-[#E2E8F0] text-[#0F2942] rounded-xs uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5" />
                  Authored Scholarly Book
                </div>
                <h3 className="font-serif-academic text-2xl sm:text-3xl font-bold text-[#0F2942] mt-1">
                  {AUTHORED_BOOK.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] font-medium">
                  {AUTHORED_BOOK.subtitle}
                </p>
              </div>

              <p className="text-sm text-[#334155] leading-relaxed">
                {AUTHORED_BOOK.description}
              </p>

              <div className="bg-[#F8FAFC] p-4 rounded-md border border-[#E2E8F0] space-y-2">
                <div className="text-xs font-bold text-[#0F2942] uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  Key Chapter Modules Covered
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#334155]">
                  {AUTHORED_BOOK.chapters.map((chap, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{chap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-[#64748B] border-t border-[#E2E8F0]">
                <div className="flex items-center gap-3">
                  <span><strong>Publisher:</strong> {AUTHORED_BOOK.publisher}</span>
                  <span>•</span>
                  <span><strong>Year:</strong> {AUTHORED_BOOK.publicationYear}</span>
                </div>

                <button
                  onClick={copyBibtex}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0F2942] bg-white border border-[#CBD5E1] rounded-md hover:bg-[#F1F5F9] transition-colors cursor-pointer"
                >
                  <Quote className="w-3.5 h-3.5" />
                  <span>{copiedBib ? 'BibTeX Copied!' : 'Copy Book Citation'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
