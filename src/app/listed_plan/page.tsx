
"use client";

import GymCard from "../../components/share/GymCard";
import { GymContext } from "@/context/gymContext";
import { IGym } from "@/types/gymsTypes";
import Link from "next/link";
import React, { useContext, useState, useMemo } from "react";
import { FiX } from "react-icons/fi";

const ListedPlanPage = () => {
  const context = useContext(GymContext);

  if (!context) {
    throw new Error("ListedPlanPage must be used inside GymProvider");
  }

  const {
    readPlan = [],
    readSave = [],
    removeFromPlan,
    removeFromSave,
  } = context as {
    readPlan: IGym[];
    readSave: IGym[];
    removeFromPlan?: (id: number) => void;
    removeFromSave?: (id: number) => void;
  };

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("saved");

  const [sortBy, setSortBy] = useState<
    "rating" | "duration" | "calories"
  >("duration");

  
  const totalExercises = readPlan.length;

  const totalMinutes = readPlan.reduce(
    (acc, item) => acc + (item.duration || 0),
    0
  );

  const totalCalories = readPlan.reduce(
    (acc, item) => acc + (item.caloriesBurned || 0),
    0
  );

  
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

  const currentList = activeTab === "plan" ? readPlan : readSave;

  const sortedList = useMemo(
    () => sortGyms(currentList),
    [currentList, sortBy]
  );

  
  const handleRemove = (id: number) => {
    if (activeTab === "plan") {
      removeFromPlan?.(id);
    } else {
      removeFromSave?.(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] px-6 py-8 font-sans text-white">
      <div className="mx-auto max-w-6xl space-y-8">

        
        <div>
          <h1 className="text-3xl font-extrabold uppercase tracking-wide">
            MY PLAN
          </h1>

          <p className="mt-1 text-sm text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        
        <div className="grid grid-cols-3 rounded-xl border border-gray-800 bg-[#111827] p-6 text-center md:text-left">

          <div className="border-r border-gray-800 pr-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Exercises
            </p>

            <p className="text-4xl font-extrabold text-[#a3e635]">
              {totalExercises}
            </p>
          </div>

          <div className="border-r border-gray-800 px-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Minutes
            </p>

            <p className="text-4xl font-extrabold text-white">
              {totalMinutes}
            </p>
          </div>

          <div className="pl-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Calories
            </p>

            <p className="text-4xl font-extrabold text-white">
              {totalCalories}
            </p>
          </div>

        </div>

        
        <div className="flex flex-col items-center justify-between gap-4 py-2 sm:flex-row">

         
          <div className="flex w-full rounded-lg border border-gray-800 bg-[#111827] p-1 sm:w-auto">

            <button
              onClick={() => setActiveTab("plan")}
              className={`rounded-md px-5 py-2 text-sm font-semibold transition-all ${
                activeTab === "plan"
                  ? "bg-[#1f293d] text-white shadow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-5 py-2 text-sm font-semibold transition-all ${
                activeTab === "saved"
                  ? "bg-[#1f293d] text-white shadow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>

          </div>

          
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Sort By</span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as
                    | "rating"
                    | "duration"
                    | "calories"
                )
              }
              className="rounded-lg border border-gray-800 bg-[#111827] px-3 py-2 text-sm text-white outline-none focus:border-gray-600"
            >
              <option value="duration">Duration</option>
              <option value="rating">Rating</option>
              <option value="calories">Calories Burned</option>
            </select>
          </div>

        </div>

        <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-gray-800 bg-[#111827] p-6 md:p-8">

          {sortedList.length > 0 ? (

            <div className="grid w-full grid-cols-1 gap-4">

              {sortedList.map((gym: IGym) => (

                <div
                  key={gym.id}
                  className="group relative"
                >

                  <GymCard gym={gym} />

                 
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleRemove(gym.id);
                    }}
                    className="absolute right-4 top-1/2 z-10 -translate-y-1/2 p-2 text-gray-500 transition-colors hover:text-red-500"
                    aria-label="Remove item"
                  >
                    <FiX className="h-5 w-5" />
                  </button>

                </div>

              ))}

            </div>

          ) : (

           
            <div className="space-y-4 py-8 text-center">

              <h3 className="text-xl font-extrabold uppercase tracking-wide text-white">
                NOTHING HERE YET
              </h3>

              <p className="mx-auto max-w-sm text-sm text-gray-400">
                Browse the library and add a lift to get today moving.
              </p>

              <div className="pt-2">

                <Link
                  href="/gyms"
                  className="inline-block rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black shadow-lg transition-all hover:bg-[#b3e600]"
                >
                  Go to workouts
                </Link>

              </div>

            </div>

          )}

        </div>

      </div>
    </div>
  );
};

export default ListedPlanPage;

