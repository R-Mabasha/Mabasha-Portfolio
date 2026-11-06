
import { useState } from 'react';
import { Github, ArrowUpRight, Copy, Check } from 'lucide-react';

interface Project {
  title: string;
  badge: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  installCommand?: string;
}

const Projects = () => {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const projects: Project[] = [
    {
      title: "graphrag-atlas",
      badge: "PyPI Framework",
      description: "Single-store hybrid GraphRAG framework eliminating multi-database sprawl in production AI. Unifies Lucene BM25, dense HNSW vectors, and bounded property graph traversals inside a single cluster, featuring an automated Hub Guard circuit breaker (degree ≤ 200) against super-node latency spikes.",
      tech: ["Python", "Hybrid GraphRAG", "Atlas Lucene", "Circuit Breakers", "PyPI"],
      github: "https://github.com/R-Mabasha/graphrag-atlas",
      live: "https://pypi.org/project/graphrag-atlas/",
      installCommand: "pip install graphrag-atlas"
    },
    {
      title: "antigravity-project-memory",
      badge: "MCP Standard",
      description: "Production-grade, zero-dependency Model Context Protocol (MCP) server delivering stateful agent memory. Features sub-2ms BM25 hybrid indexing, deterministic session caching, and multi-agent knowledge consolidation for autonomous development environments.",
      tech: ["TypeScript", "Model Context Protocol", "Semantic Indexing", "Sub-2ms RAG"],
      github: "https://github.com/R-Mabasha/antigravity-project-memory"
    },
    {
      title: "Multi-Agent-Mcp",
      badge: "Autonomous Orchestration",
      description: "Git-sandboxed multi-agent orchestration fabric. Enables teams of specialized autonomous agents (planners, coders, verifiers) to execute parallel experiments on isolated git worktrees with strict permission gates, conflict resolution, and automated reconciliation.",
      tech: ["Python", "Multi-Agent Coordination", "Git Worktrees", "MCP", "AWS Bedrock"],
      github: "https://github.com/R-Mabasha/Multi-Agent-Mcp"
    },
    {
      title: "Vision-Stream",
      badge: "Real-Time AI Stream",
      description: "High-throughput multimodal video analytics pipeline built for the Gemini 3 Hackathon. Intercepts live camera streams for real-time temporal event detection, sub-second LLM classification, and responsive edge telemetry rendering.",
      tech: ["React 19", "Gemini Multi-Modal", "WebRTC", "OpenCV", "AsyncIO"],
      github: "https://github.com/R-Mabasha/Vision-Stream"
    },
    {
      title: "MobiSafe",
      badge: "SIH 2023 National Champion",
      description: "National 1st-place award-winning IoT & deep learning vehicle telemetry architecture solving Ministry of Coal Problem Statement 1313. Integrates edge computer vision with bidirectional LSTM networks for predictive driver state and fleet safety.",
      tech: ["Python", "Bidirectional LSTM", "Edge IoT", "OpenCV", "Fleet Telemetry"],
      github: "https://github.com/R-Mabasha/MobiSafe"
    },
    {
      title: "Chittu-AI-Assistant",
      badge: "Local Edge Intelligence",
      description: "Low-latency voice assistant engine combining continuous streaming automatic speech recognition, semantic intent parsing, and LLM reasoning for hands-free local OS workflow automation.",
      tech: ["Python", "Streaming ASR", "Intent Parsing", "Gemini API", "OS Automation"],
      github: "https://github.com/R-Mabasha/Chittu-AI-Assistant"
    }
  ];

  return (
    <section id="projects" className="space-y-6 pt-6 border-t border-zinc-800/80">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
          Featured Projects
        </h2>
        <p className="text-sm text-zinc-400">
          Open source packages, agent frameworks, and competition systems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <article
            key={index}
            className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 flex flex-col justify-between hover:border-zinc-700/80 transition-colors"
          >
            <div className="space-y-3">
              {/* Header */}
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-zinc-100 font-mono">
                  {project.title}
                </h3>
                <span className="px-2 py-0.5 text-[11px] font-mono text-zinc-400 bg-zinc-800/80 rounded border border-zinc-750">
                  {project.badge}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {project.description}
              </p>

              {/* Copyable Install command */}
              {project.installCommand && (
                <div className="flex items-center justify-between bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800 font-mono text-xs text-zinc-300">
                  <span className="text-zinc-400">$ {project.installCommand}</span>
                  <button
                    type="button"
                    onClick={() => handleCopy(project.installCommand!)}
                    aria-label="Copy install command"
                    className="p-1 text-zinc-400 hover:text-zinc-100 transition-colors focus:outline-none"
                  >
                    {copiedCmd === project.installCommand ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    )}
                  </button>
                </div>
              )}

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-[11px] font-mono text-zinc-400 bg-zinc-850/80 rounded border border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex items-center space-x-4 pt-4 mt-3 border-t border-zinc-800/60 text-xs font-medium">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-zinc-300 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Source</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" aria-hidden="true" />
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-zinc-300 hover:text-white transition-colors"
                >
                  <span>Package</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* GitHub Link */}
      <div className="pt-2 text-sm">
        <a
          href="https://github.com/R-Mabasha"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 text-zinc-400 hover:text-zinc-200 transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-400"
        >
          <span>See all public repositories on GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
