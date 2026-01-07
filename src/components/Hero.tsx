import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, FileText, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/10 to-accent/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-accent/10 to-primary/5 blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none opacity-40" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-center">
          <div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                Open to opportunities
              </div>
            </div>

            <h1 className="animate-fade-in mb-6" style={{ animationDelay: "0.2s", opacity: 0 }}>
              <span className="block text-muted-foreground text-lg md:text-xl font-sans font-normal mb-2">
                Senior Frontend Engineer
              </span>
              <span className="block">Andre Lopes</span>
            </h1>

            <div className="animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
              <p className="text-xl md:text-2xl text-foreground font-light max-w-xl mb-4 leading-relaxed">
                Building scalable, accessible web experiences for{" "}
                <span className="font-medium text-primary">e-commerce</span> and{" "}
                <span className="font-medium text-accent">consumer-facing</span> products.
              </p>
              <p className="prose-content max-w-lg mb-10">
                With 15+ years of experience, I specialize in React, TypeScript, design systems, and performance optimization. I've led frontend initiatives at companies like Arc'teryx and TELUS Digital.
              </p>
            </div>

            <div
              className="flex flex-wrap gap-3 animate-fade-in"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              <Button asChild size="lg" className="rounded-full px-6 shadow-lg shadow-primary/25">
                <a href="#experience">
                  View Experience
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-6" asChild>
                <a href="/andre_lopes_resume.pdf" download>
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
              <Button variant="ghost" size="lg" className="rounded-full px-6" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </a>
              </Button>
            </div>
          </div>

          {/* Visual element */}
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.5s", opacity: 0 }}>
            <div className="relative w-72 h-72">
              {/* Decorative shapes */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 rotate-6 transition-transform duration-500 hover:rotate-12" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary to-accent opacity-90 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="text-6xl font-bold font-serif">15+</div>
                  <div className="text-sm uppercase tracking-widest opacity-80 mt-1">Years</div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-accent rotate-12 flex items-center justify-center text-accent-foreground font-bold text-sm shadow-lg">
                UI
              </div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center">
                <span className="text-2xl">⚛️</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;