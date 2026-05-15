import { useState } from "react";
import { motion } from "framer-motion";
import { getFeaturedWorks } from "../data/works";
import ScreenshotCard from "./ScreenshotCard";
import ImageLightbox from "./ImageLightbox";

export default function WorkGallery() {
  const featured = getFeaturedWorks();
  const work = featured[0];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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
            >
              <ScreenshotCard
                title={shot.title}
                image={shot.image}
                description={shot.description}
                onClick={() => setSelectedIndex(i)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <ImageLightbox
          open={true}
          image={work.screenshots[selectedIndex].image}
          title={work.screenshots[selectedIndex].title}
          description={work.screenshots[selectedIndex].description}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </section>
  );
}
