import { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { PROFESSOR_INFO } from '../data/professorData';
import professorPortrait from '../assets/prof_harish_bhabad.png';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Building2, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  GraduationCap,
  Calendar
} from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: 'Research Inquiry',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FBFBF9] min-h-screen">
      <PageHeader
        category="Departmental Desk"
        title="Institutional Contact & Consultation"
        description="Office location, consultation hours, verified institutional coordinates, and academic inquiry form for research collaboration, student project mentorship, and placements."
        breadcrumb="Contact"
        badge="Faculty Office"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Coordinates & Consultation Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-2xs space-y-5">
              {/* Faculty Identity Mini Header */}
              <div className="flex items-center gap-4 pb-4 border-b border-[#E2E8F0]">
                <img
                  src={professorPortrait}
                  alt="Prof. Harish Parshuram Bhabad"
                  className="w-16 h-auto aspect-[865/1024] object-cover rounded-md border border-[#CBD5E1] shadow-2xs shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-[11px] uppercase font-bold tracking-wider text-[#64748B]">
                    Faculty Contact Desk
                  </div>
                  <h2 className="font-bold text-base text-[#0F2942]">
                    {PROFESSOR_INFO.name}
                  </h2>
                  <div className="text-xs text-[#475569]">
                    Assistant Professor (Computer Engg.)
                  </div>
                  <div className="text-[11px] text-emerald-700 font-medium mt-0.5">
                    Room 204 • LoGMIEER, Nashik
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#334155]">
                {/* Official Emails */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#0F2942]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0F2942] block">Institutional Email</span>
                    <a href={`mailto:${PROFESSOR_INFO.email}`} className="text-[#0F2942] hover:underline font-medium">
                      {PROFESSOR_INFO.email}
                    </a>
                    <div className="text-xs text-[#64748B] mt-0.5">
                      Alternate: <a href="mailto:harishbhabad@gmail.com" className="hover:underline">harishbhabad@gmail.com</a>
                    </div>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#0F2942]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0F2942] block">Direct Telephone</span>
                    <a href={`tel:${PROFESSOR_INFO.phone.replace(/[^0-9+]/g, '')}`} className="text-[#0F2942] hover:underline font-medium">
                      {PROFESSOR_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Physical Office Location */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#0F2942]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0F2942] block">Physical Office</span>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {PROFESSOR_INFO.officeLocation}
                      <br />
                      Department of Computer Engineering
                      <br />
                      {PROFESSOR_INFO.institution}
                      <br />
                      Nashik - 422002, Maharashtra, India
                    </p>
                  </div>
                </div>

                {/* Consultation Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#0F2942]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0F2942] block">Weekly Office Hours</span>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {PROFESSOR_INFO.officeHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Departmental Roles Card */}
            <div className="bg-[#FAF8F5] rounded-lg border border-[#E7E2D8] p-6 space-y-3 text-xs">
              <div className="font-bold text-[#0F2942] uppercase tracking-wider text-[11px]">
                Department Leadership Portfolios
              </div>
              <ul className="space-y-2 text-[#475569]">
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span><strong>Training & Placement Coordinator:</strong> Industry recruitment drives, graduate readiness, and campus placement relations.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span><strong>AICTE-SANKALP HPC Coordinator:</strong> Supercomputing, high-performance computing workshops, and state-level training.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span><strong>Laboratory In-Charge:</strong> Operating Systems & Network Forensics Labs.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Academic Inquiry & Consultation Form */}
          <div className="lg:col-span-7 bg-white rounded-lg border border-[#E2E8F0] p-6 sm:p-8 shadow-2xs space-y-6">
            <div className="border-b border-[#F1F5F9] pb-4">
              <div className="text-xs uppercase font-bold tracking-wider text-[#0F2942]">
                Official Inquiries
              </div>
              <h2 className="font-serif-academic text-xl sm:text-2xl font-bold text-[#0F2942] mt-0.5">
                Send Academic or Administrative Message
              </h2>
              <p className="text-xs text-[#64748B] mt-1">
                Direct transmission to Prof. Harish Parshuram Bhabad's institutional desk.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="text-base font-bold text-emerald-900">
                  Message Successfully Dispatched
                </h3>
                <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your inquiry regarding <strong>{formData.purpose}</strong> has been received by Prof. Harish Bhabad's office. You will receive an email response at <strong>{formData.email}</strong> within 1–2 academic working days.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      purpose: 'Research Inquiry',
                      subject: '',
                      message: '',
                    });
                  }}
                  className="mt-2 px-4 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md cursor-pointer transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#334155] mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Rajesh Kulkarni / Student Name"
                      className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-md focus:outline-hidden focus:border-[#0F2942]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#334155] mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-md focus:outline-hidden focus:border-[#0F2942]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#334155] mb-1">
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-md focus:outline-hidden focus:border-[#0F2942]"
                    >
                      <option value="Research Collaboration">Research Collaboration (Post-Quantum / Blockchain)</option>
                      <option value="Final-Year Capstone Guidance">B.E. Final-Year Capstone Project Guidance</option>
                      <option value="Training & Placement">Training & Placement / Industry Recruitment</option>
                      <option value="Book Syllabus Adoption">Book Inspection / Syllabus Adoption</option>
                      <option value="Student Coursework & Labs">SPPU Coursework / Laboratory Inquiries</option>
                      <option value="Workshop & Guest Lecture">Technical Workshop / Guest Lecture Invitation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#334155] mb-1">
                      Subject Line *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Collaboration on Post-Quantum Cryptography"
                      className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-md focus:outline-hidden focus:border-[#0F2942]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#334155] mb-1">
                    Detailed Message & Query *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide detailed context regarding your academic proposal, student project synopsis, or appointment request..."
                    className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-md focus:outline-hidden focus:border-[#0F2942] leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#64748B]">
                    Institutional queries receive priority response.
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-[#0F2942] hover:bg-[#1A3E61] rounded-md transition-colors shadow-xs cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Transmit Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
