"use client";
import { CartContext } from "@/contexts/CartProvider";
import React, { use } from "react";

const CartItems = () => {
  const { cart } = use(CartContext);
  return (
    <div>
      <h3 className="text-3xl font-bold text-center my-5">
        Cart Items : {cart.length}
      </h3>
      <div className="my-5 space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="bg-gray-100 p-5 rounded-xl">
            <h3 className="text-md font-bold">{item.title}</h3>
            <p className="font-bold text-green-500 text-md">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItems;
