import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { RESEARCH_AREAS, PUBLICATIONS, PROFESSOR_INFO } from '../data/professorData';
import { 
  ShieldCheck, 
  Boxes, 
  Cpu, 
  Terminal, 
  Network, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  BookOpen, 
  GraduationCap,
  FileText
} from 'lucide-react';
import { ResearchDomain } from '../types';

export function ResearchPage() {
  const [selectedDomain, setSelectedDomain] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#0F2942]" />;
      case 'Boxes': return <Boxes className="w-6 h-6 text-[#0F2942]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#0F2942]" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-[#0F2942]" />;
      case 'Network': return <Network className="w-6 h-6 text-[#0F2942]" />;
      default: return <Sparkles className="w-6 h-6 text-[#0F2942]" />;
    }
  };

  const domainDescriptions: Record<string, {
    problemStatement: string;
    methodologies: string[];
    phdConnection: string;
  }> = {
    'post-quantum': {
      problemStatement: 'Shor’s algorithm poses an existential threat to classical asymmetric cryptography (RSA, ECC, Diffie-Hellman) once scalable quantum computers emerge. Distributed authorization architectures must migrate to post-quantum primitives without compromising evaluation latency.',
      methodologies: [
        'Lattice-based Learning with Errors (LWE) and Ring-LWE cryptographic reductions',
        'Ciphertext-Policy Attribute-Based Encryption (CP-ABE) adapted for quantum resilience',
        'Hybrid signature verification pipelines combining classical ECDSA with NIST PQC candidates (Dilithium / Falcon)',
        'Fine-grained access control policy evaluation in distributed enterprise microservices',
      ],
      phdConnection: 'Core focus of Ph.D. dissertation under Dr. Anand Singh Rajawat, developing novel quantum-immune access control models.',
    },
    'blockchain-systems': {
      problemStatement: 'Critical infrastructure, smart grid telemetry, and Electronic Health Records (EHR) demand decentralized consensus that resists adversarial interception, double-spending, and future quantum decryption while maintaining transaction throughput.',
      methodologies: [
        'Consortium Hyperledger Fabric and Ethereum smart contract verification',
        'Off-chain cryptographic zero-knowledge proofs (zk-SNARKs) for patient data confidentiality',
        'Decentralized peer-to-peer microgrid energy trading with tamper-evident audit logs',
        'Decentralized Identifier (DID) frameworks for smart city citizen governance',
      ],
      phdConnection: 'Authored scholarly book: "Blockchain Enabled Secure Big Data Computing for Smart Cities" (ISBN: 978-93-94812-44-1).',
    },
    'machine-learning': {
      problemStatement: 'Deploying high-dimensional machine learning models in edge and consumer environments requires low-latency inference, resilience to adversarial noise, and explainable feature representations.',
      methodologies: [
        'Google Mediapipe BlazePose 33 3D-landmark extraction for biomechanical joint angle computation',
        'Ensemble gradient boosting (XGBoost, Random Forest) for real-time URL threat classification',
        'Recurrent neural networks (LSTM) for financial time-series forecasting and credit risk scoring',
        'Computer vision attention trackers for assessing student engagement in virtual classrooms',
      ],
      phdConnection: 'Mentored multiple final-year B.E. student capstone teams leading to conference publications and exhibition accolades.',
    },
    'cybersecurity-malware': {
      problemStatement: 'Polymorphic and zero-day malware evade signature-based antivirus scanners by mutating opcode sequences and executing obfuscated packing routines.',
      methodologies: [
        'Tri-modal contrastive embeddings fusing opcode sequential transformers and system call graphs',
        'Control Flow Graph (CFG) Weisfeiler-Lehman graph isomorphism kernels',
        'Dynamic runtime API execution tracing inside isolated sandboxes (Cuckoo Sandbox, Volatility)',
        'Reverse engineering x86/x64 binaries using Ghidra and IDA Pro disassembly frameworks',
      ],
      phdConnection: 'Authored systematic review in IJISAE (2025) establishing tri-modal contrastive binary analysis benchmarks.',
    },
    'cloud-iot': {
      problemStatement: 'Multi-cloud enterprise environments suffer from cross-tenant side channels and single-provider vendor lock-in, while urban IoT sensors require fault-tolerant routing.',
      methodologies: [
        'Shamir Secret Sharing and threshold cryptography across heterogeneous clouds (AWS S3, GCP, Azure)',
        'NFC ISO/IEC 14443 contactless hardware protocol integration for municipal transit ticketing',
        'Internet of Vehicles (IoV) edge routing and GPS packet forwarding',
        'Multi-tenant cloud privacy audits and access token delegation security',
      ],
      phdConnection: 'Supervised LoGMIEER student innovation that won First Prize at the College Technical Project Exhibition.',
    },
  };

  const filteredAreas = selectedDomain === 'all' 
    ? RESEARCH_AREAS 
    : RESEARCH_AREAS.filter(a => a.id === selectedDomain);

  return (
    <div className="bg-[#FBFBF9]">
      <PageHeader
        category="Scholarly Focus"
        title="Research Domains & Programs"
        description="Exploring quantum-resilient security architectures, consortium blockchain computing for electronic health records and smart cities, applied machine learning, and tri-modal zero-day binary analysis."
        breadcrumb="Research Domains"
        badge="Ph.D. Scholar Investigations"
      />

      {/* Main Research Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Ph.D. Dissertation Context Banner */}
        <div className="bg-white rounded-lg border border-[#CBD5E1] p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E2E8F0] pb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#0F2942] text-amber-300 flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#0F2942]">
                  Doctoral Research Program
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-[#0F2942]">
                  Ph.D. in Computer Science & Engineering (Pursuing)
                </h2>
              </div>
            </div>

            <div className="text-xs text-[#64748B] flex items-center gap-2">
              <span>Supervision: Dr. Anand Singh Rajawat</span>
              <span>•</span>
              <span className="font-semibold text-emerald-700">Active Doctoral Candidacy</span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-[#334155]">
            <div className="p-3.5 bg-[#F8FAFC] rounded-md border border-[#E2E8F0]">
              <div className="font-bold text-[#0F2942] mb-1">Doctoral Title / Focus</div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Post-Quantum Cryptographic Approaches for Secure Fine-Grained Access Control in Distributed Multi-Cloud Systems & Critical Infrastructure.
              </p>
            </div>

            <div className="p-3.5 bg-[#F8FAFC] rounded-md border border-[#E2E8F0]">
              <div className="font-bold text-[#0F2942] mb-1">Key Scientific Contributions</div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Hybrid lattice-based attribute encryption, anti-quantum digital signatures for Electronic Health Records, and consortium blockchain protection for smart energy grids.
              </p>
            </div>

            <div className="p-3.5 bg-[#F8FAFC] rounded-md border border-[#E2E8F0]">
              <div className="font-bold text-[#0F2942] mb-1">Scholarly Output</div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Published across IJCISIM, IJISAE, JETIR, IET symposiums, alongside an authored textbook on smart city blockchain computing.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Tabs for Research Domains */}
        <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#E2E8F0]">
          <button
            onClick={() => setSelectedDomain('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              selectedDomain === 'all'
                ? 'bg-[#0F2942] text-white'
                : 'bg-white border border-[#CBD5E1] text-[#475569] hover:text-[#0F2942]'
            }`}
          >
            All 5 Research Domains
          </button>
          {RESEARCH_AREAS.map((area) => (
            <button
              key={area.id}
              onClick={() => setSelectedDomain(area.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                selectedDomain === area.id
                  ? 'bg-[#0F2942] text-white'
                  : 'bg-white border border-[#CBD5E1] text-[#475569] hover:text-[#0F2942]'
              }`}
            >
              {area.title}
            </button>
          ))}
        </div>

        {/* Deep Dive Section for Selected Areas */}
        <div className="space-y-10">
          {filteredAreas.map((area) => {
            const extra = domainDescriptions[area.id] || {
              problemStatement: area.description,
              methodologies: area.keyTopics,
              phdConnection: 'Active research track at LoGMIEER.',
            };

            const relatedPubs = PUBLICATIONS.filter(p => p.domain === area.domain);

            return (
              <div
                key={area.id}
                className="bg-white rounded-lg border border-[#E2E8F0] p-6 sm:p-8 shadow-2xs space-y-6"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#F1F5F9] pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center shrink-0">
                      {getIcon(area.icon)}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider font-semibold text-[#64748B]">
                        Domain Category: {area.domain}
                      </div>
                      <h3 className="font-serif-academic text-xl sm:text-2xl font-bold text-[#0F2942] mt-0.5">
                        {area.title}
                      </h3>
                    </div>
                  </div>

                  <Link
                    to="/publications"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2942] bg-[#F1F5F9] hover:bg-[#E2E8F0] px-3 py-1.5 rounded-md transition-colors shrink-0 self-start"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View Papers ({relatedPubs.length})</span>
                  </Link>
                </div>

                {/* Problem Statement & Overview */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
                    Theoretical Problem Statement & Context
                  </h4>
                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                    {extra.problemStatement}
                  </p>
                </div>

                {/* Methodologies & Investigative Techniques */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
                    Key Methodologies & Analytical Techniques
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#334155]">
                    {extra.methodologies.map((m, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2 rounded-md bg-[#F8FAFC] border border-[#E2E8F0]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ph.D. Scope & Pedagogical Impact */}
                <div className="p-4 rounded-md bg-[#FAF8F5] border border-[#E7E2D8] text-xs text-[#52525B]">
                  <strong className="text-[#0F2942] block mb-0.5">
                    Scholarly Rationale & Progress:
                  </strong>
                  <span>{extra.phdConnection}</span>
                </div>

                {/* Related Papers Strip */}
                {relatedPubs.length > 0 && (
                  <div className="pt-2">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#0F2942] mb-3">
                      Selected Papers in this Domain
                    </h4>
                    <div className="space-y-2 text-xs">
                      {relatedPubs.map((pub) => (
                        <div
                          key={pub.id}
                          className="p-3 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                        >
                          <div>
                            <span className="font-semibold text-[#0F2942]">"{pub.title}"</span>
                            <div className="text-[#64748B] text-[11px] mt-0.5">
                              {pub.venue} ({pub.year}) • {pub.type}
                            </div>
                          </div>
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F2942] hover:underline shrink-0"
                          >
                            <span>External Record</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
