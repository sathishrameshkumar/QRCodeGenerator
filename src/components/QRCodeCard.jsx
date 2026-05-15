// import { useEffect, useRef, useState } from "react";
// import QRCodeStyling from "qr-code-styling";
// import { motion } from "framer-motion";
// import { Download, Copy, Upload, Sliders, Paintbrush, CheckCircle2, RefreshCw, Sparkles } from "lucide-react";
// import toast from "react-hot-toast";

// const LABEL = {
//   display: "block",
//   fontSize: "12px",
//   fontWeight: 800,
//   letterSpacing: "1px",
//   color: "#b8899a",
//   marginBottom: "9px",
//   fontFamily: "Plus Jakarta Sans, sans-serif",
//   textTransform: "uppercase",
// };

// const FIELD = {
//   width: "100%",
//   background: "#ffffff",
//   border: "2px solid rgba(217,79,126,0.15)",
//   borderRadius: "14px",
//   padding: "14px 18px",
//   color: "#1a0a10",
//   fontSize: "15px",
//   fontWeight: 600,
//   fontFamily: "Plus Jakarta Sans, sans-serif",
//   outline: "none",
//   transition: "border-color 0.2s, box-shadow 0.2s",
// };

// const CARD = {
//   background: "#ffffff",
//   border: "2px solid rgba(217,79,126,0.1)",
//   borderRadius: "24px",
//   padding: "30px",
//   marginBottom: "18px",
//   boxShadow: "0 4px 24px rgba(217,79,126,0.06)",
// };

// const SECTION_ICON = (bg, iconColor) => ({
//   width: "38px", height: "38px", borderRadius: "12px",
//   background: bg, display: "flex", alignItems: "center", justifyContent: "center",
//   flexShrink: 0,
// });

// function ColorSwatch({ label, value, onChange }) {
//   return (
//     <div>
//       <label style={LABEL}>{label}</label>
//       <div style={{
//         display: "flex", alignItems: "center", gap: "12px",
//         background: "white", border: "2px solid rgba(217,79,126,0.15)",
//         borderRadius: "14px", padding: "10px 14px",
//       }}>
//         <div style={{
//           position: "relative", width: "36px", height: "36px",
//           borderRadius: "10px", overflow: "hidden",
//           border: "2px solid rgba(217,79,126,0.2)", flexShrink: 0,
//         }}>
//           <input type="color" value={value} onChange={(e) => onChange(e.target.value)}
//             style={{ position: "absolute", inset: "-4px", width: "calc(100% + 8px)", height: "calc(100% + 8px)", cursor: "pointer" }} />
//         </div>
//         <div>
//           <div style={{ fontSize: "13px", fontFamily: "monospace", fontWeight: 700, color: "#1a0a10" }}>{value.toUpperCase()}</div>
//           <div style={{ fontSize: "11px", color: "#b8899a", marginTop: "1px" }}>Click to change</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function QRCodeCard() {
//   const qrRef = useRef(null);
//   const qrCode = useRef(null);
//   const [text, setText] = useState("https://example.com");
//   const [size, setSize] = useState(300);
//   const [qrColor, setQrColor] = useState("#d94f7e");
//   const [bgColor, setBgColor] = useState("#ffffff");
//   const [dotStyle, setDotStyle] = useState("rounded");
//   const [cornerStyle, setCornerStyle] = useState("extra-rounded");
//   const [errorLevel, setErrorLevel] = useState("H");
//   const [logo, setLogo] = useState("");
//   const [logoName, setLogoName] = useState("");
//   const [copied, setCopied] = useState(false);
//   const [downloaded, setDownloaded] = useState(false);

//   useEffect(() => {
//     qrCode.current = new QRCodeStyling({
//       width: size, height: size, data: text, image: logo,
//       dotsOptions: { color: qrColor, type: dotStyle },
//       backgroundOptions: { color: bgColor },
//       cornersSquareOptions: { type: cornerStyle, color: qrColor },
//       qrOptions: { errorCorrectionLevel: errorLevel },
//       imageOptions: { crossOrigin: "anonymous", margin: 10, imageSize: 0.4 },
//     });
//     if (qrRef.current) { qrRef.current.innerHTML = ""; qrCode.current.append(qrRef.current); }
//   }, []);

