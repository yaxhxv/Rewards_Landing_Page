import React, { useState } from "react";

const ReferralRewards = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://ripples.com/referral/yourcode";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full max-w-5xl mx-auto bg-white/80 rounded-3xl shadow-2xl px-6 md:px-16 py-12 my-10 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1D51] mb-4 text-center">
        Invite Friends, Earn Together!
      </h2>
      <p className="text-lg text-[#725CAD] mb-6 text-center max-w-2xl">
        Refer your friends and earn{" "}
        <span className="font-bold text-[#0B1D51]">₹100</span> for every
        successful signup or purchase.
      </p>
      {/* Visual Diagram */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="flex flex-col items-center">
          <span className="text-4xl">🧑‍💻</span>
          <span className="text-xs mt-1 text-[#0B1D51]">You</span>
        </div>
        <span className="text-3xl">→</span>
        <div className="flex flex-col items-center">
          <span className="text-4xl">🧑‍🤝‍🧑</span>
          <span className="text-xs mt-1 text-[#725CAD]">Friend</span>
        </div>
        <span className="text-3xl">→</span>
        <div className="flex flex-col items-center">
          <span className="text-4xl">🎉</span>
          <span className="text-xs mt-1 text-[#8CCDEB]">Both Earn</span>
        </div>
      </div>
      {/* CTA Button */}
      <button
        onClick={handleCopy}
        className="bg-gradient-to-r from-[#725CAD] to-[#8CCDEB] text-[#0B1D51] font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:scale-105 transition-transform mb-4"
      >
        {copied ? "Copied!" : "Copy Your Referral Link / Invite Now"}
      </button>
      {/* Bonus Note */}
      <div className="mt-2 text-[#FFE3A9] bg-[#0B1D51] px-6 py-3 rounded-xl font-semibold text-center shadow-md">
        🎁 Get extra <span className="text-[#FFD700]">₹500</span> for every 5
        friends referred!
      </div>
    </section>
  );
};

export default ReferralRewards;
