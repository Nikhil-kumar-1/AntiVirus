import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaShieldAlt,
  FaCheckCircle,
  FaLock,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <FaShieldAlt />,
      title: "Security HQ",
      details: ["Cyber Defense Tower", "Cyberabad, USA 500081"],
    },
    {
      icon: <FaPhoneAlt />,
      title: "24/7 Helpline",
      details: ["1800-ARMOR-SEC", "+91 123456789"],
    },
    {
      icon: <FaEnvelope />,
      title: "Technical Support",
      details: ["support@armor.com", "threat-report@armor.com"],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <section className="relative bg-[#FDFCF8] overflow-hidden font-sans">
      {/* --- 1. PREMIUM SECTION DIVIDER --- */}
      <div className="relative w-full h-56 bg-[#0f172a] flex items-center justify-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-center z-10"
        >
          <span className="text-[12px] font-black text-red-500 uppercase tracking-[0.6em] mb-3 block">
            Threat Response Unit
          </span>
          <h2 className="text-4xl md:text-6xl font-serif italic text-white tracking-tighter">
            Secure Your Perimeter
          </h2>
        </motion.div>

        {/* Subtle Grid Animation for Cyber feel */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 -mt-12 pb-32">
        <div className="grid lg:grid-cols-12 gap-0 shadow-[0_50px_100px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-200">
          {/* --- 2. LEFT: CONTACT FORM (Slate-900 / Dark) --- */}
          <div className="lg:col-span-8 bg-[#0f172a] p-8 md:p-16 border-r border-slate-800">
            <div className="mb-12">
              <h3 className="text-3xl font-serif text-white mb-4 italic flex items-center gap-3">
                Request a Security Audit.
              </h3>
              <p className="text-slate-400 font-light max-w-md text-sm leading-relaxed">
                Aapke system mein virus ya malware ka khatra hai? Hamare experts
                15 minutes ke andar response dispatch karte hain.
              </p>
            </div>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="mb-8 p-6 bg-red-600 text-white flex items-center gap-4 rounded-sm shadow-xl"
                >
                  <FaCheckCircle size={24} />
                  <div>
                    <p className="font-bold uppercase text-[10px] tracking-widest">
                      Signal Received
                    </p>
                    <p className="text-xs opacity-90">
                      Hamari threat hunting team aapse jald hi contact karegi.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-x-12 gap-y-10"
            >
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full bg-transparent border-b border-slate-700 py-4 text-white focus:border-red-600 outline-none transition-all placeholder:text-slate-600 font-medium"
                />
              </div>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Secure Email Address"
                  required
                  className="w-full bg-transparent border-b border-slate-700 py-4 text-white focus:border-red-600 outline-none transition-all placeholder:text-slate-600 font-medium"
                />
              </div>
              <div className="relative group">
                <input
                  type="text"
                  placeholder="System / Device Model"
                  className="w-full bg-transparent border-b border-slate-700 py-4 text-white focus:border-red-600 outline-none transition-all placeholder:text-slate-600 font-medium"
                />
              </div>
              <div className="relative group">
                <input
                  type="tel"
                  placeholder="Emergency Phone"
                  className="w-full bg-transparent border-b border-slate-700 py-4 text-white focus:border-red-600 outline-none transition-all placeholder:text-slate-600 font-medium"
                />
              </div>
              <div className="md:col-span-2 relative group">
                <textarea
                  rows="3"
                  placeholder="Explain the security issue..."
                  required
                  className="w-full bg-transparent border-b border-slate-700 py-4 text-white focus:border-red-600 outline-none transition-all resize-none placeholder:text-slate-600 font-medium"
                />
              </div>

              <div className="md:col-span-2 mt-8 flex flex-col md:flex-row items-center justify-between gap-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-16 py-5 bg-red-600 text-white font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-slate-900 transition-all duration-500"
                >
                  {isSubmitting ? "Scanning..." : "Deploy Support"}
                </button>
                <div className="flex gap-8 items-center">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
                    Connect —
                  </p>
                  <FaWhatsapp className="text-slate-500 hover:text-red-500 cursor-pointer text-xl transition-colors" />
                  <FaLinkedin className="text-slate-500 hover:text-red-500 cursor-pointer text-xl transition-colors" />
                  <FaInstagram className="text-slate-500 hover:text-red-500 cursor-pointer text-xl transition-colors" />
                </div>
              </div>
            </form>
          </div>

          {/* --- 3. RIGHT: CONTACT INFO (White / Clean) --- */}
          <div className="lg:col-span-4 bg-white p-8 md:p-16 flex flex-col justify-between relative">
            <div className="space-y-16 relative z-10">
              {contactInfo.map((info, i) => (
                <div key={i} className="group">
                  <div className="text-red-600 text-2xl mb-6 group-hover:translate-x-2 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">
                    {info.title}
                  </h4>
                  {info.details.map((text, j) => (
                    <p
                      key={j}
                      className="text-slate-900 font-serif italic text-xl leading-tight mb-1"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-20 pt-10 border-t border-slate-100 relative z-10">
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center rounded-sm group-hover:bg-red-600 transition-colors duration-500">
                  <FaLock size={16} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                    Response Status
                  </p>
                  <p className="text-xs font-black text-slate-900 uppercase">
                    All Systems Operational
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle side watermark */}
            <div className="absolute bottom-10 right-[-20px] text-slate-50 text-7xl font-black rotate-90 select-none">
              ARMOR
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Texture Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')`,
        }}
      />
    </section>
  );
};

export default ContactSection;
