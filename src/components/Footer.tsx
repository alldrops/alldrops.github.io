const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Andre Lopes</p>
          <p>Senior Frontend Engineer · Vancouver, Canada</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
