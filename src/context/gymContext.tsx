
"use client";

import React, { createContext, useState } from "react";
import type { IGym } from "@/types/gymsTypes";

interface GymContextType {
  readPlan: IGym[];
  setReadPlan: React.Dispatch<React.SetStateAction<IGym[]>>;

  readSave: IGym[];
  setReadSave: React.Dispatch<React.SetStateAction<IGym[]>>;

  removeFromPlan: (id: number) => void;
  removeFromSave: (id: number) => void;
}

export const GymContext = createContext<GymContextType | undefined>(
  undefined
);

interface GymProviderProps {
  children: React.ReactNode;
}

const GymProvider = ({ children }: GymProviderProps) => {
  const [readPlan, setReadPlan] = useState<IGym[]>([]);
  const [readSave, setReadSave] = useState<IGym[]>([]);

 
  const removeFromPlan = (id: number) => {
    setReadPlan((prev) => prev.filter((gym) => gym.id !== id));
  };

  
  const removeFromSave = (id: number) => {
    setReadSave((prev) => prev.filter((gym) => gym.id !== id));
  };

  const sharedData: GymContextType = {
    readPlan,
    setReadPlan,
    readSave,
    setReadSave,
    removeFromPlan,
    removeFromSave,
  };

  return (
    <GymContext.Provider value={sharedData}>
      {children}
    </GymContext.Provider>
  );
};

export default GymProvider;

