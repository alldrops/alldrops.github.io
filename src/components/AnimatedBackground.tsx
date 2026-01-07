const AnimatedBackground = () => {
  return (
    <>
      {/* Aurora background */}
      <div className="aurora-bg" aria-hidden="true">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>
      
      {/* Subtle noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />
    </>
  );
};

export default AnimatedBackground;
