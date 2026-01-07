import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Handshake } from "lucide-react";

const mentorshipItems = [
  {
    icon: GraduationCap,
    title: "Junior Developer Program Instructor",
    subtitle: "TELUS Digital",
    description:
      "Instructor and mentor for TELUS Digital's Junior Developer Program, delivering technical training across multiple cohorts. Focused on building foundational skills in modern frontend development and helping new developers transition into professional roles.",
    highlight: true,
  },
  {
    icon: Users,
    title: "Technical Mentorship",
    subtitle: "Ongoing",
    description:
      "Ongoing mentorship of junior and intermediate developers on technical growth and career development. Regular pair programming sessions, code reviews, and knowledge-sharing to help team members build confidence and expertise.",
  },
  {
    icon: Handshake,
    title: "Hiring & Team Building",
    subtitle: "Cross-functional",
    description:
      "Participated in technical interviews and hiring decisions, helping build strong frontend teams. Contributed to establishing interview processes and evaluation criteria aligned with team needs.",
  },
];

const Mentorship = () => {
  return (
    <section id="mentorship" className="section">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-12 lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Badge variant="outline" className="mb-4">Leadership</Badge>
            <h2 className="mb-4">Mentorship & Leadership</h2>
            <p className="prose-content">
              Throughout my career, I've prioritized supporting the growth of other developers while remaining hands-on as an individual contributor.
            </p>
          </div>

          <div className="space-y-6">
            {mentorshipItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`card-elevated p-6 md:p-8 ${
                    item.highlight ? "border-l-4 border-l-accent" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${item.highlight ? "bg-accent/10" : "bg-muted"}`}>
                      <Icon className={`w-5 h-5 ${item.highlight ? "text-accent" : "text-muted-foreground"}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-serif font-medium text-heading mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;