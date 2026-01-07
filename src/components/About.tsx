import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section section-alt overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <Badge variant="outline" className="mb-4">Philosophy</Badge>
            <h2 className="mb-8">About</h2>

            <div className="relative mb-8">
              <Quote className="absolute -left-2 -top-2 w-8 h-8 text-primary/20" />
              <blockquote className="pl-8 text-xl md:text-2xl font-serif italic text-heading leading-relaxed">
                The best interfaces are often the ones that feel invisible.
              </blockquote>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I approach frontend engineering as a craft that balances technical precision with user experience. Over 15 years, I've learned that thoughtful architecture and attention to detail result in experiences that simply work.
              </p>

              <p>
                My work focuses on building systems that scale: design systems that maintain consistency across large teams, component libraries that improve development velocity, and patterns that make codebases easier to maintain over time.
              </p>

              <p>
                I believe strongly in accessibility as a baseline requirement, not an afterthought. I collaborate closely with design and product teams, translating vision into production-ready code.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Visual decorative element */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl -rotate-2" />
            <div className="relative bg-card rounded-3xl p-8 md:p-10 border border-border shadow-lg">
              <h3 className="text-base font-sans font-semibold text-foreground mb-6 uppercase tracking-wide flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                  <p className="font-medium text-foreground">Bachelor of Computer Science</p>
                  <p className="text-muted-foreground text-sm mt-0.5">UNOPAR, Londrina, Brazil</p>
                </div>
                <div className="relative pl-6 border-l-2 border-accent/30">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-accent" />
                  <p className="font-medium text-foreground">
                    Bachelor, Media Techniques & Marketing Communications
                  </p>
                  <p className="text-muted-foreground text-sm mt-0.5">BCIT, Vancouver, Canada</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold font-serif text-primary">2</div>
                    <p className="text-muted-foreground text-sm">Degrees</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold font-serif text-accent">2</div>
                    <p className="text-muted-foreground text-sm">Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;