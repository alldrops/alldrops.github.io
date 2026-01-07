import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Experience from "@/components/Experience";
import SelectedWork from "@/components/SelectedWork";
import Skills from "@/components/Skills";
import Mentorship from "@/components/Mentorship";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <main id="main-content">
        <Hero />
        <Capabilities />
        <Experience />
        <SelectedWork />
        <Skills />
        <Mentorship />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
