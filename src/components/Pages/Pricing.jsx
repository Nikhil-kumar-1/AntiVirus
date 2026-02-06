import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaShoppingCart,
  FaBolt,
  FaCheckCircle,
  FaStar,
  FaLock,
  FaTerminal,
  FaMicrochip,
  FaUserSecret,
  FaServer,
  FaCartPlus,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [lastAdded, setLastAdded] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  // --- CORE CART LOGIC ---
  const addToCartLogic = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("armor_cart")) || [];
    const existingItem = existingCart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({
        id: product.id,
        name: product.name,
        price: parseFloat(product.price.replace(",", "")),
        quantity: 1,
      });
    }

    localStorage.setItem("armor_cart", JSON.stringify(existingCart));
    window.dispatchEvent(new Event("cartUpdated")); // Navbar refresh trigger
  };

  const handleAddToCart = (product) => {
    addToCartLogic(product);
    setLastAdded(product.name);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleBuyNow = (product) => {
    addToCartLogic(product);
    navigate("/cart");
  };

  const products = [
    {
      id: 1,
      name: "Armor Basic",
      price: "499",
      icon: <FaShieldAlt />,
      tag: "Starter",
    },
    { id: 2, name: "Net Guard", price: "999", icon: <FaBolt />, tag: "Fast" },
    {
      id: 3,
      name: "Pro Defense",
      price: "1,599",
      icon: <FaStar />,
      tag: "Popular",
    },
    {
      id: 4,
      name: "Cyber Shield",
      price: "2,499",
      icon: <FaLock />,
      tag: "Secure",
    },
    {
      id: 5,
      name: "Total Armor",
      price: "3,999",
      icon: <FaShieldAlt />,
      tag: "Robust",
    },
    {
      id: 6,
      name: "AI Guardian",
      price: "5,499",
      icon: <FaMicrochip />,
      tag: "Next-Gen",
    },
    {
      id: 7,
      name: "Server Lock",
      price: "7,999",
      icon: <FaServer />,
      tag: "Elite",
    },
    {
      id: 8,
      name: "Family Pack",
      price: "9,999",
      icon: <FaBolt />,
      tag: "Multi-User",
    },
    {
      id: 9,
      name: "Enterprise",
      price: "14,999",
      icon: <FaTerminal />,
      tag: "Business",
    },
    {
      id: 10,
      name: "Ultimate",
      price: "19,999",
      icon: <FaUserSecret />,
      tag: "Invisible",
    },
    {
      id: 11,
      name: "Cloud Sentinel",
      price: "24,999",
      icon: <FaShieldAlt />,
      tag: "Cloud",
    },
    {
      id: 12,
      name: "Neural Link",
      price: "29,999",
      icon: <FaMicrochip />,
      tag: "Quantum",
    },
  ];

  return (
    <div className="bg-white min-h-screen overflow-hidden font-sans">
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] bg-slate-900 text-white px-8 py-4 rounded-sm shadow-2xl border-l-4 border-red-600 flex items-center gap-4"
          >
            <div className="bg-red-600 p-2 rounded-full text-xs">
              <FaCheckCircle />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">
              {lastAdded} Added to Arsenal
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute top-10 right-[-10%] text-gray-50 text-[12rem] lg:text-[20rem] font-black italic select-none pointer-events-none -z-0 uppercase">
          Armor
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div
            className="flex flex-col md:flex-row items-start md:items-end justify-between border-b-2 border-gray-100 pb-12 gap-6"
            data-aos="fade-down"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[2px] w-10 bg-red-600"></span>
                <span className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px]">
                  Protocol Marketplace
                </span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.85] text-slate-900">
                ELITE{" "}
                <span
                  className="text-gray-100"
                  style={{ WebkitTextStroke: "1px #e5e7eb" }}
                >
                  STORE
                </span>
              </h1>
            </div>
            <p className="max-w-xs text-gray-400 font-bold text-[11px] uppercase tracking-widest leading-relaxed text-left md:text-right font-mono">
              // SELECT YOUR DEFENSE LAYER <br /> // 12 ACTIVE PROTOCOLS READY
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-12 mt-10">
          {products.map((product) => (
            <div key={product.id} className="group relative" data-aos="fade-up">
              <div className="relative transform skew-x-0 md:-skew-x-6 transition-all duration-500 group-hover:skew-x-0 group-hover:-translate-y-2">
                <div className="absolute -inset-1 bg-red-600/10 rounded-lg blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative bg-white border-2 border-gray-100 p-8 md:p-10 overflow-hidden shadow-sm group-hover:shadow-2xl group-hover:border-red-600 transition-all">
                  <div className="absolute top-0 right-0 bg-slate-900 text-white font-black uppercase text-[9px] px-8 py-2 md:skew-x-12 translate-x-2 group-hover:bg-red-600 transition-colors">
                    {product.tag}
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                    <div className="w-full md:w-32 h-32 bg-slate-950 transform skew-x-0 md:skew-x-6 group-hover:skew-x-0 transition-all duration-500 flex items-center justify-center relative overflow-hidden shrink-0">
                      <div className="text-4xl text-white group-hover:text-red-50 transition-colors relative z-10">
                        {product.icon}
                      </div>
                      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
                    </div>

                    <div className="flex-1 transform skew-x-0 md:skew-x-6 group-hover:skew-x-0 transition-all duration-500">
                      <div className="flex items-center gap-2 mb-2 font-mono">
                        <FaTerminal className="text-red-600 text-[10px]" />
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">
                          Unit-ID: {product.id.toString().padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-2 text-slate-900 group-hover:text-red-600 transition-colors">
                        {product.name}
                      </h3>

                      <div className="space-y-1 mb-6">
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                          <FaCheckCircle className="text-green-500" /> Advanced
                          Encryption
                        </p>
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                          <FaCheckCircle className="text-green-500" /> Real-time
                          Alert
                        </p>
                      </div>

                      <div className="flex flex-col gap-4 pt-6 border-t border-gray-50">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">
                            Pricing
                          </span>
                          <span className="text-2xl font-black italic text-slate-900">
                            ₹{product.price}
                          </span>
                        </div>

                        {/* DOUBLE BUTTONS */}
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="flex items-center justify-center gap-2 border-2 border-slate-900 text-slate-900 py-3 font-black uppercase text-[9px] tracking-widest hover:bg-slate-900 hover:text-white transition-all active:scale-95"
                          >
                            <FaCartPlus /> Add
                          </button>
                          <button
                            onClick={() => handleBuyNow(product)}
                            className="flex items-center justify-center gap-2 bg-red-600 text-white py-3 font-black uppercase text-[9px] tracking-widest hover:bg-black transition-all active:scale-95 shadow-lg shadow-red-600/20"
                          >
                            <FaShoppingCart /> Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
