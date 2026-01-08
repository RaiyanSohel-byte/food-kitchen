"use client";
import { CartContext } from "@/contexts/CartProvider";
import React, { use, useState } from "react";

const CartButton = ({ food }) => {
  const { addToCart } = use(CartContext);
  const [inCart, setInCart] = useState(false);
  const handleAddToCart = (food) => {
    setInCart(true);
    addToCart(food);
  };
  return (
    <button
      onClick={() => handleAddToCart(food)}
      disabled={inCart}
      className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 disabled:bg-gray-100 disabled:text-gray-300"
    >
      {inCart ? "Added" : "Add To Cart"}
    </button>
  );
};

export default CartButton;
