
"use client";

import { GymContext } from "@/context/gymContext";
import { IGym } from "@/types/gymsTypes";
import React, { useContext } from "react";
import { toast } from "react-toastify";

interface SaveButtonProps {
  gym: IGym;
}

const SaveButton = ({ gym }: SaveButtonProps) => {
  const context = useContext(GymContext);

  if (!context) {
    throw new Error("SaveButton must be used inside GymProvider");
  }

  const { readSave, setReadSave } = context;

  const handleSave = () => {
    const alreadySaved = readSave.some(
      (item) => item.id === gym.id
    );

    if (alreadySaved) {
      toast.info("This workout is already saved!");
      return;
    }

    setReadSave([...readSave, gym]);
    toast.success("Workout saved successfully!");
  };

  return (
    <button
      onClick={handleSave}
      className="btn border-none bg-[#CCFF00] text-[#1E1E1E] hover:bg-[#B8E600]"
    >
      Save for later
    </button>
  );
};

export default SaveButton;

