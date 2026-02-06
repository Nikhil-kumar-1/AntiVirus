import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaBug,
  FaChevronDown,
  FaGlobeAmericas,
  FaFingerprint,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const AntivirusHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80",
      title: "BLOCK",
      subtitle: "Threats.",
      tag: "CORE PROTECTION ENGINE",
    },
    {
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80",
      title: "ARMOR",
      subtitle: "Privacy.",
      tag: "ZERO-TRUST ARCHITECTURE",
    },
    {
      image:
        "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW50aXZpcnVzfGVufDB8fDB8fHww",
      title: "STRIKE",
      subtitle: "Offense.",
      tag: "AI-POWERED HEURISTICS",
    },
  ];

  const stats = [
    { value: "99.9%", label: "Detection", icon: <FaShieldAlt /> },
    { value: "24/7", label: "Monitoring", icon: <FaUserShield /> },
    { value: "Encrypted", label: "Tunneling", icon: <FaLock /> },
    { value: "0.1s", label: "Response", icon: <FaFingerprint /> },
  ];

  const threats = [
    "MALWARE PROTECTED",
    "RANSOMWARE BLOCKED",
    "SQL INJECTION STOPPED",
    "ZERO-DAY EXPLOIT NEUTRALIZED",
    "IDENTITY SECURED",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen bg-[#FDFCF8] flex flex-col justify-between overflow-hidden font-sans">
      {/* 1. SIDE VERTICAL DECOR (Cyber Industry Style) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-12 z-20">
        <div className="h-20 w-[1px] bg-slate-200"></div>
        <span className="vertical-text text-[10px] font-black tracking-[0.8em] text-slate-300 uppercase">
          Defense Intelligence 2026
        </span>
        <div className="h-20 w-[1px] bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
      </div>

      {/* 2. MAIN LAYOUT GRID */}
      <div className="container mx-auto px-6 lg:px-20 relative z-10 flex-grow grid lg:grid-cols-12 gap-10 items-center pt-32 pb-16">
        {/* LEFT CONTENT: TEXT */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-red-600"></div>
                <span className="text-red-600 font-bold text-xs tracking-widest uppercase">
                  {slides[currentSlide].tag}
                </span>
              </div>

              <h1 className="text-6xl md:text-[110px] font-black text-slate-900 leading-[0.85] tracking-tighter mb-8">
                {slides[currentSlide].title}
                <br />
                <span className="font-serif italic font-light text-red-600 drop-shadow-sm">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>

              <p className="text-lg text-slate-500 max-w-sm leading-relaxed font-light mb-10 border-l-2 border-slate-200 pl-6">
                Next-generation security infrastructure built to protect the
                modern digital perimeter against evolving threats.
              </p>

              <div className="flex items-center gap-6">
                <button className="bg-slate-900 text-white px-10 py-5 font-black uppercase tracking-widest text-[10px] hover:bg-red-600 transition-all shadow-xl flex items-center gap-4 group">
                  Deploy Shield{" "}
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                    System Scan
                  </span>
                  <FaChevronDown className="text-red-600 animate-bounce mt-1" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="mt-20 flex gap-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`group relative w-12 h-1 bg-slate-200 transition-all duration-500 overflow-hidden ${
                  currentSlide === idx ? "w-24 bg-red-600" : ""
                }`}
              >
                {currentSlide === idx && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="absolute inset-0 bg-white/30"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT: FLOATING IMAGE BOX */}
        <div className="lg:col-span-7 order-1 lg:order-2 relative h-[500px] lg:h-[700px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 z-10 p-4"
            >
              <div className="w-full h-full relative group">
                {/* Cyber Frame Overlays */}
                <div className="absolute -inset-6 border border-slate-200 -z-10 transition-all duration-700"></div>
                <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-red-600"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-slate-900"></div>

                <img
                  src={slides[currentSlide].image}
                  alt="Antivirus Interface"
                  className="w-full h-full object-cover grayscale contrast-125 shadow-[40px_40px_80px_rgba(0,0,0,0.1)]"
                />

                {/* Floating Image Label (Industrial Style) */}
                <div className="absolute -bottom-10 -right-10 bg-white p-8 shadow-2xl border-t-4 border-red-600 hidden md:block">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-red-600 rounded-full animate-ping"></div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                      Security Protocol
                    </p>
                  </div>
                  <p className="text-3xl font-serif italic text-slate-900 tracking-tighter">
                    Active Guard
                  </p>
                  <p className="text-[9px] font-bold text-red-600 uppercase tracking-[0.3em] mt-3">
                    Threat Level: Minimal
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Large Background Text */}
          <div className="absolute -right-10 top-20 text-[15rem] font-black text-slate-100 pointer-events-none select-none -z-10 uppercase">
            Safe
          </div>
        </div>
      </div>

      {/* 3. TRANSITION BAR: DUAL TICKER */}
      <div className="w-full relative z-20">
        <div className="w-full bg-slate-900 py-6 overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-20 items-center"
          >
            {[...threats, ...threats].map((threat, i) => (
              <div key={i} className="flex items-center gap-6">
                <span className="text-5xl font-black text-transparent stroke-text-white opacity-20 uppercase tracking-tighter italic">
                  {threat}
                </span>
                <div className="w-2 h-2 bg-red-600 rotate-45" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM STATS BAR */}
        <div className="bg-white py-12 border-t border-slate-100">
          <div className="container mx-auto px-6 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="flex items-center gap-5 group"
              >
                <div className="w-12 h-12 border-2 border-red-100 group-hover:bg-red-600 group-hover:text-white transition-all flex items-center justify-center text-red-600 text-xl font-black rotate-3">
                  {s.icon}
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 leading-none tracking-tighter">
                    {s.value}
                  </div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-2">
                    {s.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700&display=swap");
        .font-serif {
          font-family: "Playfair Display", serif;
        }
        .vertical-text {
          writing-mode: vertical-rl;
        }
        .stroke-text-white {
          -webkit-text-stroke: 1px #fff;
        }
      `}</style>
    </section>
  );
};

export default AntivirusHero;
