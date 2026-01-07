import { motion, useReducedMotion } from "framer-motion";
import { Layers, Accessibility, ShoppingBag, Zap, Users, Wrench } from "lucide-react";
import FadeIn from "./FadeIn";

const capabilities = [
  {
    icon: Layers,
    title: "Design Systems & Component Libraries",
    description: "Building and maintaining scalable component libraries with Storybook, ensuring consistency across large teams and multiple brands. Focus on documentation, reusability, and developer experience.",
  },
  {
    icon: Accessibility,
    title: "Accessibility & UI Quality",
    description: "Champion of WCAG compliance, ensuring interfaces are usable by everyone. Deep expertise in semantic HTML, ARIA patterns, keyboard navigation, and screen reader compatibility.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Product Experiences",
    description: "Extensive experience building high-traffic Product Detail Pages (PDP) and Product Listing Pages (PLP). Focused on conversion optimization, performance, and seamless user journeys.",
  },
  {
    icon: Zap,
    title: "Performance & Maintainability",
    description: "Architecting frontends for long-term maintainability. Emphasis on code splitting, lazy loading, bundle optimization, and establishing patterns that scale with team growth.",
  },
  {
    icon: Users,
    title: "Design & UX Collaboration",
    description: "Close partnership with design and UX teams to translate vision into production-ready interfaces. Bridging the gap between design systems in Figma and code.",
  },
  {
    icon: Wrench,
    title: "Developer Enablement",
    description: "Mentoring developers, conducting code reviews, and improving team workflows. Building internal tools and documentation that help teams ship faster and with higher quality.",
  },
];

const Capabilities = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="capabilities" className="section">
      <div className="container-wide">
        <FadeIn>
          <div className="max-w-2xl mb-16 md:mb-20">
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider mb-4">
              Capabilities
            </p>
            <h2 className="mb-6">What I Do</h2>
            <p className="prose-content">
              Specialized expertise developed over 15+ years of frontend development, 
              with a focus on building systems that scale.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div
                  className="card-elevated p-8 h-full group"
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-muted transition-colors">
                    <Icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {cap.description}
                  </p>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
