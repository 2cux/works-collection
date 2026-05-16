import { motion } from "framer-motion";
import { ArrowRight, Database, GitBranch, Cpu, MessageSquare, Quote, FileText } from "lucide-react";
import GitHubIcon from "./GitHubIcon";

const mockCards = [
  { label: "Knowledge Base", icon: Database, iconColor: "text-blue-400", borderColor: "hover:border-blue-500/30" },
  { label: "RAG Pipeline", icon: GitBranch, iconColor: "text-violet-400", borderColor: "hover:border-violet-500/30" },
  { label: "Document Processing", icon: Cpu, iconColor: "text-cyan-400", borderColor: "hover:border-cyan-500/30" },
  { label: "AI Chat", icon: MessageSquare, iconColor: "text-emerald-400", borderColor: "hover:border-emerald-500/30" },
  { label: "Citations", icon: Quote, iconColor: "text-amber-400", borderColor: "hover:border-amber-500/30" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient blobs (local to hero for extra depth) */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-violet-500/15 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
              Backend · AI · RAG
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight">
              Building AI Products{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                with Backend Engineering
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed">
              南昌大学软件工程本科在读，求职方向为后端开发实习生。关注 Java 后端工程、Spring Boot、RAG 知识库问答系统和 AI 应用工程化交付。
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => scrollTo("#works")}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                View My Works
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://github.com/2cux"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-slate-300 font-medium text-sm hover:border-white/25 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                <GitHubIcon size={16} />
                GitHub
              </a>
              <a
                href={`${import.meta.env.BASE_URL}resume/cao-bo-backend-intern.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-slate-300 font-medium text-sm hover:border-white/25 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                <FileText size={16} />
                Resume
              </a>
            </div>
          </motion.div>

          {/* Right: mock preview cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {mockCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  className={`group backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 hover:bg-white/[0.06] ${card.borderColor} transition-all duration-300`}
                  style={{ animation: `float 4s ease-in-out infinite`, animationDelay: `${i * 0.4}s` }}
                >
                  <Icon className={`w-8 h-8 ${card.iconColor} group-hover:scale-110 transition-transform duration-300 mb-3`} />
                  <p className="text-sm font-medium text-slate-200">{card.label}</p>
                </div>
              );
            })}
            {/* Spacer to make last card align left */}
            <div />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
