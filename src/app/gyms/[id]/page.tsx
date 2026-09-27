
import Image from "next/image";
import Link from "next/link";
import { IGym } from "../../../types/gymsTypes";
import ReadButton from "@/components/gymDetails.tsx/ReadButton";

interface GymDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const GymDetailsPage = async ({ params }: GymDetailsPageProps) => {
  const { id } = await params;

  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch gym data");
  }

  const gyms: IGym[] = await response.json();

  const gym = gyms.find((item) => item.id === Number(id));

  if (!gym) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold">Workout Not Found</h1>

        <Link
          href="/gyms"
          className="btn btn-primary mt-5"
        >
          Back to Workouts
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">

      <div className="card card-side flex-col overflow-hidden bg-base-100 shadow-xl md:flex-row">

        
        <figure className="md:w-1/2">
          <Image
            src={gym.image}
            alt={gym.name}
            width={600}
            height={500}
            className="h-full w-full object-cover"
          />
        </figure>

        
        <div className="card-body md:w-1/2">

          <h1 className="card-title text-3xl font-bold">
            {gym.name}
          </h1>

          <p className="text-gray-500">
            {gym.description}
          </p>

         
          <div className="flex flex-wrap gap-2">
            {gym.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="badge badge-success"
              >
                {muscle}
              </span>
            ))}
          </div>

          
          <div className="mt-4 grid grid-cols-2 gap-4">

            <div>
              <p className="font-semibold">Difficulty</p>
              <p>{gym.difficulty}</p>
            </div>

            <div>
              <p className="font-semibold">Duration</p>
              <p>{gym.duration} minutes</p>
            </div>

            <div>
              <p className="font-semibold">Equipment</p>
              <p>{gym.equipment}</p>
            </div>

            <div>
              <p className="font-semibold">Calories</p>
              <p>{gym.caloriesBurned}</p>
            </div>

            <div>
              <p className="font-semibold">Sets</p>
              <p>{gym.sets}</p>
            </div>

            <div>
              <p className="font-semibold">Reps</p>
              <p>{gym.reps}</p>
            </div>

            <div>
              <p className="font-semibold">Rating</p>
              <p>⭐ {gym.rating}</p>
            </div>

          </div>

          
          <div className="mt-5">
            <h2 className="text-xl font-bold">
              Instructions
            </h2>

            <ol className="mt-2 list-inside list-decimal space-y-2">
              {gym.instructions.map((instruction, index) => (
                <li key={index}>
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          <div className="card-actions mt-6">
            <ReadButton></ReadButton>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GymDetailsPage;

