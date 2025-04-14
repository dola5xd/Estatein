import {
  section as MotionSection,
  div as MotionDiv,
} from "motion/react-client";
import { createCardVariants } from "@/app/_lib/framerVarients";
import ValueCard from "../about/ValueCard";
import SectionStars from "../ui/SectionStars";
import { containerVariants } from "@/app/_lib/framerVarients";
import { propertyMangments } from "@/app/_lib/Constants";

const cardVariants = createCardVariants("slide-left", 400);

function PropertyMangment() {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col p-10 gap-y-7 xl:p-20"
    >
      <SectionStars />
      <div className="flex flex-col gap-y-2">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Effortless Property Management
        </h2>
        <p className="text-sm text-grey-100 lg:w-3/4">
          Owning a property should be a pleasure, not a hassle. Estatein&apos;s
          Property Management Service takes the stress out of property
          ownership.
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {propertyMangments.map((value) => (
          <MotionDiv
            className="flex flex-col col-span-3 row-span-1 py-10 px-7 lg:col-span-1 gap-y-4 ring ring-grey-500 rounded-xl"
            key={value.id}
            variants={cardVariants}
          >
            <ValueCard value={value} />
          </MotionDiv>
        ))}
        <MotionDiv
          className="flex flex-col col-span-3 row-span-1 p-10 lg:col-span-2 gap-y-4 ring ring-grey-500 bg-value bg-grey-700 rounded-xl "
          variants={cardVariants}
        >
          <div className="flex flex-col justify-between gap-y-4 lg:flex-row lg:items-center">
            <h2 className="text-2xl font-bold">
              Experience Effortless Property Management
            </h2>
            <button
              type="button"
              className="py-3 cursor-pointer bg-grey-700 ring ring-grey-500 px-7 rounded-xl"
            >
              Learn More
            </button>
          </div>
          <p className="text-sm md:text-base text-grey-100">
            Ready to experience hassle-free property management? Explore our
            Property Management Service categories and let us handle the
            complexities while you enjoy the benefits of property ownership.
          </p>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}

export default PropertyMangment;
