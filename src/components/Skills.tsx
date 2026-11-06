
interface StackCategory {
  title: string;
  description: string;
  items: string[];
}

const Skills = () => {
  const stack: StackCategory[] = [
    {
      title: "Autonomous Agent Systems & LLM Engineering",
      description: "Multi-agent orchestration loops, deterministic prompt compilation, and formal schema enforcement on AWS Bedrock.",
      items: [
        "AWS Bedrock",
        "Frontier LLM Orchestration",
        "Model Context Protocol (MCP)",
        "Multi-Agent Coordination",
        "Prompt Compilers & Guardrails",
        "Deterministic JSON Schemas"
      ]
    },
    {
      title: "Knowledge Topology & Advanced Retrieval",
      description: "Single-store GraphRAG, dynamic entity extraction, and multi-hop hybrid retrieval with latency circuit breakers.",
      items: [
        "graphrag-atlas (PyPI)",
        "Hybrid Search (BM25 + HNSW)",
        "Property Graphs",
        "Reciprocal Rank Fusion",
        "Circuit Breakers",
        "NetworkX"
      ]
    },
    {
      title: "Enterprise ERP & SAP S/4HANA Systems",
      description: "Enterprise transformation architectures, specification automation, and mission-critical integration fabrics.",
      items: [
        "SAP S/4HANA Modernization",
        "WRICEF Specification Standards",
        "RFC Data Extraction",
        "SAP Integration Suite (CPI)",
        "SAP BTP / Cloud Foundry",
        "ITIL v4 Governance"
      ]
    },
    {
      title: "Distributed Backend, Languages & Infrastructure",
      description: "High-concurrency asynchronous runtimes, type-safe full-stack systems, and isolated sandbox environments.",
      items: [
        "Python (FastAPI, AsyncIO)",
        "TypeScript",
        "React / Next.js",
        "Node.js",
        "PostgreSQL & MongoDB",
        "Docker & Linux",
        "Git Worktrees & CI/CD"
      ]
    }
  ];

  return (
    <section id="skills" className="space-y-6 pt-6 border-t border-zinc-800/80">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
          Technical Skills & Stack
        </h2>
        <p className="text-sm text-zinc-400">
          Core technologies, frameworks, and system competencies used in production.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stack.map((group, index) => (
          <div
            key={index}
            className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 space-y-3 hover:border-zinc-700/80 transition-colors"
          >
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-zinc-100">
                {group.title}
              </h3>
              <p className="text-xs text-zinc-400 mt-1 leading-normal">
                {group.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {group.items.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs font-mono text-zinc-300 bg-zinc-850/80 rounded border border-zinc-750"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
