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
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl ${className}`}
      >
        <ImageIcon className="w-10 h-10 text-slate-600 mb-3" />
        <p className="text-slate-500 text-sm font-medium">
          {fallbackTitle || alt || "Preview"}
        </p>
        <p className="text-slate-600 text-xs mt-1">Preview Coming Soon</p>
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
