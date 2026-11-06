
interface StackCategory {
  title: string;
  description: string;
  items: string[];
}

const Skills = () => {
  const stack: StackCategory[] = [
    {
      title: "Agentic AI & LLM Systems",
      description: "Autonomous tool use, agent orchestration, and deterministic prompting pipelines on AWS Bedrock.",
      items: [
        "AWS Bedrock",
        "Claude 3.5 / Sonnet",
        "Model Context Protocol (MCP)",
        "Multi-Agent Orchestration",
        "Prompt Management & Evals",
        "Structured JSON Schemas"
      ]
    },
    {
      title: "Knowledge Graphs & RAG",
      description: "Autonomous schema induction, entity extraction, and multi-hop hybrid retrieval.",
      items: [
        "graphrag-atlas (PyPI)",
        "AutoSchemaKG",
        "Hybrid Search (BM25 + Dense)",
        "Vector Databases",
        "NetworkX",
        "LangChain"
      ]
    },
    {
      title: "Enterprise SAP S/4HANA",
      description: "ERP transformation standards, specification automation, and enterprise integration.",
      items: [
        "SAP S/4HANA",
        "WRICEF Development Standards",
        "RFC Data Extraction",
        "SAP Integration Suite (CPI)",
        "SAP BTP / Cloud Foundry",
        "ITIL v4 Framework"
      ]
    },
    {
      title: "Languages & Infrastructure",
      description: "Asynchronous backend runtimes, typed frontend interfaces, and container pipelines.",
      items: [
        "Python (FastAPI, Flask)",
        "TypeScript",
        "React / Next.js",
        "Node.js",
        "Docker",
        "AWS (S3, Bedrock)",
        "Git & CI/CD"
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
