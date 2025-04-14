import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import CircleBtn from "../ui/CircleBtn";
import HeroCounter from "./HeroCounter";
import { containerVariants } from "@/app/_lib/framerVarients";
import { childVariants } from "@/app/_lib/framerVarients";

const sectionAnimation = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false },
};

function Hero() {
  return (
    <motion.section
      {...sectionAnimation}
      id="Hero"
      className="flex flex-col-reverse lg:grid lg:grid-cols-2 min-h-[calc(100vh_-_50px)] lg:pb-20 p-7 gap-7"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative flex flex-col justify-center col-span-1 md:py-10 xl:p-20 gap-y-7 lg:gap-y-7"
      >
        <motion.h1
          className="mt-4 text-4xl font-semibold lg:mt-0 lg:text-5xl text-balance"
          variants={childVariants}
        >
          Discover Your Dream Property with Estatein
        </motion.h1>
        <motion.p className="text-gray-400" variants={childVariants}>
          Your journey to finding the perfect property begins here. Explore our
          listings to find the home that matches your dreams.
        </motion.p>
        <motion.div
          className="flex flex-col items-center w-full font-semibold gap-y-4 lg:gap-y-0 lg:gap-x-7 lg:flex-row"
          variants={childVariants}
        >
          <Link href="/about" className="w-full">
            <button
              type="button"
              className="w-full px-4 py-3 font-semibold rounded cursor-pointer ring-1 ring-grey-500"
            >
              Learn More
            </button>
          </Link>
          <Link href="/properties" className="w-full">
            <button
              type="button"
              className="w-full px-4 py-3 font-semibold duration-500 rounded cursor-pointer bg-primary-900 hover:bg-grey-200 hover:text-primary-200"
            >
              Browse Properties
            </button>
          </Link>
        </motion.div>
        <motion.div
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
        </motion.div>
        <CircleBtn />
      </motion.div>
      <motion.div variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.3,
          },
        },
      }}
        initial="hidden"
        animate="visible" className="relative col-span-1 aspect-square lg:h-full rounded-2xl ring-1 ring-grey-500">
        <Image
          src="/images/Hero-img.png"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center lg:object-right-top rounded-2xl lg:rounded-none"
          priority
          alt="3 buildings with amazing view"
        />
      </motion.div>
    </motion.section>
  );
}

export default Hero;
