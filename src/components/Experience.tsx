import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Calendar } from "lucide-react";

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
      "Led development of Campaign Landing Pages, supporting merchandising and campaign flows",
      "Built and maintained scalable, accessible React components used across PDP and PLP experiences",
      "Contributed extensively to the shared design system, improving consistency across teams",
      "Served as CSS subject matter expert, guiding layout architecture and complex UI implementations",
      "Acted as accessibility champion, ensuring components meet WCAG standards",
    ],
    featured: true,
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
      "Designed and implemented scalable, reusable component systems adopted across multiple brands",
      "Integrated and maintained CI/CD pipelines, pull-request workflows, and automated testing",
    ],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "Styled Components", "Contentful"],
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
    tech: ["JavaScript (ES6)", "EmberJS", "CSS", "Pattern Lab"],
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
  return (
    <section id="experience" className="section">
      <div className="container-wide">
        <div className="flex items-end justify-between mb-16">
          <div>
            <Badge variant="outline" className="mb-4">Career</Badge>
            <h2>Experience</h2>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-4xl font-bold font-serif text-primary">8+</span>
            <p className="text-muted-foreground text-sm">Years in Vancouver</p>
          </div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className={`card-elevated p-6 md:p-8 relative group ${
                exp.featured ? "border-l-4 border-l-primary" : ""
              }`}
            >
              {exp.featured && (
                <Badge className="absolute -top-3 right-6 bg-primary">Current Role</Badge>
              )}

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-serif font-medium text-heading flex items-center gap-3">
                    {exp.title}
                    {exp.type && (
                      <Badge variant="secondary" className="font-sans text-xs">
                        {exp.type}
                      </Badge>
                    )}
                  </h3>
                  <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                    <span className="flex items-center gap-1.5 font-medium text-foreground">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm whitespace-nowrap">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </div>
              </div>

              <p className="prose-content mb-6">{exp.description}</p>

              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>

              {exp.tech && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-md bg-secondary/70 text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Earlier Roles */}
        <div className="mt-16">
          <h3 className="text-lg font-serif font-medium text-heading mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-border" />
            Earlier Experience
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {earlierRoles.map((role, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <p className="font-medium text-sm text-foreground">{role.title}</p>
                <p className="text-muted-foreground text-sm">
                  {role.company} · {role.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;