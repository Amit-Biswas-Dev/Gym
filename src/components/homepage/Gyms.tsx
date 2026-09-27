
"use client";

import React, { useEffect, useState } from "react";
import GymCard from "../share/GymCard";
import { IGym } from "../../types/gymsTypes";

const Gyms = () => {
  const [gyms, setGyms] = useState<IGym[]>([]);

  useEffect(() => {
    const fetchGyms = async () => {
      try {
        const response = await fetch(
          "https://api.abcz.workers.dev/api/fitlog"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch gym data");
        }

        const data: IGym[] = await response.json();

        console.log(data);

        setGyms(data);
      } catch (error) {
        console.error("Error fetching gyms:", error);
      }
    };

    fetchGyms();
  }, []);

  return (
    <div className="container mx-auto my-17.5 ">
     <div className="p-4 my-4">
       <h2 className="mb-4 text-2xl font-bold">THE LIABRAY</h2>
      <p className="text-[#9CA3AF]"> Twelve lifts covering every major muscle group.</p>
     </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
        {gyms.map((gym) => (
          <GymCard key={gym.id} gym={gym} />
        ))}
      </div>
    </div>
  );
};

export default Gyms;

