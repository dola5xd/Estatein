import {
  section as MotionSection,
  div as MotionDiv,
} from "motion/react-client";
import ValueCard from "../about/ValueCard";
import SectionStars from "../ui/SectionStars";
import { createCardVariants } from "@/app/_lib/framerVarients";
import { containerVariants } from "@/app/_lib/framerVarients";
import { propertyDecisions } from "@/app/_lib/Constants";

const cardVariants = createCardVariants("scale");

function PropertyDecisions() {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col p-10 gap-y-2 xl:p-20"
    >
      <SectionStars />
      <div className="grid grid-cols-3 gap-7">
        <div className="flex flex-col col-span-3 lg:col-span-1 gap-y-7">
          <div className="flex flex-col gap-y-1.5">
            <h2 className="text-4xl font-semibold leading-snug">
              Smart Investments, Informed Decisions
            </h2>
            <p className="text-sm text-grey-100">
              Building a real estate portfolio requires a strategic approach.
              Estatein&apos;s Investment Advisory Service empowers you to make
              smart investments and informed decisions.
            </p>
          </div>
          <div className="flex flex-col p-10 bg-grey-700 bg-value ring ring-grey-500 rounded-2xl gap-y-4">
            <h5 className="text-xl font-bold md:text-2xl">
              Unlock Your Investment Potential
            </h5>
            <p className="text-sm text-grey-100">
              Explore our Property Management Service categories and let us
              handle the complexities while you enjoy the benefits of property
              ownership.
            </p>
            <button className="py-3 duration-500 rounded cursor-pointer bg-grey-800 hover:bg-primary-800">
              Learn More
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 col-span-3 grid-rows-2 gap-3 p-4 lg:col-span-2 bg-grey-700 rounded-xl">
          {propertyDecisions.map((value) => (
            <MotionDiv
              className="flex flex-col col-span-2 row-span-1 py-10 duration-500 lg:col-span-1 px-7 gap-y-4 ring ring-grey-500 rounded-xl bg-grey-800 hover:scale-105"
              key={value.id}
              variants={cardVariants}
            >
              <ValueCard value={value} />
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

export default PropertyDecisions;
