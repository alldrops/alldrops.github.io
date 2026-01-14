import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Mail, Layers, Accessibility, Code2, ShoppingBag } from "lucide-react";
import FadeIn from "./FadeIn";

const capabilities = [
  {
    icon: Layers,
    title: "Design Systems",
    description: "Component libraries at scale",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description: "WCAG-compliant interfaces",
  },
  {
    icon: Code2,
    title: "React & TypeScript",
    description: "Scalable frontend architecture",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "High-traffic product experiences",
  },
];

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-20">
      <div className="container-wide">
        <div className="max-w-4xl">
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground text-lg md:text-xl mb-6 font-medium">
              Senior Frontend Engineer
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="mb-8">
              <span className="block">Andre Lopes</span>
              <span className="block text-muted-foreground mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
                UI Engineering & Design Systems
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="prose-content max-w-2xl mb-12 text-xl md:text-2xl font-light leading-relaxed">
              15+ years building scalable, accessible web experiences. 
              Specialized in React, component libraries, and high-traffic 
              e-commerce platforms.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-4 mb-20">
              <a href="#contact" className="btn-primary">
                <Mail className="w-4 h-4" />
                Contact
              </a>
              <a href="#experience" className="btn-secondary">
                View Experience
                <ArrowDown className="w-4 h-4" />
              </a>
              <a href="#capabilities" className="btn-ghost">
                What I Do
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Capability highlights */}
        <FadeIn delay={0.5}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={index}
                  className="capability-card group"
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0">
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{cap.title}</p>
                    <p className="text-muted-foreground text-sm mt-0.5">{cap.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
        animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <motion.div 
            className="w-1 h-2 rounded-full bg-muted-foreground/50"
            animate={shouldReduceMotion ? {} : { y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
