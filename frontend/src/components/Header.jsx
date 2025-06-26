import React, { useState } from "react";
import { RewardsContext } from "./RewardsContext";

const coinIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#FFD700" />
    <circle cx="12" cy="12" r="8" fill="#fff3b0" />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontSize="12"
      fill="#E6B800"
      fontWeight="bold"
    >
      ¢
    </text>
  </svg>
);
const rupeeIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="12" fill="#A259FF" />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontSize="14"
      fill="#fff"
      fontWeight="bold"
    >
      ₹
    </text>
  </svg>
);
const ticketIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="12" fill="#00C49A" />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontSize="14"
      fill="#fff"
      fontWeight="bold"
    >
      🎟️
    </text>
  </svg>
);

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ email: "", number: "" });

  // Rewards state
  const [coins, setCoins] = useState(2949308);
  const [rupees, setRupees] = useState(51);
  const [tickets, setTickets] = useState(1);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    setForm({ email: "", number: "" });
  };

  return (
    <RewardsContext.Provider
      value={{ coins, setCoins, rupees, setRupees, tickets, setTickets }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
            fontFamily: "cursive, Comic Sans MS, sans-serif",
            color: "#6C63FF",
            letterSpacing: "2px",
            textShadow: "2px 2px 0 #FFD700, 4px 4px 0 #6C63FF22",
          }}
        >
          Ripples
        </div>
        <div className="flex items-center gap-4 mr-6 ">
          {/* Coins */}
          <div className="flex items-center bg-gray-800 rounded-full px-3 py-1 gap-2 min-w-[110px]">
            <span>{coinIcon}</span>
            <span className="text-white font-semibold text-lg">
              {coins.toLocaleString()}
            </span>
          </div>
          {/* Rupees */}
          <div className="flex items-center bg-gray-800 rounded-full px-3 py-1 gap-2 min-w-[70px]">
            <span>{rupeeIcon}</span>
            <span className="text-white font-semibold text-lg">₹{rupees}</span>
          </div>
          {/* Tickets */}
          <div className="flex items-center bg-gray-800 rounded-full px-3 py-1 gap-2 min-w-[50px]">
            <span>{ticketIcon}</span>
            <span className="text-white font-semibold text-lg">{tickets}</span>
          </div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          style={{
            padding: "0.6rem 1.5rem",
            background: "linear-gradient(90deg, #6C63FF 0%, #FFD700 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "30px",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(108,99,255,0.15)",
          }}
        >
          Refer a Friend
        </button>
        {showModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "2rem",
                borderRadius: "16px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
                minWidth: "320px",
                position: "relative",
              }}
            >
              <button
                onClick={() => setShowModal(false)}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "none",
                  border: "none",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  color: "#6C63FF",
                }}
              >
                ×
              </button>
              <h2 style={{ marginBottom: "1rem", color: "#6C63FF" }}>
                Refer a Friend
              </h2>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Friend's Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "0.7rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                />
                <input
                  type="tel"
                  name="number"
                  placeholder="Friend's Number"
                  value={form.number}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "0.7rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "0.7rem",
                    background:
                      "linear-gradient(90deg, #6C63FF 0%, #FFD700 100%)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    cursor: "pointer",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </header>
    </RewardsContext.Provider>
  );
};

export default Header;
