import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center section">
      <div className="container-narrow">
        <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <p className="text-subtle text-sm uppercase tracking-widest mb-4">
            Senior Frontend Engineer
          </p>
        </div>
        
        <h1 className="animate-fade-in mb-6" style={{ animationDelay: "0.2s" }}>
          Andre Lopes
        </h1>
        
        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mb-4">
            Building scalable, accessible web experiences for e-commerce and consumer-facing products.
          </p>
          <p className="prose-content max-w-xl mb-10">
            With 15+ years of experience, I specialize in React, TypeScript, design systems, and performance optimization. I've led frontend initiatives at companies like Arc'teryx and TELUS Digital, focusing on high-traffic platforms that drive measurable business outcomes.
          </p>
        </div>
        
        <div 
          className="flex flex-wrap gap-4 animate-fade-in" 
          style={{ animationDelay: "0.4s" }}
        >
          <Button asChild size="lg">
            <a href="#experience">
              View Experience
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/andre_lopes_resume.pdf" download>
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
