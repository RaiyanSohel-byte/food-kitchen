import FoodCard from "@/components/cards/FoodCard";
import Title from "@/components/shared/Title";
import React from "react";

const getFoods = async () => {
  const res = await fetch(
    " https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
  );
  const data = await res.json();
  return data.foods || [];
};
const FoodPage = async () => {
  const foods = await getFoods();
  return (
    <div>
      <Title>Foods : {foods.length}</Title>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodPage;
