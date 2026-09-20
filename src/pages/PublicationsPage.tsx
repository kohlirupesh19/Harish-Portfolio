import { useState, useMemo } from 'react';
import { PageHeader } from '../components/PageHeader';
import { PUBLICATIONS, PROFESSOR_INFO } from '../data/professorData';
import { Publication, ResearchDomain } from '../types';
import { 
  Search, 
  Filter, 
  BookOpen, 
  ExternalLink, 
  Copy, 
  Check, 
  FileText, 
  X,
  Sparkles,
  Quote,
  ChevronDown,
  ArrowUpRight
} from 'lucide-react';

export function PublicationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<ResearchDomain>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'year' | 'citations'>('year');
  const [activeBibtex, setActiveBibtex] = useState<Publication | null>(null);
  const [copiedBibtex, setCopiedBibtex] = useState(false);
  const [copiedApa, setCopiedApa] = useState(false);
  const [expandedAbstractId, setExpandedAbstractId] = useState<string | null>(null);

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
      // Domain match
      const domainMatch = selectedDomain === 'All' || pub.domain === selectedDomain;

      // Type match
      const typeMatch = selectedType === 'All' || pub.type === selectedType;

      // Search match
      const q = searchQuery.toLowerCase().trim();
      const searchMatch =
        !q ||
        pub.title.toLowerCase().includes(q) ||
        pub.authors.some((a) => a.toLowerCase().includes(q)) ||
        pub.venue.toLowerCase().includes(q) ||
        pub.keywords.some((k) => k.toLowerCase().includes(q));

      return domainMatch && typeMatch && searchMatch;
    }).sort((a, b) => {
      if (sortBy === 'citations') {
        return (b.citationsCount || 0) - (a.citationsCount || 0);
      }
      return b.year - a.year;
    });
  }, [searchQuery, selectedDomain, selectedType, sortBy]);

  const copyToClipboard = (text: string, type: 'bibtex' | 'apa') => {
    navigator.clipboard.writeText(text);
    if (type === 'bibtex') {
      setCopiedBibtex(true);
      setTimeout(() => setCopiedBibtex(false), 2000);
    } else {
      setCopiedApa(true);
      setTimeout(() => setCopiedApa(false), 2000);
    }
  };

  const getApaCitation = (pub: Publication) => {
    return `${pub.authors.join(', ')} (${pub.year}). ${pub.title}. ${pub.venue}${pub.doi ? `. https://doi.org/${pub.doi}` : ''}`;
  };

  return (
    <div className="bg-[#FBFBF9] min-h-screen">
      <PageHeader
        category="Scholarly Repository"
        title="Peer-Reviewed Publications & Research Papers"
        description="Comprehensive collection of research publications across international journals, IEEE symposiums, and peer-reviewed conference proceedings authored by Prof. Harish Parshuram Bhabad."
        breadcrumb="Publications"
        badge="Verified Citations"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Scholar Identification & Metrics Strip */}
        <div className="bg-white rounded-lg border border-[#E2E8F0] p-5 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-[#0F2942] text-white flex items-center justify-center font-bold text-sm">
              <Quote className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0F2942]">
                Google Scholar & ORCID Indexed Works
              </div>
              <div className="text-xs text-[#64748B]">
                ORCID: <a href={PROFESSOR_INFO.orcidUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-[#0F2942] hover:underline">{PROFESSOR_INFO.orcidId}</a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PROFESSOR_INFO.googleScholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0F2942] bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-md transition-colors"
            >
              <span>View Google Scholar Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-2xs space-y-4">
          {/* Top Row: Search Input + Sort */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search publications by title, keyword, co-author, or venue..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-[#F8FAFC] border border-[#CBD5E1] rounded-md focus:outline-hidden focus:border-[#0F2942] focus:ring-1 focus:ring-[#0F2942]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#64748B] hover:text-[#0F2942]"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[#64748B] font-medium whitespace-nowrap">
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'year' | 'citations')}
                className="px-3 py-2 text-xs bg-[#F8FAFC] border border-[#CBD5E1] rounded-md focus:outline-hidden focus:border-[#0F2942]"
              >
                <option value="year">Publication Year (Newest)</option>
                <option value="citations">Citation Count (Highest)</option>
              </select>
            </div>
          </div>

          {/* Domain Filter Pills */}
          <div className="space-y-1.5 pt-2 border-t border-[#F1F5F9]">
            <div className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
              Research Domain
            </div>
            <div className="flex flex-wrap gap-1.5">
              {domains.map((dom) => (
                <button
                  key={dom}
                  onClick={() => setSelectedDomain(dom)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    selectedDomain === dom
                      ? 'bg-[#0F2942] text-white font-semibold'
                      : 'bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] hover:bg-[#F1F5F9]'
                  }`}
                >
                  {dom}
                </button>
              ))}
            </div>
          </div>

          {/* Type Filter Pills */}
          <div className="flex items-center gap-2 pt-2 border-t border-[#F1F5F9]">
            <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
              Type:
            </span>
            <div className="flex gap-1.5">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`px-2.5 py-0.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                    selectedType === t
                      ? 'bg-[#0F2942] text-white font-semibold'
                      : 'bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] hover:bg-[#F1F5F9]'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between text-xs text-[#64748B] px-1">
          <span>
            Displaying <strong>{filteredPublications.length}</strong> of {PUBLICATIONS.length} scholarly works
          </span>
          {(searchQuery || selectedDomain !== 'All' || selectedType !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDomain('All');
                setSelectedType('All');
              }}
              className="text-[#0F2942] font-semibold hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {filteredPublications.length === 0 ? (
            <div className="bg-white rounded-lg border border-[#E2E8F0] p-12 text-center space-y-3">
              <FileText className="w-10 h-10 text-[#94A3B8] mx-auto" />
              <div className="text-base font-bold text-[#0F2942]">
                No Publications Found
              </div>
              <p className="text-xs text-[#64748B] max-w-sm mx-auto">
                No publications match your current filter parameters. Try clearing the search query or selecting another domain.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDomain('All');
                  setSelectedType('All');
                }}
                className="mt-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#0F2942] rounded-md hover:bg-[#1A3E61] cursor-pointer"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            filteredPublications.map((pub) => {
              const isExpanded = expandedAbstractId === pub.id;

              return (
                <div
                  key={pub.id}
                  className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-2xs hover:border-[#CBD5E1] transition-all space-y-3"
                >
                  {/* Metadata Header Line */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 font-semibold bg-[#0F2942] text-white rounded-xs">
                        {pub.type}
                      </span>
                      <span className="px-2 py-0.5 bg-[#F1F5F9] text-[#475569] rounded-xs font-medium border border-[#E2E8F0]">
                        {pub.domain}
                      </span>
                      {pub.highlight && (
                        <span className="flex items-center gap-1 text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-xs border border-amber-200">
                          <Sparkles className="w-3 h-3" />
                          <span>Featured Paper</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 text-[#64748B] font-mono">
                      <span>{pub.year}</span>
                      {pub.citationsCount !== undefined && (
                        <span>• {pub.citationsCount} Citations</span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#0F2942] leading-snug">
                    {pub.title}
                  </h3>

                  {/* Authors & Venue */}
                  <div className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    <span className="font-semibold text-[#1E293B]">
                      {pub.authors.join(', ')}
                    </span>
                    <span className="text-[#64748B]"> — </span>
                    <em className="text-[#334155] font-medium">{pub.venue}</em>
                  </div>

                  {/* Abstract Toggle */}
                  <div className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                    <p className={isExpanded ? '' : 'line-clamp-2'}>
                      {pub.abstract}
                    </p>
                    <button
                      onClick={() => setExpandedAbstractId(isExpanded ? null : pub.id)}
                      className="text-[#0F2942] font-semibold text-xs hover:underline mt-1 cursor-pointer"
                    >
                      {isExpanded ? 'Collapse Abstract' : 'Read Full Abstract...'}
                    </button>
                  </div>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {pub.keywords.map((kw, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[11px] bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] rounded-xs"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons & Links */}
                  <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex flex-wrap items-center gap-3">
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-[11px] text-[#0F2942] hover:underline"
                        >
                          <span>DOI: {pub.doi}</span>
                          <ExternalLink className="w-3 h-3 text-[#64748B]" />
                        </a>
                      )}

                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#0F2942] hover:underline font-medium"
                      >
                        <span>Journal / Record</span>
                        <ExternalLink className="w-3 h-3 text-[#64748B]" />
                      </a>
                    </div>

                    <button
                      onClick={() => setActiveBibtex(pub)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F2942] font-semibold transition-colors cursor-pointer"
                    >
                      <Quote className="w-3.5 h-3.5" />
                      <span>Cite (BibTeX / APA)</span>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Citation Modal */}
      {activeBibtex && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-lg border border-[#CBD5E1] shadow-xl max-w-2xl w-full p-6 space-y-5">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
                  Academic Citation
                </span>
                <h3 className="text-base font-bold text-[#0F2942] mt-1 line-clamp-2">
                  {activeBibtex.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveBibtex(null)}
                className="text-[#94A3B8] hover:text-[#0F2942] p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* APA Format */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#334155]">APA Citation</span>
                <button
                  onClick={() => copyToClipboard(getApaCitation(activeBibtex), 'apa')}
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
                {getApaCitation(activeBibtex)}
              </div>
            </div>

            {/* BibTeX Format */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#334155]">BibTeX Entry</span>
                <button
                  onClick={() => copyToClipboard(activeBibtex.bibtex, 'bibtex')}
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
              <pre className="p-3 bg-[#0F1D2B] text-slate-200 rounded-md text-xs font-mono overflow-x-auto max-h-48 leading-relaxed">
                {activeBibtex.bibtex}
              </pre>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveBibtex(null)}
                className="px-4 py-1.5 text-xs font-semibold text-[#475569] bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-md cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
