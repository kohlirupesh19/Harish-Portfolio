import { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { STUDENT_RESOURCES, PROFESSOR_INFO } from '../data/professorData';
import { ResourceItem } from '../types';
import { 
  Download, 
  FileText, 
  Terminal, 
  HelpCircle, 
  Sparkles, 
  ExternalLink, 
  Check, 
  Eye, 
  X,
  BookOpen
} from 'lucide-react';

export function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [previewItem, setPreviewItem] = useState<ResourceItem | null>(null);

  const categories = ['All', 'Lab Manual', 'Question Bank', 'Code Template', 'Project Guide'];

  const filteredResources = selectedCategory === 'All'
    ? STUDENT_RESOURCES
    : STUDENT_RESOURCES.filter(r => (r.category || 'Lab Manual') === selectedCategory);

  const handleDownload = (res: ResourceItem) => {
    const resId = res.id || res.title;
    setDownloadingId(resId);
    
    // Create text document blob download
    const content = `ACADEMIC COURSEWARE REPOSITORY
Department of Computer Engineering
Loknete Gopinathji Munde Institute of Engineering Education and Research (LoGMIEER), Nashik
Affiliated with Savitribai Phule Pune University (SPPU)

Subject: ${res.subject} - ${res.title}
Resource Type: ${res.category || 'Courseware'}
Instructor: ${PROFESSOR_INFO.name}, Assistant Professor
Semester: ${res.semester || 'Current Term'}
Format: ${res.format} (${res.size})

==================================================
DOCUMENT SUMMARY & INSTRUCTIONS
==================================================
${res.description}

1. LABORATORY & PRACTICAL GUIDELINES:
- Ensure all source implementations are compiled and tested under Linux environment (Ubuntu 22.04 LTS).
- Document step-by-step terminal outputs, execution screenshots, and error handling routines.
- Maintain experimental logbooks signed by the laboratory in-charge weekly.

2. SUBMISSION DEADLINES:
- All assignments must be evaluated before the University Term Work submission date.

Instructor Coordinates:
Email: ${PROFESSOR_INFO.email}
Office: ${PROFESSOR_INFO.officeLocation}
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${res.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setDownloadingId(null);
    }, 1200);
  };

  const getCategoryIcon = (category?: string) => {
    switch (category) {
      case 'Lab Manual': return <FileText className="w-5 h-5 text-[#0F2942]" />;
      case 'Code Template': return <Terminal className="w-5 h-5 text-[#0F2942]" />;
      case 'Question Bank': return <HelpCircle className="w-5 h-5 text-[#0F2942]" />;
      default: return <BookOpen className="w-5 h-5 text-[#0F2942]" />;
    }
  };

  return (
    <div className="bg-[#FBFBF9] min-h-screen">
      <PageHeader
        category="Courseware & Toolkits"
        title="Student Laboratory Manuals & Study Materials"
        description="Curated academic courseware, laboratory manuals, examination question banks, and SPPU project synopsis templates for Computer Engineering students."
        breadcrumb="Student Resources"
        badge="Direct Student Access"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Category Selector Filter */}
        <div className="bg-white rounded-lg border border-[#E2E8F0] p-4 shadow-2xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0F2942] text-white'
                    : 'bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] hover:bg-[#F1F5F9]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-[#64748B]">
            Showing <strong>{filteredResources.length}</strong> verified resources
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res, idx) => {
            const resKey = res.id || `res-${idx}`;
            const isDownloading = downloadingId === resKey;

            return (
              <div
                key={resKey}
                className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-2xs space-y-4 hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#0F2942] bg-[#F1F5F9] px-2 py-0.5 rounded-xs border border-[#E2E8F0]">
                      {res.subject}
                    </span>
                    <span className="text-[11px] text-[#64748B]">
                      {res.format} • {res.size}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0">
                      {getCategoryIcon(res.category)}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-[#0F2942] leading-snug">
                        {res.title}
                      </h3>
                      <div className="text-[11px] text-[#64748B] mt-0.5">
                        {res.category || 'Courseware'} • {res.semester || 'All Semesters'}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {res.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between gap-2">
                  <button
                    onClick={() => setPreviewItem(res)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#475569] hover:text-[#0F2942] p-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect</span>
                  </button>

                  <button
                    onClick={() => handleDownload(res)}
                    disabled={isDownloading}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#0F2942] hover:bg-[#1A3E61] rounded-md transition-colors shadow-2xs cursor-pointer disabled:opacity-50"
                  >
                    {isDownloading ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Generating...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Resource Quick Inspection Modal */}
      {previewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-lg border border-[#CBD5E1] shadow-xl max-w-xl w-full p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
                  {previewItem.subject} — {previewItem.category || 'Courseware'}
                </span>
                <h3 className="text-base font-bold text-[#0F2942] mt-0.5">
                  {previewItem.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewItem(null)}
                className="text-[#94A3B8] hover:text-[#0F2942] p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md text-xs space-y-2 text-[#334155]">
              <div><strong>Semester Scope:</strong> {previewItem.semester || 'Prescribed B.E. Term'}</div>
              <div><strong>Target Audience:</strong> B.E. Computer Engineering Students</div>
              <div><strong>Specification:</strong> {previewItem.format} format, estimated size {previewItem.size}</div>
              <div><strong>Content Synopsis:</strong> {previewItem.description}</div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setPreviewItem(null)}
                className="px-3 py-1.5 text-xs text-[#64748B] hover:text-[#0F2942] cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleDownload(previewItem);
                  setPreviewItem(null);
                }}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-[#0F2942] hover:bg-[#1A3E61] rounded-md cursor-pointer inline-flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
