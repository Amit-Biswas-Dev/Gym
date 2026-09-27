
import React from 'react';
import bannerImg from "../../assets/banner.png";
import Image from "next/image";

const Banner = () => {
    return (
        <div className="container mx-auto grid grid-cols-2 items-center gap-6 rounded-4xl p-4">

           
            <div className="space-y-5">
                <p className="font-semibold">
                    WORKOUT LIBRARY
                </p>

                <h1 className="text-5xl font-bold">
                    TRAIN WITH INTENT. LOG EVERY SET.
                </h1>

                <p className="text-gray-500">
                    FitLog is a dark, no-nonsense gym companion: pick a lift,
                    lock it into today's plan, and watch the week's work add up.
                </p>

                <button className="btn btn-success">
                    BROWSE WORKOUTS
                </button>
            </div>

          
            <div className="flex items-center justify-center">
                <Image
                    src={bannerImg}
                    alt="Gym workout"
                    width={400}
                    height={400}
                />
            </div>

        </div>
    );
};

export default Banner;

