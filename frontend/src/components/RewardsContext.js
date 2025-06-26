import { createContext, useContext } from 'react';

export const RewardsContext = createContext();
export const useRewards = () => useContext(RewardsContext); 