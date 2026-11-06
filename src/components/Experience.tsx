const Experience = () => {
  const experiences = [
    {
      title: "Associate Engineer",
      company: "KTern.AI",
      period: "2024 – Present",
      location: "Chennai, India",
      roleType: "Full-time",
      summary: "Leading autonomous agent engineering on AWS Bedrock and enterprise integration with SAP S/4HANA systems.",
      highlights: [
        "Architected an autonomous agent translating natural language inputs into structured functional specification documents compliant with enterprise WRICEF development standards.",
        "Engineered production prompt pipelines and evaluation guardrails on AWS Bedrock using Claude models.",
        "Built Model Context Protocol (MCP) servers enabling agentic external tool execution, state management, and enterprise data grounding.",
        "Integrated RFC-based enterprise data extraction pipelines and SAP Integration Suite / CPI endpoints."
      ]
    },
    {
      title: "Star of the Month",
      company: "KTern.AI",
      period: "2024",
      location: "Chennai, India",
      roleType: "Honor",
      summary: "Awarded by KTern.AI leadership in recognition of rapid delivery and technical execution in agentic AI.",
      highlights: [
        "Pioneered automated functional specification workflows, accelerating document preparation times across teams.",
        "Contributed to enterprise LLM orchestration architecture and structured output pipelines."
      ]
    },
    {
      title: "Smart India Hackathon 2023 — Winner (1st Place)",
      company: "Ministry of Coal, Government of India",
      period: "Dec 2023",
      location: "Mysuru, India",
      roleType: "National Hackathon",
      summary: "Won 1st place nationwide and ₹1,00,000 cash prize solving Ministry of Coal Problem Statement 1313.",
      highlights: [
        "Led team to victory among 1,000+ national teams at The National Institute of Engineering, Mysuru.",
        "Engineered MobiSafe: An IoT & LSTM deep learning vehicle telemetry and predictive safety platform."
      ]
    },
    {
      title: "Smart India Hackathon 2022 — Grand Finalist",
      company: "Government of Gujarat",
      period: "Aug 2022",
      location: "India",
      roleType: "National Hackathon",
      summary: "Selected among top teams nationwide in India's flagship 36-hour innovation competition.",
      highlights: [
        "Built full-stack software prototype addressing real-world governance challenges."
      ]
    },
    {
      title: "Grand Finalist — PSG iTech Hack Fest",
      company: "PSG Institute of Technology",
      period: "2023",
      location: "Coimbatore, India",
      roleType: "Regional Hackathon",
      summary: "Finalist in competitive hackathon focusing on applied machine learning and computer vision.",
      highlights: [
        "Demonstrated real-time vision analytics prototype under strict competition constraints."
      ]
    }
  ];

  return (
    <section id="experience" className="space-y-6 pt-6 border-t border-zinc-800/80">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
          Experience & Honors
        </h2>
        <p className="text-sm text-zinc-400">
          Professional career milestones and competitive recognition.
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 sm:p-6 space-y-3 hover:border-zinc-700/80 transition-colors"
          >
            {/* Top Row: Role + Period */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-zinc-100">
                  {exp.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  <span className="text-zinc-300 font-medium">{exp.company}</span>
                  <span className="mx-1.5 text-zinc-600">·</span>
                  <span>{exp.location}</span>
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
                <span>{exp.period}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {exp.summary}
            </p>

            {/* Bullet points */}
            <ul className="space-y-1.5 pt-1">
              {exp.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  <span className="text-zinc-600 mr-2 font-mono select-none">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
