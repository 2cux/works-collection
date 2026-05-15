import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";
import GitHubIcon from "./GitHubIcon";
import { getFeaturedWorks } from "../data/works";
import SafeImage from "./SafeImage";
import type { Work } from "../types/work";

function FeaturedCard({ work }: { work: Work }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="group backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-3xl overflow-hidden hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500"
    >
      <div className="grid lg:grid-cols-5 gap-0">
        {/* Image area */}
        <div className="lg:col-span-3 aspect-video lg:aspect-auto relative overflow-hidden">
          <SafeImage
            src={work.coverImage}
            alt={work.title}
            fallbackTitle={work.title}
            className="w-full h-full object-cover lg:absolute lg:inset-0 group-hover:scale-[1.02] transition-transform duration-700"
          />
          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent lg:hidden" />
        </div>

        {/* Content */}
        <div className="lg:col-span-2 p-6 lg:p-8 xl:p-10 flex flex-col justify-center">
          <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-2">
            Featured Work
          </p>
          <h3 className="text-2xl font-bold text-white">{work.title}</h3>
          {work.subtitle && (
            <p className="text-slate-400 mt-1">{work.subtitle}</p>
          )}
          <p className="text-sm text-slate-300 mt-4 leading-relaxed">
            {work.longDescription || work.description}
          </p>

          {/* Highlights */}
          <div className="mt-5 space-y-2.5">
            {work.highlights.slice(0, 4).map((h) => (
              <div key={h} className="flex items-start gap-2.5">
                <Check size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-300">{h}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {work.tags.slice(0, 6).map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-slate-300 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 mt-6">
            {work.githubUrl && (
              <a
                href={work.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-slate-200 text-sm font-medium hover:bg-white/10 hover:text-white transition-all"
              >
                <GitHubIcon size={16} />
                Source
              </a>
            )}
            {work.demoUrl && (
              <a
                href={work.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedWorks() {
  const featured = getFeaturedWorks();

  if (featured.length === 0) return null;

  return (
    <section id="works" className="py-24">
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
            Featured Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Featured Project
          </h2>
          <p className="text-slate-400 mt-2 max-w-xl">
            精选展示当前重点开发项目
          </p>
        </motion.div>

        <div className="space-y-8">
          {featured.map((work) => (
            <FeaturedCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
