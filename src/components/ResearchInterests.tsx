import { motion } from 'motion/react';
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
        return <ShieldCheck className="w-5 h-5 text-[#0F2942] group-hover:-translate-y-0.5 transition-transform" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-[#0F2942] group-hover:-translate-y-0.5 transition-transform" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#0F2942] group-hover:-translate-y-0.5 transition-transform" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-[#0F2942] group-hover:-translate-y-0.5 transition-transform" />;
      case 'Network':
        return <Network className="w-5 h-5 text-[#0F2942] group-hover:-translate-y-0.5 transition-transform" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#0F2942] group-hover:-translate-y-0.5 transition-transform" />;
    }
  };

  return (
    <section id="research" className="py-12 sm:py-16 border-b border-[#E3E3DC] bg-[#F7F7F4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4"
        >
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold text-[#0F2942]">
              Academic Inquiry & Focus Areas
            </div>
            <h2 className="font-serif-academic text-2xl sm:text-3xl lg:text-4xl text-[#0F2942] mt-1 text-break-academic">
              Research Specializations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#52525B] max-w-2xl leading-relaxed">
              Advancing cryptographic resilience against quantum computation, architecting tamper-evident smart systems for healthcare and electrical grids, and pioneering applied machine learning for cyber threat intelligence.
            </p>
          </div>
        </motion.div>

        {/* Research Area Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {RESEARCH_AREAS.map((area, idx) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-lg border border-[#E2E8F0] p-5 sm:p-6 shadow-2xs hover:shadow-sm hover:border-[#CBD5E1] transition-all flex flex-col justify-between group card-academic-interactive"
            >
              <div>
                <div className="w-10 h-10 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center mb-4 transition-colors group-hover:bg-[#E2E8F0]">
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
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2942] hover:text-[#1A3E61] transition-colors cursor-pointer group/btn min-h-[36px]"
                >
                  <span>Explore related publications</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
