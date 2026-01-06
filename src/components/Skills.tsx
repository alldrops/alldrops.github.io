const skillCategories = [
  {
    title: "Frontend & Frameworks",
    skills: [
      "React",
      "React Hooks",
      "TypeScript",
      "JavaScript (ES6+)",
      "Next.js (SSR/SSG)",
      "HTML5",
      "CSS3",
      "SCSS/Sass",
      "Styled Components",
    ],
  },
  {
    title: "Design Systems & UI",
    skills: [
      "Component library development",
      "Storybook",
      "Chromatic",
      "Accessibility (WCAG)",
      "Responsive design",
      "Performance-focused UI",
    ],
  },
  {
    title: "State, Data & Forms",
    skills: [
      "tRPC",
      "GraphQL",
      "GROQ",
      "Sanity CMS",
      "Contentful",
      "React Hook Form",
      "RESTful APIs",
    ],
  },
  {
    title: "Testing & Quality",
    skills: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "ESLint",
      "Biome",
      "Prettier",
      "Husky",
      "SonarQube",
    ],
  },
  {
    title: "Build Tools & Bundlers",
    skills: ["Vite", "Rollup", "Webpack", "Babel"],
  },
  {
    title: "Platform & DevOps",
    skills: [
      "AWS SST (Serverless Stack)",
      "CI/CD (Bitbucket Pipelines)",
      "Git version control",
      "Monorepos",
      "Semantic versioning",
      "Release automation",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container-narrow">
        <h2 className="mb-4">Skills & Expertise</h2>
        <p className="prose-content max-w-xl mb-12">
          Core competencies developed over 15+ years of professional frontend development, with deep expertise in React ecosystems and enterprise-scale applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-base font-sans font-semibold text-foreground mb-4 uppercase tracking-wide text-sm">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
