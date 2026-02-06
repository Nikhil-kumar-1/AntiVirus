import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaShieldAlt,
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaLock,
  FaUserShield,
  FaShoppingCart, // Added Cart Icon
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Function to calculate total items from localStorage
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("armor_cart")) || [];
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalItems);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Initial count
    updateCartCount();

    // Listen for custom "cartUpdated" event from Services/Pricing pages
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/pricing", label: "Pricing" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-slate-100"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          {/* 1. LOGO AREA */}
          <Link
            to="/"
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative">
              <motion.div
                animate={scrolled ? {} : { scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`w-10 h-10 border-2 transition-all duration-500 flex items-center justify-center rounded-lg ${
                  scrolled
                    ? "border-red-600 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                    : "border-slate-800 bg-slate-900"
                }`}
              >
                <FaShieldAlt
                  className={`text-xl transition-all ${
                    scrolled ? "text-white" : "text-red-600"
                  }`}
                />
              </motion.div>
              {!scrolled && (
                <div className="absolute inset-0 border-2 border-red-600 rounded-lg animate-ping opacity-20"></div>
              )}
            </div>
            <div className="flex flex-col text-left">
              <span
                className={`text-xl font-black tracking-tighter leading-none uppercase ${scrolled ? "text-slate-900" : "text-slate-900"}`}
              >
                CYBER<span className="text-red-600 text-2xl">.</span>ARMOR
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-slate-400">
                Threat Defense v3.0
              </span>
            </div>
          </Link>

          {/* 2. DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `relative group py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${
                    isActive
                      ? "text-red-600"
                      : "text-slate-600 hover:text-red-600"
                  }`
                }
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#ef4444]"></span>
              </NavLink>
            ))}
          </div>

          {/* 3. CART & CTA BUTTONS */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* SHOPPING CART BUTTON */}
            <Link
              to="/cart"
              className={`relative p-3 rounded-full transition-all duration-300 ${
                scrolled
                  ? "bg-slate-100 text-slate-900"
                  : "bg-slate-900/10 text-slate-900"
              } hover:bg-red-600 hover:text-white`}
            >
              <FaShoppingCart size={18} />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white animate-bounce"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <a
                href="tel:+919920124345"
                className="relative group px-7 py-3 bg-red-600 text-white overflow-hidden transition-all active:scale-95 rounded-sm shadow-[0_10px_20px_rgba(220,38,38,0.2)]"
              >
                <div className="relative z-10 flex items-center gap-3">
                  <FaPhoneAlt
                    size={12}
                    className="animate-bounce group-hover:animate-none"
                  />
                  <span className="text-xs font-black uppercase tracking-widest">
                    Call Now
                  </span>
                </div>
                <div className="absolute inset-0 bg-slate-900 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              className="lg:hidden p-2 text-slate-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. MOBILE OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-slate-900 z-[110] shadow-2xl p-10 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-2">
                <FaLock className="text-red-600" />
                <span className="font-black text-white text-xl tracking-widest uppercase border-b border-red-600">
                  SECURE_MENU
                </span>
              </div>
              <FaTimes
                className="text-white cursor-pointer hover:rotate-90 transition-transform"
                size={28}
                onClick={() => setIsMenuOpen(false)}
              />
            </div>

            <div className="flex flex-col space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.to}
                    className="text-4xl font-black text-white/20 hover:text-red-600 transition-all hover:pl-4 uppercase italic"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              {/* Mobile Cart Link */}
              <Link
                to="/cart"
                className="text-4xl font-black text-white/20 hover:text-red-600 transition-all hover:pl-4 uppercase italic flex items-center gap-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart <span className="text-red-600">({cartCount})</span>
              </Link>
            </div>

            <div className="mt-auto space-y-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4 text-slate-400">
                <FaUserShield className="text-red-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Emergency Support Active
                </span>
              </div>
              <a
                href="tel:+919920124345"
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-red-600 text-white py-5 font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-colors text-center block flex items-center justify-center gap-3"
              >
                <FaPhoneAlt /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
