import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { PageTransition } from '../components/PageTransition';
import { PUBLICATIONS } from '../data/professorData';
import { Publication, ResearchDomain } from '../types';
import { 
  Search, 
  BookOpen, 
  ExternalLink, 
  Copy, 
  Check, 
  FileText, 
  X,
  Sparkles,
  Quote
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
    <PageTransition className="bg-[#FBFBF9] min-h-screen overflow-hidden">
      <PageHeader
        category="Scholarly Repository"
        title="Publications, Journals & Proceedings"
        description="Comprehensive collection of research publications across international journals, IEEE symposiums, and peer-reviewed conference proceedings authored by Prof. Harish Parshuram Bhabad."
        breadcrumb="Publications"
        badge="14+ Research Works"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-8">
        {/* Search, Filter, and Sort Controls */}
        <div className="bg-white rounded-lg border border-[#CBD5E1] p-4 sm:p-6 shadow-2xs space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
            {/* Search Box */}
            <div className="md:col-span-8 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keywords, title, author, or venue..."
                className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] border border-[#CBD5E1] rounded-md focus-visible:outline-2 focus-visible:outline-[#0F2942] focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#94A3B8] hover:text-[#0F2942] p-1"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Control */}
            <div className="md:col-span-4 flex items-center justify-end gap-2">
              <span className="text-xs text-[#64748B] font-medium whitespace-nowrap">Sort by:</span>
              <div className="flex border border-[#CBD5E1] rounded-md overflow-hidden bg-white text-xs">
                <button
                  onClick={() => setSortBy('year')}
                  className={`px-3 py-1.5 font-medium transition-colors cursor-pointer min-h-[36px] ${
                    sortBy === 'year'
                      ? 'bg-[#0F2942] text-white'
                      : 'text-[#475569] hover:bg-[#F1F5F9]'
                  }`}
                >
                  Newest First
                </button>
                <button
                  onClick={() => setSortBy('citations')}
                  className={`px-3 py-1.5 font-medium transition-colors cursor-pointer min-h-[36px] ${
                    sortBy === 'citations'
                      ? 'bg-[#0F2942] text-white'
                      : 'text-[#475569] hover:bg-[#F1F5F9]'
                  }`}
                >
                  Most Cited
                </button>
              </div>
            </div>
          </div>

          {/* Domain Filter Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-2 border-t border-[#F1F5F9]">
            <span className="text-xs font-semibold text-[#475569] sm:w-20 shrink-0">
              Domain:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {domains.map((d) => (
                <button
                  key={d}
                  onClick={() => setSelectedDomain(d)}
                  className={`px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer min-h-[32px] ${
                    selectedDomain === d
                      ? 'bg-[#0F2942] text-white font-medium shadow-2xs'
                      : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]'
                  }`}
                >
                  {d}
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
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer min-h-[30px] ${
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
              className="text-[#0F2942] font-semibold hover:underline cursor-pointer min-h-[32px] flex items-center"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Publications List with Smooth Transition */}
        {filteredPublications.length === 0 ? (
          <div className="bg-white rounded-lg border border-[#E2E8F0] p-10 sm:p-12 text-center space-y-3">
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
              className="mt-2 px-4 py-2 text-xs font-semibold text-white bg-[#0F2942] rounded-md hover:bg-[#1A3E61] cursor-pointer min-h-[38px]"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <motion.div
            key={`${selectedDomain}-${selectedType}-${searchQuery}-${sortBy}`}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            {filteredPublications.map((pub, idx) => {
              const isExpanded = expandedAbstractId === pub.id;

              return (
                <motion.article
                  key={pub.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.3, delay: Math.min(idx * 0.04, 0.3) }}
                  className="bg-white rounded-lg border border-[#E2E8F0] p-4 sm:p-6 shadow-2xs hover:border-[#CBD5E1] transition-all space-y-3 card-academic-interactive"
                >
                  {/* Metadata Header Line */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 font-semibold bg-[#0F2942] text-white rounded-xs text-[10px] uppercase">
                        {pub.type}
                      </span>
                      <span className="px-2 py-0.5 bg-[#F1F5F9] text-[#475569] rounded-xs font-medium border border-[#E2E8F0] text-[11px]">
                        {pub.domain}
                      </span>
                      {pub.highlight && (
                        <span className="flex items-center gap-1 text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-xs border border-amber-200">
                          <Sparkles className="w-3 h-3 text-amber-600" />
                          <span>Featured Paper</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 text-[#64748B] font-mono text-xs">
                      <span>{pub.year}</span>
                      {pub.citationsCount !== undefined && (
                        <span>• {pub.citationsCount} Citations</span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#0F2942] leading-snug text-break-academic">
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
                      className="text-[#0F2942] font-semibold text-xs hover:underline mt-1 cursor-pointer min-h-[32px] inline-flex items-center"
                    >
                      {isExpanded ? 'Collapse Abstract' : 'Read Full Abstract...'}
                    </button>
                  </div>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {pub.keywords.map((kw, kIdx) => (
                      <span
                        key={kIdx}
                        className="px-2 py-0.5 text-[10px] bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] rounded-xs"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons & Links */}
                  <div className="pt-3 border-t border-[#F1F5F9] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex flex-wrap items-center gap-3">
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-[11px] text-[#0F2942] hover:underline min-h-[36px]"
                        >
                          <span>DOI: {pub.doi}</span>
                          <ExternalLink className="w-3 h-3 text-[#64748B]" />
                        </a>
                      )}

                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#0F2942] hover:underline font-medium min-h-[36px]"
                      >
                        <span>Journal / Record</span>
                        <ExternalLink className="w-3 h-3 text-[#64748B]" />
                      </a>
                    </div>

                    <button
                      onClick={() => setActiveBibtex(pub)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F2942] font-semibold transition-all cursor-pointer min-h-[38px] hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Quote className="w-3.5 h-3.5" />
                      <span>Cite (BibTeX / APA)</span>
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        )}
      </div>

      {/* Citation Modal */}
      <AnimatePresence>
        {activeBibtex && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-lg border border-[#CBD5E1] shadow-xl max-w-2xl w-full p-5 sm:p-6 space-y-4 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#64748B]">
                    Academic Citation
                  </div>
                  <h3 className="text-base font-semibold text-[#0F2942] leading-snug mt-1 text-break-academic">
                    {activeBibtex.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveBibtex(null)}
                  className="p-1.5 text-[#94A3B8] hover:text-[#0F2942] rounded-md min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
                  aria-label="Close citation dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* BibTeX Section */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#334155]">BibTeX Format</span>
                  <button
                    onClick={() => copyToClipboard(activeBibtex.bibtex, 'bibtex')}
                    className="inline-flex items-center gap-1 text-xs text-[#0F2942] hover:underline font-semibold cursor-pointer min-h-[32px]"
                  >
                    {copiedBibtex ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : null}
                    <span>{copiedBibtex ? 'Copied BibTeX!' : 'Copy BibTeX'}</span>
                  </button>
                </div>
                <pre className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md text-[11px] font-mono text-[#334155] overflow-x-auto whitespace-pre">
                  {activeBibtex.bibtex}
                </pre>
              </div>

              {/* APA Section */}
              <div className="space-y-2 pt-2 border-t border-[#F1F5F9]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#334155]">APA Style</span>
                  <button
                    onClick={() => copyToClipboard(getApaCitation(activeBibtex), 'apa')}
                    className="inline-flex items-center gap-1 text-xs text-[#0F2942] hover:underline font-semibold cursor-pointer min-h-[32px]"
                  >
                    {copiedApa ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : null}
                    <span>{copiedApa ? 'Copied APA!' : 'Copy APA Citation'}</span>
                  </button>
                </div>
                <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md text-xs text-[#334155] leading-relaxed text-break-academic">
                  {getApaCitation(activeBibtex)}
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setActiveBibtex(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#0F2942] rounded-md hover:bg-[#1A3E61] min-h-[40px] cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
