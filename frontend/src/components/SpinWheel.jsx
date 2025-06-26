import React, { useRef, useState } from "react";
import { useRewards } from "./RewardsContext";

const rewards = [
  "₹10 Cashback",
  "₹50 Voucher",
  "Free Coffee",
  "100 Points",
  "Try Again",
  "₹200 Credit",
  "Exclusive Merch",
  "Bonus Spin",
];

const colors = [
  "#8CCDEB",
  "#725CAD",
  "#FFE3A9",
  "#0B1D51",
  "#FFD700",
  "#6C63FF",
  "#FFB6C1",
  "#00C49A",
];

const SpinWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [selected, setSelected] = useState(null);
  const [angle, setAngle] = useState(0);
  const wheelRef = useRef();
  const { setCoins, setRupees, setTickets } = useRewards();

  const segmentAngle = 360 / rewards.length;

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setSelected(null);
    const idx = Math.floor(Math.random() * rewards.length);
    const randomTurns = 4 + Math.random() * 2;
    const finalAngle =
      360 * randomTurns - idx * segmentAngle - segmentAngle / 2;
    setAngle(finalAngle);
    setTimeout(() => {
      setSpinning(false);
      setSelected(rewards[idx]);
      // Update rewards based on the result
      switch (rewards[idx]) {
        case "₹10 Cashback":
          setRupees((r) => r + 10);
          break;
        case "₹50 Voucher":
          setRupees((r) => r + 50);
          break;
        case "100 Points":
          setCoins((c) => c + 100);
          break;
        case "₹200 Credit":
          setRupees((r) => r + 200);
          break;
        case "Bonus Spin":
          setTickets((t) => t + 1);
          break;
        default:
          break;
      }
    }, 3500);
  };

  return (
    <section className="w-full max-w-3xl mx-auto bg-white/80 rounded-3xl shadow-2xl px-6 md:px-16 py-12 my-10 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1D51] mb-8 text-center">
        Spin the Wheel to Earn Rewards!
      </h2>
      <div className="relative flex flex-col items-center">
        <div className="w-64 h-64 mb-8 relative">
          <svg
            ref={wheelRef}
            width={256}
            height={256}
            viewBox="0 0 256 256"
            style={{
              transition: spinning
                ? "transform 3.5s cubic-bezier(0.17, 0.67, 0.83, 0.67)"
                : undefined,
              transform: `rotate(${angle}deg)`,
            }}
            className="rounded-full shadow-lg"
          >
            {rewards.map((reward, i) => {
              const startAngle = segmentAngle * i;
              const endAngle = startAngle + segmentAngle;
              const largeArc = endAngle - startAngle > 180 ? 1 : 0;
              const radius = 128;
              const x1 = 128 + radius * Math.cos((Math.PI * startAngle) / 180);
              const y1 = 128 + radius * Math.sin((Math.PI * startAngle) / 180);
              const x2 = 128 + radius * Math.cos((Math.PI * endAngle) / 180);
              const y2 = 128 + radius * Math.sin((Math.PI * endAngle) / 180);
              return (
                <g key={i}>
                  <path
                    d={`M128,128 L${x1},${y1} A${radius},${radius} 0 ${largeArc} 1 ${x2},${y2} Z`}
                    fill={colors[i % colors.length]}
                    stroke="#fff"
                    strokeWidth={2}
                  />
                  <text
                    x={
                      128 +
                      90 *
                        Math.cos((Math.PI * (startAngle + endAngle)) / 2 / 180)
                    }
                    y={
                      128 +
                      90 *
                        Math.sin((Math.PI * (startAngle + endAngle)) / 2 / 180)
                    }
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fontSize={14}
                    fill="#0B1D51"
                    transform={`rotate(${startAngle + segmentAngle / 2}, ${
                      128 +
                      90 *
                        Math.cos((Math.PI * (startAngle + endAngle)) / 2 / 180)
                    }, ${
                      128 +
                      90 *
                        Math.sin((Math.PI * (startAngle + endAngle)) / 2 / 180)
                    })`}
                  >
                    {reward}
                  </text>
                </g>
              );
            })}
          </svg>
          {/* Pointer */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[120%]">
            <div className="w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-[#0B1D51] mx-auto" />
          </div>
        </div>
        <button
          onClick={spin}
          disabled={spinning}
          className="bg-gradient-to-r from-[#725CAD] to-[#8CCDEB] text-[#0B1D51] font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:scale-105 transition-transform disabled:opacity-60"
        >
          {spinning ? "Spinning..." : "Spin Now"}
        </button>
        {selected && !spinning && (
          <div className="mt-8 text-2xl font-bold text-[#0B1D51] bg-[#FFE3A9] px-8 py-4 rounded-xl shadow">
            🎉 You won: <span className="text-[#725CAD]">{selected}</span>!
          </div>
        )}
      </div>
    </section>
  );
};

export default SpinWheel;
