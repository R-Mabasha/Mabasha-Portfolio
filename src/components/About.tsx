import { Code, Database, Brain, Sparkles, Trophy, Award, Server } from 'lucide-react';

const About = () => {
  const baseUrl = import.meta.env.BASE_URL;

  const highlights = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Agentic AI & Bedrock",
      description: "Autonomous LLM agents on AWS Bedrock, prompt orchestration, and Model Context Protocol (MCP) tool integration."
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "GraphRAG & Memory",
      description: "Dynamic schema-free knowledge graphs with graphrag-atlas and hybrid BM25 + dense vector memory persistence."
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "Enterprise SAP S/4HANA",
      description: "Automated WRICEF specifications, RFC-based enterprise data extraction, and SAP Integration Suite / CPI."
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "SIH 2023 Winner & Honors",
      description: "1st place nationwide & ₹1,00,000 prize from Ministry of Coal, plus KTern.AI Star of the Month recognition."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black/95 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs text-purple-300 font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Background & Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Visual Profile Section (4 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-6 justify-center items-center">
            {/* Professional Portrait */}
            <div className="relative group w-full max-w-[280px]">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative rounded-xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl aspect-[4/5]">
                <img 
                  src={`${baseUrl}lovable-uploads/7733247b-206c-481c-ae5e-33b600d55e7c.png`}
                  alt="Mabasha R. - Associate Engineer at KTern.AI"
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <p className="text-white font-semibold text-sm">Mabasha R.</p>
                  <p className="text-purple-300 text-xs">Associate Engineer · KTern.AI</p>
                </div>
              </div>
            </div>

            {/* Hackathon Podium Photo */}
            <div className="relative group w-full max-w-[280px]">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative rounded-xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl aspect-[4/5]">
                <img 
                  src={`${baseUrl}lovable-uploads/ca839fd2-b433-4184-9448-8ed6118047cb.png`}
                  alt="Smart India Hackathon 2023 Grand Finale Winner - Mabasha R."
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center space-x-2 text-white">
                  <Award className="w-5 h-5 text-yellow-400 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <span className="block text-xs font-bold text-yellow-300">SIH 2023 Grand Winner</span>
                    <span className="block text-[11px] text-gray-300">Ministry of Coal · ₹1,00,000 Prize</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Bridging Autonomous AI Agents with Enterprise Core Systems
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                I am an <strong className="text-white">Associate Engineer at KTern.AI</strong> in Chennai, India. My engineering focus lies at the intersection of production <strong className="text-purple-300">Agentic AI</strong> and <strong className="text-purple-300">Enterprise SAP S/4HANA Transformations</strong>.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                At KTern.AI, I architect end-to-end LLM agent pipelines using AWS Bedrock, develop prompt orchestration frameworks, and build agents capable of autonomously converting unstructured business requirements into structured functional specification documents compliant with enterprise WRICEF development standards.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                In the open-source ecosystem, I author autonomous knowledge graph and RAG frameworks—including <code className="text-pink-300 bg-gray-900 px-1.5 py-0.5 rounded border border-gray-800">graphrag-atlas</code> on PyPI for schema-free graph induction, and Model Context Protocol (MCP) memory servers for agentic persistence.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/60 p-4 rounded-xl border border-gray-800 hover:border-purple-500/40 transition-colors duration-200"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-purple-950/60 text-purple-400 rounded-lg border border-purple-800/40">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                type="button"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black"
              >
                <span>Let's Discuss Solutions</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
