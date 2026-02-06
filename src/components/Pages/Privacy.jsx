import React, { useEffect } from "react";
import {
  FaUserShield,
  FaLock,
  FaEyeSlash,
  FaServer,
  FaHistory,
} from "react-icons/fa";
import AOS from "aos";

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6 font-sans overflow-hidden">
      <div className="max-w-[1000px] mx-auto relative">
        {/* Background Watermark */}
        <div className="absolute top-0 right-[-20%] text-slate-50 text-[15rem] font-black italic select-none pointer-events-none -z-0">
          DATA
        </div>

        <div className="relative z-10" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-12 bg-red-600"></span>
            <span className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px]">
              Security Protocol 01
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-slate-900 mb-12">
            PRIVACY{" "}
            <span
              className="text-gray-200"
              style={{ WebkitTextStroke: "1px #e5e7eb" }}
            >
              POLICY
            </span>
          </h1>

          <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
            <div className="p-8 border-2 border-slate-100 group hover:border-red-600 transition-all">
              <FaLock className="text-3xl mx-auto mb-4 group-hover:text-red-600" />
              <h3 className="font-black text-xs uppercase tracking-widest">
                End-to-End Encryption
              </h3>
            </div>
            <div className="p-8 border-2 border-slate-100 group hover:border-red-600 transition-all">
              <FaEyeSlash className="text-3xl mx-auto mb-4 group-hover:text-red-600" />
              <h3 className="font-black text-xs uppercase tracking-widest">
                Zero-Log Network
              </h3>
            </div>
            <div className="p-8 border-2 border-slate-100 group hover:border-red-600 transition-all">
              <FaServer className="text-3xl mx-auto mb-4 group-hover:text-red-600" />
              <h3 className="font-black text-xs uppercase tracking-widest">
                Decentralized Storage
              </h3>
            </div>
          </div>

          <div className="space-y-12 text-slate-600 leading-relaxed font-medium">
            <section>
              <h2 className="text-2xl font-black uppercase italic text-slate-900 mb-4 flex items-center gap-4">
                <span className="text-red-600">01.</span> Data Collection
              </h2>
              <p>
                We believe in absolute anonymity. We only collect the bare
                minimum data (email and payment info) required to activate your
                license. Your browsing habits, traffic source, and system logs
                are never recorded.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase italic text-slate-900 mb-4 flex items-center gap-4">
                <span className="text-red-600">02.</span> Encryption Standards
              </h2>
              <p>
                All transactions and user interactions on Armor are protected by
                military-grade AES-256 encryption. Our servers use advanced
                hardware security modules (HSM) to prevent unauthorized access.
              </p>
            </section>

            <section className="bg-slate-950 p-8 text-white border-l-8 border-red-600">
              <h2 className="text-xl font-black uppercase italic mb-4">
                The "Zero-Leak" Commitment
              </h2>
              <p className="text-slate-400 text-sm italic">
                "We do not sell, trade, or share your identity with third-party
                advertisers or government agencies unless legally mandated by
                supreme court jurisdiction."
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
