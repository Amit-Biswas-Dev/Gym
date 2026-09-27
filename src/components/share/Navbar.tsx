
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/gyms">Workouts</Link>
      </li>

      <li>
        <Link href="/listed_plan">My Plan</Link>
      </li>

      <li>
        <Link href="/saved">Saved</Link>
      </li>
    </>
  );

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="collapse rounded-md bg-base-200 shadow-sm lg:collapse-open">
        
        {/* Hidden checkbox */}
        <input
          id="navbar-1-toggle"
          className="peer hidden"
          type="checkbox"
        />

        {/* Navbar */}
        <div className="collapse-title navbar p-2">
          
          {/* Left */}
          <div className="navbar-start">
            {/* Mobile menu button */}
            <label
              htmlFor="navbar-1-toggle"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            {/* Logo */}
            <Link
              href="/"
              className="btn btn-ghost text-xl font-bold"
            >
              FITLOG
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links}
            </ul>
          </div>

          {/* Right */}
          <div className="navbar-end">
            <div className="hidden items-center gap-2 sm:flex">
              <Link
                href="/listed_plan"
                className="btn btn-ghost"
              >
                Plan
              </Link>

              <Link
                href="/saved"
                className="btn btn-ghost"
              >
                Saved
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="collapse-content lg:hidden">
          <ul className="menu">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

