"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { span as MotionSpan } from "motion/react-client";
import CircleImg from "@/public/svg/circleText.svg";
import { useRouter } from "next/navigation";

const variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: { duration: 5, ease: "linear", repeat: Infinity },
  },
  hoverArrow: { rotate: 45, transition: { duration: 0.5, ease: "linear" } },
};

function CircleBtn() {
  const [hovered, setHovered] = useState(false);
  const navigate = useRouter();
  return (
    <MotionSpan
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={
        "absolute md:-top-1/4 right-3/4 lg:-right-20 -top-1/5 lg:top-20 z-20 flex items-center justify-center cursor-pointer"
      }
      onClick={() => navigate.push("/properties")}
    >
      <MotionSpan
        animate={hovered ? "hover" : "initial"}
        variants={variants}
        className="pointer-events-none"
      >
        <Image priority src={CircleImg} alt="Discover your Dream Property" />
      </MotionSpan>
      <MotionSpan
        animate={hovered ? "hoverArrow" : "initial"}
        variants={variants}
        className="absolute cursor-pointer"
      >
        <ArrowUpRight size={50} />
      </MotionSpan>
    </MotionSpan>
  );
}

export default CircleBtn;
