import ReviewsCard from "@/components/cards/ReviewsCard";
import Title from "@/components/shared/Title";

const getReviews = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/reviews",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.reviews || [];
};
export const metadata = {
  title: "Reviews",
  description: "What our users say",
};
export default async function Reviews() {
  const reviews = await getReviews();

  return (
    <section className="bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <Title>Customer Reviews</Title>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewsCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
