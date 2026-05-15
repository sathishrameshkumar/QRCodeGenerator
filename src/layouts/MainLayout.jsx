import Navbar from "../components/Navbar";
import BackgroundAnimation from "../components/BackgroundAnimation";

function MainLayout({ children }) {
  return (
    <div style={{ minHeight: "100vh", background: "#fdf6f3", color: "#1a0a10", position: "relative" }}>
      <BackgroundAnimation />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <main style={{ maxWidth: "1400px", margin: "0 auto", padding: "44px 36px 100px" }}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;