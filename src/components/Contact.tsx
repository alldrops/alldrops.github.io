import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section section-alt">
      <div className="container-narrow">
        <h2 className="mb-4">Get in Touch</h2>
        <p className="prose-content max-w-xl mb-10">
          I'm open to senior IC roles, lead positions, and high-level contract work. If you're looking for an experienced frontend engineer, I'd be happy to connect.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <Button asChild size="lg">
            <a href="mailto:andre.22.lopes@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/andre_lopes_resume.pdf" download>
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-muted-foreground">
          <a
            href="https://www.linkedin.com/in/andrelopes22/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
          <a
            href="https://github.com/alldrops"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
          <a
            href="mailto:andre.22.lopes@gmail.com"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
            andre.22.lopes@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
