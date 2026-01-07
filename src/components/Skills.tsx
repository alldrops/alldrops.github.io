import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "./FadeIn";

const skillCategories = [
  {
    title: "Frontend & Frameworks",
    skills: [
      "React",
      "React Hooks",
      "TypeScript",
      "JavaScript (ES6+)",
      "Next.js",
      "HTML5",
      "CSS3",
      "SCSS/Sass",
      "Styled Components",
    ],
  },
  {
    title: "Design Systems & UI",
    skills: [
      "Component library architecture",
      "Storybook",
      "Chromatic",
      "Accessibility (WCAG)",
      "Responsive design",
      "CSS architecture",
    ],
  },
  {
    title: "Testing & Quality",
    skills: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "ESLint",
      "Prettier",
      "SonarQube",
      "Visual regression testing",
    ],
  },
  {
    title: "Tooling & Platform",
    skills: [
      "Vite",
      "Webpack",
      "Git",
      "CI/CD",
      "AWS",
      "Contentful",
      "Sanity CMS",
      "GraphQL",
    ],
  },
];

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section">
      <div className="container-wide">
        <FadeIn>
          <div className="max-w-2xl mb-16 md:mb-20">
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider mb-4">
              Technical
            </p>
            <h2 className="mb-6">Skills & Expertise</h2>
            <p className="prose-content">
              Core competencies developed over 15+ years, with deep expertise in 
              React ecosystems and enterprise-scale applications.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                className="card-elevated p-8"
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
