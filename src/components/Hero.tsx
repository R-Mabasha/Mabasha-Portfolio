import { Github, Linkedin, Mail, Phone, ArrowUpRight, Award, Terminal } from 'lucide-react';

const Hero = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section id="home" className="space-y-8 pt-4">
      {/* Profile Header Row */}
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="space-y-2">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-zinc-200 font-medium">Associate Engineer @ KTern.AI</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100">
            Mabasha R.
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-medium">
            Agentic AI & LLM Systems · SAP S/4HANA Transformation
          </p>
        </div>

        {/* Profile Avatar */}
        <div className="relative flex-shrink-0">
          <img
            src={`${baseUrl}lovable-uploads/7733247b-206c-481c-ae5e-33b600d55e7c.png`}
            alt="Mabasha R."
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top border border-zinc-750 bg-zinc-900 shadow-md"
          />
        </div>
      </div>

      {/* Bio Description */}
      <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
        I engineer autonomous LLM agent pipelines on AWS Bedrock, Model Context Protocol (MCP) servers, and schema-free GraphRAG frameworks. At KTern.AI, I architect agentic workflows that translate natural language business needs into enterprise-compliant SAP WRICEF functional specifications.
      </p>

      {/* Highlight Tags */}
      <div className="flex flex-wrap gap-2 text-xs">
        <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-zinc-900/90 text-zinc-300 border border-zinc-800 rounded-lg">
          <Award className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
          <span>SIH 2023 1st Place (₹1,00,000)</span>
        </span>
        <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-zinc-900/90 text-zinc-300 border border-zinc-800 rounded-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
          <span>KTern.AI Star of the Month</span>
        </span>
        <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-zinc-900/90 text-zinc-300 border border-zinc-800 rounded-lg">
          <Terminal className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" />
          <span>PyPI: <code className="text-zinc-200 font-mono">graphrag-atlas</code></span>
        </span>
      </div>

      {/* Action Buttons & Social Links */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href="#projects"
          className="px-4 py-2 text-sm font-medium text-zinc-900 bg-zinc-100 hover:bg-white rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 shadow-sm"
        >
          View Projects
        </a>

        <a
          href="https://github.com/R-Mabasha"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile (opens in new tab)"
          className="inline-flex items-center space-x-1.5 px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
        >
          <Github className="w-4 h-4" aria-hidden="true" />
          <span>GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" aria-hidden="true" />
        </a>

        <a
          href="https://www.linkedin.com/in/mabasha-r/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile (opens in new tab)"
          className="inline-flex items-center space-x-1.5 px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
        >
          <Linkedin className="w-4 h-4" aria-hidden="true" />
          <span>LinkedIn</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" aria-hidden="true" />
        </a>

        <a
          href="mailto:mabasham52@gmail.com"
          aria-label="Email mabasham52@gmail.com"
          className="inline-flex items-center space-x-1.5 px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
        >
          <Mail className="w-4 h-4" aria-hidden="true" />
          <span>Email</span>
        </a>

        <a
          href="tel:+919025389633"
          aria-label="Call +91 9025389633"
          className="inline-flex items-center space-x-1.5 px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          <span>Phone</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
