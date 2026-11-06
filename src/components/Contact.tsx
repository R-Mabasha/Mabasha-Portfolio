import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, ArrowUpRight, Terminal } from 'lucide-react';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mabasham52@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="space-y-6 pt-6 border-t border-zinc-800/80">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
          Get in Touch
        </h2>
        <p className="text-sm text-zinc-400">
          Open to discussions on AI systems architecture, agentic engineering, or enterprise transformation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email Card */}
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 space-y-3 hover:border-zinc-700/80 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
              <Mail className="w-4 h-4 text-zinc-400" aria-hidden="true" />
              <span>Direct Email</span>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              className="inline-flex items-center space-x-1 px-2 py-1 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700/80 rounded-md transition-colors"
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

          <div>
            <a
              href="mailto:mabasham52@gmail.com"
              className="text-base sm:text-lg font-medium text-zinc-100 hover:text-white transition-colors"
            >
              mabasham52@gmail.com
            </a>
            <p className="text-xs text-zinc-400 mt-1">
              Best for technical inquiries, consulting discussions, and engineering collaborations.
            </p>
          </div>
        </div>

        {/* Phone Card */}
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 space-y-3 hover:border-zinc-700/80 transition-colors">
          <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
            <Phone className="w-4 h-4 text-zinc-400" aria-hidden="true" />
            <span>Phone & Direct Line</span>
          </div>

          <div>
            <a
              href="tel:+919025389633"
              className="text-base sm:text-lg font-medium text-zinc-100 hover:text-white transition-colors"
            >
              +91 9025389633
            </a>
            <p className="text-xs text-zinc-400 mt-1">
              Available for quick syncs and urgent conversations.
            </p>
          </div>
        </div>

        {/* Location & Timezone Card */}
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 space-y-3 hover:border-zinc-700/80 transition-colors">
          <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
            <MapPin className="w-4 h-4 text-zinc-400" aria-hidden="true" />
            <span>Location & Availability</span>
          </div>

          <div>
            <p className="text-sm sm:text-base font-medium text-zinc-100">
              Chennai, Tamil Nadu, India
            </p>
            <p className="text-xs text-zinc-400 mt-1">
              Timezone: IST (UTC+5:30) · Open to global remote collaboration and on-site enterprise engagements.
            </p>
          </div>
        </div>

        {/* Channels & Profiles Card */}
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 space-y-3 hover:border-zinc-700/80 transition-colors">
          <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
            <Terminal className="w-4 h-4 text-zinc-400" aria-hidden="true" />
            <span>Profiles & Repositories</span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <a
              href="https://www.linkedin.com/in/mabasha-r/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:text-white bg-zinc-800/90 hover:bg-zinc-750 border border-zinc-700/80 rounded-lg transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" aria-hidden="true" />
            </a>

            <a
              href="https://github.com/R-Mabasha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:text-white bg-zinc-800/90 hover:bg-zinc-750 border border-zinc-700/80 rounded-lg transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-zinc-300" aria-hidden="true" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" aria-hidden="true" />
            </a>

            <a
              href="https://pypi.org/project/graphrag-atlas/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:text-white bg-zinc-800/90 hover:bg-zinc-750 border border-zinc-700/80 rounded-lg transition-colors"
            >
              <Terminal className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
              <span>PyPI Package</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Understated Minimalist Footer */}
      <footer className="pt-16 pb-8 text-center text-xs text-zinc-500 font-mono">
        <p>© {new Date().getFullYear()} Mabasha R. · Chennai, India</p>
      </footer>
    </section>
  );
};

export default Contact;
