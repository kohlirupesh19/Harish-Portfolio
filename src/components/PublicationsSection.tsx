import { useState, useMemo } from 'react';
import { PUBLICATIONS } from '../data/professorData';
import { Publication, ResearchDomain, PublicationType } from '../types';
import { 
  Search, 
  Filter, 
  ExternalLink, 
  FileCode, 
  Quote, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  X,
  BookMarked,
  Sparkles
} from 'lucide-react';

interface PublicationsSectionProps {
  selectedDomain: ResearchDomain;
  onSelectDomain: (domain: ResearchDomain) => void;
}

export function PublicationsSection({ selectedDomain, onSelectDomain }: PublicationsSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({});
  const [activeCitePub, setActiveCitePub] = useState<Publication | null>(null);
  const [copiedBibtex, setCopiedBibtex] = useState(false);
  const [copiedAPA, setCopiedAPA] = useState(false);

  const domains: ResearchDomain[] = [
    'All',
    'Post-Quantum & Cryptography',
    'Blockchain & Smart Systems',
    'Machine Learning & AI',
    'Cyber Security & Forensics',
    'Cloud & Distributed Computing',
  ];

  const types = ['All', 'Journal', 'Conference', 'Review'];

  const filteredPublications = useMemo(() => {
    return PUBLICATIONS.filter((pub) => {
      // Domain filter
      if (selectedDomain !== 'All' && pub.domain !== selectedDomain) {
        return false;
      }
      // Type filter
      if (selectedType !== 'All' && pub.type !== selectedType) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = pub.title.toLowerCase().includes(query);
        const matchesVenue = pub.venue.toLowerCase().includes(query);
        const matchesAuthors = pub.authors.some((a) => a.toLowerCase().includes(query));
        const matchesKeywords = pub.keywords.some((k) => k.toLowerCase().includes(query));
        if (!matchesTitle && !matchesVenue && !matchesAuthors && !matchesKeywords) {
          return false;
        }
      }
      return true;
    });
  }, [selectedDomain, selectedType, searchQuery]);

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const copyToClipboard = async (text: string, type: 'bibtex' | 'apa') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'bibtex') {
        setCopiedBibtex(true);
        setTimeout(() => setCopiedBibtex(false), 2000);
      } else {
        setCopiedAPA(true);
        setTimeout(() => setCopiedAPA(false), 2000);
      }
    } catch {
      // Fallback
    }
  };

  const generateAPACitation = (pub: Publication) => {
    const authorStr = pub.authors.join(', ');
    return `${authorStr} (${pub.year}). ${pub.title}. ${pub.venue}. ${pub.doi ? `https://doi.org/${pub.doi}` : ''}`;
  };

  return (
    <section id="publications" className="py-14 sm:py-16 border-b border-[#E3E3DC] bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold text-[#0F2942]">
              Scholarly Contributions
            </div>
            <h2 className="font-serif-academic text-2xl sm:text-3xl lg:text-4xl text-[#0F2942] mt-1">
              Peer-Reviewed Publications & Proceedings
            </h2>
            <p className="mt-2 text-sm text-[#52525B] max-w-2xl">
              Research publications across international peer-reviewed journals, IEEE and Springer conferences, and indexed academic symposiums.
            </p>
          </div>

          <div className="text-xs text-[#64748B] flex items-center gap-2">
            <span className="font-semibold text-[#0F2942]">{filteredPublications.length}</span>
            <span>of</span>
            <span className="font-semibold text-[#0F2942]">{PUBLICATIONS.length}</span>
            <span>works indexed</span>
          </div>
        </div>

        {/* Search & Filters Bar */}
        <div className="bg-white rounded-lg border border-[#E2E8F0] p-4 sm:p-5 shadow-2xs mb-8 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
            <input
              type="text"
              id="pub-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by paper title, author, keyword, or journal name..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-[#F8FAFC] border border-[#CBD5E1] rounded-md focus:outline-hidden focus:border-[#0F2942] focus:ring-1 focus:ring-[#0F2942] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#94A3B8] hover:text-[#0F2942]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Domain Filter Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-xs font-semibold text-[#475569] sm:w-20 shrink-0">
              Domain:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {domains.map((domain) => (
                <button
                  key={domain}
                  onClick={() => onSelectDomain(domain)}
                  className={`px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                    selectedDomain === domain
                      ? 'bg-[#0F2942] text-white font-medium'
                      : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]'
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>

          {/* Type Filter Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-2 border-t border-[#F1F5F9]">
            <span className="text-xs font-semibold text-[#475569] sm:w-20 shrink-0">
              Type:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-2.5 py-0.5 text-xs rounded-md transition-colors cursor-pointer ${
                    selectedType === type
                      ? 'bg-[#334155] text-white font-medium'
                      : 'bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Publications List */}
        {filteredPublications.length === 0 ? (
          <div className="bg-white rounded-lg border border-[#E2E8F0] p-12 text-center text-[#64748B]">
            <p className="text-base font-medium text-[#1E293B]">No publications match your criteria</p>
            <p className="text-xs mt-1">Try clearing search keywords or selecting "All" domains.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectDomain('All');
                setSelectedType('All');
              }}
              className="mt-4 px-3 py-1.5 text-xs font-semibold text-[#0F2942] bg-[#F1F5F9] rounded-md hover:bg-[#E2E8F0]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredPublications.map((pub, idx) => {
              const isExpanded = expandedAbstracts[pub.id] ?? false;
              return (
                <article
                  key={pub.id}
                  id={`pub-${pub.id}`}
                  className="bg-white rounded-lg border border-[#E2E8F0] p-5 sm:p-6 shadow-2xs hover:border-[#CBD5E1] transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                    <div className="space-y-2 flex-1">
                      {/* Meta Tags */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-xs bg-[#0F2942] text-white">
                          {pub.type}
                        </span>
                        <span className="px-2 py-0.5 text-[11px] font-medium rounded-xs bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0]">
                          {pub.domain}
                        </span>
                        <span className="text-xs font-semibold text-[#0F2942]">
                          {pub.year}
                        </span>
                        {pub.highlight && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold text-amber-800 bg-amber-50 border border-amber-200 rounded-xs">
                            <Sparkles className="w-3 h-3 text-amber-600" />
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-semibold text-[#0F2942] leading-snug">
                        {pub.title}
                      </h3>

                      {/* Authors */}
                      <div className="text-xs sm:text-sm text-[#475569]">
                        {pub.authors.map((author, aIdx) => {
                          const isHarish = author.includes('Harish') || author.includes('Bhabad');
                          return (
                            <span key={aIdx}>
                              {isHarish ? (
                                <strong className="text-[#0F2942] font-semibold underline decoration-slate-300">
                                  {author}
                                </strong>
                              ) : (
                                <span>{author}</span>
                              )}
                              {aIdx < pub.authors.length - 1 ? ', ' : ''}
                            </span>
                          );
                        })}
                      </div>

                      {/* Venue & DOI */}
                      <div className="text-xs text-[#64748B] italic flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span>{pub.venue}</span>
                        {pub.doi && (
                          <>
                            <span>•</span>
                            <span className="font-mono not-italic text-[11px] text-[#475569]">
                              DOI: {pub.doi}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Keywords */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {pub.keywords.map((kw, kwIdx) => (
                          <span
                            key={kwIdx}
                            className="px-1.5 py-0.5 text-[10px] bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0] rounded-xs"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right side actions */}
                    <div className="flex md:flex-col items-center md:items-end gap-2 shrink-0 pt-2 md:pt-0">
                      {pub.citationsCount !== undefined && (
                        <div className="text-[11px] text-[#475569] bg-[#F1F5F9] px-2 py-1 rounded-sm border border-[#E2E8F0] font-medium">
                          {pub.citationsCount} Citations
                        </div>
                      )}

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setActiveCitePub(pub)}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-[#0F2942] bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#CBD5E1] rounded-md transition-colors cursor-pointer"
                          title="Cite paper in BibTeX or APA"
                        >
                          <Quote className="w-3.5 h-3.5" />
                          <span>Cite</span>
                        </button>

                        {pub.url && (
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-[#475569] hover:text-[#0F2942] bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#CBD5E1] rounded-md transition-colors"
                            title="View paper page or DOI"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Link</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Abstract Expandable Area */}
                  <div className="mt-4 pt-3 border-t border-[#F1F5F9]">
                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#475569] hover:text-[#0F2942] cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Abstract' : 'View Abstract'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-2 text-xs sm:text-sm text-[#334155] leading-relaxed bg-[#F8FAFC] p-3.5 rounded-md border border-[#E2E8F0]">
                        <p>{pub.abstract}</p>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Citation Modal */}
      {activeCitePub && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-lg border border-[#CBD5E1] shadow-xl max-w-2xl w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider font-semibold text-[#64748B]">
                  Citation Reference
                </div>
                <h3 className="text-base font-semibold text-[#0F2942] leading-snug mt-1">
                  {activeCitePub.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveCitePub(null)}
                className="text-[#94A3B8] hover:text-[#0F2942] p-1 cursor-pointer"
                aria-label="Close Citation Dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* APA Formatted */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#334155]">APA Citation</span>
                <button
                  onClick={() => copyToClipboard(generateAPACitation(activeCitePub), 'apa')}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#0F2942] hover:underline cursor-pointer"
                >
                  {copiedAPA ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <span>Copy APA</span>
                  )}
                </button>
              </div>
              <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md text-xs text-[#334155] font-serif-academic leading-relaxed">
                {generateAPACitation(activeCitePub)}
              </div>
            </div>

            {/* BibTeX Formatted */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#334155]">BibTeX Entry</span>
                <button
                  onClick={() => copyToClipboard(activeCitePub.bibtex, 'bibtex')}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#0F2942] hover:underline cursor-pointer"
                >
                  {copiedBibtex ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <span>Copy BibTeX</span>
                  )}
                </button>
              </div>
              <pre className="p-3 bg-[#0F172A] text-[#E2E8F0] border border-[#1E293B] rounded-md text-[11px] font-mono leading-relaxed overflow-x-auto">
                {activeCitePub.bibtex}
              </pre>
            </div>

            <div className="pt-3 border-t border-[#E2E8F0] flex justify-end">
              <button
                onClick={() => setActiveCitePub(null)}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-[#0F2942] rounded-md hover:bg-[#1E3A5F] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
