import { Building2, Calendar, MapPin, Trophy, Sparkles, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Associate Engineer",
      company: "KTern.AI",
      location: "Chennai, Tamil Nadu, India",
      period: "2024 - Present",
      type: "Full-time",
      description: "Engineering autonomous LLM agents and prompt orchestration workflows on AWS Bedrock, driving enterprise SAP S/4HANA digital transformations and Model Context Protocol (MCP) integrations.",
      achievements: [
        "Architected an autonomous agent translating natural language inputs into structured functional specification documents compliant with enterprise WRICEF standards.",
        "Built and prompt-engineered production LLM agent pipelines using AWS Bedrock and Claude models.",
        "Designed Model Context Protocol (MCP) servers enabling agentic tool execution and external data grounding.",
        "Engineered RFC-based data extraction pipelines and SAP Integration Suite / CPI connectivity.",
        "Applied ITIL v4 framework principles for enterprise SAP AMS and IT service management governance."
      ],
      icon: <Building2 className="w-5 h-5 text-purple-400" aria-hidden="true" />,
      badge: "Current Role",
      color: "border-purple-500/40 bg-purple-950/20 text-purple-300"
    },
    {
      title: "Star of the Month",
      company: "KTern.AI",
      location: "Chennai, India",
      period: "2024",
      type: "Recognition",
      description: "Honored with the KTern.AI Star of the Month award in recognition of exceptional contributions, innovative prompt engineering, and accelerating agentic workflow adoption.",
      achievements: [
        "Recognized by engineering leadership for high-velocity delivery of autonomous agent capabilities.",
        "Pioneered automated functional specification pipelines, drastically reducing manual document preparation time.",
        "Mentored team members on LLM evaluation best practices and structured JSON prompting."
      ],
      icon: <Sparkles className="w-5 h-5 text-yellow-400" aria-hidden="true" />,
      badge: "Excellence Award",
      color: "border-yellow-500/40 bg-yellow-950/20 text-yellow-300"
    },
    {
      title: "Smart India Hackathon 2023 Winner",
      company: "Ministry of Coal, Government of India",
      location: "The National Institute of Engineering, Mysuru",
      period: "December 2023",
      type: "National Competition",
      description: "Secured 1st place nationwide and ₹1,00,000 cash prize solving Problem Statement 1313 presented by the Ministry of Coal in India's flagship innovation hackathon.",
      achievements: [
        "Led team to national victory among 1,000+ collegiate and professional teams across India.",
        "Engineered MobiSafe: An IoT and LSTM neural network system for vehicle telemetry and predictive safety.",
        "Felicitated by senior leadership from the Ministry of Education and Ministry of Coal."
      ],
      icon: <Trophy className="w-5 h-5 text-amber-400" aria-hidden="true" />,
      badge: "1st Place & ₹1,00,000",
      color: "border-amber-500/40 bg-amber-950/20 text-amber-300"
    },
    {
      title: "Smart India Hackathon 2022 Finalist",
      company: "Government of Gujarat",
      location: "India",
      period: "August 2022",
      type: "National Finalist",
      description: "Selected as Grand Finalist in Smart India Hackathon 2022 for developing innovative software solutions solving civic and administrative challenges.",
      achievements: [
        "Competed in 36-hour non-stop national hackathon grand finale.",
        "Designed and pitched full-stack prototype to government evaluation panels."
      ],
      icon: <Award className="w-5 h-5 text-blue-400" aria-hidden="true" />,
      badge: "National Finalist",
      color: "border-blue-500/40 bg-blue-950/20 text-blue-300"
    },
    {
      title: "Grand Finalist - PSG iTech Hack Fest",
      company: "PSG Institute of Technology and Applied Research",
      location: "Coimbatore, India",
      period: "2023",
      type: "Regional Finalist",
      description: "Selected as Grand Finalist in high-intensity regional hackathon for engineering novel machine learning prototypes.",
      achievements: [
        "Built and demonstrated AI/computer vision solution under strict time constraints.",
        "Recognized for code quality, architectural viability, and practical domain fit."
      ],
      icon: <Award className="w-5 h-5 text-emerald-400" aria-hidden="true" />,
      badge: "Grand Finalist",
      color: "border-emerald-500/40 bg-emerald-950/20 text-emerald-300"
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-24 bg-gradient-to-b from-gray-950 to-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs text-purple-300 font-medium mb-4">
            <Trophy className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Career & Honors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Professional <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4 mb-4"></div>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A track record of engineering impact at KTern.AI and national-level competitive innovation.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Guide */}
          <div className="absolute left-4 md:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 hidden sm:block opacity-30"></div>

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline Node Dot */}
                <div className="absolute left-2 md:left-6 top-6 w-4 h-4 rounded-full bg-black border-2 border-purple-400 hidden sm:block group-hover:scale-125 group-hover:border-pink-400 transition-all duration-300"></div>
                
                <div className="sm:ml-12 md:ml-20">
                  <div className="bg-gray-950/90 rounded-2xl p-6 sm:p-8 border border-gray-800/80 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5">
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div className="flex items-start space-x-3.5">
                        <div className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 flex-shrink-0">
                          {exp.icon}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{exp.title}</h3>
                            <span className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-full border ${exp.color}`}>
                              {exp.badge}
                            </span>
                          </div>
                          <p className="text-purple-400 font-semibold text-sm sm:text-base">{exp.company}</p>
                        </div>
                      </div>

                      {/* Metadata */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 font-mono sm:text-right">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5 text-gray-400" aria-hidden="true" />
                          <span>{exp.period}</span>
                        </div>
                        <span className="text-gray-700">·</span>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3.5 h-3.5 text-gray-400" aria-hidden="true" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Achievements List */}
                    <div className="border-t border-gray-800/80 pt-4">
                      <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                        Key Accomplishments
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {exp.achievements.map((ach, achIdx) => (
                          <div key={achIdx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{ach}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
