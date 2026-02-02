import { Routes, Route } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CPSection from "./components/CPSection";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MiniAssistant from "./components/MiniAssistant";
import CertificatesPage from "./pages/CertificatesPage";

function App() {
  // Scroll progress bar (Top par dikhega)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-emerald-500/30">
      {/* 🚀 3D Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* 🌌 Modern 3D Mesh Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Subtle Grid Effect for Depth */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 space-y-32">
                  {/* Wrap each section in a motion div for scroll-reveal 3D effect */}
                  <SectionWrapper><Hero /></SectionWrapper>
                  <SectionWrapper><About /></SectionWrapper>
                  <SectionWrapper><Skills /></SectionWrapper>
                  <SectionWrapper><Projects /></SectionWrapper>
                  <SectionWrapper><CPSection /></SectionWrapper>
                  <SectionWrapper><Certificates /></SectionWrapper>
                  <SectionWrapper><Contact /></SectionWrapper>
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/certificates"
            element={
              <>
                <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
                  <CertificatesPage />
                </main>
                <Footer />
              </>
            }
          />
        </Routes>

        <MiniAssistant />
      </div>
    </div>
  );
}

// 🪄 Scroll-Reveal Animation Wrapper
const SectionWrapper = ({ children }) => (
  <motion.section
    initial={{ opacity: 0, y: 50, rotateX: 5 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.section>
);

export default App;