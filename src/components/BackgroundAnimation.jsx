function BackgroundAnimation() {
  return (
    <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>

      {/* Large milky blob top-left */}
      <div className="blob-1" style={{
        position: "absolute", top: "-18%", left: "-12%",
        width: "600px", height: "600px",
        background: "radial-gradient(circle, rgba(244,198,198,0.55) 0%, rgba(252,232,232,0.2) 60%, transparent 80%)",
        filter: "blur(60px)",
      }} />

      {/* Deep pink blob bottom-right */}
      <div className="blob-2" style={{
        position: "absolute", bottom: "-20%", right: "-15%",
        width: "700px", height: "700px",
        background: "radial-gradient(circle, rgba(217,79,126,0.18) 0%, rgba(217,79,126,0.06) 55%, transparent 75%)",
        filter: "blur(80px)",
      }} />

      {/* Light pink center halo */}
      <div className="blob-3" style={{
        position: "absolute", top: "30%", left: "35%",
        width: "500px", height: "400px",
        background: "radial-gradient(ellipse, rgba(252,232,232,0.5) 0%, transparent 70%)",
        filter: "blur(50px)",
      }} />

      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(217,79,126,0.18) 1.2px, transparent 1.2px)",
        backgroundSize: "32px 32px",
      }} />

      {/* Top border line */}
      <div style={{
        position: "absolute", top: 0, left: "8%", right: "8%", height: "2px",
        background: "linear-gradient(90deg, transparent, rgba(217,79,126,0.5), transparent)",
      }} />
    </div>
  );
}

export default BackgroundAnimation;