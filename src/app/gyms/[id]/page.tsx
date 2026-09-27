import Image from "next/image";
import Link from "next/link";
import { IGym } from "../../../types/gymsTypes";
import ReadButton from "@/components/gymDetails.tsx/ReadButton";
import SaveButton from "@/components/gymDetails.tsx/SaveButton";

interface GymDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const GymDetailsPage = async ({ params }: GymDetailsPageProps) => {
  const { id } = await params;

  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!response.ok) {
    throw new Error("Failed to fetch gym data");
  }

  const gyms: IGym[] = await response.json();

  const gym = gyms.find((item) => item.id === Number(id));

  if (!gym) {
    return (
      <div className="container mx-auto py-40 px-4 text-center text-white">
        <h1 className="text-3xl font-bold">Workout Not Found</h1>
        <Link
          href="/gyms"
          className="btn btn-primary mt-5 bg-[#CCFF00] text-black hover:bg-[#b8e600]"
        >
          Back to Workouts
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#090D14] py-12 px-4 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          
         
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-gray-900">
            <Image
              src={gym.image}
              alt={gym.name}
              fill
              priority
              className="object-cover"
            />
          </div>

         
          <div className="flex flex-col space-y-6">
            
          
            <div>
              <h1 className="text-3xl font-extrabold uppercase tracking-wide md:text-4xl">
                {gym.name}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {gym.description}
              </p>
            </div>

          
            <div className="flex flex-wrap gap-2">
              {gym.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#CCFF00] px-4 py-1 text-xs font-semibold uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

           
            <div className="divide-y divide-gray-800/80 rounded-2xl bg-[#121824] px-5 py-2 text-xs">
              <div className="flex justify-between py-3">
                <span className="font-semibold uppercase tracking-wider text-gray-400">
                  Equipment
                </span>
                <span className="font-medium text-gray-200">{gym.equipment}</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-semibold uppercase tracking-wider text-gray-400">
                  Difficulty
                </span>
                <span className="font-medium text-gray-200">{gym.difficulty}</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-semibold uppercase tracking-wider text-gray-400">
                  Sets
                </span>
                <span className="font-medium text-gray-200">{gym.sets}</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-semibold uppercase tracking-wider text-gray-400">
                  Reps
                </span>
                <span className="font-medium text-gray-200">{gym.reps}</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-semibold uppercase tracking-wider text-gray-400">
                  Duration
                </span>
                <span className="font-medium text-gray-200">{gym.duration} min</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-semibold uppercase tracking-wider text-gray-400">
                  Calories
                </span>
                <span className="font-medium text-gray-200">{gym.caloriesBurned} kcal</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-semibold uppercase tracking-wider text-gray-400">
                  Rating
                </span>
                <span className="font-medium text-gray-200">{gym.rating}</span>
              </div>
            </div>

           
            <div className="pt-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                Instructions
              </h2>
              <ol className="mt-3 space-y-2 text-xs leading-relaxed text-gray-300">
                {gym.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="font-semibold text-gray-400">{index + 1}.</span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <ReadButton gym={gym} />
              <SaveButton gym={gym} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GymDetailsPage;