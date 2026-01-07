import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, FileText, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4">Connect</Badge>
          <h2 className="mb-4">Get in Touch</h2>
          <p className="prose-content">
            I'm open to senior IC roles, lead positions, and high-level contract work. If you're looking for an experienced frontend engineer, I'd be happy to connect.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/25">
            <a href="mailto:andre.22.lopes@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Email Me
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
            <a href="/andre_lopes_resume.pdf" download>
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
          <a
            href="https://www.linkedin.com/in/andrelopes22/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 p-4 rounded-xl hover:bg-card transition-all"
          >
            <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="font-medium text-foreground">LinkedIn</p>
              <p className="text-sm text-muted-foreground">Connect with me</p>
            </div>
          </a>

          <a
            href="https://github.com/alldrops"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 p-4 rounded-xl hover:bg-card transition-all"
          >
            <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              <Github className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="font-medium text-foreground">GitHub</p>
              <p className="text-sm text-muted-foreground">View my code</p>
            </div>
          </a>

          <a
            href="mailto:andre.22.lopes@gmail.com"
            className="group flex items-center gap-3 p-4 rounded-xl hover:bg-card transition-all"
          >
            <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="font-medium text-foreground">Email</p>
              <p className="text-sm text-muted-foreground">andre.22.lopes@gmail.com</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;