import { RESEARCH_AREAS } from '../data/professorData';
import { ResearchDomain } from '../types';
import { 
  ShieldCheck, 
  Boxes, 
  Cpu, 
  Terminal, 
  Network, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ResearchInterestsProps {
  onSelectDomain: (domain: ResearchDomain) => void;
}

export function ResearchInterests({ onSelectDomain }: ResearchInterestsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#0F2942]" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-[#0F2942]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#0F2942]" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-[#0F2942]" />;
      case 'Network':
        return <Network className="w-5 h-5 text-[#0F2942]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#0F2942]" />;
    }
  };

  return (
    <section id="research" className="py-14 sm:py-16 border-b border-[#E3E3DC] bg-[#F7F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold text-[#0F2942]">
              Academic Inquiry & Focus Areas
            </div>
            <h2 className="font-serif-academic text-2xl sm:text-3xl lg:text-4xl text-[#0F2942] mt-1">
              Research Specializations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#52525B] max-w-2xl leading-relaxed">
              Advancing cryptographic resilience against quantum computation, architecting tamper-evident smart systems for healthcare and electrical grids, and pioneering applied machine learning for cyber threat intelligence.
            </p>
          </div>
        </div>

        {/* Research Area Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESEARCH_AREAS.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-2xs hover:shadow-sm hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center mb-4">
                  {getIcon(area.icon)}
                </div>

                <h3 className="text-base font-semibold text-[#0F2942] leading-snug">
                  {area.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {area.description}
                </p>

                {/* Sub-topics / Keywords */}
                <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-1.5">
                  {area.keyTopics.map((topic, index) => (
                    <span
                      key={index}
                      className="inline-block px-2 py-0.5 text-[11px] bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0] rounded-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#F1F5F9]">
                <button
                  onClick={() => {
                    onSelectDomain(area.domain);
                    const pubSection = document.getElementById('publications');
                    if (pubSection) {
                      pubSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2942] hover:text-[#1E40AF] transition-colors cursor-pointer group"
                >
                  <span>Explore related publications</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
