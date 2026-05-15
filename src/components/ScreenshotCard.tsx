import { useState } from "react";
import { ImageIcon } from "lucide-react";

type Props = {
  title: string;
  image: string;
  description?: string;
  /** Larger variant for featured/card use */
  featured?: boolean;
  /** Click handler for opening lightbox */
  onClick?: () => void;
};

export default function ScreenshotCard({ title, image, description, featured, onClick }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`
        group backdrop-blur-xl bg-white/[0.03] border border-white/[0.06]
        overflow-hidden transition-all duration-300
        ${featured ? "rounded-3xl" : "rounded-2xl"}
        ${featured
          ? "hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5"
          : `hover:border-white/[0.15] hover:shadow-md hover:shadow-black/20 ${!failed && onClick ? "cursor-pointer" : ""}`
        }
      `}
      onClick={failed ? undefined : onClick}
      role={onClick && !failed ? "button" : undefined}
      tabIndex={onClick && !failed ? 0 : undefined}
      onKeyDown={onClick && !failed ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); } } : undefined}
    >
      {/* Browser chrome bar */}
      <div className="flex items-center gap-1.5 px-4 h-9 bg-slate-900/90 border-b border-white/5 shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <span className="ml-auto text-xs text-slate-500 truncate max-w-[60%]">
          {title}
        </span>
      </div>

      {/* Image area */}
      <div className="relative aspect-video bg-slate-950 p-2">
        {failed ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 via-slate-800/50 to-slate-900 rounded-lg">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-2">
              <ImageIcon className="w-5 h-5 text-slate-600" />
            </div>
            <p className="text-slate-400 text-sm font-medium">{title}</p>
            <p className="text-slate-500 text-xs mt-0.5">Preview Coming Soon</p>
          </div>
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain rounded-lg"
            onError={() => setFailed(true)}
            loading="lazy"
          />
        )}

        {/* Hover overlay hint */}
        {!failed && onClick && (
          <div className="absolute inset-2 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg pointer-events-none">
            <span className="text-white/80 text-xs font-medium tracking-wide">
              点击查看大图
            </span>
          </div>
        )}
      </div>

      {/* Description */}
      {description && (
        <div className="px-4 py-3 border-t border-white/5">
          <p className="text-sm text-slate-400">{description}</p>
        </div>
      )}
    </div>
  );
}
