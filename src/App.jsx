import { useState, useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import { Navbar, Hero, Services, About, Contact, Footer } from "./components";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Fluid Cursor Overlay – Transparent Background */}
        <Canvas
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 50,
          }}
          gl={{
            antialias: true,
            alpha: true,
          }}
          onCreated={(state) => {
            state.gl.setClearColor(0x000000, 0);
          }}
        >
          <EffectComposer>
            <Fluid
              showBackground={false}
              intensity={0.6}
              radius={0.35}
              velocityMultiplier={6}
              curl={25}
              colorA="#fe9f06"
              colorB="#ffb340"
              colorC="#e68a00"
            />
          </EffectComposer>
        </Canvas>

        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
