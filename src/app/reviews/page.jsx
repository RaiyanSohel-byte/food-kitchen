import Title from "@/components/shared/Title";
import React from "react";
const getReviews = async () => {
  const res = await fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews");
  const data = await res.json();
  return data.reviews || [];
};
const Reviews = () => {
  return (
    <div>
      <Title>Reviews</Title>
      <div></div>
    </div>
  );
};

export default Reviews;
