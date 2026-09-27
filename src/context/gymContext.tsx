
"use client";

import React, { createContext, useState } from "react";
import type { IGym } from "@/types/gymsTypes";

interface GymContextType {
  readPlan: IGym[];
  setReadPlan: React.Dispatch<React.SetStateAction<IGym[]>>;
  readSave: IGym[];
  setReadSave: React.Dispatch<React.SetStateAction<IGym[]>>;
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

  const sharedData: GymContextType = {
    readPlan,
    setReadPlan,
    readSave,
    setReadSave,
  };

  return (
    <GymContext.Provider value={sharedData}>
      {children}
    </GymContext.Provider>
  );
};

export default GymProvider;

