import { QrCode } from "lucide-react";

function Navbar() {
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(253,246,243,0.85)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1.5px solid rgba(217,79,126,0.14)",
      boxShadow: "0 2px 20px rgba(217,79,126,0.07)",
    }}>
      <div style={{
        maxWidth: "1400px", margin: "0 auto", padding: "0 36px",
        height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div style={{
            width: "46px", height: "46px", borderRadius: "14px",
            background: "linear-gradient(135deg, #d94f7e 0%, #b5245a 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 6px 20px rgba(217,79,126,0.38), inset 0 1px 0 rgba(255,255,255,0.25)",
            flexShrink: 0,
          }}>
            <QrCode size={22} color="white" strokeWidth={2.5} />
          </div>
          <div>
            <div style={{
              fontFamily: "Playfair Display, serif", fontWeight: 800,
              fontSize: "20px", color: "#1a0a10", letterSpacing: "-0.5px", lineHeight: 1,
            }}>
              QR<span style={{ color: "#d94f7e" }}>Pro</span>
            </div>
            <div style={{ fontSize: "10px", color: "#b8899a", marginTop: "3px", letterSpacing: "1.5px", fontWeight: 700 }}>
              STUDIO
            </div>
          </div>
        </div>

        {/* Center status */}
        <div style={{
          display: "flex", alignItems: "center", gap: "8px",
          padding: "8px 18px",
          background: "rgba(217,79,126,0.07)",
          border: "1.5px solid rgba(217,79,126,0.18)",
          borderRadius: "999px",
        }}>
          <div style={{ position: "relative", width: "8px", height: "8px" }}>
            <div className="pulse-ring" style={{
              position: "absolute", inset: 0, borderRadius: "50%",
              border: "2px solid #4ade80",
            }} />
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80" }} />
          </div>
          <span style={{ fontSize: "12px", color: "#7a4a5a", fontWeight: 600, letterSpacing: "0.3px" }}>
            Generator active
          </span>
        </div>

        {/* Nav right */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {["Docs", "Pricing", "API"].map((item) => (
            <button key={item} style={{
              padding: "8px 16px", borderRadius: "10px", background: "transparent",
              border: "1.5px solid transparent", color: "#b8899a",
              fontSize: "14px", fontWeight: 600, fontFamily: "Plus Jakarta Sans, sans-serif",
              cursor: "pointer", transition: "all 0.2s",
            }}
              onMouseEnter={(e) => {
                e.target.style.color = "#d94f7e";
                e.target.style.borderColor = "rgba(217,79,126,0.2)";
                e.target.style.background = "rgba(217,79,126,0.06)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#b8899a";
                e.target.style.borderColor = "transparent";
                e.target.style.background = "transparent";
              }}
            >
              {item}
            </button>
          ))}
          <button style={{
            marginLeft: "10px", padding: "10px 22px", borderRadius: "12px",
            background: "linear-gradient(135deg, #d94f7e 0%, #b5245a 100%)",
            border: "none", color: "white", fontSize: "14px", fontWeight: 800,
            fontFamily: "Plus Jakarta Sans, sans-serif", cursor: "pointer",
            boxShadow: "0 6px 20px rgba(217,79,126,0.38)",
            letterSpacing: "0.2px", transition: "all 0.2s",
          }}
            onMouseEnter={(e) => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 10px 28px rgba(217,79,126,0.48)"; }}
            onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 6px 20px rgba(217,79,126,0.38)"; }}
          >
            Get Pro ✦
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;