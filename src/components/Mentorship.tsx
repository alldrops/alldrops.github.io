import { GraduationCap, Users, Search } from "lucide-react";
import FadeIn from "./FadeIn";

const mentorshipItems = [
  {
    icon: GraduationCap,
    title: "Junior Developer Program Instructor",
    description: "Instructor for TELUS Digital's Junior Developer Program, delivering technical training across multiple cohorts. Focused on building foundational skills in modern frontend development.",
  },
  {
    icon: Users,
    title: "Technical Mentorship",
    description: "Ongoing mentorship of junior and intermediate developers. Regular pair programming sessions, code reviews, and knowledge-sharing to help team members grow.",
  },
  {
    icon: Search,
    title: "Hiring & Team Building",
    description: "Participated in technical interviews and hiring decisions. Contributed to establishing interview processes and evaluation criteria.",
  },
];

const Mentorship = () => {
  return (
    <section id="mentorship" className="section">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-12 lg:gap-20">
          <FadeIn>
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider mb-4">
                Leadership
              </p>
              <h2 className="mb-6">Mentorship</h2>
              <p className="prose-content">
                Throughout my career, I've prioritized supporting the growth of 
                other developers while remaining hands-on as an individual contributor.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {mentorshipItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="card-elevated p-8 flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
