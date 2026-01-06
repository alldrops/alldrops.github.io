const About = () => {
  return (
    <section id="about" className="section">
      <div className="container-narrow">
        <h2 className="mb-8">About</h2>

        <div className="prose-content space-y-6 max-w-2xl">
          <p>
            I approach frontend engineering as a craft that balances technical precision with user experience. Over 15 years, I've learned that the best interfaces are often the ones that feel invisible—where thoughtful architecture and attention to detail result in experiences that simply work.
          </p>

          <p>
            My work focuses on building systems that scale: design systems that maintain consistency across large teams, component libraries that improve development velocity, and patterns that make codebases easier to maintain over time. I believe strongly in accessibility as a baseline requirement, not an afterthought.
          </p>

          <p>
            I collaborate closely with design and product teams, translating vision into production-ready code. I value clear communication, thorough documentation, and processes that help teams work better together.
          </p>

          <p>
            When evaluating opportunities, I look for teams that value quality, have interesting technical challenges, and respect the craft of frontend development.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-base font-sans font-semibold text-foreground mb-4 uppercase tracking-wide text-sm">
            Education
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-foreground">Bachelor of Computer Science</p>
              <p className="text-muted-foreground text-sm">UNOPAR, Londrina, Brazil</p>
            </div>
            <div>
              <p className="text-foreground">Bachelor, Media Techniques & Marketing Communications</p>
              <p className="text-muted-foreground text-sm">BCIT, Vancouver, Canada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
