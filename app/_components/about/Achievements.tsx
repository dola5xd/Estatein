import * as motion from "motion/react-client";
import SectionStars from "../ui/SectionStars";
import { containerVariants } from "@/app/_lib/framerVarients";
import { childVariants } from "@/app/_lib/framerVarients";

function Achievements() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col p-10 xl:p-20 gap-y-7"
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
          Our Achievements
        </motion.h1>
        <motion.p className="text-gray-400" variants={childVariants}>
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary.
        </motion.p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center px-0 sm:px-10 gap-x-10 lg:flex-row gap-y-10"
        variants={containerVariants}
      >
        <motion.div
          variants={childVariants}
          className="flex flex-col gap-y-1.5 ring-2 ring-grey-500 p-10 rounded-xl w-full lg:w-1/3 lg:min-h-[200px] xl:min-h-[225px] lg:gap-y-3"
        >
          <h3 className="text-2xl font-semibold">3+ Years of Excellence</h3>
          <p className="text-sm text-grey-100 sm:text-base lg:text-sm xl:text-base">
            With over 3 years in the industry, we&apos;ve amassed a wealth of
            knowledge and experience, becoming a go-to resource for all things
            real estate.
          </p>
        </motion.div>
        <motion.div
          variants={childVariants}
          className="flex flex-col gap-y-1.5 ring-2 ring-grey-500 p-10 rounded-xl w-full lg:w-1/3 lg:min-h-[200px] xl:min-h-[225px] lg:gap-y-3"
        >
          <h3 className="text-2xl font-semibold">Happy Clients</h3>
          <p className="text-sm text-grey-100 sm:text-base lg:text-sm xl:text-base">
            Our greatest achievement is the satisfaction of our clients. Their
            success stories fuel our passion for what we do.
          </p>
        </motion.div>
        <motion.div
          variants={childVariants}
          className="flex flex-col gap-y-1.5 ring-2 ring-grey-500 p-10 rounded-xl w-full lg:w-1/3 lg:min-h-[200px] xl:min-h-[225px] lg:gap-y-3"
        >
          <h3 className="text-2xl font-semibold">Industry Recognition</h3>
          <p className="text-sm text-grey-100 sm:text-base lg:text-sm xl:text-base">
            We&apos;ve earned the respect of our peers and industry leaders,
            with accolades and awards that reflect our commitment to excellence.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Achievements;
