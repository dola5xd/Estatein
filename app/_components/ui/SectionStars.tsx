import { Sparkle } from "lucide-react";
import { span as MotionSpan } from "motion/react-client";

const sparkles = [
  { size: 30, color: "#999999ed" },
  { size: 25, color: "#9999998d" },
  { size: 20, color: "#99999942" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { rotate: 0 },
  visible: {
    rotate: 180,
    transition: {
      duration: 0.3,
      repeatDelay: 2,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

function SectionStars() {
  return (
    <MotionSpan
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center gap-x-1.5"
    >
      {sparkles.map((sparkle, index) => (
        <MotionSpan key={index} variants={childVariants}>
          <Sparkle size={sparkle.size} color={sparkle.color} />
        </MotionSpan>
      ))}
    </MotionSpan>
  );
}

export default SectionStars;
