import React from "react";

const ReferralCard = ({ imageSrc, alt }) => {
  return (
    <div className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 flex items-center justify-center">
      <img
        src={imageSrc}
        alt={alt || "Referral"}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default ReferralCard;
