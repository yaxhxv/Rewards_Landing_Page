import React from "react";

const userPosts = [
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=400&q=80",
    username: "@happyuser1",
    caption: "Loving the rewards from #YourBrandRewards! 🎉",
  },
  {
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=400&q=80",
    username: "@rewardsfan",
    caption: "Just got my merch thanks to @YourBrand!",
  },
  {
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400&q=80",
    username: "@instastar",
    caption: "Sharing my experience and earning rewards! #YourBrandRewards",
  },
  {
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400&q=80",
    username: "@socialguru",
    caption: "Tag @YourBrand and win!",
  },
];

const UGCSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto bg-white/80 rounded-3xl shadow-2xl px-6 md:px-16 py-12 my-10 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1D51] mb-4 text-center">
        Get Rewarded for Sharing Your Experience
      </h2>
      <p className="text-lg text-[#725CAD] mb-2 text-center max-w-2xl">
        Post about us on <span className="font-bold">Instagram</span> or{" "}
        <span className="font-bold">Twitter</span> and tag{" "}
        <span className="text-[#0B1D51] font-bold">@YourBrand</span> with{" "}
        <span className="text-[#8CCDEB] font-bold">#YourBrandRewards</span>
      </p>
      <p className="text-md text-[#0B1D51] mb-8 text-center font-semibold">
        Get up to <span className="text-[#725CAD] font-bold">₹200 credit</span>{" "}
        or exclusive merch!
      </p>
      {/* Gallery */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {userPosts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform"
          >
            <img
              src={post.img}
              alt={post.username}
              className="w-28 h-28 rounded-full object-cover mb-3 border-4 border-[#8CCDEB] shadow"
            />
            <div className="font-bold text-[#0B1D51] mb-1">{post.username}</div>
            <div className="text-sm text-[#725CAD] text-center">
              {post.caption}
            </div>
          </div>
        ))}
      </div>
      {/* CTA Button */}
      <button className="bg-gradient-to-r from-[#8CCDEB] to-[#FFE3A9] text-[#0B1D51] font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:scale-105 transition-transform">
        Upload Your Post / Tag Us Now
      </button>
    </section>
  );
};

export default UGCSection;
