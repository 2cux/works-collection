import { motion } from "framer-motion";
import { getFeaturedWorks } from "../data/works";
import SafeImage from "./SafeImage";

export default function WorkGallery() {
  const featured = getFeaturedWorks();
  const work = featured[0];

  if (!work || work.screenshots.length === 0) return null;

  return (
    <section id="gallery" className="py-24">
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
            Gallery
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Project Screenshots
          </h2>
          <p className="text-slate-400 mt-2 max-w-xl">
            {work.title} 功能截图展示
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {work.screenshots.map((shot, i) => (
            <motion.div
              key={shot.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            >
              {/* 16:9 aspect ratio container */}
              <div className="relative aspect-video overflow-hidden">
                <SafeImage
                  src={shot.image}
                  alt={shot.title}
                  fallbackTitle={shot.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-slate-200 group-hover:text-blue-300 transition-colors duration-300">
                  {shot.title}
                </p>
                {shot.description && (
                  <p className="text-xs text-slate-500 mt-1">
                    {shot.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
