import { Anek_Bangla } from "next/font/google";
import Image from "next/image";
import React from "react";

const anek = Anek_Bangla({
  weight: ["400"],
});
const ReviewsCard = ({ review }) => {
  return (
    <div
      key={review.id}
      className={`${anek.className} rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md`}
    >
      {/* User Info */}
      <div className="flex items-center gap-4">
        <Image
          width={48}
          height={48}
          src={review.photo}
          alt={review.user}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-slate-800">{review.user}</h4>
          <p className="text-xs text-slate-500">
            {new Date(review.date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-3 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < review.rating ? "text-yellow-400" : "text-slate-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p className="mt-3 line-clamp-4 text-sm text-slate-600">
        {review.review}
      </p>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
        <span>{review.likes.length} likes</span>
        <span>{review.rating}/5</span>
      </div>
    </div>
  );
};

export default ReviewsCard;
