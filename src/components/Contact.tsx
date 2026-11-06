import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mabasham52@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:mabasham52@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="space-y-6 pt-6 border-t border-zinc-800/80">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
          Contact
        </h2>
        <p className="text-sm text-zinc-400">
          Get in touch for collaborations, discussions on Agentic AI, or enterprise inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info */}
        <div className="md:col-span-5 space-y-4">
          {/* Quick Copy Email Card */}
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 space-y-2">
            <span className="text-xs font-mono text-zinc-400">Primary Email</span>
            <div className="flex items-center justify-between gap-2">
              <a
                href="mailto:mabasham52@gmail.com"
                className="text-sm font-medium text-zinc-200 hover:text-white transition-colors truncate"
              >
                mabasham52@gmail.com
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address to clipboard"
                className="inline-flex items-center space-x-1 px-2 py-1 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700/80 rounded-md transition-colors focus:outline-none"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Details List */}
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 space-y-3 text-xs sm:text-sm">
            <div className="flex items-center space-x-3 text-zinc-300">
              <Phone className="w-4 h-4 text-zinc-400 flex-shrink-0" aria-hidden="true" />
              <a href="tel:+919025389633" className="hover:text-white transition-colors">
                +91 9025389633
              </a>
            </div>

            <div className="flex items-center space-x-3 text-zinc-400">
              <MapPin className="w-4 h-4 text-zinc-400 flex-shrink-0" aria-hidden="true" />
              <span>Chennai, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center space-x-3 pt-1">
            <a
              href="https://github.com/R-Mabasha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile (opens in new tab)"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-md transition-colors"
            >
              <Github className="w-3.5 h-3.5" aria-hidden="true" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mabasha-r/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile (opens in new tab)"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-md transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="md:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 space-y-4"
          >
            {submitted && (
              <div className="p-3 bg-zinc-800/80 border border-zinc-700/80 rounded-lg text-xs text-zinc-200">
                Opening default email client with your message...
              </div>
            )}

            <div className="space-y-1.5">
              <label htmlFor="form-name" className="block text-xs font-medium text-zinc-300">
                Name
              </label>
              <input
                type="text"
                id="form-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="Your name"
                className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="form-email" className="block text-xs font-medium text-zinc-300">
                Email
              </label>
              <input
                type="email"
                id="form-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="form-message" className="block text-xs font-medium text-zinc-300">
                Message
              </label>
              <textarea
                id="form-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                placeholder="What would you like to discuss?"
                className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors resize-y"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2.5 text-xs sm:text-sm font-medium text-zinc-900 bg-zinc-100 hover:bg-white rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 flex items-center justify-center space-x-2 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>

      {/* Understated Minimalist Footer */}
      <footer className="pt-16 pb-8 text-center text-xs text-zinc-400 font-mono">
        <p>© {new Date().getFullYear()} Mabasha R. · Chennai, India</p>
      </footer>
    </section>
  );
};

export default Contact;
