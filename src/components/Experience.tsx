import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "./FadeIn";

const experiences = [
  {
    title: "Senior Frontend Engineer",
    type: "Contract",
    company: "Arc'teryx",
    period: "Aug 2024 – Present",
    description: "Leading development of high-traffic e-commerce experiences with primary ownership of Product Detail Pages and campaign landing pages.",
    highlights: [
      "Core contributor to PDP redesign initiative, improving add-to-cart conversion",
      "Led development of Campaign Landing Pages supporting merchandising flows",
      "Built and maintained accessible React components across PDP and PLP",
      "Major contributor to the shared design system, improving cross-team consistency",
      "CSS architecture lead, guiding complex layout implementations",
      "Accessibility champion ensuring WCAG compliance across components",
    ],
    featured: true,
  },
  {
    title: "Lead Frontend Developer",
    company: "TELUS Digital",
    period: "2016 – 2024",
    description: "Led frontend teams building marketing, checkout, and internal enablement platforms across TELUS Digital and partner brands.",
    highlights: [
      "Taught multiple cohorts in the TELUS Digital Junior Developer Program",
      "Mentored junior and intermediate developers on technical growth",
      "Led major codebase migrations from Java to PHP to React",
      "Designed reusable component systems adopted across multiple brands",
      "Integrated CI/CD pipelines and automated testing workflows",
    ],
  },
  {
    title: "Frontend Developer",
    type: "Contract",
    company: "MEC",
    period: "2015 – 2016",
    description: "Architecture and development of a new e-commerce platform using a Pattern Lab–based design system.",
    highlights: [
      "Led migration from legacy platform to mobile-first responsive architecture",
      "Collaborated with designers to modernize the frontend stack",
    ],
  },
];

const earlierRoles = [
  { title: "Web Developer", company: "Wallop", year: "2014" },
  { title: "Web UI Engineer", company: "Wundr", year: "2014" },
  { title: "Front End Developer", company: "NBR", year: "2013" },
  { title: "Front End Developer", company: "ICOMP", year: "2012–2013" },
  { title: ".NET Developer Intern", company: "Cantoni", year: "2011–2012" },
  { title: "Web Developer", company: "K2", year: "2010–2011" },
];

const Experience = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="section">
      <div className="container-wide">
        <FadeIn>
          <div className="max-w-2xl mb-16 md:mb-20">
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider mb-4">
              Career
            </p>
            <h2>Experience</h2>
          </div>
        </FadeIn>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.article
                className={`card-elevated p-8 md:p-10 ${exp.featured ? "ring-1 ring-muted-foreground/20" : ""}`}
                whileHover={shouldReduceMotion ? {} : { scale: 1.005 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      {exp.type && (
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                          {exp.type}
                        </span>
                      )}
                      {exp.featured && (
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-foreground text-background">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <p className="text-muted-foreground text-sm whitespace-nowrap">
                    {exp.period}
                  </p>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </FadeIn>
          ))}
        </div>

        {/* Earlier Roles */}
        <FadeIn delay={0.3}>
          <div className="mt-16">
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider mb-8">
              Earlier Experience
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {earlierRoles.map((role, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-xl bg-card border border-border/50 hover:border-border transition-colors"
                  whileHover={shouldReduceMotion ? {} : { y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="font-medium text-sm text-foreground">{role.title}</p>
                  <p className="text-muted-foreground text-sm mt-0.5">
                    {role.company} · {role.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Experience;
