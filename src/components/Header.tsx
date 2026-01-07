import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Initialize dark mode
    document.documentElement.classList.add("dark");
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      {/* Skip to content link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="container-wide">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="text-lg font-semibold text-foreground hover:text-muted-foreground transition-colors focus-ring rounded-lg px-2 py-1 -ml-2"
          >
            Andre Lopes
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-ring"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a href="#contact" className="hidden md:flex btn-primary text-sm py-2">
              Contact
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-ring"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="container-wide py-6 space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-4">
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn-primary w-full justify-center"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
