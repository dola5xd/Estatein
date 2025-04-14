"use client";
import { useRef } from "react";
import { Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: 500 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function PropertyFeatures({ data }: { data: string[] }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const containerMotionProps = {
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
    variants: containerVariants,
    className:
      "flex flex-col w-full p-5 md:p-10 lg:w-1/2 ring-2 ring-grey-500 rounded-xl gap-y-7",
  };

  const itemMotionProps = {
    variants: itemVariants,
    className:
      "flex items-center gap-2 px-4 py-4 border-l rounded bg-grey-700 border-primary-800",
  };

  return (
    <motion.div ref={containerRef} {...containerMotionProps}>
      <motion.h2
        variants={itemVariants}
        className="text-xl font-semibold md:text-2xl"
      >
        Key Features and Amenities
      </motion.h2>

      <motion.ul className="flex flex-col gap-y-7">
        {data.map((feature) => (
          <motion.li key={feature} {...itemMotionProps}>
            <Zap size={20} fill="#fff" />
            <span className="text-grey-100">{feature}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default PropertyFeatures;
