import { Routes, Route } from "react-router-dom";

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
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
        <div className="absolute -top-32 -left-16 w-72 h-72 bg-emerald-500/30 rounded-full blur-3xl" />
        <div className="absolute top-24 -right-24 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <Navbar />

      <Routes>
        {/* 🏠 HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <main className="relative max-w-6xl mx-auto px-4 pt-24 pb-16 space-y-20">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <CPSection />
                <Certificates /> {/* limited certificates */}
                <Contact />
              </main>
              <Footer />
            </>
          }
        />

        {/* 📄 ALL CERTIFICATES PAGE */}
        <Route
          path="/certificates"
          element={
            <>
              <CertificatesPage />
              <Footer />
            </>
          }
        />
      </Routes>

      {/* 🤖 MINI AI ASSISTANT */}
      <MiniAssistant />
    </div>
  );
}

export default App;
