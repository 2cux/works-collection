export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-sm text-slate-500">
          Built with{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent font-medium">
            Works Collection
          </span>
        </p>
        <p className="text-xs text-slate-600">
          &copy; {year} 2cux. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
