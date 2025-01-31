import React from "react";

export const ShimmerCard = () => {
  return (
    <div className="flex flex-col animate-pulse h-80 w-72 m-3 bg-slate-100">
      <div className="size-32 self-center my-7 text-center rounded-full bg-gray-200">
        <div className="grid" role="status">
          <svg
            aria-hidden="true"
            className="inline text-gray-200 animate-spin fill-blue-600"
            viewBox="0 0 100 101"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539..."
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div className="flex-1 space-y-6 py-1">
        <div className="h-5 mx-3 rounded bg-gray-200"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4 mx-3">
            <div className="col-span-2 h-5 rounded bg-gray-200"></div>
            <div className="col-span-1 h-5 rounded bg-gray-200"></div>
          </div>
          <div className="h-5 rounded mx-3 bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export const Shimmers = ({ count = 12 }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};
