
"use client";

import { GymContext } from "@/context/gymContext";
import { IGym } from "@/types/gymsTypes";
import React, { useContext } from "react";

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
    console.log("Workout is saved.", gym);

    alert("Saved");

    setReadSave([...readSave, gym]);
  };

  return (
    <button
      onClick={handleSave}
      className="btn btn-secondary"
    >
      Save
    </button>
  );
};

export default SaveButton;
