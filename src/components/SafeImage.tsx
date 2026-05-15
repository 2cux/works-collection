import { useState } from "react";
import { ImageIcon } from "lucide-react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
};

export default function SafeImage({ src, alt, className, fallbackTitle }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 via-slate-800/50 to-slate-900 rounded-xl ${className}`}
      >
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-3">
          <ImageIcon className="w-6 h-6 text-slate-600" />
        </div>
        <p className="text-slate-400 text-sm font-medium">
          {fallbackTitle || alt || "Preview"}
        </p>
        <p className="text-slate-500 text-xs mt-1">Preview Coming Soon</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}
