const Experience = () => {
  const experiences = [
    {
      title: "AI Systems Engineer / Associate Engineer",
      company: "KTern.AI",
      period: "2024 – Present",
      location: "Chennai, India",
      roleType: "Full-time",
      summary: "Architecting autonomous agentic reasoning runtimes on AWS Bedrock, Model Context Protocol (MCP) tool fabrics, and enterprise SAP S/4HANA systems integration.",
      highlights: [
        "Architected and deployed production multi-agent pipelines converting unstructured enterprise dialogues into formal, audit-grade SAP WRICEF functional specifications, cutting drafting turnaround by over 60%.",
        "Engineered production prompt compilation chains, automated evaluation guardrails, and deterministic JSON schema validation on AWS Bedrock with Claude 3.5 Sonnet.",
        "Built custom Model Context Protocol (MCP) servers providing autonomous agents with deterministic tool execution, persistent session state, and sub-2ms enterprise knowledge retrieval.",
        "Engineered resilient enterprise integration pipelines connecting modern cloud agent runtimes with SAP S/4HANA backends, RFC-based extraction engines, and SAP Integration Suite / CPI."
      ]
    },
    {
      title: "Star of the Month",
      company: "KTern.AI",
      period: "2024",
      location: "Chennai, India",
      roleType: "Recognition",
      summary: "Conferred by KTern.AI executive leadership in recognition of breakthrough technical execution and rapid delivery of enterprise AI agent architectures.",
      highlights: [
        "Pioneered automated functional specification synthesis, accelerating requirement-to-architecture delivery across key enterprise consulting engagements.",
        "Established foundational agentic orchestration patterns and structured schema validation standards across engineering teams."
      ]
    },
    {
      title: "Smart India Hackathon 2023 — National Champion (1st Place)",
      company: "Ministry of Coal, Government of India",
      period: "Dec 2023",
      location: "Mysuru, India",
      roleType: "National Hackathon",
      summary: "Secured 1st place nationwide and ₹1,00,000 cash award solving national problem statement 1313 presented by the Ministry of Coal.",
      highlights: [
        "Outperformed 1,000+ top university teams nationwide in India's flagship 36-hour hackathon finale at The National Institute of Engineering, Mysuru.",
        "Architected MobiSafe: An end-to-end IoT telemetry platform coupling edge computer vision with bidirectional LSTM recurrent neural networks for real-time driver state analytics and fleet collision prevention."
      ]
    },
    {
      title: "Smart India Hackathon 2022 — Grand Finalist",
      company: "Government of Gujarat",
      period: "Aug 2022",
      location: "India",
      roleType: "National Hackathon",
      summary: "Selected among the top national engineering teams to develop large-scale digital public infrastructure solutions.",
      highlights: [
        "Architected distributed software architecture addressing complex state governance and citizen service workflows under strict live hackathon timelines."
      ]
    },
    {
      title: "Grand Finalist — PSG iTech Hack Fest",
      company: "PSG Institute of Technology",
      period: "2023",
      location: "Coimbatore, India",
      roleType: "Regional Hackathon",
      summary: "Finalist in competitive regional hackathon focusing on applied artificial intelligence, high-throughput data processing, and edge vision.",
      highlights: [
        "Engineered and demonstrated low-latency vision analytics prototype under strict compute and time constraints."
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
