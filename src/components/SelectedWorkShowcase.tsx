import { motion } from "framer-motion";
import { CheckCircle, Lightbulb, Layers, Shield } from "lucide-react";
import { getFeaturedWorks } from "../data/works";

export default function SelectedWorkShowcase() {
  const featured = getFeaturedWorks();
  const work = featured[0];

  if (!work) return null;

  const features = [
    {
      icon: Lightbulb,
      title: "项目背景",
      description: work.longDescription || work.description,
    },
    {
      icon: Layers,
      title: "核心功能",
      description: work.description,
    },
    {
      icon: Shield,
      title: "技术架构",
      description: `前后端分离架构，${work.techStack.flatMap((g) => g.items).join("、")}。`,
    },
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
          <p className="text-slate-400 mt-2 max-w-xl">
            {work.subtitle}
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-blue-500/20 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Tech highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-lg font-semibold text-white mb-4">技术亮点</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {work.highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle size={16} className="text-cyan-400 shrink-0" />
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
