import { FoodCardSkeleton } from "@/components/skeletons/FoodCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {[...Array(12)].map((_, i) => (
        <FoodCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default loading;
