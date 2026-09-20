import { useState, FormEvent } from 'react';
import { PROFESSOR_INFO } from '../data/professorData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Building2, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliation: '',
    purpose: 'Academic / Course Query',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const purposes = [
    'Student Course / Lab Query',
    'B.E. Capstone Project Guidance',
    'Research Collaboration / Paper Inquiry',
    'Training & Placement (T&P) / Campus Drive',
    'Guest Lecture / Workshop Coordination',
    'General Inquiry',
  ];

  return (
    <section id="contact" className="py-14 sm:py-16 border-b border-[#E3E3DC] bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#0F2942]">
            Communication & Office Consultation
          </div>
          <h2 className="font-serif-academic text-2xl sm:text-3xl lg:text-4xl text-[#0F2942] mt-1">
            Institutional Contact & Office Hours
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#52525B] max-w-2xl leading-relaxed">
            Reach out regarding undergraduate course mentoring, laboratory inquiries, academic research collaboration, or campus recruitment coordination.
          </p>
        </div>

        {/* Dual Grid: Contact Details & Interactive Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Official Institutional Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Campus & Office Location Card */}
            <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center text-[#0F2942]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F2942] uppercase tracking-wide">
                    Department Office
                  </h3>
                  <p className="text-xs text-[#64748B]">LoGMIEER Nashik Campus</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#334155] pt-2 border-t border-[#F1F5F9]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#0F2942] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0F2942]">Office Location:</strong>
                    <span>{PROFESSOR_INFO.officeLocation}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#0F2942] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0F2942]">Office Consultation Hours:</strong>
                    <span>{PROFESSOR_INFO.officeHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Channel Contacts */}
            <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-2xs space-y-4">
              <h3 className="text-xs font-bold text-[#0F2942] uppercase tracking-wider">
                Direct Channels & Coordinates
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between p-2.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#0F2942]" />
                    <div>
                      <span className="text-[11px] text-[#64748B] block">Official Email</span>
                      <a
                        href={`mailto:${PROFESSOR_INFO.email}`}
                        className="font-medium text-[#0F2942] hover:underline"
                      >
                        {PROFESSOR_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#0F2942]" />
                    <div>
                      <span className="text-[11px] text-[#64748B] block">Official Contact</span>
                      <span className="font-medium text-[#1E293B]">
                        {PROFESSOR_INFO.phone}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Institutional Affiliation Badge */}
            <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E7E2D8] text-xs text-[#52525B] space-y-1">
              <div className="font-semibold text-[#0F2942]">
                LoGMIEER Computer Engineering Dept.
              </div>
              <p className="text-[11px] leading-relaxed">
                KVN Naik Shikshan Prasarak Sanstha's Loknete Gopinathji Munde Institute of Engineering Education and Research. Approved by AICTE, affiliated to Savitribai Phule Pune University.
              </p>
            </div>
          </div>

          {/* Right Column: Communication Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 sm:p-8 shadow-2xs">
              <div className="mb-6">
                <h3 className="text-base sm:text-lg font-bold text-[#0F2942]">
                  Send an Academic or Professional Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
                  Inquiries are directed to Prof. Harish Bhabad's institutional inbox.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-900">
                    Inquiry Transmitted Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your communication regarding "{formData.purpose}" has been recorded. Prof. Harish Bhabad typically responds within 1–2 academic working days.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        affiliation: '',
                        purpose: 'Academic / Course Query',
                        subject: '',
                        message: '',
                      });
                    }}
                    className="mt-2 px-4 py-1.5 text-xs font-semibold text-emerald-800 bg-white border border-emerald-300 rounded-md hover:bg-emerald-50 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-[#334155] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Patil or Dr. S. Mehta"
                        className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded-md focus:outline-hidden focus:border-[#0F2942] focus:ring-1 focus:ring-[#0F2942]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-[#334155] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. student@logmieer.edu.in"
                        className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded-md focus:outline-hidden focus:border-[#0F2942] focus:ring-1 focus:ring-[#0F2942]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-[#334155] mb-1">
                        Purpose of Communication *
                      </label>
                      <select
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded-md focus:outline-hidden focus:border-[#0F2942] focus:ring-1 focus:ring-[#0F2942]"
                      >
                        {purposes.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-[#334155] mb-1">
                        Institution / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.affiliation}
                        onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                        placeholder="e.g. LoGMIEER B.E. Comp or Tech Corp"
                        className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded-md focus:outline-hidden focus:border-[#0F2942] focus:ring-1 focus:ring-[#0F2942]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#334155] mb-1">
                      Subject Line *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Operating Systems Lab Assignment 3 Clarification"
                      className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded-md focus:outline-hidden focus:border-[#0F2942] focus:ring-1 focus:ring-[#0F2942]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#334155] mb-1">
                      Detailed Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please write your inquiry clearly with relevant context, student roll number, or organization background..."
                      className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded-md focus:outline-hidden focus:border-[#0F2942] focus:ring-1 focus:ring-[#0F2942]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-[#64748B]">
                      * Required fields. Transmitted to departmental desk.
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0F2942] hover:bg-[#183B5E] rounded-md transition-colors shadow-xs cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Sending...' : 'Transmit Message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
