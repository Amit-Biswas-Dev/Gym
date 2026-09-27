
import Link from "next/link";
import { FiArrowLeft, FiAlertTriangle } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b0f17] px-6 text-white">
      <div className="w-full max-w-lg text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gray-800 bg-[#111827] text-[#ccff00]">
            <FiAlertTriangle className="h-10 w-10" />
          </div>
        </div>

        <p className="mb-2 text-sm font-bold uppercase tracking-[0.3em] text-[#ccff00]">
          FITLOG
        </p>

        <h1 className="text-7xl font-black tracking-tight">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-extrabold uppercase">
          Page Not Found
        </h2>

        <p className="mx-auto mt-3 max-w-md text-gray-400">
          The workout or page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ccff00] px-6 py-3 font-bold text-[#1e1e1e] transition-all hover:bg-[#b3e600]"
        >
          <FiArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

