import {
  section as MotionSection,
  div as MotionDiv,
} from "motion/react-client";
import ServiceCard from "../card/ServiceCard";
import { createCardVariants } from "@/app/_lib/framerVarients";
import { containerVariants } from "@/app/_lib/framerVarients";
import { serviceType } from "@/app/_lib/Types";
import { ReactElement } from "react";

const cardVariants = createCardVariants("slide-up", 40);

function HeroCards({
  data,
  children,
}: {
  data: serviceType[];
  children?: ReactElement[];
}) {
  return (
    <MotionSection
      id="Features"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="grid items-center grid-cols-2 gap-3 px-4 py-4 mx-4 rounded-lg ring-2 ring-grey-500 lg:border-y-1 lg:border-grey-500 lg:grid-cols-4 lg:gap-7 lg:px-10 lg:py-7 "
    >
      {data?.map((service) => (
        <MotionDiv
          className="relative flex flex-col items-center w-full px-4 py-10 cols-span-1 bg-grey-700 lg:px-7 ring-1 ring-grey-500 rounded-xl justify-center gap-y-7 min-h-[175px] lg:min-h-[200px]"
          key={service.id}
          variants={cardVariants}
        >
          <ServiceCard service={service} />
        </MotionDiv>
      ))}
      {children && (
        <MotionDiv
          className="relative flex flex-col items-center w-full px-4 py-10 cols-span-1 bg-grey-700 lg:px-7 ring-1 ring-grey-500 rounded-xl justify-center gap-y-7 min-h-[175px] lg:min-h-[200px]"
          variants={cardVariants}
        >
          {children}
        </MotionDiv>
      )}
    </MotionSection>
  );
}

export default HeroCards;
