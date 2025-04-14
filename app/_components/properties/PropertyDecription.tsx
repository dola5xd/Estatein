"use client";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import { BathIcon, BedDouble } from "lucide-react";
import areaIcon from "@/public/svg/area-icon.svg";
import { formatArea } from "@/app/_lib/Helpers";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function PropertyDescription({
  data,
}: {
  data: {
    description: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
  };
}) {
  const { area, bathrooms, bedrooms, description } = data;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 80 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.3, delayChildren: 0.2 },
        },
      }}
      className="flex flex-col w-full p-7 lg:w-1/2 md:p-10 ring-2 ring-grey-500 rounded-xl gap-y-4"
    >
      <motion.h4 variants={cardVariants} className="text-2xl font-semibold">
        Description
      </motion.h4>

      <motion.p variants={cardVariants} className="text-sm text-grey-100">
        {description}
      </motion.p>

      <motion.hr
        variants={cardVariants}
        className="bg-grey-300 text-grey-300"
      />

      <div className="flex flex-wrap justify-center mt-4 md:justify-between gap-x-8 gap-y-4">
        {[
          { Icon: BedDouble, label: "Bedrooms", value: bedrooms },
          { Icon: BathIcon, label: "Bathrooms", value: bathrooms },
          {
            Icon: () => (
              <div className="relative w-5 h-5">
                <Image
                  src={areaIcon}
                  alt="Area Icon"
                  fill
                  sizes="20px"
                  className="object-contain"
                />
              </div>
            ),
            label: "Area",
            value: `${formatArea(area)} Sq Ft`,
          },
        ].map(({ Icon, label, value }, i) => (
          <motion.span
            key={i}
            variants={cardVariants}
            className="flex gap-2 lg:flex-col"
          >
            <h6 className="flex items-center gap-x-1 text-grey-100">
              <Icon />
              {label}:
            </h6>
            <span className="text-xl font-semibold md:text-2xl">{value}</span>
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default PropertyDescription;
