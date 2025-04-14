import { ratingQuery, sanityOptions } from "@/app/_lib/Queries";
import { client } from "@/app/_lib/SanityClient";
import SectionStars from "../ui/SectionStars";
import TestimonialSlider from "./TestimonialSlider";
import { RatingType } from "@/app/_lib/Types";

const Testimonials = async () => {
  const rating = await client.fetch<RatingType[]>(
    ratingQuery,
    {},
    sanityOptions
  );
  return (
    <section
      id="Testimonials"
      className="py-20 px-7 xl:px-20 flex flex-col gap-y-7"
    >
      <div className="flex flex-col gap-y-4">
        <SectionStars />
        <h1 className="text-3xl font-semibold">What Our Clients Say</h1>
        <p className="text-grey-100">
          Read the success stories and heartfelt testimonials from our valued
          clients. Discover why they chose Estatein for their real estate needs.
        </p>
      </div>
      <TestimonialSlider rating={rating} />
    </section>
  );
};

export default Testimonials;
