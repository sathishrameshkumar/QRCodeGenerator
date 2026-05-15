import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import QRCodeCard from "../components/QRCodeCard";
import BarcodeCard from "../components/BarcodeCard";
import { motion, AnimatePresence } from "framer-motion";
import { QrCode, Barcode, Zap, Shield, Download, Star, ArrowRight } from "lucide-react";

const MARQUEE_ITEMS = [
  "✦ QR Code Generator", "✦ Barcode Studio", "✦ Logo Embedding",
  "✦ High-Res Export", "✦ Custom Colors", "✦ Multiple Formats",
  "✦ QR Code Generator", "✦ Barcode Studio", "✦ Logo Embedding",
  "✦ High-Res Export", "✦ Custom Colors", "✦ Multiple Formats",
];

const STATS = [
  { value: "500K+", label: "Codes created" },
  { value: "99.9%", label: "Scan accuracy" },
  { value: "< 1s",  label: "Generation time" },
  { value: "Free",  label: "No account needed" },
];

const FEATURES = [
  { icon: Shield,   text: "No account needed",  color: "#16a34a" },
  { icon: Download, text: "High-res PNG export", color: "#d94f7e" },
  { icon: Zap,      text: "Instant live preview", color: "#f59e0b" },
  { icon: Star,     text: "Custom logo support",  color: "#7c3aed" },
];

