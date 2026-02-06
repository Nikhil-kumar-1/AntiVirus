import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLock,
  FaBolt,
  FaGlobe,
  FaTerminal,
  FaCodeBranch,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const highlights = [
    {
      id: 1,
      icon: <FaShieldAlt />,
      title: "Military Grade",
      desc: "Top-tier encryption standard trusted by global financial institutions.",
      tag: "AES-256",
    },
    {
      id: 2,
      icon: <FaBolt />,
      title: "Ultra Fast",
      desc: "Zero system lag with our proprietary light-weight kernel scanning.",
      tag: "0.01ms",
    },
    {
      id: 3,
      icon: <FaLock />,
      title: "Privacy First",
      desc: "Strict zero-log policy. Your data remains on your hardware, always.",
      tag: "NON-CUSTODIAL",
    },
    {
      id: 4,
      icon: <FaGlobe />,
      title: "Global Mesh",
      desc: "Real-time threat intelligence synced across 50+ global nodes.",
      tag: "NETWORK",
    },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden font-sans">
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-[5%] text-slate-50 text-[15rem] font-black italic select-none -z-0">
          CORE
        </div>
        <div className="absolute bottom-10 right-[5%] text-slate-50 text-[15rem] font-black italic select-none -z-0">
          EDGE
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8 border-b-2 border-slate-100 pb-12">
          <div data-aos="fade-right">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-red-600"></span>
              <span className="text-red-600 font-black text-[10px] tracking-[0.5em] uppercase">
                Defense Architecture
              </span>
            </div>
            <h2 className="text-4xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter uppercase">
              Beyond <br />
              <span
                className="text-gray-200 italic"
                style={{ WebkitTextStroke: "1px #e5e7eb" }}
              >
                Protection.
              </span>
            </h2>
          </div>

          <div className="lg:text-right max-w-sm" data-aos="fade-left">
            <p className="text-slate-500 font-bold text-sm uppercase leading-relaxed mb-4">
              // We've reimagined security as a digital exoskeleton. Not just
              blocking threats, but fortifying your entire ecosystem.
            </p>
            <div className="inline-flex items-center gap-4 text-red-600 font-mono text-[10px] font-black tracking-widest bg-red-50 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
              SYSTEMS_ACTIVE: 100%
            </div>
          </div>
        </div>

        {/* --- GRID SECTION --- */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Main Feature Card (Left Wide) */}
          <div
            className="lg:col-span-7 group relative overflow-hidden"
            data-aos="zoom-in"
          >
            <div className="absolute inset-0 bg-slate-950 transform -skew-x-0 md:-skew-x-2 group-hover:bg-red-600 transition-colors duration-500"></div>
            <div className="relative p-10 md:p-16 h-full flex flex-col justify-between text-white">
              <div className="flex justify-between items-start mb-12">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                  <FaShieldAlt />
                </div>
                <span className="font-mono text-[10px] tracking-widest opacity-40 uppercase">
                  UID: ARMOR-01
                </span>
              </div>
              <div>
                <h3 className="text-4xl md:text-6xl font-black uppercase italic mb-6 tracking-tighter">
                  Military Grade <br /> Standard
                </h3>
                <p className="text-slate-400 group-hover:text-white transition-colors max-w-md font-medium">
                  Utilizing AES-256 bit encryption and decentralized key
                  management to ensure your data is invisible to unauthorized
                  entities.
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Stack (Right) */}
          <div className="lg:col-span-5 grid gap-6">
            {highlights.slice(1).map((item, idx) => (
              <div
                key={item.id}
                className="group relative overflow-hidden transform transition-all hover:-translate-y-1"
                data-aos="fade-left"
                data-aos-delay={idx * 150}
              >
                <div className="absolute inset-0 border-2 border-slate-100 group-hover:border-red-600 transition-colors"></div>
                <div className="relative p-8 flex items-center gap-8 bg-white group-hover:bg-slate-50 transition-colors">
                  <div className="text-3xl text-slate-300 group-hover:text-red-600 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter">
                        {item.title}
                      </h4>
                      <span className="text-[8px] bg-slate-100 px-2 py-0.5 font-mono font-bold text-slate-400 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-tight">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- INTERACTIVE FOOTER CTA --- */}
        <div
          className="mt-12 flex flex-wrap items-center gap-6"
          data-aos="fade-up"
        >
          <button className="bg-red-600 text-white px-10 py-5 font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-4 hover:bg-slate-950 transition-all group shadow-[0_20px_40px_rgba(220,38,38,0.3)]">
            Full Security Audit{" "}
            <FaTerminal className="group-hover:translate-x-2 transition-transform" />
          </button>

          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm"
              >
                <img
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="User"
                />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-4 border-white bg-red-600 text-white flex items-center justify-center text-[8px] font-black">
              +10M
            </div>
          </div>

          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            Trusted by the world's most{" "}
            <span className="text-slate-900 underline decoration-red-600 underline-offset-4">
              secure enterprises.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
