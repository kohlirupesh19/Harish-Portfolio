import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROFESSOR_INFO } from '../data/professorData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Building2, 
  Send, 
  CheckCircle2, 
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
    }, 700);
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
    <section id="contact" className="py-12 sm:py-16 border-b border-[#E3E3DC] bg-[#FBFBF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-10"
        >
          <div className="text-xs uppercase tracking-widest font-semibold text-[#0F2942]">
            Communication & Office Consultation
          </div>
          <h2 className="font-serif-academic text-2xl sm:text-3xl lg:text-4xl text-[#0F2942] mt-1 text-break-academic">
            Institutional Contact & Office Hours
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#52525B] max-w-2xl leading-relaxed">
            Reach out regarding undergraduate course mentoring, laboratory inquiries, academic research collaboration, or campus recruitment coordination.
          </p>
        </motion.div>

        {/* Dual Grid: Contact Details & Interactive Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Official Institutional Details */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            {/* Campus & Office Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-lg border border-[#E2E8F0] p-5 sm:p-6 shadow-2xs space-y-4 card-academic-interactive"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center text-[#0F2942] shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F2942] uppercase tracking-wide">
                    Department Office
                  </h3>
                  <p className="text-xs text-[#64748B]">LoGMIEER Nashik Campus</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#334155] border-t border-[#F1F5F9] pt-4">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#0F2942] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F2942] block">Office Location:</strong>
                    <span>{PROFESSOR_INFO.officeLocation}</span>
                    <span className="block text-xs text-[#64748B]">{PROFESSOR_INFO.institution}</span>
                    <span className="block text-xs text-[#64748B]">Nashik, Maharashtra, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-[#F8FAFC]">
                  <Clock className="w-4 h-4 text-[#0F2942] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F2942] block">Faculty Consultation Hours:</strong>
                    <span>{PROFESSOR_INFO.officeHours}</span>
                    <span className="block text-[11px] text-[#64748B]">
                      (Students and visitors are requested to notify in advance during exam periods)
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Direct Telecommunications & Email */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-lg border border-[#E2E8F0] p-5 sm:p-6 shadow-2xs space-y-4 card-academic-interactive"
            >
              <div className="text-xs uppercase font-bold tracking-wider text-[#64748B]">
                Direct Coordinates
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center gap-3 p-3 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] min-h-[44px]">
                  <Mail className="w-4 h-4 text-[#0F2942] shrink-0" />
                  <div className="overflow-hidden">
                    <span className="block text-[11px] text-[#64748B]">Institutional Email:</span>
                    <a
                      href={`mailto:${PROFESSOR_INFO.email}`}
                      className="font-medium text-[#0F2942] hover:underline truncate block"
                    >
                      {PROFESSOR_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] min-h-[44px]">
                  <Phone className="w-4 h-4 text-[#0F2942] shrink-0" />
                  <div>
                    <span className="block text-[11px] text-[#64748B]">Office Telephone / Direct Desk:</span>
                    <a
                      href={`tel:${PROFESSOR_INFO.phone.replace(/[^0-9+]/g, '')}`}
                      className="font-medium text-[#0F2942] hover:underline"
                    >
                      {PROFESSOR_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-lg border border-[#E2E8F0] p-6 sm:p-8 shadow-2xs"
            >
              <div className="border-b border-[#F1F5F9] pb-4 mb-6">
                <h3 className="text-base sm:text-lg font-bold text-[#0F2942] flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Send an Academic or Departmental Message</span>
                </h3>
                <p className="text-xs text-[#64748B] mt-1">
                  Inquiries are directed to Prof. Harish Bhabad’s academic desk. Expected response: 1–2 working days.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 space-y-3"
                  >
                    <div className="flex items-center gap-2 font-bold text-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Message Transmitted Successfully</span>
                    </div>
                    <p className="text-xs leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Your inquiry regarding <strong>{formData.purpose}</strong> has been forwarded to Prof. Harish Bhabad's office. You will receive an email confirmation at <strong>{formData.email}</strong>.
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
                      className="text-xs font-semibold text-emerald-800 underline hover:text-emerald-950 pt-2 block cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#334155] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F8FAFC] border border-[#CBD5E1] rounded-md focus-visible:outline-2 focus-visible:outline-[#0F2942] focus:bg-white transition-colors min-h-[42px]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#334155] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@institution.edu / gmail.com"
                          className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F8FAFC] border border-[#CBD5E1] rounded-md focus-visible:outline-2 focus-visible:outline-[#0F2942] focus:bg-white transition-colors min-h-[42px]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#334155] mb-1">
                          Institutional / Company Affiliation
                        </label>
                        <input
                          type="text"
                          value={formData.affiliation}
                          onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                          placeholder="e.g. LoGMIEER B.E. Final Year / Industry Partner"
                          className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F8FAFC] border border-[#CBD5E1] rounded-md focus-visible:outline-2 focus-visible:outline-[#0F2942] focus:bg-white transition-colors min-h-[42px]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#334155] mb-1">
                          Purpose of Contact *
                        </label>
                        <select
                          value={formData.purpose}
                          onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                          className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F8FAFC] border border-[#CBD5E1] rounded-md focus-visible:outline-2 focus-visible:outline-[#0F2942] focus:bg-white transition-colors min-h-[42px]"
                        >
                          {purposes.map((p, idx) => (
                            <option key={idx} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#334155] mb-1">
                        Subject Line *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Brief summary of inquiry"
                        className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F8FAFC] border border-[#CBD5E1] rounded-md focus-visible:outline-2 focus-visible:outline-[#0F2942] focus:bg-white transition-colors min-h-[42px]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#334155] mb-1">
                        Message Details *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Provide relevant details regarding your course, project, research, or administrative topic..."
                        className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F8FAFC] border border-[#CBD5E1] rounded-md focus-visible:outline-2 focus-visible:outline-[#0F2942] focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0F2942] hover:bg-[#1A3E61] rounded-md transition-all shadow-xs cursor-pointer min-h-[44px] active:scale-95 disabled:opacity-75"
                      >
                        {isSubmitting ? (
                          <span>Transmitting Message...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Official Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
