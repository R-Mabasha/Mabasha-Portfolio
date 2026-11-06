
import { useState } from 'react';
import { Github, ExternalLink, Award, Code2, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  badge: string;
  category: 'agentic' | 'systems';
  description: string;
  tech: string[];
  github: string;
  live: string | null;
  award?: string;
  featured?: boolean;
  installCommand?: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'agentic' | 'systems'>('all');

  const projects: Project[] = [
    {
      title: "graphrag-atlas",
      badge: "PyPI Package · GraphRAG",
      category: 'agentic',
      description: "Autonomous Knowledge Graph construction and GraphRAG engine without requiring predefined schemas. Features dynamic schema induction, entity extraction, and multi-hop relationship retrieval across large unstructured corpora.",
      tech: ["Python", "LangChain", "NetworkX", "GraphRAG", "PyPI", "Embeddings"],
      github: "https://github.com/R-Mabasha/graphrag-atlas",
      live: "https://pypi.org/project/graphrag-atlas/",
      award: "PyPI Release v0.1.0",
      featured: true,
      installCommand: "pip install graphrag-atlas"
    },
    {
      title: "antigravity-project-memory",
      badge: "MCP Server · Long-Term Memory",
      category: 'agentic',
      description: "Production-grade Anthropic Model Context Protocol (MCP) server providing autonomous persistent long-term memory for AI coding agents with hybrid search (BM25 + Dense Vectors) and multi-agent knowledge consolidation.",
      tech: ["TypeScript", "Model Context Protocol", "Vector DB", "BM25 Hybrid Search", "Node.js"],
      github: "https://github.com/R-Mabasha/antigravity-project-memory",
      live: null,
      award: "MCP Protocol Standard",
      featured: true
    },
    {
      title: "Multi-Agent-Mcp",
      badge: "Agentic Framework",
      category: 'agentic',
      description: "Enterprise multi-agent coordination architecture leveraging the Model Context Protocol (MCP) to orchestrate specialized researcher, developer, and verifier agents for complex asynchronous tasks.",
      tech: ["Python", "MCP SDK", "AWS Bedrock", "AsyncIO", "LLM Orchestration"],
      github: "https://github.com/R-Mabasha/Multi-Agent-Mcp",
      live: null,
      featured: false
    },
    {
      title: "Vision-Stream",
      badge: "Gemini 3 Hackathon",
      category: 'systems',
      description: "Real-time multimodal streaming intelligence and video analytics pipeline built for the Gemini 3 Hackathon, combining low-latency video feeds with vision models for high-frame situational awareness.",
      tech: ["Python", "Gemini API", "OpenCV", "WebRTC", "Computer Vision"],
      github: "https://github.com/R-Mabasha/Vision-Stream",
      live: null,
      award: "Hackathon Entry",
      featured: false
    },
    {
      title: "MobiSafe",
      badge: "SIH 2023 National Winner",
      category: 'systems',
      description: "AI-driven vehicle safety monitoring and predictive maintenance system using LSTM deep neural networks and computer vision to detect driver fatigue and vehicle telemetry anomalies in real-time.",
      tech: ["Python", "TensorFlow", "LSTM", "OpenCV", "IoT Telemetry", "Flask"],
      github: "https://github.com/R-Mabasha/MobiSafe",
      live: null,
      award: "1st Place & ₹1,00,000",
      featured: true
    },
    {
      title: "Chittu-AI-Assistant",
      badge: "Voice & Desktop Agent",
      category: 'agentic',
      description: "Intelligent desktop voice assistant featuring continuous speech recognition, NLP intent parsing, and Gemini API integration for hands-free local system workflow automation.",
      tech: ["Python", "Gemini API", "Speech Recognition", "NLP", "GUI"],
      github: "https://github.com/R-Mabasha/Chittu-AI-Assistant",
      live: null,
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-24 bg-gradient-to-b from-black via-gray-950 to-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs text-purple-300 font-medium mb-4">
            <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Open Source & Production Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4 mb-4"></div>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Real implementations in Agentic AI, autonomous GraphRAG engines, and national award-winning systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
              activeFilter === 'all'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/25'
                : 'bg-gray-900/80 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700'
            }`}
          >
            All Work ({projects.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('agentic')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
              activeFilter === 'agentic'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/25'
                : 'bg-gray-900/80 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700'
            }`}
          >
            Agentic AI & RAG
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('systems')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
              activeFilter === 'systems'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/25'
                : 'bg-gray-900/80 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700'
            }`}
          >
            Award Winners & Systems
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <article
              key={index}
              className={`group flex flex-col justify-between bg-gray-950/90 rounded-2xl p-6 sm:p-7 border border-gray-800/80 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Header Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-purple-950/60 text-purple-300 border border-purple-800/40">
                    {project.badge}
                  </span>
                  {project.award && (
                    <span className="flex items-center space-x-1 px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-amber-950/40 text-amber-300 border border-amber-800/40">
                      <Award className="w-3 h-3 text-amber-400" aria-hidden="true" />
                      <span>{project.award}</span>
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-200 mb-3 tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Optional CLI Install snippet for PyPI / open source */}
                {project.installCommand && (
                  <div className="mb-4 p-2.5 bg-black/80 rounded-lg border border-gray-800/80 font-mono text-xs text-gray-300 flex items-center justify-between">
                    <div className="flex items-center space-x-2 overflow-x-auto">
                      <Terminal className="w-3.5 h-3.5 text-pink-400 flex-shrink-0" aria-hidden="true" />
                      <span className="text-pink-300">{project.installCommand}</span>
                    </div>
                  </div>
                )}

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[11px] font-medium rounded bg-gray-900 text-gray-300 border border-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-800/80 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code for ${project.title} on GitHub`}
                  className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-md py-1 px-1.5"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  <span>GitHub Repository</span>
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live documentation or package for ${project.title}`}
                    className="inline-flex items-center space-x-1 text-xs sm:text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-md py-1 px-1.5"
                  >
                    <span>PyPI Package</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Global GitHub CTA */}
        <div className="text-center mt-14 sm:mt-16">
          <a
            href="https://github.com/R-Mabasha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all repositories on GitHub (opens in new tab)"
            className="group inline-flex items-center space-x-2.5 px-7 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <Github className="w-5 h-5" aria-hidden="true" />
            <span>Explore All Repositories on GitHub</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