//   useEffect(() => {
//     qrCode.current?.update({
//       data: text, width: size, height: size, image: logo,
//       dotsOptions: { color: qrColor, type: dotStyle },
//       backgroundOptions: { color: bgColor },
//       cornersSquareOptions: { type: cornerStyle, color: qrColor },
//       qrOptions: { errorCorrectionLevel: errorLevel },
//     });
//   }, [text, size, qrColor, bgColor, dotStyle, cornerStyle, logo, errorLevel]);

//   const TOAST_STYLE = {
//     style: { background: "#fff", color: "#1a0a10", border: "2px solid rgba(217,79,126,0.25)", fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600, boxShadow: "0 8px 30px rgba(217,79,126,0.15)" },
//     iconTheme: { primary: "#d94f7e", secondary: "#fff" },
//   };

//   const handleCopy = () => {
//     navigator.clipboard.writeText(text);
//     setCopied(true);
//     toast.success("Link copied!", TOAST_STYLE);
//     setTimeout(() => setCopied(false), 2200);
//   };

//   const handleDownload = () => {
//     qrCode.current.download({ name: "qrpro", extension: "png" });
//     setDownloaded(true);
//     toast.success("QR downloaded!", TOAST_STYLE);
//     setTimeout(() => setDownloaded(false), 2200);
//   };

//   const handleReset = () => {
//     setText("https://example.com"); setSize(300);
//     setQrColor("#d94f7e"); setBgColor("#ffffff");
//     setDotStyle("rounded"); setCornerStyle("extra-rounded");
//     setErrorLevel("H"); setLogo(""); setLogoName("");
//   };

//   const SEL = { ...FIELD, cursor: "pointer", color: "#1a0a10" };

//   return (
//     <div style={{ display: "grid", gridTemplateColumns: "1fr 430px", gap: "28px", alignItems: "start" }}>

//       {/* ── LEFT ── */}
//       <div>
//         {/* Content section */}
//         <motion.div style={CARD} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//           <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "26px" }}>
//             <div style={SECTION_ICON("rgba(217,79,126,0.1)")}>
//               <Sliders size={18} color="#d94f7e" />
//             </div>
//             <div>
//               <div style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "18px", color: "#1a0a10" }}>Content</div>
//               <div style={{ fontSize: "13px", color: "#b8899a", fontWeight: 500, marginTop: "2px" }}>URL or text to encode</div>
//             </div>
//           </div>

//           <div style={{ marginBottom: "22px" }}>
//             <label style={LABEL}>Destination URL / Text</label>
//             <input type="text" value={text} onChange={(e) => setText(e.target.value)}
//               style={FIELD} placeholder="https://your-link.com"
//               onFocus={(e) => { e.target.style.borderColor = "#d94f7e"; e.target.style.boxShadow = "0 0 0 4px rgba(217,79,126,0.1)"; }}
//               onBlur={(e) => { e.target.style.borderColor = "rgba(217,79,126,0.15)"; e.target.style.boxShadow = "none"; }}
//             />
//           </div>

//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
//             <div>
//               <label style={LABEL}>Size — {size}px</label>
//               <div style={{ padding: "10px 0 4px" }}>
//                 <input type="range" min="200" max="500" value={size} onChange={(e) => setSize(Number(e.target.value))} style={{ width: "100%" }} />
//                 <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
//                   <span style={{ fontSize: "11px", color: "#b8899a", fontWeight: 600 }}>200px</span>
//                   <span style={{ fontSize: "11px", color: "#b8899a", fontWeight: 600 }}>500px</span>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <label style={LABEL}>Error Correction</label>
//               <select value={errorLevel} onChange={(e) => setErrorLevel(e.target.value)} style={SEL}
//                 onFocus={(e) => { e.target.style.borderColor = "#d94f7e"; e.target.style.boxShadow = "0 0 0 4px rgba(217,79,126,0.1)"; }}
//                 onBlur={(e) => { e.target.style.borderColor = "rgba(217,79,126,0.15)"; e.target.style.boxShadow = "none"; }}>
//                 <option value="L">Low — 7%</option>
//                 <option value="M">Medium — 15%</option>
//                 <option value="Q">Quartile — 25%</option>
//                 <option value="H">High — 30%</option>
//               </select>
//             </div>
//           </div>
//         </motion.div>

