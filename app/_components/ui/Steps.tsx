import * as motion from "motion/react-client";
import SectionStars from "../ui/SectionStars";
import { childVariants, containerVariants } from "@/app/_lib/framerVarients";
import StepCard from "../card/StepCard";
import { steps } from "@/app/_lib/Constants";

function Steps() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col px-10 xl:p-20 gap-y-7"
    >
      <motion.div
        variants={containerVariants}
        className="relative flex flex-col justify-center col-span-1 gap-y-7"
      >
        <SectionStars />
        <motion.h1
          className="text-4xl font-semibold text-balance"
          variants={childVariants}
        >
          Navigating the Estatein Experience
        </motion.h1>
        <motion.p className="text-gray-400" variants={childVariants}>
          At Estatein, we&apos;ve designed a straightforward process to help you
          find and purchase your dream property with ease. Here&apos;s a
          step-by-step guide to how it all works.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-3 grid-rows-2 gap-y-10 gap-x-4"
        variants={containerVariants}
      >
        {steps.map((step) => (
          <StepCard step={step} key={step.id} />
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Steps;
