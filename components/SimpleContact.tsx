import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, ExternalLink } from 'lucide-react';

const SimpleContact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus('idle');
    }, 4000);
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-2xl font-bold text-slate-900">Get In Touch</h2>
        <p className="text-sm text-slate-500 mt-1">
          Open for engineering roles, technical consultations, and research collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Contact Info */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              Direct Contact Details
            </h3>

            <div className="space-y-3.5">
              <a
                href="mailto:sourish713321@gmail.com"
                className="flex items-center gap-3 text-xs text-slate-700 hover:text-indigo-600 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Mail size={15} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold uppercase">Email</span>
                  <span>sourish713321@gmail.com</span>
                </div>
              </a>

              <a
                href="tel:+919832264627"
                className="flex items-center gap-3 text-xs text-slate-700 hover:text-indigo-600 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Phone size={15} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold uppercase">Phone</span>
                  <span>+91 98322 64627</span>
                </div>
              </a>

              <div className="flex items-center gap-3 text-xs text-slate-700">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <MapPin size={15} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold uppercase">Location</span>
                  <span>Bhubaneswar, Odisha, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              Professional Profiles
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://github.com/sourishdey2005"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-2 transition-colors"
              >
                <Github size={15} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sourish-dey-20b170206/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-2 transition-colors"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <a
                href="https://linktr.ee/Sourishdey"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-2 transition-colors"
              >
                <ExternalLink size={15} /> Linktree
              </a>
              <a
                href="https://www.researchgate.net/profile/Sourish-Dey-3?ev=hdr_xprf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-2 transition-colors"
              >
                <ExternalLink size={15} /> ResearchGate
              </a>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="md:col-span-7">
          <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
            <h3 className="text-base font-bold text-slate-900 mb-1">Send a Message</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Subject</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={e => setFormData({ ...formData, subject: e.target.value })}
                placeholder="MLOps Opportunity / Project Inquiry"
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe your project or opportunity..."
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 bg-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              {status === 'success' ? (
                <>
                  <CheckCircle2 size={15} /> Message Sent Successfully
                </>
              ) : (
                <>
                  <Send size={14} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SimpleContact;
