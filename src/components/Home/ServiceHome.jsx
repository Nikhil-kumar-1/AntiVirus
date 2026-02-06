import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Navigation ke liye
import {
  FaShieldAlt,
  FaBug,
  FaLock,
  FaArrowRight,
  FaTerminal,
  FaUserSecret,
  FaCartPlus,
  FaShoppingCart,
  FaChevronRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  // --- CART LOGIC ---
  const handleAddToCart = (item, redirect = false) => {
    const existingCart = JSON.parse(localStorage.getItem("armor_cart")) || [];
    const itemIndex = existingCart.findIndex(
      (cartItem) => cartItem.id === item.id,
    );

    // Price string se number nikalne ke liye (e.g., "₹1,499" -> 1499)
    const priceNum = parseInt(item.price.replace(/[₹,]/g, ""));

    if (itemIndex > -1) {
      existingCart[itemIndex].quantity += 1;
    } else {
      existingCart.push({
        id: item.id,
        name: item.title,
        price: priceNum,
        quantity: 1,
      });
    }

    localStorage.setItem("armor_cart", JSON.stringify(existingCart));
    window.dispatchEvent(new Event("cartUpdated")); // Sync Navbar

    if (redirect) {
      navigate("/cart");
    } else {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const protocols = [
    {
      id: "S1", // Unique ID string
      title: "Real-time Shield",
      desc: "Live monitoring of every packet entering your system. 24/7 AI-driven surveillance.",
      status: "Active",
      price: "₹1,499",
      icon: <FaShieldAlt />,
      tags: ["AI Detection", "Cloud Sync"],
    },
    {
      id: "S2",
      title: "Malware Decryptor",
      desc: "Deep core cleaning technology. Instant removal of trojans and ransomware.",
      status: "Level 9",
      price: "₹2,199",
      icon: <FaBug />,
      tags: ["Deep Scan", "Auto-Heal"],
    },
    {
      id: "S3",
      title: "Privacy Tunnel",
      desc: "Military grade AES-256 encryption. Stay invisible in the digital wilderness.",
      status: "Encrypted",
      price: "₹999",
      icon: <FaLock />,
      tags: ["Zero-Logs", "Kill-Switch"],
    },
    {
      id: "S4",
      title: "Dark Web Scan",
      desc: "Advanced botnets crawling the underground web to alert you of data leaks.",
      status: "High Alert",
      price: "₹3,499",
      icon: <FaUserSecret />,
      tags: ["Identity", "Alert-X"],
    },
  ];

  return (
    <div className="min-h-screen py-16 md:py-24 px-4 md:px-6 bg-white text-black relative overflow-hidden font-sans">
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-white px-6 py-3 border-l-4 border-red-600 shadow-2xl flex items-center gap-3"
          >
            <FaCartPlus className="text-red-500" />
            <span className="text-[10px] font-black uppercase tracking-widest">
              Protocol Uploaded to Arsenal
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* --- HEADER --- */}
        <div
          className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-end justify-between border-b-2 border-gray-100 pb-12 gap-6"
          data-aos="fade-down"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-10 bg-red-600"></span>
              <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">
                Defensive Modules
              </span>
            </div>
            <h1 className="text-5xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.9]">
              CORE{" "}
              <span
                className="text-gray-100"
                style={{ WebkitTextStroke: "1px #e5e7eb" }}
              >
                UNITS
              </span>
            </h1>
          </div>
          <p className="max-w-xs text-gray-400 font-bold text-[10px] uppercase tracking-widest font-mono">
            // SYSTEM_SECURE_BUILD_V2
          </p>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 md:gap-y-20 gap-x-12 mt-10">
          {protocols.map((service) => (
            <div key={service.id} className="group relative" data-aos="fade-up">
              <div className="relative transform skew-x-0 md:-skew-x-6 transition-all duration-500 group-hover:skew-x-0 group-hover:-translate-y-2 bg-white border-2 border-gray-100 p-6 md:p-10 shadow-sm group-hover:shadow-2xl group-hover:border-red-600">
                <div className="absolute top-0 right-0 bg-black text-white font-black uppercase text-[9px] px-6 py-2 z-20 group-hover:bg-red-600">
                  {service.status}
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-40 h-40 bg-slate-950 flex items-center justify-center relative overflow-hidden shrink-0">
                    <div className="text-5xl text-white group-hover:text-red-500 transition-colors z-10">
                      {service.icon}
                    </div>
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter mb-2 group-hover:text-red-600">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-xs font-bold leading-relaxed mb-6 line-clamp-2">
                      {service.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-[8px] font-black uppercase px-2 py-1 text-gray-400 tracking-widest"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-gray-100">
                      <div className="flex flex-col">
                        <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">
                          Yearly Access
                        </span>
                        <span className="text-2xl font-black italic">
                          {service.price}
                        </span>
                      </div>

                      {/* BUTTON GROUP */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleAddToCart(service, false)}
                          className="flex-1 bg-slate-100 text-slate-900 p-3 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all active:scale-90"
                        >
                          <FaCartPlus />
                        </button>
                        <button
                          onClick={() => handleAddToCart(service, true)}
                          className="flex-[4] bg-red-600 text-white px-6 py-3 font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 hover:bg-black transition-all active:scale-95 shadow-lg shadow-red-600/20"
                        >
                          Buy <FaArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- NEW: EXPLORE MORE SECTION --- */}
        <div className="mt-24 text-center" data-aos="fade-up">
          <button
            onClick={() => navigate("/pricing")}
            className="group relative inline-flex flex-col items-center gap-4"
          >
            <span className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] group-hover:text-red-600 transition-colors">
              Need More Firepower?
            </span>
            <div className="flex items-center gap-6 bg-slate-50 border-2 border-slate-100 px-10 py-6 group-hover:border-red-600 group-hover:bg-white transition-all">
              <span className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter">
                Explore Full <span className="text-red-600">Arsenal</span>
              </span>
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white group-hover:translate-x-2 transition-transform">
                <FaChevronRight />
              </div>
            </div>
          </button>
        </div>

        {/* --- CONTACT CTA --- */}
        <div className="mt-32 relative group" data-aos="zoom-in">
          <div className="relative bg-black p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
            <h2 className="text-4xl md:text-7xl font-black uppercase italic text-white text-center md:text-left">
              CUSTOM <br />{" "}
              <span className="text-red-600 font-black">SOLUTIONS?</span>
            </h2>
            <button className="bg-white text-black px-12 py-6 font-black uppercase tracking-[0.2em] text-sm hover:bg-red-600 hover:text-white transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
