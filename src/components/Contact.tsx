import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import GitHubIcon from "./GitHubIcon";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/2cux",
    icon: GitHubIcon,
    description: "@2cux",
  },
  {
    label: "Email",
    href: "mailto:your-email@example.com",
    icon: Mail,
    description: "your-email@example.com",
  },
  {
    label: "Resume",
    href: "#",
    icon: FileText,
    description: "在线简历",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Get in Touch
          </h2>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto leading-relaxed">
            如果你对 AI 应用开发、RAG 项目实践或后端工程感兴趣，欢迎联系我。
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 flex items-center gap-4 min-w-[220px] hover:border-blue-500/20 hover:bg-white/[0.06] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Icon size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{link.label}</p>
                  <p className="text-xs text-slate-400">{link.description}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
