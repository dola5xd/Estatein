import Image from "next/image";
import {
  section as MotionSection,
  div as MotionDiv,
  p as MotionP,
  h1 as MotionH1,
} from "motion/react-client";
import Clients from "../_components/clients/Clients";
import HeroCounter from "../_components/home/HeroCounter";
import Explore from "../_components/layout/Explore";
import Footer from "../_components/layout/Footer";
import Steps from "../_components/ui/Steps";
import Achievements from "../_components/about/Achievements";
import Values from "../_components/about/Values";
import SectionStars from "../_components/ui/SectionStars";
import { childVariants } from "@/app/_lib/framerVarients";

const sectionAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: false },
};
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

function Page() {
  return (
    <>
      <MotionSection
        {...sectionAnimation}
        className="flex flex-col-reverse lg:grid lg:grid-cols-3 lg:pb-20 p-7 gap-7"
      >
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative flex flex-col justify-center col-span-2 px-4 py-4 lg:col-span-2 xl:p-20 gap-y-4 lg:gap-y-7"
        >
          <SectionStars />
          <MotionH1
            className="text-4xl font-semibold text-balance"
            variants={childVariants}
          >
            Our Journey
          </MotionH1>
          <MotionP
            className="text-sm text-gray-400 sm:text-base"
            variants={childVariants}
          >
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary. Over the years, we&apos;ve
            expanded our reach, forged valuable partnerships, and gained the
            trust of countless clients.
          </MotionP>

          <MotionDiv
            variants={childVariants}
            className="grid grid-cols-2 gap-4 lg:grid-cols-3"
          >
            <HeroCounter description="Happy Customers" number={200} plus />
            <HeroCounter
              description="Properties For Clients"
              number={10}
              plus
              short="k"
            />
            <HeroCounter
              className="col-span-2 lg:col-span-1"
              description="Years of Experience"
              number={16}
              plus
            />
          </MotionDiv>
        </MotionDiv>
        <div className="relative self-center w-3/4 col-span-1 lg:w-full aspect-square lg:h-full rounded-2xl ring-1 ring-grey-500">
          <Image
            src="/images/about.png"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center lg:object-right-top rounded-2xl lg:rounded-none"
            alt="hand left building"
          />
        </div>
      </MotionSection>
      <Values />
      <Achievements />
      <Steps />
      <Clients />
      <Explore />
      <Footer />
    </>
  );
}

export default Page;
