import React from "react";

const earners = [
  {
    name: "Aarav S.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    earnings: 12000,
  },
  {
    name: "Priya K.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    earnings: 11000,
  },
  {
    name: "Rahul M.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    earnings: 10500,
  },
  {
    name: "Sneha T.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    earnings: 9900,
  },
  {
    name: "Vikram P.",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    earnings: 9500,
  },
  {
    name: "Isha R.",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    earnings: 9000,
  },
  {
    name: "Karan D.",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    earnings: 8700,
  },
  {
    name: "Meera L.",
    avatar: "https://randomuser.me/api/portraits/women/34.jpg",
    earnings: 8500,
  },
  {
    name: "Rohan G.",
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
    earnings: 8200,
  },
  {
    name: "Simran V.",
    avatar: "https://randomuser.me/api/portraits/women/56.jpg",
    earnings: 8000,
  },
];

const TopEarners = () => {
  return (
    <section className="w-full max-w-3xl mx-auto bg-white/80 rounded-3xl shadow-2xl px-6 md:px-16 py-12 my-10 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1D51] mb-8 text-center">
        🏅 Top 10 Earners This Week
      </h2>
      <ul className="w-full divide-y divide-[#8CCDEB] mb-8">
        {earners.map((user, idx) => (
          <li key={user.name} className="flex items-center gap-4 py-3 px-2">
            <span
              className={`text-xl font-bold w-6 text-center ${
                idx < 3 ? "text-[#FFD700]" : "text-[#725CAD]"
              }`}
            >
              {idx + 1}
            </span>
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full border-2 border-[#8CCDEB]"
            />
            <span className="flex-1 font-semibold text-[#0B1D51]">
              {user.name}
            </span>
            <span className="font-bold text-[#725CAD] text-lg">
              ₹{user.earnings.toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
      <button className="bg-gradient-to-r from-[#725CAD] to-[#8CCDEB] text-[#0B1D51] font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:scale-105 transition-transform">
        Climb the Leaderboard
      </button>
    </section>
  );
};

export default TopEarners;
