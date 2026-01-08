export default function FoodDetailsSkeleton() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 animate-pulse">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Image Skeleton */}
          <div className="relative h-[420px] overflow-hidden rounded-3xl bg-slate-200 shadow-xl">
            <div className="absolute left-6 top-6 h-7 w-24 rounded-full bg-slate-300" />
          </div>

          {/* Details Skeleton */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Title */}
            <div className="h-10 w-3/4 rounded-lg bg-slate-200" />

            {/* Meta Cards */}
            <div className="flex flex-wrap gap-4">
              <div className="h-16 w-40 rounded-xl bg-white shadow-sm">
                <div className="m-4 h-4 w-20 rounded bg-slate-200" />
                <div className="m-4 h-5 w-24 rounded bg-slate-300" />
              </div>

              <div className="h-16 w-32 rounded-xl bg-white shadow-sm">
                <div className="m-4 h-4 w-16 rounded bg-slate-200" />
                <div className="m-4 h-6 w-20 rounded bg-slate-300" />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <div className="h-4 w-full rounded bg-slate-200" />
              <div className="h-4 w-11/12 rounded bg-slate-200" />
              <div className="h-4 w-3/4 rounded bg-slate-200" />
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="h-12 w-48 rounded-xl bg-slate-300" />
              <div className="h-12 w-40 rounded-xl bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
