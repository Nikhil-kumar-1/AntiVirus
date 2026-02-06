import React from "react";
import { Link } from "react-router-dom"; // Link import kiya
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaShieldAlt,
  FaTerminal,
  FaMapMarkerAlt,
  FaHeart,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Pricing", href: "/pricing" }, // Added pricing link
      ],
    },
    {
      title: "Legal Protocols", // Better title for your new pages
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Security Audit", href: "#" },
        { name: "Cookie Policy", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "API Status", href: "#" },
        { name: "Report Bug", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 py-20 relative overflow-hidden border-t border-slate-900">
      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          {/* BRAND COLUMN */}
          <div className="lg:col-span-4 space-y-8">
            <Link
              to="/"
              className="flex items-center gap-2 text-white group cursor-pointer w-fit"
            >
              <FaShieldAlt className="text-4xl text-red-600 group-hover:rotate-[360deg] transition-transform duration-1000" />
              <h2 className="text-3xl font-black uppercase tracking-tighter italic">
                ARMOR<span className="text-red-600">.</span>
              </h2>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm font-medium">
              The vanguard of digital defense. We provide elite AI-powered
              cybersecurity solutions to protect your infrastructure.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub].map(
                (Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{
                      y: -5,
                      backgroundColor: "#DC2626",
                      color: "#fff",
                    }}
                    className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center transition-all border border-slate-800 shadow-xl"
                  >
                    <Icon size={18} />
                  </motion.a>
                ),
              )}
            </div>
          </div>

          {/* DYNAMIC LINKS COLUMNS - Using <Link> now */}
          {footerLinks.map((col, i) => (
            <div key={i} className="lg:col-span-2">
              <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-8 relative inline-block">
                {col.title}
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-red-600"></span>
              </h4>
              <ul className="space-y-4">
                {col.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.href}
                      className="text-xs font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-3 group"
                    >
                      <span className="w-0 group-hover:w-3 h-[1px] bg-red-600 transition-all"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CONTACT INFO COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-8 relative inline-block">
              Global HQ
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-red-600"></span>
            </h4>
            <div className="space-y-6 text-xs font-bold uppercase tracking-tight">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-red-600 mt-1 shrink-0 text-lg" />
                <span className="leading-relaxed text-slate-300">
                  Silicon Valley <br />
                  California, USA
                </span>
              </div>
              <div className="group cursor-pointer">
                <div className="flex items-center gap-4 mb-2">
                  <FaEnvelope className="text-red-600 text-lg" />
                  <span className="text-slate-300 group-hover:text-red-600 transition-colors">
                    secure@armor.io
                  </span>
                </div>
                <div className="h-[1px] w-full bg-slate-800 group-hover:bg-red-600/50 transition-colors"></div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <FaTerminal className="text-red-600" />
            <span>&copy; {currentYear} Armor Security Operations.</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="hover:text-red-600 transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="hover:text-red-600 transition-colors"
              >
                Terms
              </Link>
            </div>
            <div className="h-4 w-[1px] bg-slate-800 hidden md:block"></div>
            <div className="flex items-center gap-2 text-slate-500">
              Forged with <FaHeart className="text-red-600 animate-pulse" /> by{" "}
              <span className="text-white tracking-widest underline decoration-red-600 underline-offset-4">
                Nikhil Kumar
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Background Ghost Logo */}
      <div className="absolute -bottom-24 -right-24 opacity-[0.02] select-none pointer-events-none transform rotate-12">
        <FaShieldAlt size={500} />
      </div>
    </footer>
  );
};

export default Footer;
