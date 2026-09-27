
"use client";

import GymCard from "../../components/share/GymCard";
import { GymContext } from "@/context/gymContext";
import { IGym } from "@/types/gymsTypes";
import React, { useContext, useState } from "react";

const ListedPlanPage = () => {
  const context = useContext(GymContext);

  if (!context) {
    throw new Error("ListedPlanPage must be used inside GymProvider");
  }

  const { readPlan, readSave } = context;

  const [sortBy, setSortBy] = useState<
    "rating" | "duration" | "calories"
  >("rating");

  // Sorting function
  const sortGyms = (gyms: IGym[]) => {
    const sortedGyms = [...gyms];

    if (sortBy === "rating") {
      sortedGyms.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "duration") {
      sortedGyms.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      sortedGyms.sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned
      );
    }

    return sortedGyms;
  };

  const sortedReadPlan = sortGyms(readPlan);
  const sortedSaved = sortGyms(readSave);

  return (
    <div className="container mx-auto px-4 py-5">
      {/* Page Title */}
      <h2 className="my-4 rounded-3xl bg-green-100 py-16 text-center text-4xl font-bold">
        My Workouts
      </h2>

      {/* Sorting */}
      <div className="mb-6 text-center">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(
              e.target.value as "rating" | "duration" | "calories"
            )
          }
          className="select select-success"
        >
          <option value="rating">Rating</option>
          <option value="duration">Duration</option>
          <option value="calories">Calories Burned</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-lift">
        {/* My Plan */}
        <input
          type="radio"
          name="gym_tabs"
          className="tab"
          aria-label={`My Plan (${readPlan.length})`}
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-6">
          {sortedReadPlan.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 ">
              {sortedReadPlan.map((gym: IGym) => (
                <GymCard
                  key={gym.id}
                  gym={gym}
                />
              ))}
            </div>
          ) : (
            <p className="py-10 text-center text-lg font-semibold">
              No workouts added to your plan.
            </p>
          )}
        </div>

        {/* Saved */}
        <input
          type="radio"
          name="gym_tabs"
          className="tab"
          aria-label={`Saved (${readSave.length})`}
        />

        <div className="tab-content border-base-300 bg-base-100 p-6">
          {sortedSaved.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 ">
              {sortedSaved.map((gym: IGym) => (
                <GymCard
                  key={gym.id}
                  gym={gym}
                />
              ))}
            </div>
          ) : (
            <p className="py-10 text-center text-lg font-semibold">
              No saved workouts found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedPlanPage;

