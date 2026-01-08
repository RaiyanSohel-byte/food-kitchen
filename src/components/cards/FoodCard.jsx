import Link from "next/link";
import CartButton from "../buttons/CartButton";

export default function FoodCard({ food }) {
  return (
    <div
      key={food.id}
      className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={food.foodImg}
          alt={food.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-sm font-medium text-white backdrop-blur">
          {food.category}
        </span>
      </div>

      <div className="p-5">
        <h2 className="mb-2 line-clamp-1 text-lg font-semibold text-slate-800">
          {food.title}
        </h2>

        <div className="flex items-center gap-4">
          <p className="text-xl font-bold text-emerald-600">${food.price}</p>

          <Link
            href={`/foods/${food.id}`}
            className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
          >
            Details
          </Link>
          <CartButton food={food} />
        </div>
      </div>
    </div>
  );
}
