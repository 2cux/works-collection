import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedWorks from "./components/FeaturedWorks";
import WorksGrid from "./components/WorksGrid";
import SelectedWorkShowcase from "./components/SelectedWorkShowcase";
import WorkGallery from "./components/WorkGallery";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated background gradient blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-blue-500/10 blur-[150px] animate-blob" />
        <div className="absolute top-1/3 -right-1/4 w-[600px] h-[600px] rounded-full bg-violet-500/10 blur-[120px] animate-blob-delayed" />
        <div className="absolute -bottom-1/4 left-1/3 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[140px] animate-blob-slow" />
      </div>
      <Navbar />
      <Hero />
      <FeaturedWorks />
      <WorksGrid />
      <SelectedWorkShowcase />
      <WorkGallery />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}
