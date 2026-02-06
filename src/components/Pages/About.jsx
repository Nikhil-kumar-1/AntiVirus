import React, { useEffect } from "react";
import {
  FaShieldAlt,
  FaUserShield,
  FaGlobe,
  FaClock,
  FaPhoneAlt,
  FaCheckCircle,
  FaTerminal,
  FaEnvelope,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const stats = [
    { label: "Active Users", value: "10M+", icon: <FaGlobe /> },
    { label: "Threats Blocked", value: "500M+", icon: <FaShieldAlt /> },
    { label: "Response Time", value: "<15 Min", icon: <FaClock /> },
    { label: "Expert Team", value: "250+", icon: <FaUserShield /> },
  ];

  return (
    <div className="bg-white min-h-screen overflow-hidden font-sans">
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 bg-white">
        {/* Background Watermark */}
        <div className="absolute top-10 right-[-10%] text-gray-50 text-[10rem] lg:text-[20rem] font-black italic select-none pointer-events-none -z-0 uppercase">
          LEGACY
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div
            className="mb-16 flex flex-col md:flex-row items-start md:items-end justify-between border-b-2 border-gray-100 pb-12 gap-6"
            data-aos="fade-down"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[2px] w-10 bg-red-600"></span>
                <span className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px]">
                  Established 2024
                </span>
              </div>
              <h1 className="text-5xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.85] text-slate-900">
                OUR <br />
                <span
                  className="text-gray-100"
                  style={{ WebkitTextStroke: "1px #e5e7eb" }}
                >
                  MISSION
                </span>
              </h1>
            </div>
            <p className="max-w-xs text-gray-400 font-bold text-[11px] uppercase tracking-widest leading-relaxed text-left md:text-right font-mono">
              // UNIT_TYPE: DEFENSIVE_CORE <br />
              // PROTOCOL: ABSOLUTE_INTEGRITY
            </p>
          </div>
        </div>
      </section>

      {/* --- 2. STATS SECTION (Slanted Parallelograms) --- */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative transform skew-x-0 md:-skew-x-12 transition-all duration-500 group"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="bg-slate-950 p-10 border-r-4 border-red-600 group-hover:bg-red-600 transition-colors duration-500">
                <div className="transform skew-x-0 md:skew-x-12 flex flex-col items-center">
                  <div className="text-white text-3xl mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl font-black text-white italic tracking-tighter mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-white">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. STORY SECTION --- */}
      <section className="py-24 container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group" data-aos="zoom-in">
            <div className="absolute -inset-4 bg-red-600/10 skew-x-2 md:-skew-x-6 rounded-lg blur-2xl"></div>
            <div className="relative transform skew-x-0 md:-skew-x-6 overflow-hidden border-2 border-gray-100 p-2 bg-white">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                alt="Cyber Security Operations"
                className="w-full h-full object-cover transform md:skew-x-6 scale-110"
              />
              <div className="absolute bottom-0 left-0 bg-red-600 text-white px-8 py-4 font-black uppercase italic tracking-widest text-xs">
                Zero Breach Record
              </div>
            </div>
          </div>

          <div className="space-y-10" data-aos="fade-left">
            <div>
              <span className="text-red-600 font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">
                The Architecture
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-[0.95]">
                Innovation with <br />{" "}
                <span className="text-red-600 italic">Total Integrity.</span>
              </h2>
            </div>

            <p className="text-slate-500 text-sm md:text-lg font-bold leading-relaxed border-l-4 border-gray-100 pl-6 italic">
              "Armor began with a simple mission: To make high-end cyber
              security accessible to everyone. Our AI-driven protocols ensure we
              stay two steps ahead of global digital threats at all times."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Military Encryption",
                "AI Threat Hunting",
                "Phishing Prevention",
                "Dark Web Monitor",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 border-2 border-gray-50 hover:border-red-600 transition-all group"
                >
                  <FaTerminal className="text-red-600 group-hover:animate-pulse" />
                  <span className="font-black text-slate-800 text-[10px] uppercase tracking-widest">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. VISION & MISSION --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Our Mission",
                text: "To empower individuals and businesses to navigate the digital world without fear. We build unbreakable boundaries where security is no longer a question but a certainty.",
              },
              {
                title: "Our Vision",
                text: "To eliminate cybercrime by 99% globally, creating a future where digital privacy is recognized not just as a service, but as a fundamental human right.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative group overflow-hidden"
                data-aos={i === 0 ? "fade-right" : "fade-left"}
              >
                <div className="bg-white p-12 md:p-16 transform skew-x-0 md:-skew-x-6 border-2 border-white group-hover:border-red-600 transition-all duration-500 shadow-xl">
                  <div className="transform skew-x-0 md:skew-x-6">
                    <h3 className="text-3xl font-black italic uppercase mb-6 flex items-center gap-4">
                      <span className="w-10 h-[2px] bg-red-600"></span>{" "}
                      {item.title}
                    </h3>
                    <p className="text-gray-500 font-bold text-sm md:text-lg leading-relaxed">
                      "{item.text}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. FINAL CTA --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="relative group" data-aos="zoom-in">
          <div className="absolute -inset-2 bg-red-600 skew-x-0 md:skew-x-2 opacity-10 group-hover:opacity-20 transition-all"></div>
          <div className="relative bg-slate-950 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

            <div className="relative z-10 text-white text-center md:text-left">
              <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-none mb-4">
                READY TO <br /> <span className="text-red-600">UPGRADE?</span>
              </h2>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] font-mono flex items-center justify-center md:justify-start gap-2">
                  <FaPhoneAlt className="text-red-600" /> Support: +1 (800)
                  ARMOR-SAFE
                </p>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] font-mono flex items-center justify-center md:justify-start gap-2">
                  <FaEnvelope className="text-red-600" /> Enterprise:
                  secure@armor-shield.com
                </p>
              </div>
            </div>

            <button className="relative z-10 bg-white text-black px-12 py-6 font-black uppercase tracking-[0.2em] text-sm hover:bg-red-600 hover:text-white transition-all shadow-2xl active:scale-95">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
