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
    <div className="min-h-screen bg-slate-950 text-white">
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
