import { motion } from "framer-motion";
import { works } from "../data/works";
import WorkCard from "./WorkCard";

export default function WorksGrid() {
  if (works.length === 0) return null;

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
            All Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            All Projects
          </h2>
          <p className="text-slate-400 mt-2 max-w-xl">
            浏览我的全部开发项目
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
