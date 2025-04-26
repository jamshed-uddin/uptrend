import React from "react";

const CardSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col gap-2  border rounded-md ">
      <div className="h-80 bg-gray-200 rounded-md"></div>
      <div className="h-4 bg-gray-200 rounded-md w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded-md w-1/3"></div>
      <div className="h-4 bg-gray-200 rounded-md w-full"></div>
    </div>
  );
};

const CardListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {Array.from({ length: 4 }).map((_, idx) => (
        <CardSkeleton key={idx} />
      ))}
    </div>
  );
};

export default CardListSkeleton;
