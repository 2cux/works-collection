import { motion } from "framer-motion";
import { Monitor, Server, Database, Brain, Rocket, Package } from "lucide-react";
import type { ReactNode } from "react";
import { techStack } from "../data/techStack";

const categoryIcons: Record<string, ReactNode> = {
  Frontend: <Monitor size={20} className="text-blue-400" />,
  Backend: <Server size={20} className="text-emerald-400" />,
  "Database & Middleware": <Database size={20} className="text-amber-400" />,
  "AI / RAG": <Brain size={20} className="text-violet-400" />,
  DevOps: <Rocket size={20} className="text-cyan-400" />,
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Technologies
          </h2>
          <p className="text-slate-400 mt-2 max-w-xl">
            项目主要技术栈
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {techStack.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 hover:border-blue-500/30 hover:bg-white/[0.06] transition-all duration-300"
            >
              <p className="text-lg mb-3">
                {categoryIcons[group.category] || <Package size={20} className="text-slate-400" />}
              </p>
              <h3 className="text-sm font-semibold text-white mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
