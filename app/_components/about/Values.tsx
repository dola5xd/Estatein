import * as motion from "motion/react-client";
import SectionStars from "../ui/SectionStars";
import { GraduationCapIcon, Star, Users } from "lucide-react";
import { containerVariants } from "@/app/_lib/framerVarients";
import { childVariants } from "@/app/_lib/framerVarients";

function Values() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid justify-center w-full grid-cols-3 p-7 gap-y-10 xl:p-20 gap-x-10"
    >
      <motion.div
        variants={containerVariants}
        className="relative flex flex-col justify-center col-span-3 lg:col-span-1 gap-y-7"
      >
        <SectionStars />
        <motion.h1
          className="text-4xl font-semibold text-balance"
          variants={childVariants}
        >
          Our Values
        </motion.h1>
        <motion.p className="text-gray-400" variants={childVariants}>
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="relative flex flex-col flex-wrap items-center col-span-3 px-10 rounded shadow-2xl xl:px-20 lg:flex-row lg:col-span-2 ring-4 ring-grey-600 gap-y-7 p-7 shadow-grey-600"
      >
        {[
          {
            icon: Star,
            title: "Trust",
            text: "Trust is the cornerstone of every successful real estate transaction.",
          },
          {
            icon: GraduationCapIcon,
            title: "Excellence",
            text: "We set the bar high for ourselves. From the properties we list to the services we provide.",
          },
          {
            icon: Users,
            title: "Client-Centric",
            text: "Your dreams and needs are at the center of our universe. We listen, understand.",
          },
          {
            icon: Star,
            title: "Our Commitment",
            text: "We are dedicated to providing you with the highest level of service, professionalism, and support.",
          },
        ].map(({ icon: Icon, title, text }, index) => (
          <motion.div
            key={index}
            variants={childVariants}
            className={`py-7 ${
              index % 2 === 0 ? "lg:pr-4" : "lg:pl-4"
            } flex flex-col gap-y-4 lg:gap-y-2 w-full lg:w-1/2 border-b border-grey-500 lg:border-b-0`}
          >
            <h3 className="flex items-center text-2xl font-semibold gap-x-4">
              <span className="p-3 rounded-full ring-2 ring-primary-900">
                <Icon fill="#946cf9" color="#946cf9" size={25} />
              </span>
              {title}
            </h3>
            <p className="text-grey-100">{text}</p>
          </motion.div>
        ))}

        <motion.hr
          variants={childVariants}
          className="lg:block hidden absolute w-[calc(100%-56px)] text-grey-500 left-7 h-[1px]"
        />
      </motion.div>
    </motion.section>
  );
}

export default Values;
