import { useRef, useState } from "react";
import Barcode from "react-barcode";
import { motion } from "framer-motion";
import { Download, Copy, BarChart2, CheckCircle2, Sparkles } from "lucide-react";
import { toPng } from "html-to-image";
import toast from "react-hot-toast";

const LABEL = {
  display: "block", fontSize: "12px", fontWeight: 800,
  letterSpacing: "1px", color: "#b8899a", marginBottom: "9px",
  fontFamily: "Plus Jakarta Sans, sans-serif", textTransform: "uppercase",
};

const FIELD = {
  width: "100%", background: "#ffffff",
  border: "2px solid rgba(217,79,126,0.15)", borderRadius: "14px",
  padding: "14px 18px", color: "#1a0a10", fontSize: "15px", fontWeight: 600,
  fontFamily: "Plus Jakarta Sans, sans-serif", outline: "none", transition: "all 0.2s",
};

const CARD = {
  background: "#ffffff", border: "2px solid rgba(217,79,126,0.1)",
  borderRadius: "24px", padding: "30px", marginBottom: "18px",
  boxShadow: "0 4px 24px rgba(217,79,126,0.06)",
};

const FORMATS = ["CODE128", "EAN13", "EAN8", "UPC", "CODE39", "ITF14", "MSI"];
const PRESETS = ["123456789012", "9780201379624", "40170725", "012345678905"];

