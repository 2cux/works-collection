import { motion } from "framer-motion";
import { CheckCircle, Lightbulb, Layers, Shield } from "lucide-react";
import { getFeaturedWorks } from "../data/works";

export default function SelectedWorkShowcase() {
  const featured = getFeaturedWorks();
  const work = featured[0];

  if (!work) return null;

  const backgroundText =
    "企业知识分散在文档和业务系统中，人工查询效率低、回答口径不一致。该项目通过 RAG 将文档知识转化为可检索、可追溯的智能问答能力。";

  const capabilities = [
    "知识库与文档管理",
    "文档解析、切片与向量化",
    "基于知识库的自然语言问答",
    "引用来源、多轮会话与用户反馈",
  ];

  return (
    <section className="py-24">
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
            Showcase
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {work.title}
          </h2>
          <p className="text-slate-400 mt-2 max-w-xl">{work.subtitle}</p>
        </motion.div>

        {/* Row 1: 项目背景 + 核心能力 */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* 项目背景 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-blue-500/30 hover:bg-white/[0.06] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
              <Lightbulb className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">项目背景</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {backgroundText}
            </p>
          </motion.div>

          {/* 核心能力 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-blue-500/30 hover:bg-white/[0.06] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
              <Layers className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">核心能力</h3>
            <ul className="space-y-2.5">
              {capabilities.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle size={15} className="text-cyan-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Row 2: 技术实现 (full width) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-8 hover:border-blue-500/30 hover:bg-white/[0.06] transition-all duration-300 mb-6"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
            <Shield className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-5">技术实现</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8">
            {work.techStack.map((group) => (
              <div key={group.category}>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  {group.category}
                </p>
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
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-8 hover:border-blue-500/20 transition-all duration-300"
        >
          <h3 className="text-lg font-semibold text-white mb-4">技术亮点</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {work.highlights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
