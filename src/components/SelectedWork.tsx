import { motion, useReducedMotion } from "framer-motion";
import { ShoppingBag, Layers, Accessibility } from "lucide-react";
import FadeIn from "./FadeIn";

const projects = [
  {
    icon: ShoppingBag,
    title: "E-commerce Product Pages",
    context: "High-traffic retail platforms serving millions of users",
    approach: "Developed performant, accessible Product Detail Pages (PDP) and Product Listing Pages (PLP) using React and TypeScript. Focused on component architecture that scales across multiple product types while maintaining fast load times.",
    focus: ["Performance optimization", "Responsive layouts", "A/B testing integration", "Cross-team collaboration"],
    outcomes: "Contributed to measurable improvements in add-to-cart rates and page performance. Established patterns adopted across multiple product teams.",
  },
  {
    icon: Layers,
    title: "Design System Contributions",
    context: "Enterprise-scale component libraries used across multiple brands",
    approach: "Built and maintained shared component libraries using Storybook and Chromatic. Emphasized documentation, accessibility compliance, and developer experience to enable faster feature development.",
    focus: ["Component documentation", "Visual regression testing", "API design", "Cross-brand theming"],
    outcomes: "Improved development velocity across teams. Components adopted by multiple product lines, reducing duplicate implementation effort.",
  },
  {
    icon: Accessibility,
    title: "Accessibility & UI Quality",
    context: "Ensuring inclusive experiences across complex e-commerce flows",
    approach: "Led accessibility initiatives across frontend teams, conducting audits and establishing WCAG-compliant patterns. Focused on keyboard navigation, screen reader compatibility, and color contrast.",
    focus: ["WCAG compliance", "Semantic HTML", "ARIA patterns", "Automated testing"],
    outcomes: "Established accessibility as a baseline requirement. Reduced accessibility-related issues through proactive standards and automated testing.",
  },
];

const SelectedWork = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" className="section">
      <div className="container-wide">
        <FadeIn>
          <div className="max-w-2xl mb-16 md:mb-20">
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider mb-4">
              Selected Work
            </p>
            <h2 className="mb-6">Areas of Focus</h2>
            <p className="prose-content">
              Representative work across my career, focusing on the types of problems 
              I've solved and the approaches I bring to complex frontend challenges.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.article
                  className="card-elevated p-8 md:p-10"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.005 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-secondary items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {project.context}
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.approach}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.focus.map((item, i) => (
                          <span key={i} className="skill-chip">
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="pt-6 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Outcomes: </span>
                          {project.outcomes}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
