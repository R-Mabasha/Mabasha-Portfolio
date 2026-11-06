import { Award, ArrowUpRight } from 'lucide-react';

const About = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section id="about" className="space-y-6 pt-6 border-t border-zinc-800/80">
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
          About
        </h2>
        <p className="text-sm text-zinc-400">
          Background, focus areas, and engineering principles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Narrative */}
        <div className="md:col-span-7 space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
          <p>
            I approach artificial intelligence from a rigorous <strong className="text-zinc-100 font-medium">systems engineering</strong> perspective. While foundation models excel at open-ended synthesis, enterprise backends—particularly mission-critical ERP landscapes like <strong className="text-zinc-100 font-medium">SAP S/4HANA</strong>—demand deterministic invariants, audit compliance, and strict operational reliability.
          </p>

          <p className="text-zinc-400">
            At <strong className="text-zinc-200 font-medium">KTern.AI</strong>, I engineer production agentic reasoning loops on AWS Bedrock that compile unstructured enterprise dialogues into formal, audit-grade WRICEF functional architecture specifications. By coupling multi-agent verification loops with structured schema compilers, we eliminate hallucination and accelerate enterprise technical drafting cycles.
          </p>

          <p className="text-zinc-400">
            In retrieval engineering, I eliminate distributed database sprawl. Instead of fragile multi-database chains, I design unified single-store architectures—such as <a href="https://pypi.org/project/graphrag-atlas/" target="_blank" rel="noopener noreferrer" className="text-zinc-200 underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-400">graphrag-atlas on PyPI</a>—integrating lexical BM25, dense HNSW vectors, and bounded property graph traversals with circuit breakers against super-node latency explosions.
          </p>

          <p className="text-zinc-400">
            My engineering foundation is built on competitive execution: leading my team to <strong className="text-zinc-200 font-medium">1st Place nationally in the Smart India Hackathon</strong> (Ministry of Coal) out of 1,000+ universities, and receiving the <strong className="text-zinc-200 font-medium">Star of the Month</strong> at KTern.AI for technical delivery.
          </p>
        </div>

        {/* SIH Award Feature Card */}
        <div className="md:col-span-5">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3 space-y-3">
            <div className="rounded-lg overflow-hidden border border-zinc-800/80 aspect-[4/3] bg-zinc-950">
              <img
                src={`${baseUrl}lovable-uploads/ca839fd2-b433-4184-9448-8ed6118047cb.png`}
                alt="Smart India Hackathon 2023 Grand Finale Victory"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-1 py-0.5 space-y-1">
              <div className="flex items-center space-x-1.5 text-xs font-medium text-amber-400">
                <Award className="w-4 h-4" aria-hidden="true" />
                <span>Smart India Hackathon 2023 Winner</span>
              </div>
              <p className="text-xs text-zinc-400 leading-normal">
                Ministry of Coal Problem Statement 1313 · 1st Place & ₹1,00,000 national award at The National Institute of Engineering, Mysuru.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
