import React from "react";
import ReferralCard from "./ReferralCards";

const Hero = () => {
  const imageSrc =
    "https://img.freepik.com/free-vector/profitable-partnership-business-partners-cowork_335657-3010.jpg?semt=ais_hybrid&w=740";

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-8">
      <div className="flex-1 flex flex-col items-start justify-center text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Earn Rewards for What You Already Love Doing!
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
          Refer friends, share on social, complete surveys, and stay loyal —
          we'll reward you at every step.
        </p>
        <button className="bg-gradient-to-r from-[#725CAD] to-[#8CCDEB] text-[#0B1D51] font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:scale-105 transition-transform">
          Start Earning Rewards / Join Now
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <ReferralCard imageSrc={imageSrc} alt="Rewards" />
      </div>
    </section>
  );
};

export default Hero;
