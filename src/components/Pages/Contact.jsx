import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";
import TrustAndContact from "../Home/TrustAndContact";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* --- 1. SLEEK HERO SECTION (Height Reduced for Better View) --- */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
        <div className="absolute inset-0 z-0">
          {/* Subtle Cyber Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-white"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-red-500 text-[9px] font-black uppercase tracking-[0.2em]">
              24/7 Elite Support System
            </span>
          </motion.div>

          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter"
          >
            Get In <span className="text-red-600 italic">Touch.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 mt-4 max-w-lg mx-auto font-medium text-sm leading-relaxed"
          >
            Security consultation ya technical help chahiye? Hamari expert team
            aapse connect karne ke liye taiyar hai.
          </motion.p>
        </div>
      </section>

      {/* --- 2. MAIN CONTENT GRID (Cleaner Spacing) --- */}
      <section className="pb-24 container mx-auto px-6 lg:px-20 relative z-20 -mt-16">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* LEFT: Info Cards (3 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            {[
              {
                icon: <FaPhoneAlt />,
                label: "Priority Line",
                val: "+91 123456789",
                color: "bg-red-600",
                sub: "Available 10AM - 8PM",
              },
              {
                icon: <FaEnvelope />,
                label: "Official Email",
                val: "support@armor.com",
                color: "bg-slate-900",
                sub: "Response within 15 mins",
              },
              {
                icon: <FaMapMarkerAlt />,
                label: "Headquarters",
                val: "Newyork , USA",
                color: "bg-blue-600",
                sub: "USA's Tech Hub",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 8 }}
                className="bg-white p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 flex items-center gap-5 group transition-all"
              >
                <div
                  className={`w-12 h-12 ${item.color} text-white rounded-2xl flex items-center justify-center text-lg shrink-0 shadow-lg shadow-opacity-20`}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                    {item.label}
                  </p>
                  <p className="text-sm font-black text-slate-900">
                    {item.val}
                  </p>
                  <p className="text-[9px] text-slate-400 font-medium">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Shield Trust Badge */}
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200 text-center">
              <FaShieldAlt className="text-red-600 text-3xl mx-auto mb-4" />
              <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-2">
                End-to-End Encrypted
              </h4>
              <p className="text-[10px] text-slate-500 font-medium leading-relaxed">
                Aapka message hamare secure servers par encrypted rehta hai. We
                value your privacy.
              </p>
            </div>
          </div>

          {/* RIGHT: The Form (9 Columns) */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.06)] border border-slate-50 overflow-hidden"
            >
              <TrustAndContact />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 3. MINIMAL LIVE CHAT CALLOUT --- */}
      <section className="pb-32 container mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Glassy Overlay Circle */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>

          <div className="flex items-center gap-6 relative z-10">
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-2xl text-red-600 border border-white/10">
              <FaHeadset />
            </div>
            <div className="text-center lg:text-left">
              <h4 className="text-xl font-black text-white uppercase italic">
                Instant Response?
              </h4>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                Connect with our Live Security Agent now
              </p>
            </div>
          </div>

          <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-red-600 hover:text-white transition-all flex items-center gap-3 relative z-10 group">
            Start Chatting
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
