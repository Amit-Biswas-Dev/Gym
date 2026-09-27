
"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useContext } from "react";
import { FiMenu } from "react-icons/fi";

import logo from "../../assets/logo.png";
import { GymContext } from "../../context/gymContext";

const Navbar = () => {
  const { readPlan, readSave } = useContext(GymContext);

  const planCount = readPlan?.length ?? 0;
  const savedCount = readSave?.length ?? 0;

  const links = (
    <>
      <li>
        <Link
          href="/gyms"
          className="rounded-lg px-4 py-2 text-gray-300 transition-all hover:bg-[#1f293d] hover:text-white"
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/listed_plan"
          className="rounded-lg px-4 py-2 text-gray-300 transition-all hover:bg-[#1f293d] hover:text-white"
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-[#0b0f17]/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="collapse rounded-xl border border-gray-800 bg-[#111827] lg:collapse-open">

          
          <input
            id="navbar-1-toggle"
            className="peer hidden"
            type="checkbox"
          />

          
          <div className="collapse-title navbar flex min-h-[auto] items-center justify-between p-2">

            
            <div className="navbar-start flex items-center gap-2">

              <label
                htmlFor="navbar-1-toggle"
                className="btn btn-ghost btn-sm text-gray-300 hover:text-white lg:hidden"
                aria-label="Toggle menu"
              >
                <FiMenu className="h-6 w-6" />
              </label>

              <Link
                href="/"
                className="flex items-center gap-3 px-2 text-xl font-extrabold tracking-wider text-white transition-opacity hover:opacity-90"
              >
                <Image
                  src={logo}
                  alt="Fitlog Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />

                <span>FITLOG</span>
              </Link>

            </div>

            
            <div className="navbar-center hidden lg:flex">
              <ul className="flex items-center gap-1 text-sm font-medium">
                {links}
              </ul>
            </div>

            
            <div className="navbar-end flex items-center justify-end">
              <div className="hidden items-center gap-3 sm:flex">

                
                <Link
                  href="/listed_plan"
                  className="flex items-center gap-2 rounded-lg bg-[#1f293d] px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-300 transition-all hover:bg-gray-700 hover:text-white"
                >
                  <span>Plan</span>

                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#CCFF00] text-[10px] font-black text-[#1E1E1E]">
                    {planCount}
                  </span>
                </Link>

                
                <Link
                  href="/saved"
                  className="flex items-center gap-2 rounded-lg bg-[#1f293d] px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-300 transition-all hover:bg-gray-700 hover:text-white"
                >
                  <span>Saved</span>

                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-600 bg-gray-800 text-[10px] font-bold text-gray-300">
                    {savedCount}
                  </span>
                </Link>

              </div>
            </div>

          </div>

         
          <div className="collapse-content border-t border-gray-800 pt-2 lg:hidden">
            <ul className="flex flex-col gap-1 py-2 text-sm font-medium">
              {links}
            </ul>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
