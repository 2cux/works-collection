import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import GitHubIcon from "./GitHubIcon";
import type { Work } from "../types/work";
import SafeImage from "./SafeImage";

type Props = {
  work: Work;
};

const statusColors: Record<string, string> = {
  completed: "bg-emerald-500/10 text-emerald-400",
  "in-progress": "bg-amber-500/10 text-amber-400",
  planned: "bg-slate-500/10 text-slate-400",
};

export default function WorkCard({ work }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.12] transition-all duration-300"
    >
      {/* Cover image */}
      <div className="relative aspect-video overflow-hidden">
        <SafeImage
          src={work.coverImage}
          alt={work.title}
          fallbackTitle={work.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {work.status && (
          <span
            className={`absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm ${statusColors[work.status]}`}
          >
            {work.status}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">{work.title}</h3>
        {work.subtitle && (
          <p className="text-sm text-slate-400 mt-0.5">{work.subtitle}</p>
        )}
        <p className="text-sm text-slate-300 mt-3 line-clamp-2 leading-relaxed">
          {work.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {work.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300"
            >
              {tag}
            </span>
          ))}
          {work.tags.length > 4 && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-slate-500/10 text-slate-400">
              +{work.tags.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/5">
          {work.githubUrl && work.githubUrl !== "#" && (
            <a
              href={work.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <GitHubIcon size={14} />
              Code
            </a>
          )}
          {work.demoUrl && work.demoUrl !== "#" && (
            <a
              href={work.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <ExternalLink size={14} />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
