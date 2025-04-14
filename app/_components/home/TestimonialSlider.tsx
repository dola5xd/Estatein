import { RatingType } from "@/app/_lib/Types";
import RatingCard from "../card/RatingCard";
import SliderComponent from "../ui/Slider";

const TestimonialSlider = ({ rating }: { rating: RatingType[] }) => {
  return (
    <SliderComponent>
      {rating.map((rate) => (
        <div key={rate._id} className="px-2 py-7">
          <RatingCard rate={rate} />
        </div>
      ))}
    </SliderComponent>
  );
};

export default TestimonialSlider;