//         {/* Design section */}
//         <motion.div style={CARD} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
//           <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "26px" }}>
//             <div style={SECTION_ICON("rgba(232,51,109,0.1)")}>
//               <Paintbrush size={18} color="#e8336d" />
//             </div>
//             <div>
//               <div style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "18px", color: "#1a0a10" }}>Design & Style</div>
//               <div style={{ fontSize: "13px", color: "#b8899a", fontWeight: 500, marginTop: "2px" }}>Customize appearance</div>
//             </div>
//           </div>

//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }}>
//             <div>
//               <label style={LABEL}>Dot Style</label>
//               <select value={dotStyle} onChange={(e) => setDotStyle(e.target.value)} style={SEL}
//                 onFocus={(e) => { e.target.style.borderColor = "#d94f7e"; e.target.style.boxShadow = "0 0 0 4px rgba(217,79,126,0.1)"; }}
//                 onBlur={(e) => { e.target.style.borderColor = "rgba(217,79,126,0.15)"; e.target.style.boxShadow = "none"; }}>
//                 <option value="rounded">Rounded</option>
//                 <option value="dots">Dots</option>
//                 <option value="classy">Classy</option>
//                 <option value="classy-rounded">Classy Rounded</option>
//                 <option value="square">Square</option>
//                 <option value="extra-rounded">Extra Rounded</option>
//               </select>
//             </div>
//             <div>
//               <label style={LABEL}>Corner Style</label>
//               <select value={cornerStyle} onChange={(e) => setCornerStyle(e.target.value)} style={SEL}
//                 onFocus={(e) => { e.target.style.borderColor = "#d94f7e"; e.target.style.boxShadow = "0 0 0 4px rgba(217,79,126,0.1)"; }}
//                 onBlur={(e) => { e.target.style.borderColor = "rgba(217,79,126,0.15)"; e.target.style.boxShadow = "none"; }}>
//                 <option value="extra-rounded">Extra Rounded</option>
//                 <option value="dot">Dot</option>
//                 <option value="square">Square</option>
//               </select>
//             </div>
//             <ColorSwatch label="QR Color" value={qrColor} onChange={setQrColor} />
//             <ColorSwatch label="Background" value={bgColor} onChange={setBgColor} />
//           </div>
//         </motion.div>

//         {/* Logo section */}
//         <motion.div style={CARD} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
//           <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "22px" }}>
//             <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
//               <div style={SECTION_ICON("rgba(74,222,128,0.1)")}>
//                 <Upload size={18} color="#16a34a" />
//               </div>
//               <div>
//                 <div style={{ fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "18px", color: "#1a0a10" }}>Logo</div>
//                 <div style={{ fontSize: "13px", color: "#b8899a", fontWeight: 500, marginTop: "2px" }}>PNG/JPG, transparent bg best</div>
//               </div>
//             </div>
//             {logo && (
//               <button onClick={() => { setLogo(""); setLogoName(""); }} style={{
//                 fontSize: "12px", color: "#d94f7e", fontWeight: 700, background: "rgba(217,79,126,0.08)",
//                 border: "none", cursor: "pointer", padding: "6px 12px", borderRadius: "8px",
//               }}>Remove</button>
//             )}
//           </div>

//           <label style={{
//             display: "flex", alignItems: "center", gap: "18px",
//             padding: "22px", border: "2px dashed rgba(217,79,126,0.25)",
//             borderRadius: "16px", cursor: "pointer", background: "rgba(217,79,126,0.03)",
//             transition: "all 0.2s",
//           }}
//             onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#d94f7e"; e.currentTarget.style.background = "rgba(217,79,126,0.06)"; }}
//             onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(217,79,126,0.25)"; e.currentTarget.style.background = "rgba(217,79,126,0.03)"; }}
//           >
//             {logo
//               ? <img src={logo} alt="logo" style={{ width: "44px", height: "44px", objectFit: "contain", borderRadius: "10px", border: "2px solid rgba(217,79,126,0.2)" }} />
//               : <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(217,79,126,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                   <Upload size={20} color="#d94f7e" />
//                 </div>
//             }
//             <div>
//               <div style={{ fontSize: "14px", fontWeight: 700, color: "#1a0a10" }}>{logoName || "Click to upload logo"}</div>
//               <div style={{ fontSize: "12px", color: "#b8899a", marginTop: "3px" }}>{logo ? "✓ Logo loaded" : "Supports PNG, JPG, SVG"}</div>
//             </div>
//             <input type="file" hidden accept="image/*" onChange={(e) => {
//               const file = e.target.files[0]; if (!file) return;
//               setLogoName(file.name);
//               const reader = new FileReader();
//               reader.onload = () => setLogo(reader.result);
//               reader.readAsDataURL(file);
//             }} />
//           </label>
//         </motion.div>
//       </div>

