import Title from "@/components/shared/Title";

export default function ReviewsSkeleton() {
  return (
    <section className="bg-slate-50 py-12 animate-pulse">
      <div className="mx-auto max-w-6xl px-6">
        <Title>Customer Reviews</Title>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="rounded-2xl bg-white p-6 shadow-sm">
              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-200" />

                <div className="space-y-2">
                  <div className="h-4 w-28 rounded bg-slate-200" />
                  <div className="h-3 w-20 rounded bg-slate-200" />
                </div>
              </div>

              {/* Rating */}
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-4 w-4 rounded bg-slate-200" />
                ))}
              </div>

              {/* Review Text */}
              <div className="mt-4 space-y-2">
                <div className="h-4 w-full rounded bg-slate-200" />
                <div className="h-4 w-11/12 rounded bg-slate-200" />
                <div className="h-4 w-4/5 rounded bg-slate-200" />
              </div>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between">
                <div className="h-4 w-16 rounded bg-slate-200" />
                <div className="h-4 w-10 rounded bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
