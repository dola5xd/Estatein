import {
  section as MotionSection,
  div as MotionDiv,
} from "motion/react-client";
import ValueCard from "../about/ValueCard";
import SectionStars from "../ui/SectionStars";
import { createCardVariants } from "@/app/_lib/framerVarients";
import { containerVariants } from "@/app/_lib/framerVarients";
import { valuesData } from "@/app/_lib/Constants";
import Link from "next/link";

const cardVariants = createCardVariants("slide-right", 400);

function PropertyValue() {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-y-7 p-10 md:p-20"
    >
      <SectionStars />
      <div className="flex flex-col gap-y-2">
        <h2 className="text-4xl font-semibold">Unlock Property Value</h2>
        <p className="text-sm text-grey-100 lg:w-3/4">
          Selling your property should be a rewarding experience, and at
          Estatein, we make sure it is. Our Property Selling Service is designed
          to maximize the value of your property, ensuring you get the best deal
          possible. Explore the categories below to see how we can help you at
          every step of your selling journey
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {valuesData.map((value) => (
          <MotionDiv
            className="py-10 px-7 col-span-3 lg:col-span-1 row-span-1 flex flex-col gap-y-4 ring ring-grey-500 rounded-xl"
            key={value.id}
            variants={cardVariants}
          >
            <ValueCard value={value} />
          </MotionDiv>
        ))}
        <MotionDiv
          className="py-10 px-10 col-span-3 lg:col-span-2 row-span-1 flex flex-col gap-y-4 ring ring-grey-500 rounded-xl bg-value bg-grey-700 "
          variants={cardVariants}
        >
          <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center justify-between">
            <h2 className="font-bold text-xl md:text-2xl">
              Unlock the Value of Your Property Today
            </h2>
            <Link href={"/properties"} className="w-full">
              <button
                type="button"
                className="cursor-pointer w-full bg-grey-700 ring ring-grey-500 py-3 px-7 rounded-xl"
              >
                Learn More
              </button>
            </Link>
          </div>
          <p className="my-4 lg:my-0 text-grey-100">
            Ready to unlock the true value of your property? Explore our
            Property Selling Service categories and let us help you achieve the
            best deal possible for your valuable asset.
          </p>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}

export default PropertyValue;
