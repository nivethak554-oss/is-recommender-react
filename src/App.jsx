import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import DemoSection from "./components/DemoSection";
import HowItWorks from "./components/HowItWorks";
import Technology from "./components/Technology";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ProblemSection />
        <DemoSection />
        <HowItWorks />
        <Technology />
      </main>

      <Footer />
    </>
  );
}

export default App;