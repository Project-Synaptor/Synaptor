import Navbar from "../components/navbar";
import Hero from "../components/hero";
import NeuralBackground from "../components/neuralbackground";
import FeaturesSection from "../components/featuressection";
import Footer from "../components/footer";
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] to-[#020617] overflow-hidden">
      <NeuralBackground />
      <Navbar />
      <Hero />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
