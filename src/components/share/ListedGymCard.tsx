import { IGym } from "@/types/gymsTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IListedGymCardProps {
  gym: IGym;
}

const ListedGymCard = ({ gym }: IListedGymCardProps) => {
  return (
    <div className="grid grid-rows-1 w-full overflow-hidden rounded-xl border border-base-300 bg-base-100 shadow-md transition hover:shadow-lg">

      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden bg-base-200">
        <Image
          src={gym.image}
          alt={gym.name}
          width={500}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-base-100/90 px-3 py-1 text-xs font-semibold shadow">
          {gym.difficulty}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h2 className="text-xl font-bold">{gym.name}</h2>
        <p className="text-sm text-base-content/70">
          Equipment: <span className="font-semibold">{gym.equipment}</span>
        </p>

        <div className="flex items-center gap-2">
          <span className="text-lg text-orange-400">★★★★★</span>
          <span className="font-semibold">{gym.rating}</span>
          <span className="text-sm text-base-content/50">/ 5.0</span>
        </div>

        <p className="text-sm text-base-content/70 line-clamp-2">
          {gym.description}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 border-t border-base-300 pt-4 text-center">
          <div>
            <p className="text-xs text-base-content/50">Duration</p>
            <p className="font-bold">{gym.duration} min</p>
          </div>
          <div>
            <p className="text-xs text-base-content/50">Calories</p>
            <p className="font-bold">{gym.caloriesBurned}</p>
          </div>
          <div>
            <p className="text-xs text-base-content/50">Sets</p>
            <p className="font-bold">{gym.sets}</p>
          </div>
          <div>
            <p className="text-xs text-base-content/50">Reps</p>
            <p className="font-bold">{gym.reps}</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 p-5 border-t border-base-300">
        <Link
          href={`/gyms/${gym.id}`}
          className="btn btn-primary flex-1 rounded-lg"
        >
          View Details
        </Link>
        <button
          type="button"
          className="btn btn-outline flex-1 rounded-lg"
        >
          Mark as Done
        </button>
      </div>
    </div>
  );
};

export default ListedGymCard;
