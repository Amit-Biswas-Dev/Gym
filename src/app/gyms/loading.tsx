
const Loading = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#0b0f17]">
      <div className="flex flex-col items-center gap-5">
        <span className="loading loading-spinner loading-lg text-[#ccff00]"></span>

        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          Loading workouts...
        </p>
      </div>
    </div>
  );
};

export default Loading;
