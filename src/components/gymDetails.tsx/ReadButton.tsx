
"use client";

import { GymContext } from "@/context/gymContext";
import { IGym } from "@/types/gymsTypes";
import React, { useContext } from "react";

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
    console.log("Plan is added.", gym);

    alert("added");

    setReadPlan([...readPlan, gym]);
  };

  return (
    <button
      onClick={handlePlan}
      className="btn btn-primary"
    >
      Plan
    </button>
  );
};

export default ReadButton;