//       {/* ── RIGHT PREVIEW ── */}
//       <div style={{ position: "sticky", top: "96px" }}>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.15 }}
//           style={{
//             background: "linear-gradient(160deg, #fff 0%, #fdf0f4 100%)",
//             border: "2px solid rgba(217,79,126,0.14)",
//             borderRadius: "30px", padding: "34px",
//             display: "flex", flexDirection: "column", alignItems: "center",
//             boxShadow: "0 20px 60px rgba(217,79,126,0.1), 0 4px 20px rgba(217,79,126,0.07)",
//           }}
//         >
//           {/* Header row */}
//           <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", marginBottom: "28px" }}>
//             <span style={{
//               fontFamily: "Playfair Display, serif", fontSize: "14px", fontWeight: 800,
//               color: "#b8899a", letterSpacing: "0.5px",
//             }}>LIVE PREVIEW</span>
//             <button onClick={handleReset} style={{
//               display: "flex", alignItems: "center", gap: "5px",
//               fontSize: "12px", color: "#b8899a", fontWeight: 700,
//               background: "rgba(217,79,126,0.07)", border: "none", cursor: "pointer",
//               padding: "6px 12px", borderRadius: "8px", transition: "all 0.2s",
//             }}
//               onMouseEnter={(e) => { e.currentTarget.style.color = "#d94f7e"; e.currentTarget.style.background = "rgba(217,79,126,0.12)"; }}
//               onMouseLeave={(e) => { e.currentTarget.style.color = "#b8899a"; e.currentTarget.style.background = "rgba(217,79,126,0.07)"; }}
//             >
//               <RefreshCw size={12} /> Reset
//             </button>
//           </div>

//           {/* QR preview */}
//           <div className="float-card">
//             <div style={{
//               padding: "24px", background: "white", borderRadius: "22px",
//               boxShadow: "0 20px 60px rgba(217,79,126,0.18), 0 4px 20px rgba(0,0,0,0.06)",
//               border: "2px solid rgba(217,79,126,0.1)",
//             }}>
//               <div ref={qrRef} />
//             </div>
//           </div>

//           {/* URL row */}
//           <div style={{
//             marginTop: "26px", width: "100%", padding: "13px 18px",
//             background: "rgba(217,79,126,0.05)", borderRadius: "14px",
//             border: "2px solid rgba(217,79,126,0.1)",
//             display: "flex", alignItems: "center", gap: "10px",
//           }}>
//             <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", flexShrink: 0 }} />
//             <span style={{ fontSize: "13px", color: "#7a4a5a", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
//               {text}
//             </span>
//           </div>

//           {/* Buttons */}
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", width: "100%", marginTop: "16px" }}>
//             <motion.button whileTap={{ scale: 0.96 }} onClick={handleDownload} style={{
//               display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
//               background: downloaded
//                 ? "linear-gradient(135deg, #4ade80, #16a34a)"
//                 : "linear-gradient(135deg, #d94f7e 0%, #b5245a 100%)",
//               border: "none", color: "white", padding: "15px",
//               borderRadius: "16px", fontWeight: 800, fontSize: "14px",
//               fontFamily: "Plus Jakarta Sans, sans-serif", cursor: "pointer",
//               boxShadow: downloaded ? "0 6px 20px rgba(74,222,128,0.35)" : "0 6px 24px rgba(217,79,126,0.38)",
//               transition: "all 0.3s", letterSpacing: "0.2px",
//             }}>
//               {downloaded ? <CheckCircle2 size={18} /> : <Download size={18} />}
//               {downloaded ? "Saved!" : "Download"}
//             </motion.button>

