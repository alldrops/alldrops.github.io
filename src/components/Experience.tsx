const experiences = [
  {
    title: "Senior Frontend Engineer",
    type: "Contract",
    company: "Arc'teryx",
    location: "Vancouver, Canada / Remote",
    period: "Aug 2024 – Present",
    description:
      "Leading development of high-traffic e-commerce experiences with a primary focus on Product Detail Pages and catalog-driven landing pages.",
    highlights: [
      "Contributed to the PDP redesign initiative, supporting a 15% year-over-year increase in add-to-cart rate",
      "Led development of Campaign Landing Pages, supporting merchandising and campaign flows across the digital ecosystem",
      "Built and maintained scalable, accessible React components used across PDP and PLP experiences",
      "Contributed extensively to the shared design system, improving consistency and development velocity across teams",
      "Served as CSS subject matter expert, guiding layout architecture and complex UI implementations",
      "Acted as accessibility champion, ensuring components meet WCAG standards",
      "Improved quality and confidence through Storybook, Chromatic, and automated testing",
      "Supported team growth through pair programming, code reviews, mentoring, and technical interviews",
    ],
  },
  {
    title: "Lead Frontend Developer",
    company: "TELUS Digital",
    location: "Vancouver, Canada",
    period: "2016 – 2024",
    description:
      "Led multiple frontend teams designing and implementing marketing, checkout, and internal enablement platforms across TELUS Digital and partner brands.",
    highlights: [
      "Taught and instructed multiple cohorts in the TELUS Digital Junior Developer Program",
      "Mentored junior and intermediate developers on technical growth and career development",
      "Planned and executed major codebase migrations including Java → PHP → React",
      "Designed and implemented scalable, reusable component systems adopted across TELUS Digital and brands including Public Mobile, Koodo, and Business Solutions",
      "Integrated and maintained CI/CD pipelines, pull-request workflows, and automated testing",
      "Authored internal documentation covering component development, coding standards, and deployment processes",
    ],
    tech: "React, Next.js, TypeScript, Node.js, Styled Components, Contentful, OpenShift, Webpack, CI/CD, A/B testing",
  },
  {
    title: "Frontend Developer",
    type: "Contract",
    company: "MEC",
    location: "Vancouver, Canada",
    period: "2015 – 2016",
    description:
      "Architecture and development of a new e-commerce website using a custom Pattern Lab–based style guide.",
    highlights: [
      "Planned and executed migration from the legacy site to a mobile-first, responsive platform",
      "Worked closely with designers and stakeholders to modernize frontend architecture",
    ],
    tech: "HTML, CSS, JavaScript (ES6), jQuery, EmberJS",
  },
];

const earlierRoles = [
  { title: "Web Developer", company: "Wallop", location: "Vancouver", year: "2014" },
  { title: "Web UI Engineer", company: "Wundr", location: "Vancouver", year: "2014" },
  { title: "Front End Developer", company: "NBR", location: "Londrina, Brazil", year: "2013" },
  { title: "Front End Developer", company: "ICOMP", location: "Londrina, Brazil", year: "2012–2013" },
  { title: ".NET Developer Intern", company: "Cantoni", location: "Londrina, Brazil", year: "2011–2012" },
  { title: "Web Developer", company: "K2", location: "Londrina, Brazil", year: "2010–2011" },
];

const Experience = () => {
  return (
    <section id="experience" className="section section-alt">
      <div className="container-narrow">
        <h2 className="mb-12">Experience</h2>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <article key={index} className="relative">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-serif font-medium text-heading">
                    {exp.title}
                    {exp.type && (
                      <span className="text-subtle font-sans text-sm font-normal ml-2">
                        ({exp.type})
                      </span>
                    )}
                  </h3>
                  <p className="text-foreground font-medium">{exp.company}</p>
                </div>
                <div className="text-subtle text-sm mt-1 md:mt-0 md:text-right">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <p className="prose-content mb-4">{exp.description}</p>

              <ul className="space-y-2 mb-4">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-highlight mr-3 mt-1.5 text-xs">●</span>
                    <span className="prose-content">{highlight}</span>
                  </li>
                ))}
              </ul>

              {exp.tech && (
                <p className="text-sm text-subtle">
                  <span className="font-medium">Technologies:</span> {exp.tech}
                </p>
              )}
            </article>
          ))}
        </div>

        {/* Earlier Roles */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-lg font-serif font-medium text-heading mb-6">
            Earlier Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {earlierRoles.map((role, index) => (
              <div key={index} className="flex justify-between items-baseline">
                <div>
                  <span className="text-foreground">{role.title}</span>
                  <span className="text-subtle mx-2">·</span>
                  <span className="text-muted-foreground">{role.company}</span>
                </div>
                <span className="text-subtle text-sm">{role.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
