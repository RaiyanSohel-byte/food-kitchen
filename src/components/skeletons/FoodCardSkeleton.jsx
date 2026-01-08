import Title from "../shared/Title";

export function FoodCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md">
      {/* Image Skeleton */}
      <div className="relative h-56 w-full animate-pulse bg-slate-200">
        {/* Category pill */}
        <div className="absolute left-4 top-4 h-6 w-20 rounded-full bg-slate-300" />
      </div>

      <div className="p-5 space-y-4">
        {/* Title Skeleton */}
        <div className="h-5 w-3/4 animate-pulse rounded-md bg-slate-200" />

        <div className="flex items-center justify-between">
          {/* Price Skeleton */}
          <div className="h-6 w-20 animate-pulse rounded-md bg-slate-200" />

          {/* Button Skeleton */}
          <div className="h-10 w-24 animate-pulse rounded-xl bg-slate-300" />
        </div>
      </div>
    </div>
  );
}
