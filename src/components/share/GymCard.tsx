
import React from "react";
import Image from "next/image";
import { IGym } from "../../types/gymsTypes";
import Link from "next/link";
import { MdOutlineAccessTime } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FaCloudscale } from "react-icons/fa6";

interface GymCardProps {
  gym: IGym;
}

const GymCard = ({ gym }: GymCardProps) => {
  return (
    <Link href={`/gyms/${gym.id}`} className="block">
      <div className="card h-full w-full bg-[#000000] text-[#1E1E1E] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

        
        <figure className="px-5 pt-5">
          <Image
            src={gym.image}
            alt={gym.name}
            width={400}
            height={195}
            className="h-[195px] w-full rounded-xl object-cover"
          />
        </figure>

      
        <div className="card-body">

         
          <div className="mt-2 flex flex-wrap gap-2 text-[#C2F800]">
            {gym.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="badge badge-success"
              >
                {muscle}
              </span>
            ))}
          </div>

        
          <h2 className="card-title text-[#e9e0e0]">
            {gym.name}
          </h2>

         
          <p className="text-[#9CA3AF]">
            {gym.equipment}
          </p>

         
          <hr className="my-2 border-gray-200" />

         
          <div className="mt-3 grid grid-cols-3 gap-2 text-sm">

        
            <p className="flex items-center gap-2 text-[#9CA3AF]">
            <MdOutlineAccessTime className="text-lg" />
            {gym.duration} min
            </p>


          
            <p className="flex items-center gap-2 text-[#9CA3AF]">
             
               <FaCloudscale />
              {gym.caloriesBurned}
            </p>

          
            <p className="flex items-center gap-2 text-[#9CA3AF]">
              
                <CiStar />
               {gym.rating}
            </p>

          </div>

        </div>
      </div>
    </Link>
  );
};

export default GymCard;
