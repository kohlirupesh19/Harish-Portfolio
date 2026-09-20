import { useState } from 'react';
import { STUDENT_RESOURCES } from '../data/professorData';
import { FileText, Download, Check, Eye, X, BookOpen, AlertCircle } from 'lucide-react';

export function StudentResourcesSection() {
  const [downloadedIndex, setDownloadedIndex] = useState<number | null>(null);
  const [previewResource, setPreviewResource] = useState<typeof STUDENT_RESOURCES[0] | null>(null);

  const handleDownload = (idx: number, title: string) => {
    setDownloadedIndex(idx);
    // Simulate generation of download
    const blob = new Blob([`Resource Title: ${title}\nDepartment: Computer Engineering, LoGMIEER Nashik\nInstructor: Prof. Harish Parshuram Bhabad\nSavitribai Phule Pune University (SPPU) Academic Curriculum\n\nVerified study guide and course material.`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setDownloadedIndex(null);
    }, 2500);
  };

  return (
    <section id="resources" className="py-14 sm:py-16 border-b border-[#E3E3DC] bg-[#F7F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold text-[#0F2942]">
              Academic Courseware & Tools
            </div>
            <h2 className="font-serif-academic text-2xl sm:text-3xl lg:text-4xl text-[#0F2942] mt-1">
              Student Lab Manuals & Course Materials
            </h2>
            <p className="mt-2 text-sm text-[#52525B] max-w-2xl leading-relaxed">
              Curated pedagogical documentation, laboratory guides, and capstone project guidelines for students enrolled at LoGMIEER Nashik.
            </p>
          </div>

          <div className="text-xs text-[#64748B]">
            Free distribution for academic purposes
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STUDENT_RESOURCES.map((resource, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-2xs hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#0F2942] bg-[#F1F5F9] px-2 py-0.5 rounded-xs border border-[#E2E8F0]">
                    {resource.subject}
                  </span>
                  <span className="text-[11px] text-[#64748B] font-mono">
                    {resource.size}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0F2942] leading-snug">
                  {resource.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {resource.description}
                </p>

                <div className="text-[11px] text-[#64748B]">
                  <strong>Format:</strong> {resource.format}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F1F5F9] flex items-center justify-between gap-2">
                <button
                  onClick={() => setPreviewResource(resource)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#475569] hover:text-[#0F2942] cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Quick Overview</span>
                </button>

                <button
                  onClick={() => handleDownload(idx, resource.title)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0F2942] bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-md transition-colors cursor-pointer"
                >
                  {downloadedIndex === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Downloaded</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Download File</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overview Modal */}
      {previewResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-lg border border-[#CBD5E1] shadow-xl max-w-lg w-full p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold text-[#0F2942] bg-[#F1F5F9] px-2 py-0.5 rounded-xs">
                  {previewResource.subject}
                </span>
                <h3 className="text-base font-bold text-[#0F2942] mt-2">
                  {previewResource.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewResource(null)}
                className="text-[#94A3B8] hover:text-[#0F2942] p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-[#334155] leading-relaxed bg-[#F8FAFC] p-4 rounded-md border border-[#E2E8F0]">
              <p><strong>Overview:</strong> {previewResource.description}</p>
              <p><strong>Intended Cohort:</strong> Computer Engineering Students at LoGMIEER, Nashik (Savitribai Phule Pune University Curriculum).</p>
              <p><strong>Guidance by:</strong> Prof. Harish Parshuram Bhabad, Assistant Professor & Laboratory In-charge.</p>
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                onClick={() => setPreviewResource(null)}
                className="px-3 py-1.5 text-xs font-medium text-[#475569] bg-[#F1F5F9] rounded-md hover:bg-[#E2E8F0] cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleDownload(999, previewResource.title);
                  setPreviewResource(null);
                }}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-[#0F2942] rounded-md hover:bg-[#1E3A5F] cursor-pointer flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