//             <motion.button whileTap={{ scale: 0.96 }} onClick={handleCopy} style={{
//               display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
//               background: copied ? "rgba(74,222,128,0.1)" : "rgba(217,79,126,0.06)",
//               border: `2px solid ${copied ? "rgba(74,222,128,0.4)" : "rgba(217,79,126,0.18)"}`,
//               color: copied ? "#16a34a" : "#d94f7e", padding: "15px",
//               borderRadius: "16px", fontWeight: 800, fontSize: "14px",
//               fontFamily: "Plus Jakarta Sans, sans-serif", cursor: "pointer",
//               transition: "all 0.3s", letterSpacing: "0.2px",
//             }}>
//               {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
//               {copied ? "Copied!" : "Copy URL"}
//             </motion.button>
//           </div>

//           <div style={{ marginTop: "18px", fontSize: "11px", color: "#b8899a", fontWeight: 600, textAlign: "center", letterSpacing: "0.3px" }}>
//             {size} × {size}px · PNG · High correction
//           </div>
//         </motion.div>

//         {/* Quick presets */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           style={{
//             marginTop: "18px", padding: "22px",
//             background: "#fff", border: "2px solid rgba(217,79,126,0.1)",
//             borderRadius: "22px", boxShadow: "0 4px 20px rgba(217,79,126,0.06)",
//           }}
//         >
//           <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "16px" }}>
//             <Sparkles size={14} color="#d94f7e" />
//             <span style={{ fontSize: "12px", fontWeight: 800, color: "#b8899a", letterSpacing: "0.8px", textTransform: "uppercase" }}>
//               Quick Presets
//             </span>
//           </div>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
//             {[
//               { name: "Rose", qr: "#d94f7e", bg: "#ffffff", dot: "rounded" },
//               { name: "Deep", qr: "#b5245a", bg: "#fdf6f3", dot: "dots" },
//               { name: "Ink", qr: "#1a0a10", bg: "#ffffff", dot: "square" },
//             ].map((p) => (
//               <button key={p.name} onClick={() => { setQrColor(p.qr); setBgColor(p.bg); setDotStyle(p.dot); }}
//                 style={{
//                   padding: "12px 8px", borderRadius: "12px", background: "rgba(217,79,126,0.04)",
//                   border: "2px solid rgba(217,79,126,0.1)", cursor: "pointer",
//                   display: "flex", flexDirection: "column", alignItems: "center", gap: "7px",
//                   transition: "all 0.2s",
//                 }}
//                 onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#d94f7e"; e.currentTarget.style.background = "rgba(217,79,126,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
//                 onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(217,79,126,0.1)"; e.currentTarget.style.background = "rgba(217,79,126,0.04)"; e.currentTarget.style.transform = "translateY(0)"; }}
//               >
//                 <div style={{ display: "flex", gap: "4px" }}>
//                   <div style={{ width: "14px", height: "14px", borderRadius: "4px", background: p.qr, border: "1.5px solid rgba(0,0,0,0.08)" }} />
//                   <div style={{ width: "14px", height: "14px", borderRadius: "4px", background: p.bg, border: "1.5px solid rgba(0,0,0,0.08)" }} />
//                 </div>
//                 <span style={{ fontSize: "11px", fontWeight: 800, color: "#7a4a5a" }}>{p.name}</span>
//               </button>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default QRCodeCard;
import { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import { motion } from "framer-motion";
import jsPDF from "jspdf";

import {
  Download,
  Copy,
  Upload,
  Sliders,
  Paintbrush,
  CheckCircle2,
  RefreshCw,
  Sparkles,
} from "lucide-react";

import toast from "react-hot-toast";

const LABEL = {
  display: "block",
  fontSize: "12px",
  fontWeight: 800,
  letterSpacing: "1px",
  color: "#b8899a",
  marginBottom: "9px",
  fontFamily: "Plus Jakarta Sans, sans-serif",
  textTransform: "uppercase",
};

const FIELD = {
  width: "100%",
  background: "#ffffff",
  border: "2px solid rgba(217,79,126,0.15)",
  borderRadius: "14px",
  padding: "14px 18px",
  color: "#1a0a10",
  fontSize: "15px",
  fontWeight: 600,
  fontFamily: "Plus Jakarta Sans, sans-serif",
  outline: "none",
};

const CARD = {
  background: "#ffffff",
  border: "2px solid rgba(217,79,126,0.1)",
  borderRadius: "24px",
  padding: "30px",
  marginBottom: "18px",
  boxShadow: "0 4px 24px rgba(217,79,126,0.06)",
};

const SECTION_ICON = (bg) => ({
  width: "38px",
  height: "38px",
  borderRadius: "12px",
  background: bg,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

function ColorSwatch({ label, value, onChange }) {
  return (
    <div>
      <label style={LABEL}>{label}</label>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          background: "white",
          border: "2px solid rgba(217,79,126,0.15)",
          borderRadius: "14px",
          padding: "10px 14px",
        }}
      >
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: "40px",
            height: "40px",
            border: "none",
            cursor: "pointer",
            background: "transparent",
          }}
        />

        <div>
          <div
            style={{
              fontSize: "13px",
              fontFamily: "monospace",
              fontWeight: 700,
              color: "#1a0a10",
            }}
          >
            {value}
          </div>

          <div
            style={{
              fontSize: "11px",
              color: "#b8899a",
            }}
          >
            Click to change
          </div>
        </div>
      </div>
    </div>
  );
}

