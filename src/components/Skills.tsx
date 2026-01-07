import { Badge } from "@/components/ui/badge";
import { Code2, Palette, TestTube, Server, Layers, Workflow } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend & Frameworks",
    color: "text-primary",
    bgColor: "bg-primary/10",
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
    icon: Palette,
    title: "Design Systems & UI",
    color: "text-accent",
    bgColor: "bg-accent/10",
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
    icon: Layers,
    title: "State, Data & Forms",
    color: "text-primary",
    bgColor: "bg-primary/10",
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
    icon: TestTube,
    title: "Testing & Quality",
    color: "text-accent",
    bgColor: "bg-accent/10",
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
    icon: Workflow,
    title: "Build Tools & Bundlers",
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: ["Vite", "Rollup", "Webpack", "Babel"],
  },
  {
    icon: Server,
    title: "Platform & DevOps",
    color: "text-accent",
    bgColor: "bg-accent/10",
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
    <section id="skills" className="section section-alt">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Technical</Badge>
          <h2 className="mb-4">Skills & Expertise</h2>
          <p className="prose-content">
            Core competencies developed over 15+ years of professional frontend development, with deep expertise in React ecosystems and enterprise-scale applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="card-elevated p-6 group hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl ${category.bgColor}`}>
                    <Icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <h3 className="text-base font-sans font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;