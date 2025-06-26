import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ReferralRewards from "./components/ReferralRewards";
import UGCSection from "./components/UGCSection";
import LoyaltyRewards from "./components/LoyaltyRewards";
import SpinWheel from "./components/SpinWheel";
import DealOfTheDay from "./components/DealOfTheDay";
import TopEarners from "./components/TopEarners";
import { RewardsContext } from "./components/RewardsContext";

export default function App() {
  // Manage the state here
  const [coins, setCoins] = useState(2949308);
  const [rupees, setRupees] = useState(51);
  const [tickets, setTickets] = useState(1);

  return (
    <RewardsContext.Provider
      value={{ coins, setCoins, rupees, setRupees, tickets, setTickets }}
    >
      <Header />
      <DealOfTheDay />
      <Hero />
      <ReferralRewards />
      <UGCSection />
      <LoyaltyRewards />
      <SpinWheel />
      <TopEarners />
    </RewardsContext.Provider>
  );
}
