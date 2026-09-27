
"use client";

import { GymContext } from "@/context/gymContext";
import { IGym } from "@/types/gymsTypes";
import React, { useContext } from "react";
import { toast } from "react-toastify";

interface ReadButtonProps {
  gym: IGym;
}

const ReadButton = ({ gym }: ReadButtonProps) => {
  const context = useContext(GymContext);

  if (!context) {
    throw new Error("ReadButton must be used inside GymProvider");
  }

  const { readPlan, setReadPlan } = context;

  const handlePlan = () => {
    
    const alreadyAdded = readPlan.some(
      (item) => item.id === gym.id
    );

    if (alreadyAdded) {
      toast.info("This workout is already in your plan!");
      return;
    }

    
    setReadPlan([...readPlan, gym]);

    
    toast.success("Workout added to today's plan!");
  };

  return (
    <button
      onClick={handlePlan}
      className="btn border-none bg-[#CCFF00] text-[#1E1E1E] hover:bg-[#B8E600]"
    >
      Add to today's plan
    </button>
  );
};

export default ReadButton;

