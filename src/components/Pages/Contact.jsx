import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import TrustAndContact from "../Home/TrustAndContact";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* --- 1. FIXED HERO SECTION --- */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-white pt-32 pb-20">
        {/* Background Decor */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Giant Watermark - Now properly z-indexed and responsive */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.03 }}
            className="absolute top-1/2 -translate-y-1/2 left-[-5%] text-[15rem] lg:text-[20rem] font-black italic select-none text-slate-900 hidden lg:block -z-10"
          >
            CONTACT
          </motion.div>

          {/* Animated Scanning Effect */}
          <motion.div
            animate={{ y: [0, 600, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/30 to-transparent"
          ></motion.div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Red Accent Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="h-[2px] w-8 md:w-12 bg-red-600"></span>
              <span className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] md:text-[12px]">
                Establish Secure Connection
              </span>
              <span className="h-[2px] w-8 md:w-12 bg-red-600"></span>
            </motion.div>

            {/* Main Heading - Improved Spacing to prevent collapse */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col gap-2 md:gap-4 mb-10"
            >
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase italic tracking-tighter text-slate-950 leading-[1.1] md:leading-[0.9]">
                GET IN
              </h1>
              <h1
                className="text-5xl md:text-8xl lg:text-9xl font-black uppercase italic tracking-tighter text-white leading-[1.1] md:leading-[0.9]"
                style={{ WebkitTextStroke: "2px #0f172a" }}
              >
                TOUCH
              </h1>
            </motion.div>

            {/* Subtext Box */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl bg-white/80 backdrop-blur-md p-6 rounded-2xl border-l-4 border-red-600 shadow-xl shadow-slate-100"
            >
              <p className="text-slate-600 font-bold uppercase tracking-widest text-[10px] md:text-xs leading-loose">
                Our elite security operations center is ready to safeguard your
                infrastructure. Deploy your inquiry below for high-priority
                engineering support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 2. MAIN CONTENT GRID --- */}
      <section className="pb-24 container mx-auto px-4 md:px-6 lg:px-20 relative z-20 -mt-10 lg:-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: Info Cards */}
          <div
            className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1"
            data-aos="fade-up"
          >
            {[
              {
                icon: <FaPhoneAlt />,
                label: "Priority Hotline",
                val: "+91 6299208794",
                color: "bg-red-600",
                sub: "Mon - Sat | 10:00 - 20:00 IST",
              },
              {
                icon: <FaEnvelope />,
                label: "Secure Email",
                val: "secure@armor.io",
                color: "bg-slate-950",
                sub: "Avg. Response: 15 Mins",
              },
              {
                icon: <FaMapMarkerAlt />,
                label: "Global HQ",
                val: "Silicon Valley, CA",
                color: "bg-blue-600",
                sub: "Innovation & Ops Hub",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="bg-white p-6 rounded-[2rem] shadow-lg border border-slate-50 flex items-center gap-5 group transition-all"
              >
                <div
                  className={`w-14 h-14 ${item.color} text-white rounded-2xl flex items-center justify-center text-xl shrink-0`}
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 truncate">
                    {item.label}
                  </p>
                  <p className="text-sm font-black text-slate-900 mb-1 break-words">
                    {item.val}
                  </p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="p-8 bg-slate-950 rounded-[2.5rem] text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
              <FaShieldAlt className="text-red-600 text-4xl mx-auto mb-4" />
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-2">
                Protocol: E2E Encrypted
              </h4>
              <p className="text-[10px] text-slate-400 font-medium leading-relaxed uppercase">
                Secured via Military-Grade <br /> AES-256 Encryption.
              </p>
            </div>
          </div>

          {/* RIGHT: Deployment Form */}
          <div className="lg:col-span-8 order-1 lg:order-2" data-aos="fade-up">
            <div className="bg-white rounded-[2.5rem] md:rounded-[4rem] shadow-2xl border border-slate-50 overflow-hidden p-2 md:p-4">
              <TrustAndContact />
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. LIVE CHAT CALLOUT --- */}
      <section className="pb-32 container mx-auto px-4 md:px-6">
        <div className="bg-slate-950 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-red-600/10 rounded-full blur-[100px]"></div>

          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10 text-center md:text-left">
            <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center text-4xl text-red-600 border border-white/10 shadow-2xl">
              <FaHeadset />
            </div>
            <div>
              <h4 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter">
                Need an Instant <span className="text-red-600">Response?</span>
              </h4>
              <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mt-2">
                Connect with a Cyber-Intelligence Officer
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full lg:w-auto bg-white text-slate-950 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-4 relative z-10 group"
          >
            Launch Live Chat
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