function BarcodeCard() {
  const [text, setText] = useState("123456789012");
  const [format, setFormat] = useState("CODE128");
  const [lineColor, setLineColor] = useState("#1a0a10");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [lineWidth, setLineWidth] = useState(2);
  const [height, setHeight] = useState(100);
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const barcodeRef = useRef();

  const TOAST_STYLE = {
    style: { background: "#fff", color: "#1a0a10", border: "2px solid rgba(217,79,126,0.25)", fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600, boxShadow: "0 8px 30px rgba(217,79,126,0.15)" },
    iconTheme: { primary: "#d94f7e", secondary: "#fff" },
  };

  const handleDownload = async () => {
    try {
      const dataUrl = await toPng(barcodeRef.current, { pixelRatio: 3 });
      const link = document.createElement("a");
      link.download = "barcode.png"; link.href = dataUrl; link.click();
      setDownloaded(true);
      toast.success("Barcode downloaded!", TOAST_STYLE);
      setTimeout(() => setDownloaded(false), 2200);
    } catch { toast.error("Download failed"); }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Value copied!", TOAST_STYLE);
    setTimeout(() => setCopied(false), 2200);
  };

  const SEL = { ...FIELD, cursor: "pointer" };
  const focusStyle = (e) => { e.target.style.borderColor = "#d94f7e"; e.target.style.boxShadow = "0 0 0 4px rgba(217,79,126,0.1)"; };
  const blurStyle = (e) => { e.target.style.borderColor = "rgba(217,79,126,0.15)"; e.target.style.boxShadow = "none"; };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 430px", gap: "28px", alignItems: "start" }}>

      {/* LEFT */}
      <div>
        <motion.div style={CARD} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "26px" }}>
            <div style={{
              width: "38px", height: "38px", borderRadius: "12px",
              background: "rgba(217,79,126,0.1)", display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <BarChart2 size={18} color="#d94f7e" />
            </div>
            <div>
              <div style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "18px", color: "#1a0a10" }}>Barcode Settings</div>
              <div style={{ fontSize: "13px", color: "#b8899a", fontWeight: 500, marginTop: "2px" }}>Enter value and configure format</div>
            </div>
          </div>

          <div style={{ marginBottom: "22px" }}>
            <label style={LABEL}>Barcode Value</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}
              style={FIELD} placeholder="Enter barcode value…"
              onFocus={focusStyle} onBlur={blurStyle}
            />
          </div>

          {/* Sample presets */}
          <div style={{ marginBottom: "26px" }}>
            <label style={LABEL}>Quick Samples</label>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {PRESETS.map((p) => (
                <button key={p} onClick={() => setText(p)} style={{
                  padding: "7px 14px", borderRadius: "10px", fontSize: "12px",
                  fontFamily: "monospace", fontWeight: 700, cursor: "pointer",
                  background: text === p ? "rgba(217,79,126,0.1)" : "rgba(217,79,126,0.04)",
                  border: `2px solid ${text === p ? "#d94f7e" : "rgba(217,79,126,0.15)"}`,
                  color: text === p ? "#d94f7e" : "#7a4a5a", transition: "all 0.15s",
                }}>
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div>
              <label style={LABEL}>Format</label>
              <select value={format} onChange={(e) => setFormat(e.target.value)} style={SEL} onFocus={focusStyle} onBlur={blurStyle}>
                {FORMATS.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>
            <div>
              <label style={LABEL}>Line Width — {lineWidth}x</label>
              <div style={{ padding: "12px 0 4px" }}>
                <input type="range" min="1" max="4" step="0.5" value={lineWidth}
                  onChange={(e) => setLineWidth(Number(e.target.value))} style={{ width: "100%" }} />
              </div>
            </div>
            <div>
              <label style={LABEL}>Height — {height}px</label>
              <div style={{ padding: "12px 0 4px" }}>
                <input type="range" min="40" max="200" value={height}
                  onChange={(e) => setHeight(Number(e.target.value))} style={{ width: "100%" }} />
              </div>
            </div>
            <div>
              <label style={LABEL}>Colors</label>
              <div style={{ display: "flex", gap: "10px" }}>
                {[{ label: "Bar", val: lineColor, set: setLineColor }, { label: "BG", val: bgColor, set: setBgColor }].map(({ label, val, set }) => (
                  <div key={label} style={{ flex: 1 }}>
                    <div style={{ fontSize: "11px", color: "#b8899a", fontWeight: 700, marginBottom: "6px" }}>{label}</div>
                    <div style={{
                      display: "flex", alignItems: "center", gap: "8px",
                      background: "white", border: "2px solid rgba(217,79,126,0.15)", borderRadius: "12px", padding: "8px 10px",
                    }}>
                      <div style={{ position: "relative", width: "32px", height: "32px", borderRadius: "8px", overflow: "hidden", border: "1.5px solid rgba(217,79,126,0.2)", flexShrink: 0 }}>
                        <input type="color" value={val} onChange={(e) => set(e.target.value)}
                          style={{ position: "absolute", inset: "-4px", width: "calc(100% + 8px)", height: "calc(100% + 8px)", cursor: "pointer" }} />
                      </div>
                      <span style={{ fontSize: "11px", fontFamily: "monospace", fontWeight: 700, color: "#7a4a5a" }}>{val.toUpperCase()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT */}
      <div style={{ position: "sticky", top: "96px" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: "linear-gradient(160deg, #fff 0%, #fdf0f4 100%)",
            border: "2px solid rgba(217,79,126,0.14)", borderRadius: "30px", padding: "34px",
            display: "flex", flexDirection: "column", alignItems: "center",
            boxShadow: "0 20px 60px rgba(217,79,126,0.1), 0 4px 20px rgba(217,79,126,0.07)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", marginBottom: "28px" }}>
            <span style={{ fontFamily: "Playfair Display, serif", fontSize: "14px", fontWeight: 800, color: "#b8899a", letterSpacing: "0.5px" }}>
              LIVE PREVIEW
            </span>
            <span style={{ fontSize: "12px", color: "#d94f7e", fontWeight: 800, background: "rgba(217,79,126,0.08)", padding: "4px 10px", borderRadius: "8px" }}>
              {format}
            </span>
          </div>

          <div className="float-card">
            <div ref={barcodeRef} style={{
              background: bgColor, padding: "28px 24px", borderRadius: "18px",
              boxShadow: "0 20px 60px rgba(217,79,126,0.15), 0 4px 16px rgba(0,0,0,0.05)",
              border: "2px solid rgba(217,79,126,0.1)", overflow: "hidden",
            }}>
              <Barcode value={text || "0"} format={format} width={lineWidth} height={height}
                fontSize={14} lineColor={lineColor} background={bgColor} />
            </div>
          </div>

          <div style={{
            marginTop: "26px", width: "100%", padding: "13px 18px",
            background: "rgba(217,79,126,0.05)", borderRadius: "14px",
            border: "2px solid rgba(217,79,126,0.1)",
            display: "flex", alignItems: "center", gap: "10px",
          }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", flexShrink: 0 }} />
            <span style={{ fontSize: "13px", color: "#7a4a5a", fontWeight: 600, fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {text}
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", width: "100%", marginTop: "16px" }}>
            <motion.button whileTap={{ scale: 0.96 }} onClick={handleDownload} style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
              background: downloaded ? "linear-gradient(135deg, #4ade80, #16a34a)" : "linear-gradient(135deg, #d94f7e 0%, #b5245a 100%)",
              border: "none", color: "white", padding: "15px", borderRadius: "16px",
              fontWeight: 800, fontSize: "14px", fontFamily: "Plus Jakarta Sans, sans-serif",
              cursor: "pointer", transition: "all 0.3s",
              boxShadow: downloaded ? "0 6px 20px rgba(74,222,128,0.35)" : "0 6px 24px rgba(217,79,126,0.38)",
            }}>
              {downloaded ? <CheckCircle2 size={18} /> : <Download size={18} />}
              {downloaded ? "Saved!" : "Download"}
            </motion.button>

            <motion.button whileTap={{ scale: 0.96 }} onClick={handleCopy} style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
              background: copied ? "rgba(74,222,128,0.1)" : "rgba(217,79,126,0.06)",
              border: `2px solid ${copied ? "rgba(74,222,128,0.4)" : "rgba(217,79,126,0.18)"}`,
              color: copied ? "#16a34a" : "#d94f7e", padding: "15px", borderRadius: "16px",
              fontWeight: 800, fontSize: "14px", fontFamily: "Plus Jakarta Sans, sans-serif",
              cursor: "pointer", transition: "all 0.3s",
            }}>
              {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
              {copied ? "Copied!" : "Copy Value"}
            </motion.button>
          </div>

          <div style={{ marginTop: "18px", fontSize: "11px", color: "#b8899a", fontWeight: 700, textAlign: "center", letterSpacing: "0.3px" }}>
            {format} · {lineWidth}x width · {height}px height · PNG @ 3x
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BarcodeCard;