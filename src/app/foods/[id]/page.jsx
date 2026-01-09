import Title from "@/components/shared/Title";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );

  const { details = {} } = await res.json();
  return {
    title: details.title,
  };
}
const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );

  const data = await res.json();
  return data.details;
};

export default async function FoodDetails({ params }) {
  const { id } = await params;
  const food = await getSingleFood(id);
  console.log(food);
  if (!food) {
    return (
      <div className="p-8 text-center">
        <Title>Food Not Found</Title>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <Image
              width={300}
              height={420}
              src={food?.foodImg}
              alt={food?.title}
              className="h-[420px] w-full object-cover transition-transform duration-500 hover:scale-105"
            />

            <span className="absolute left-6 top-6 rounded-full bg-black/70 px-4 py-1 text-sm font-semibold text-white backdrop-blur">
              {food?.category}
            </span>
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center space-y-6">
            <Title>{food?.title}</Title>

            <div className="flex flex-wrap gap-4">
              <div className="rounded-xl bg-white px-5 py-3 shadow-sm">
                <p className="text-sm text-slate-500">Cuisine</p>
                <p className="font-semibold text-slate-800">{food.area}</p>
              </div>

              <div className="rounded-xl bg-white px-5 py-3 shadow-sm">
                <p className="text-sm text-slate-500">Price</p>
                <p className="text-xl font-bold text-emerald-600">
                  ${food?.price}
                </p>
              </div>
            </div>

            <p className="max-w-lg text-slate-600">
              A delicious {food.category?.toLowerCase()} dish crafted with rich
              flavors and authentic taste. Perfect for food lovers who enjoy
              premium quality meals.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {food?.video && (
                <a
                  href={food?.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Watch Recipe Video
                </a>
              )}

              <button className="rounded-xl border border-emerald-600 px-6 py-3 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
