import React from "react";

const DealOfTheDay = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDate = `${day} / ${month} / ${year}`;
  return (
    <section className="w-full flex flex-col items-center py-10 bg-black">
      {/* Headline and Date */}
      <div className="flex items-center gap-4 mb-6 w-full max-w-xl">
        <h2 className="text-3xl font-extrabold text-[#FFE600] lowercase">
          win rewards everyday
        </h2>
        <span className="bg-[#231942] text-white text-sm px-4 py-1 rounded-full font-semibold">
          {formattedDate}
        </span>
      </div>
      {/* Centered Card */}
      <div className="bg-[#4B2FC5] rounded-2xl p-6 shadow-2xl flex flex-col items-center w-full max-w-md mb-6 hover:scale-105 transition-transform">
        <div className="bg-white rounded-lg p-4 w-full flex flex-col items-center border-2 border-gray-200">
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-max-gold-select?wid=940&hei=1112&fmt=png-alpha&.v=1660753619946"
            alt="Deal of the Day"
            className="w-40 h-40 object-contain mb-4"
          />
          <div className="text-xs text-gray-500 mb-1">SPONSORED BY</div>
          <div className="text-lg font-bold text-[#231942] tracking-wide">
            POKERBAAZI
          </div>
        </div>
      </div>
      {/* Unclaimed Bonus Card */}
      <div className="bg-[#FFE3A9] rounded-xl shadow-lg flex flex-col items-center w-full max-w-md mb-6 p-5 border-2 border-[#FFD700]">
        <div className="text-lg font-bold text-[#0B1D51] mb-2">
          You have unclaimed bonus!
        </div>
        <button className="bg-[#FFD700] text-[#0B1D51] font-bold px-8 py-2 rounded-full shadow hover:scale-105 transition-transform">
          Claim Bonus Now
        </button>
      </div>
      {/* Claim Button */}
      <button
        className="bg-[#FFE600] text-black font-bold text-lg px-12 py-4 rounded-xl shadow-lg flex items-center gap-2 mb-4 hover:scale-105 transition-transform"
        style={{ boxShadow: "0 8px #b3a200" }}
      >
        Claim now <span className="text-xl">→</span>
      </button>
    </section>
  );
};

export default DealOfTheDay;
