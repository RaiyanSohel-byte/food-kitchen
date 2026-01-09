import FoodCard from "@/components/cards/FoodCard";
import CartItems from "@/components/cartItems/CartItems";
import InputSearch from "@/components/input/InputSearch";
import Title from "@/components/shared/Title";
import React from "react";

const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`
  );
  const data = await res.json();
  return data.foods || [];
};
export const metadata = {
  title: "Foods",
  description: "Browse All Foods Available",
};
const FoodPage = async ({ searchParams }) => {
  const { search = "" } = await searchParams;
  const foods = await getFoods(search);
  return (
    <div>
      <Title>Foods</Title>
      <div>
        <InputSearch />
      </div>
      <div className="flex gap-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
        <div className="w-[250px] mx-auto rounded-xl border px-4">
          <CartItems />
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
