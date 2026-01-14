import { motion, useReducedMotion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="section">
      <div className="container-wide">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider mb-4">
              Contact
            </p>
            <h2 className="mb-6">Let's Connect</h2>
            <p className="prose-content">
              I'm open to senior IC roles, lead positions, and high-level contract work. 
              If you're looking for an experienced frontend engineer, I'd be happy to connect.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex justify-center mb-16">
            <a href="mailto:andre.22.lopes@gmail.com" className="btn-primary">
              <Mail className="w-4 h-4" />
              Email Me
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
            <motion.a
              href="https://www.linkedin.com/in/andrelopes22/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-card transition-colors group focus-ring"
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-muted transition-colors">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">LinkedIn</p>
                <p className="text-sm text-muted-foreground">Connect with me</p>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/alldrops"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-card transition-colors group focus-ring"
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-muted transition-colors">
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">GitHub</p>
                <p className="text-sm text-muted-foreground">View my code</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:andre.22.lopes@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-card transition-colors group focus-ring"
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-muted transition-colors">
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">andre.22.lopes@gmail.com</p>
              </div>
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
