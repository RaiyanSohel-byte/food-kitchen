import Title from "@/components/shared/Title";
import { FoodCardSkeleton } from "@/components/skeletons/FoodCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Title>Foods</Title>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[...Array(12)].map((_, i) => (
          <FoodCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default loading;
