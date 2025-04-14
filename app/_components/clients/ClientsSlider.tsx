import SliderComponent from "../ui/Slider";
import ClientCard from "./ClientCard";
import { div as MotionDiv } from "motion/react-client";
import { childVariants } from "@/app/_lib/framerVarients";
import { ClientType } from "@/app/_lib/Types";

const ClientsSlider = ({ data }: { data: ClientType[] }) => {
  return (
    <SliderComponent options={{ slidesToShow: 2, slidesToScroll: 2 }}>
      {data.map((client) => (
        <MotionDiv
          variants={childVariants}
          key={client._id}
          className="p-3 sm:p-7"
        >
          <ClientCard client={client} />
        </MotionDiv>
      ))}
    </SliderComponent>
  );
};

export default ClientsSlider;
