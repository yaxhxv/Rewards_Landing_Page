import React from "react";

const tiers = [
  {
    name: "Bronze",
    color: "bg-[#8CCDEB] text-[#0B1D51]",
    perks: ["Basic rewards", "Earn points on every purchase"],
    icon: "🥉",
  },
  {
    name: "Silver",
    color: "bg-[#725CAD] text-white",
    perks: ["Early access to sales", "Exclusive discounts"],
    icon: "🥈",
  },
  {
    name: "Gold",
    color: "bg-[#FFE3A9] text-[#0B1D51]",
    perks: ["VIP support", "Birthday/Anniversary bonus", "Highest cashback"],
    icon: "🥇",
  },
];

const LoyaltyRewards = () => {
  return (
    <section className="w-full max-w-6xl mx-auto bg-white/80 rounded-3xl shadow-2xl px-6 md:px-16 py-12 my-10 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1D51] mb-4 text-center">
        Stay Loyal, Reap More
      </h2>
      <p className="text-lg text-[#725CAD] mb-6 text-center max-w-2xl">
        Earn points every time you purchase, complete tasks, or engage with us.
      </p>
      {/* Breakdown */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        <div className="bg-[#0B1D51] text-[#FFE3A9] rounded-xl px-6 py-4 text-lg font-semibold shadow">
          ₹1 spent = <span className="font-bold text-[#FFD700]">1 point</span>
        </div>
        <div className="bg-[#725CAD] text-white rounded-xl px-6 py-4 text-lg font-semibold shadow">
          100 points ={" "}
          <span className="font-bold text-[#FFE3A9]">₹10 cashback</span>
        </div>
        <div className="bg-[#8CCDEB] text-[#0B1D51] rounded-xl px-6 py-4 text-lg font-semibold shadow">
          🎂 Bonus on birthdays / anniversaries
        </div>
      </div>
      {/* Tiers Visual */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex-1 flex flex-col items-center p-6 rounded-2xl shadow-lg ${tier.color} transition-transform hover:scale-105`}
          >
            <div className="text-5xl mb-2">{tier.icon}</div>
            <div className="text-2xl font-bold mb-2">{tier.name}</div>
            <ul className="list-disc list-inside text-base">
              {tier.perks.map((perk, i) => (
                <li key={i}>{perk}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* CTA Button */}
      <button className="bg-gradient-to-r from-[#0B1D51] to-[#725CAD] text-[#FFE3A9] font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:scale-105 transition-transform">
        Track Your Points / View Loyalty Program
      </button>
    </section>
  );
};

export default LoyaltyRewards;
