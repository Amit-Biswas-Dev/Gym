
import React from "react";
import Image from "next/image";
import { IGym } from "../../types/gymsTypes";
import Link from "next/link";

interface GymCardProps {
  gym: IGym;
}

const GymCard = ({ gym }: GymCardProps) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      
      <figure className="px-5 pt-5">
        <Image
          src={gym.image}
          alt={gym.name}
          width={500}
          height={300}
          className="h-60 w-full rounded-xl object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {gym.name}
        </h2>

        <p className="text-sm text-gray-500">
          {gym.description}
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {gym.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="badge badge-success"
            >
              {muscle}
            </span>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
          <p>
            <strong>Difficulty:</strong> {gym.difficulty}
          </p>

          <p>
            <strong>Duration:</strong> {gym.duration} min
          </p>

          <p>
            <strong>Sets:</strong> {gym.sets}
          </p>

          <p>
            <strong>Reps:</strong> {gym.reps}
          </p>

          <p>
            <strong>Calories:</strong> {gym.caloriesBurned}
          </p>

          <p>
            <strong>Rating:</strong> ⭐ {gym.rating}
          </p>
        </div>

        <div className="card-actions mt-4">
           <Link href={`/gyms/${gym.id}`} className="btn btn-primary w-full" > View Workout </Link>
          
        </div>
      </div>
    </div>
  );
};

export default GymCard;

