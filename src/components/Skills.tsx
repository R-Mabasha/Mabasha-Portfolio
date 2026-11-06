
import { useState } from 'react';
import { Bot, Network, Server, Layers, Cpu, CheckCircle2 } from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  icon: typeof Bot;
  color: string;
  accentBorder: string;
  description: string;
  technologies: string[];
  capabilities: string[];
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories: SkillCategory[] = [
    {
      id: 'agentic-ai',
      title: "Agentic AI & LLM Systems",
      badge: "Core Focus",
      icon: Bot,
      color: "from-purple-500/20 to-indigo-500/20 text-purple-400",
      accentBorder: "group-hover:border-purple-500/50",
      description: "End-to-end prompt engineering, autonomous tool calling, and multi-agent systems deployed on AWS Bedrock.",
      technologies: [
        "AWS Bedrock",
        "Claude 3.5 / Sonnet",
        "Model Context Protocol (MCP)",
        "Multi-Agent Orchestration",
        "Prompt Management",
        "Function Calling",
        "Structured Output / JSON Schema"
      ],
      capabilities: [
        "Autonomous agents translating user inputs into WRICEF functional specifications",
        "MCP tool servers for persistent context and external enterprise integrations",
        "Evaluations, safety guardrails, and deterministic prompting pipelines"
      ]
    },
    {
      id: 'graphrag',
      title: "GraphRAG & Knowledge Systems",
      badge: "Open Source Author",
      icon: Network,
      color: "from-pink-500/20 to-purple-500/20 text-pink-400",
      accentBorder: "group-hover:border-pink-500/50",
      description: "Autonomous schema induction, entity extraction, and hybrid retrieval across dense vectors and relational knowledge graphs.",
      technologies: [
        "graphrag-atlas (PyPI)",
        "AutoSchemaKG",
        "Hybrid Search (BM25 + Dense)",
        "Vector Databases",
        "NetworkX",
        "LangChain",
        "Context Engineering"
      ],
      capabilities: [
        "Schema-free dynamic graph construction from unstructured documents",
        "Multi-hop reasoning and community clustering for complex question answering",
        "Cross-session persistent agent memory architectures"
      ]
    },
    {
      id: 'sap-enterprise',
      title: "Enterprise SAP S/4HANA",
      badge: "Enterprise Systems",
      icon: Server,
      color: "from-blue-500/20 to-indigo-500/20 text-blue-400",
      accentBorder: "group-hover:border-blue-500/50",
      description: "Modern SAP S/4HANA digital transformation workflows, enterprise integration standards, and business process automation.",
      technologies: [
        "SAP S/4HANA",
        "WRICEF Development Standards",
        "RFC Data Extraction",
        "SAP Integration Suite (CPI)",
        "SAP BTP / Cloud Foundry",
        "OData & CDS Views",
        "ITIL v4 Framework"
      ],
      capabilities: [
        "Automated generation of enterprise-compliant functional specifications",
        "Enterprise integration between external AI agent runtimes and SAP S/4HANA",
        "SAP AMS governance and IT service management alignment"
      ]
    },
    {
      id: 'fullstack-cloud',
      title: "Full-Stack, Cloud & DevOps",
      badge: "Production Stack",
      icon: Layers,
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400",
      accentBorder: "group-hover:border-emerald-500/50",
      description: "Robust asynchronous backend services, responsive typed web interfaces, and containerized deployment infrastructure.",
      technologies: [
        "Python (FastAPI, Flask)",
        "TypeScript",
        "React / Next.js",
        "Node.js",
        "Docker",
        "AWS (S3, CloudWatch)",
        "Git & CI/CD"
      ],
      capabilities: [
        "High-performance RESTful and streaming WebSocket API services",
        "Strict TypeScript typing, modular UI design systems, and responsive layouts",
        "Automated CI/CD pipelines and containerized Cloud Foundry deployment"
      ]
    }
  ];

  const filteredCategories = activeTab === 'all' 
    ? categories 
    : categories.filter(c => c.id === activeTab);

  return (
    <section id="skills" className="py-20 lg:py-24 bg-gradient-to-b from-black via-gray-950 to-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs text-purple-300 font-medium mb-4">
            <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Architecture & Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4 mb-4"></div>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Hands-on production engineering across autonomous AI systems, knowledge graph RAG, and enterprise SAP digital transformation.
          </p>
        </div>

        {/* Domain Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
              activeTab === 'all'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/25'
                : 'bg-gray-900/80 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700'
            }`}
          >
            All Competencies
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveTab(c.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                activeTab === c.id
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/25'
                  : 'bg-gray-900/80 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Competency Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className={`group relative bg-gray-950/90 rounded-2xl p-6 sm:p-8 border border-gray-800/80 ${category.accentBorder} transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} border border-gray-800`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                      <span className="text-xs text-purple-400 font-mono">
                        {category.badge}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Technologies Badge Chips */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                    Core Technologies & Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-900 text-gray-200 border border-gray-800 hover:border-purple-500/40 hover:text-purple-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Production Capabilities */}
                <div className="border-t border-gray-800/80 pt-5">
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                    Key Architectural Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {category.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