function Dashboard() {
  const [activeTab, setActiveTab] = useState("qr");

  return (
    <MainLayout>

      {/* ── HERO ── */}
      <div style={{ textAlign: "center", paddingBottom: "64px" }}>

        {/* Top pill */}
        <div className="anim-0" style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "9px 20px",
            background: "rgba(217,79,126,0.08)",
            border: "2px solid rgba(217,79,126,0.22)",
            borderRadius: "999px",
          }}>
            <Zap size={13} color="#d94f7e" fill="#d94f7e" />
            <span style={{ fontSize: "12px", color: "#d94f7e", fontWeight: 800, letterSpacing: "0.8px", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              PROFESSIONAL QR & BARCODE STUDIO
            </span>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="anim-1" style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(44px, 6vw, 80px)",
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: "-2px",
          color: "#1a0a10",
          marginBottom: "10px",
        }}>
          Generate{" "}
          <em className="shimmer-pink" style={{ fontStyle: "italic" }}>perfect</em>
        </h1>
        <h1 className="anim-2" style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(44px, 6vw, 80px)",
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: "-2px",
          color: "#1a0a10",
          marginBottom: "28px",
        }}>
          codes in seconds.
        </h1>

        <p className="anim-3" style={{
          fontSize: "18px", color: "#7a4a5a", fontWeight: 500,
          maxWidth: "520px", margin: "0 auto 44px", lineHeight: 1.75,
        }}>
          Design stunning, scannable QR codes and barcodes with full control over style, colors, and branding — completely free.
        </p>

        {/* Stats row */}
        <div className="anim-4" style={{
          display: "inline-flex", gap: "0",
          background: "#fff", border: "2px solid rgba(217,79,126,0.14)",
          borderRadius: "22px", overflow: "hidden",
          boxShadow: "0 8px 32px rgba(217,79,126,0.1)",
          marginBottom: "52px",
        }}>
          {STATS.map(({ value, label }, i) => (
            <div key={label} style={{
              padding: "22px 32px", textAlign: "center",
              borderRight: i < STATS.length - 1 ? "2px solid rgba(217,79,126,0.1)" : "none",
            }}>
              <div style={{
                fontFamily: "Playfair Display, serif", fontSize: "28px",
                fontWeight: 900, color: "#d94f7e", lineHeight: 1,
              }}>{value}</div>
              <div style={{ fontSize: "12px", color: "#b8899a", fontWeight: 700, marginTop: "5px", letterSpacing: "0.3px" }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="anim-5" style={{ display: "flex", justifyContent: "center", gap: "14px", marginBottom: "52px" }}>
          <button
            onClick={() => setActiveTab("qr")}
            style={{
              display: "flex", alignItems: "center", gap: "8px",
              padding: "15px 28px",
              background: "linear-gradient(135deg, #d94f7e 0%, #b5245a 100%)",
              border: "none", color: "white", fontSize: "15px", fontWeight: 800,
              fontFamily: "Plus Jakarta Sans, sans-serif", cursor: "pointer",
              borderRadius: "16px", boxShadow: "0 8px 28px rgba(217,79,126,0.4)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(217,79,126,0.5)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(217,79,126,0.4)"; }}
          >
            Start Generating <ArrowRight size={17} />
          </button>
          <button style={{
            display: "flex", alignItems: "center", gap: "8px",
            padding: "15px 28px",
            background: "transparent",
            border: "2px solid rgba(217,79,126,0.3)", color: "#d94f7e",
            fontSize: "15px", fontWeight: 800, fontFamily: "Plus Jakarta Sans, sans-serif",
            cursor: "pointer", borderRadius: "16px", transition: "all 0.2s",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(217,79,126,0.06)"; e.currentTarget.style.borderColor = "#d94f7e"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(217,79,126,0.3)"; }}
          >
            See Examples
          </button>
        </div>

        {/* Tab selector */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            display: "inline-flex", padding: "6px",
            background: "#fff", border: "2px solid rgba(217,79,126,0.15)",
            borderRadius: "20px", gap: "6px",
            boxShadow: "0 4px 20px rgba(217,79,126,0.08)",
          }}>
            {[
              { id: "qr",      label: "QR Code",  icon: QrCode  },
              { id: "barcode", label: "Barcode",   icon: Barcode },
            ].map(({ id, label, icon: Icon }) => {
              const active = activeTab === id;
              return (
                <motion.button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  layout
                  style={{
                    display: "flex", alignItems: "center", gap: "9px",
                    padding: "13px 30px", borderRadius: "15px",
                    background: active
                      ? "linear-gradient(135deg, #d94f7e 0%, #b5245a 100%)"
                      : "transparent",
                    border: "none", cursor: "pointer",
                    color: active ? "#ffffff" : "#b8899a",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 800, fontSize: "14px", letterSpacing: "0.2px",
                    boxShadow: active ? "0 6px 20px rgba(217,79,126,0.38)" : "none",
                    transition: "color 0.25s, box-shadow 0.25s",
                  }}
                >
                  <Icon size={17} strokeWidth={active ? 2.5 : 2} />
                  {label}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── MARQUEE ── */}
      <div className="marquee-wrap" style={{
        marginBottom: "44px",
        padding: "14px 0",
        background: "rgba(217,79,126,0.05)",
        border: "2px solid rgba(217,79,126,0.1)",
        borderRadius: "18px",
        overflow: "hidden",
      }}>
        <div className="marquee-track">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} style={{
              padding: "0 28px", fontSize: "13px", fontWeight: 800,
              color: "#d94f7e", whiteSpace: "nowrap", letterSpacing: "0.3px",
              fontFamily: "Plus Jakarta Sans, sans-serif",
            }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── FEATURES STRIP ── */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "14px",
        marginBottom: "44px",
      }}>
        {FEATURES.map(({ icon: Icon, text, color }) => (
          <div key={text} style={{
            display: "flex", alignItems: "center", gap: "12px",
            padding: "16px 20px",
            background: "#fff", border: "2px solid rgba(217,79,126,0.1)",
            borderRadius: "16px", boxShadow: "0 2px 12px rgba(217,79,126,0.05)",
          }}>
            <div style={{
              width: "34px", height: "34px", borderRadius: "10px",
              background: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <Icon size={16} color={color} />
            </div>
            <span style={{ fontSize: "13px", fontWeight: 700, color: "#2d1520" }}>{text}</span>
          </div>
        ))}
      </div>

      {/* ── GENERATOR ── */}
      <AnimatePresence mode="wait">
        {activeTab === "qr" ? (
          <motion.div key="qr"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}>
            <QRCodeCard />
          </motion.div>
        ) : (
          <motion.div key="barcode"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}>
            <BarcodeCard />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FOOTER ── */}
      <div style={{
        marginTop: "80px", paddingTop: "32px",
        borderTop: "2px solid rgba(217,79,126,0.1)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "32px", height: "32px", borderRadius: "10px",
            background: "linear-gradient(135deg, #d94f7e, #b5245a)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 12px rgba(217,79,126,0.35)",
          }}>
            <QrCode size={16} color="white" strokeWidth={2.5} />
          </div>
          <span style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "16px", color: "#1a0a10" }}>
            QRPro <span style={{ color: "#d94f7e" }}>Studio</span>
          </span>
        </div>
        <span style={{ fontSize: "13px", color: "#b8899a", fontWeight: 600 }}>
          Built with ♥ · Free forever · No watermarks
        </span>
      </div>

    </MainLayout>
  );
}

export default Dashboard;