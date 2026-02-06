import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaTrash,
  FaPlus,
  FaMinus,
  FaShieldAlt,
  FaArrowRight,
  FaLock,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const loadCart = () => {
    const items = JSON.parse(localStorage.getItem("armor_cart")) || [];
    setCartItems(items);
  };

  useEffect(() => {
    loadCart();
  }, []);

  const updateQuantity = (id, delta) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    saveAndRefresh(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    saveAndRefresh(updatedCart);
  };

  const saveAndRefresh = (newCart) => {
    localStorage.setItem("armor_cart", JSON.stringify(newCart));
    setCartItems(newCart);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32 pb-20 px-4 md:px-6 font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* Responsive Header */}
        <div className="border-b-2 border-slate-100 pb-6 md:pb-10 mb-8 md:mb-12">
          <h1 className="text-4xl md:text-8xl font-black uppercase italic tracking-tighter text-slate-900 leading-none">
            YOUR <span className="text-red-600">ARSENAL</span>
          </h1>
          <p className="text-slate-400 font-bold uppercase text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.4em] mt-2 md:mt-4">
            // {cartItems.length} ACTIVE PROTOCOLS IN QUEUE
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16 md:py-20 bg-slate-50 border-2 border-dashed border-slate-200 px-4">
            <p className="text-slate-400 font-black uppercase tracking-widest mb-6 text-sm">
              Your arsenal is empty.
            </p>
            <Link
              to="/pricing"
              className="inline-block bg-red-600 text-white px-8 md:px-10 py-4 font-black uppercase text-[10px] tracking-widest hover:bg-black transition-all"
            >
              Browse Protocols
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16">
            {/* 1. Items List */}
            <div className="lg:col-span-2 space-y-4 md:y-6">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-6 border-2 border-slate-100 hover:border-red-600 transition-all bg-white overflow-hidden"
                  >
                    {/* Item Info */}
                    <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto mb-4 md:mb-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-900 flex items-center justify-center text-red-600 text-xl md:text-2xl shrink-0 skew-x-[-6deg]">
                        <FaShieldAlt />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-black uppercase italic text-lg md:text-xl text-slate-900 truncate">
                          {item.name}
                        </h3>
                        <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          ID: {item.id}
                        </p>
                      </div>
                    </div>

                    {/* Controls & Price */}
                    <div className="flex flex-row items-center justify-between w-full md:w-auto gap-4 md:gap-10 border-t md:border-t-0 pt-4 md:pt-0">
                      {/* Quantity Buttons */}
                      <div className="flex items-center border-2 border-slate-100 bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-2 md:p-3 hover:bg-slate-50 transition-colors border-r-2 border-slate-100"
                        >
                          <FaMinus size={8} />
                        </button>
                        <span className="px-4 md:px-6 font-black text-xs md:text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-2 md:p-3 hover:bg-slate-50 transition-colors border-l-2 border-slate-100"
                        >
                          <FaPlus size={8} />
                        </button>
                      </div>

                      <div className="text-right flex-1 md:flex-none">
                        <p className="text-[8px] font-black text-slate-300 uppercase hidden md:block">
                          Subtotal
                        </p>
                        <span className="font-black text-lg md:text-xl italic text-slate-900">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-slate-300 hover:text-red-600 transition-colors p-2"
                      >
                        <FaTrash size={14} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* 2. Order Summary */}
            <div className="relative mt-8 lg:mt-0">
              <div className="lg:sticky lg:top-32 bg-slate-950 p-6 md:p-10 text-white shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <FaLock size={80} className="md:size-[100px]" />
                </div>

                <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 md:mb-8 border-b border-white/10 pb-4 tracking-tighter">
                  Check_Summary
                </h2>

                <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                  <div className="flex justify-between items-center text-slate-400">
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em]">
                      Deployment Subtotal
                    </span>
                    <span className="font-bold text-sm md:text-base text-white">
                      ₹{subtotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400">
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em]">
                      Cyber Tax (GST 18%)
                    </span>
                    <span className="font-bold text-sm md:text-base text-white">
                      ₹{tax.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-white/10">
                    <span className="text-lg md:text-xl font-black uppercase italic text-red-600">
                      Total Credits
                    </span>
                    <span className="text-2xl md:text-3xl font-black italic">
                      ₹{total.toLocaleString()}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-red-600 py-5 md:py-6 font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all group active:scale-95">
                  Initiate Checkout{" "}
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>

                <div className="mt-6 flex items-center gap-3 opacity-30 justify-center">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest">
                    Secure encrypted transaction
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
