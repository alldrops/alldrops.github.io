import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Mentorship from "@/components/Mentorship";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Mentorship />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
