import { ArrowDown, Github, Linkedin, Mail, Phone, Award, Sparkles, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-20 sm:pt-0">
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-1/4 w-[28rem] h-[28rem] bg-indigo-600/15 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-12">
        <div className="space-y-8 animate-fade-in">
          {/* Status badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gray-900/80 border border-gray-800 text-xs sm:text-sm text-gray-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-gray-200">Associate Engineer @ KTern.AI</span>
            <span className="text-gray-600">|</span>
            <span className="text-purple-400 font-medium">SIH 2023 Winner</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight">
            <span className="block text-gray-400 text-lg sm:text-2xl font-mono font-normal mb-3">Hi, I'm</span>
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Mabasha R.
            </span>
          </h1>

          {/* Subtitle & Value Proposition */}
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl sm:text-2xl font-semibold text-gray-200">
              Agentic AI & LLM Systems <span className="text-purple-400 font-mono">·</span> Enterprise S/4HANA Transformation
            </p>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Engineering autonomous LLM agent pipelines on AWS Bedrock, Model Context Protocol (MCP) servers, 
              and schema-free GraphRAG architectures aligned to enterprise SAP WRICEF standards.
            </p>
          </div>

          {/* Quick Stat Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs sm:text-sm text-gray-300">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-gray-900/60 border border-gray-800 rounded-lg">
              <Award className="w-4 h-4 text-yellow-400" aria-hidden="true" />
              <span>Smart India Hackathon '23 Winner</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-gray-900/60 border border-gray-800 rounded-lg">
              <Sparkles className="w-4 h-4 text-purple-400" aria-hidden="true" />
              <span>KTern.AI Star of the Month</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-gray-900/60 border border-gray-800 rounded-lg">
              <Terminal className="w-4 h-4 text-pink-400" aria-hidden="true" />
              <span>PyPI Author: <code className="text-pink-300 font-mono">graphrag-atlas</code></span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <button 
              type="button"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-7 py-3.5 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 rounded-xl font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black w-full sm:w-auto"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Explore Featured Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
              </span>
            </button>

            <button 
              type="button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 bg-gray-900/80 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 text-gray-200 hover:text-white rounded-xl font-medium transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black w-full sm:w-auto"
            >
              <span className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4 text-gray-300" aria-hidden="true" />
                <span>Get In Touch</span>
              </span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 pt-4">
            <a 
              href="https://github.com/R-Mabasha" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile (opens in new tab)"
              className="p-3 text-gray-400 hover:text-white bg-gray-900/80 hover:bg-gray-800 border border-gray-800 hover:border-purple-500/50 rounded-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mabasha-r/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile (opens in new tab)"
              className="p-3 text-gray-400 hover:text-white bg-gray-900/80 hover:bg-gray-800 border border-gray-800 hover:border-purple-500/50 rounded-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>
            <a 
              href="mailto:mabasham52@gmail.com"
              aria-label="Send Email to mabasham52@gmail.com"
              className="p-3 text-gray-400 hover:text-white bg-gray-900/80 hover:bg-gray-800 border border-gray-800 hover:border-purple-500/50 rounded-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
            </a>
            <a 
              href="tel:+919025389633"
              aria-label="Call Mobile +91 9025389633"
              className="p-3 text-gray-400 hover:text-white bg-gray-900/80 hover:bg-gray-800 border border-gray-800 hover:border-purple-500/50 rounded-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
