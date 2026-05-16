import { useEffect, useState } from "react";
import { ImageIcon, X } from "lucide-react";

type Props = {
  open: boolean;
  image: string;
  title: string;
  description?: string;
  onClose: () => void;
};

export default function ImageLightbox({ open, image, title, description, onClose }: Props) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) {
    if (failed) setFailed(false);
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-[90vw] max-h-[85vh] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 text-white/70 hover:bg-black/70 hover:text-white flex items-center justify-center transition-all"
          aria-label="关闭"
        >
          <X size={18} />
        </button>

        {/* Image */}
        <div className="flex items-center justify-center bg-slate-950 p-4 min-h-[200px]">
          {failed ? (
            <div className="w-full min-h-[200px] flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 via-slate-800/50 to-slate-900 rounded-lg">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-3">
                <ImageIcon className="w-6 h-6 text-slate-600" />
              </div>
              <p className="text-slate-400 text-sm font-medium">{title}</p>
              <p className="text-slate-500 text-xs mt-1">Preview Coming Soon</p>
            </div>
          ) : (
            <img
              src={`${import.meta.env.BASE_URL}${image.replace(/^\//, "")}`}
              alt={title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
              onError={() => setFailed(true)}
              loading="eager"
            />
          )}
        </div>

        {/* Caption */}
        <div className="px-5 py-3 border-t border-white/5">
          <p className="text-sm font-medium text-white">{title}</p>
          {description && (
            <p className="text-xs text-slate-400 mt-0.5">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