function QRCodeCard() {
  const qrRef = useRef(null);
  const qrCode = useRef(null);

  const [text, setText] = useState("https://example.com");
  const [size, setSize] = useState(300);

  const [qrColor, setQrColor] = useState("#d94f7e");
  const [bgColor, setBgColor] = useState("#ffffff");

  const [dotStyle, setDotStyle] = useState("rounded");
  const [cornerStyle, setCornerStyle] = useState("extra-rounded");

  const [errorLevel, setErrorLevel] = useState("H");

  const [logo, setLogo] = useState("");
  const [logoName, setLogoName] = useState("");

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    qrCode.current = new QRCodeStyling({
      width: size,
      height: size,
      data: text,
      image: logo,

      dotsOptions: {
        color: qrColor,
        type: dotStyle,
      },

      backgroundOptions: {
        color: bgColor,
      },

      cornersSquareOptions: {
        type: cornerStyle,
        color: qrColor,
      },

      qrOptions: {
        errorCorrectionLevel: errorLevel,
      },

      imageOptions: {
        crossOrigin: "anonymous",
        margin: 10,
        imageSize: 0.4,
      },
    });

    qrRef.current.innerHTML = "";
    qrCode.current.append(qrRef.current);
  }, []);

  useEffect(() => {
    qrCode.current.update({
      data: text,
      width: size,
      height: size,
      image: logo,

      dotsOptions: {
        color: qrColor,
        type: dotStyle,
      },

      backgroundOptions: {
        color: bgColor,
      },

      cornersSquareOptions: {
        type: cornerStyle,
        color: qrColor,
      },

      qrOptions: {
        errorCorrectionLevel: errorLevel,
      },
    });
  }, [
    text,
    size,
    qrColor,
    bgColor,
    dotStyle,
    cornerStyle,
    logo,
    errorLevel,
  ]);

  const TOAST_STYLE = {
    style: {
      background: "#fff",
      color: "#1a0a10",
      border: "2px solid rgba(217,79,126,0.25)",
      fontWeight: 600,
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);

    setCopied(true);

    toast.success("Copied!", TOAST_STYLE);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleDownload = async (format = "png") => {
    if (format === "pdf") {
      const rawData = await qrCode.current.getRawData("png");

      const blobUrl = URL.createObjectURL(rawData);

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [size + 40, size + 40],
      });

      pdf.addImage(blobUrl, "PNG", 20, 20, size, size);

      pdf.save("qrpro.pdf");

      toast.success("PDF Downloaded!", TOAST_STYLE);

      return;
    }

    qrCode.current.download({
      name: "qrpro",
      extension: format,
    });

    toast.success(
      `${format.toUpperCase()} Downloaded!`,
      TOAST_STYLE
    );
  };

  const handleReset = () => {
    setText("https://example.com");
    setSize(300);

    setQrColor("#d94f7e");
    setBgColor("#ffffff");

    setDotStyle("rounded");
    setCornerStyle("extra-rounded");

    setErrorLevel("H");

    setLogo("");
    setLogoName("");
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 430px",
        gap: "28px",
        alignItems: "start",
      }}
    >
      {/* LEFT */}

      <div>
        {/* CONTENT */}

        <motion.div
          style={CARD}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "26px",
            }}
          >
            <div style={SECTION_ICON("rgba(217,79,126,0.1)")}>
              <Sliders size={18} color="#d94f7e" />
            </div>

            <div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "18px",
                  color: "#1a0a10",
                }}
              >
                Content
              </div>

              <div
                style={{
                  fontSize: "13px",
                  color: "#b8899a",
                }}
              >
                URL or text
              </div>
            </div>
          </div>

          <div style={{ marginBottom: "22px" }}>
            <label style={LABEL}>Destination URL / Text</label>

            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={FIELD}
              placeholder="https://example.com"
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <div>
              <label style={LABEL}>Size - {size}px</label>

              <input
                type="range"
                min="200"
                max="500"
                value={size}
                onChange={(e) =>
                  setSize(Number(e.target.value))
                }
                style={{ width: "100%" }}
              />
            </div>

            <div>
              <label style={LABEL}>Error Correction</label>

              <select
                value={errorLevel}
                onChange={(e) =>
                  setErrorLevel(e.target.value)
                }
                style={FIELD}
              >
                <option value="L">Low</option>
                <option value="M">Medium</option>
                <option value="Q">Quartile</option>
                <option value="H">High</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* DESIGN */}

        <motion.div
          style={CARD}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "26px",
            }}
          >
            <div style={SECTION_ICON("rgba(232,51,109,0.1)")}>
              <Paintbrush size={18} color="#e8336d" />
            </div>

            <div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "18px",
                }}
              >
                Design
              </div>

              <div
                style={{
                  fontSize: "13px",
                  color: "#b8899a",
                }}
              >
                Customize QR
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "18px",
            }}
          >
            <div>
              <label style={LABEL}>Dot Style</label>

              <select
                value={dotStyle}
                onChange={(e) =>
                  setDotStyle(e.target.value)
                }
                style={FIELD}
              >
                <option value="rounded">Rounded</option>
                <option value="dots">Dots</option>
                <option value="classy">Classy</option>
                <option value="square">Square</option>
              </select>
            </div>

            <div>
              <label style={LABEL}>Corner Style</label>

              <select
                value={cornerStyle}
                onChange={(e) =>
                  setCornerStyle(e.target.value)
                }
                style={FIELD}
              >
                <option value="extra-rounded">
                  Extra Rounded
                </option>

                <option value="dot">Dot</option>

                <option value="square">Square</option>
              </select>
            </div>

            <ColorSwatch
              label="QR Color"
              value={qrColor}
              onChange={setQrColor}
            />

            <ColorSwatch
              label="Background"
              value={bgColor}
              onChange={setBgColor}
            />
          </div>
        </motion.div>

        {/* LOGO */}

        <motion.div
          style={CARD}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "22px",
            }}
          >
            <div style={SECTION_ICON("rgba(74,222,128,0.1)")}>
              <Upload size={18} color="#16a34a" />
            </div>

            <div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "18px",
                }}
              >
                Logo Upload
              </div>

              <div
                style={{
                  fontSize: "13px",
                  color: "#b8899a",
                }}
              >
                PNG / JPG / SVG
              </div>
            </div>
          </div>

          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              padding: "22px",
              border: "2px dashed rgba(217,79,126,0.25)",
              borderRadius: "16px",
              cursor: "pointer",
            }}
          >
            <Upload size={22} color="#d94f7e" />

            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                {logoName || "Upload Logo"}
              </div>

              <div
                style={{
                  fontSize: "12px",
                  color: "#b8899a",
                }}
              >
                Supports PNG JPG SVG
              </div>
            </div>

            <input
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];

                if (!file) return;

                setLogoName(file.name);

                const reader = new FileReader();

                reader.onload = () => {
                  setLogo(reader.result);
                };

                reader.readAsDataURL(file);
              }}
            />
          </label>
        </motion.div>
      </div>

      {/* RIGHT */}

      <div
        style={{
          position: "sticky",
          top: "96px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            background:
              "linear-gradient(160deg, #fff 0%, #fdf0f4 100%)",

            border: "2px solid rgba(217,79,126,0.14)",

            borderRadius: "30px",

            padding: "34px",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxShadow:
              "0 20px 60px rgba(217,79,126,0.1)",
          }}
        >
          {/* HEADER */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: 800,
                color: "#b8899a",
              }}
            >
              LIVE PREVIEW
            </span>

            <button
              onClick={handleReset}
              style={{
                border: "none",
                background: "#fdf0f4",
                padding: "8px 12px",
                borderRadius: "10px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <RefreshCw size={14} />
              Reset
            </button>
          </div>

          {/* QR */}

          <div
            style={{
              padding: "24px",
              background: "white",
              borderRadius: "22px",
              boxShadow:
                "0 20px 60px rgba(217,79,126,0.18)",
            }}
          >
            <div ref={qrRef} />
          </div>

          {/* URL */}

          <div
            style={{
              marginTop: "26px",
              width: "100%",
              padding: "13px 18px",
              background: "rgba(217,79,126,0.05)",
              borderRadius: "14px",
              border:
                "2px solid rgba(217,79,126,0.1)",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                color: "#7a4a5a",
                fontWeight: 600,
              }}
            >
              {text}
            </span>
          </div>

          {/* DOWNLOAD BUTTONS */}

          <div
            style={{
              width: "100%",
              marginTop: "18px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            {[
              {
                label: "PNG",
                type: "png",
              },

              {
                label: "JPG",
                type: "jpeg",
              },

              {
                label: "SVG",
                type: "svg",
              },

              {
                label: "PDF",
                type: "pdf",
              },
            ].map((item) => (
              <motion.button
                key={item.type}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  handleDownload(item.type)
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",

                  background:
                    "linear-gradient(135deg, #d94f7e 0%, #b5245a 100%)",

                  border: "none",

                  color: "white",

                  padding: "15px",

                  borderRadius: "16px",

                  fontWeight: 800,

                  cursor: "pointer",

                  boxShadow:
                    "0 6px 24px rgba(217,79,126,0.35)",
                }}
              >
                <Download size={17} />
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* COPY BUTTON */}

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            style={{
              width: "100%",
              marginTop: "14px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",

              background: copied
                ? "#16a34a"
                : "rgba(217,79,126,0.08)",

              border: copied
                ? "none"
                : "2px solid rgba(217,79,126,0.18)",

              color: copied ? "#fff" : "#d94f7e",

              padding: "15px",

              borderRadius: "16px",

              fontWeight: 800,

              cursor: "pointer",
            }}
          >
            {copied ? (
              <CheckCircle2 size={18} />
            ) : (
              <Copy size={18} />
            )}

            {copied ? "Copied!" : "Copy URL"}
          </motion.button>

          {/* FOOTER */}

          <div
            style={{
              marginTop: "18px",
              fontSize: "11px",
              color: "#b8899a",
              fontWeight: 600,
            }}
          >
            {size} × {size}px · PNG · JPG · SVG · PDF
          </div>

          {/* PRESETS */}

          <div
            style={{
              width: "100%",
              marginTop: "26px",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: 800,
                color: "#b8899a",
                marginBottom: "12px",
              }}
            >
              QUICK PRESETS
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "10px",
              }}
            >
              {[
                {
                  name: "Rose",
                  qr: "#d94f7e",
                  bg: "#ffffff",
                },

                {
                  name: "Dark",
                  qr: "#1a0a10",
                  bg: "#ffffff",
                },

                {
                  name: "Green",
                  qr: "#16a34a",
                  bg: "#ffffff",
                },
              ].map((p) => (
                <button
                  key={p.name}
                  onClick={() => {
                    setQrColor(p.qr);
                    setBgColor(p.bg);
                  }}
                  style={{
                    padding: "12px",
                    borderRadius: "12px",
                    border:
                      "2px solid rgba(217,79,126,0.1)",

                    background: "#fff",

                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      background: p.qr,
                      borderRadius: "6px",
                      margin: "0 auto 8px",
                    }}
                  />

                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                    }}
                  >
                    {p.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default QRCodeCard;