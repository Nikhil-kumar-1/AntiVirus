import React, { useEffect } from "react";
import {
  FaFileSignature,
  FaShieldAlt,
  FaBan,
  FaBalanceScale,
} from "react-icons/fa";
import AOS from "aos";

const Terms = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6 font-sans overflow-hidden">
      <div className="max-w-[1000px] mx-auto relative">
        <div className="absolute top-0 right-[-10%] text-slate-50 text-[15rem] font-black italic select-none pointer-events-none -z-0">
          RULES
        </div>

        <div className="relative z-10" data-aos="fade-right">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-12 bg-slate-900"></span>
            <span className="text-slate-900 font-black uppercase tracking-[0.4em] text-[10px]">
              Operation Manual
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-slate-900 mb-12">
            TERMS OF <span className="text-red-600">SERVICE</span>
          </h1>

          <div className="space-y-8 border-t-2 border-slate-100 pt-12">
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <div className="font-black text-red-600 uppercase tracking-widest text-sm flex items-center gap-2">
                <FaShieldAlt /> License Usage
              </div>
              <p className="text-slate-600 font-medium">
                Armor licenses are for personal or enterprise use depending on
                the tier. Reselling, reverse-engineering, or unauthorized
                distribution of our security protocols is strictly prohibited.
              </p>
            </div>

            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <div className="font-black text-red-600 uppercase tracking-widest text-sm flex items-center gap-2">
                <FaBan /> Restricted Acts
              </div>
              <p className="text-slate-600 font-medium">
                You may not use our "Deep Tunnel" or "Cyber Shield" for illegal
                activities, including D-DoS attacks, phishing, or unauthorized
                network intrusion.
              </p>
            </div>

            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <div className="font-black text-red-600 uppercase tracking-widest text-sm flex items-center gap-2">
                <FaBalanceScale /> Refund Policy
              </div>
              <p className="text-slate-600 font-medium">
                Due to the nature of digital keys, refunds are only processed
                within 48 hours of purchase if the license has not been
                activated on any device.
              </p>
            </div>

            <div className="mt-16 bg-red-600 p-10 text-white transform -skew-x-2">
              <div className="skew-x-2">
                <h3 className="text-2xl font-black uppercase italic mb-4">
                  Acceptance of Risk
                </h3>
                <p className="text-[12px] font-bold uppercase tracking-widest leading-loose">
                  By deploying Armor Units, you acknowledge that no security
                  system is 100% impenetrable. Armor is a defensive layer and
                  should be used as part of a multi-vector security strategy.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-300 font-mono text-[10px]">
              Last Updated: February 2026 // Build: Stable_V2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
