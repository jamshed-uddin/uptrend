import React from "react";

const CardSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col gap-2 p-4 border rounded-md shadow-md">
      <div className="h-32 bg-gray-200 rounded-md"></div>
      <div className="h-4 bg-gray-200 rounded-md w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded-md w-1/3"></div>
      <div className="h-4 bg-gray-200 rounded-md w-full"></div>
    </div>
  );
};

const CardListSkeleton = () => {
  return (
    <div>
      {Array.from({ length: 5 }).map((_, inx) => (
        <CardSkeleton key={idx} />
      ))}
    </div>
  );
};

export default CardListSkeleton;
