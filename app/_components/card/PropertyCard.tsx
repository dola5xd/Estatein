"use client";
import { urlFor } from "@/app/_lib/ImageUrl";
import { AreaChart, Bath, BedSingle } from "lucide-react";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { button as MotionBtn } from "motion/react-client";
import { div as MotionDiv } from "motion/react-client";
import { formatPrice } from "@/app/_lib/Helpers";
import { createCardVariants } from "@/app/_lib/framerVarients";

const cardVariants = createCardVariants("fade");

function PropertyCard({
  property,
  animate = false,
}: {
  property: SanityDocument;
  animate?: boolean;
}) {
  const { _id, name, price, area, bedrooms, bathrooms, images, description } =
    property;

  const imageUrl = images[0]
    ? urlFor(images[0])?.width(432).height(318).url()
    : null;

  const shortDescription = String(description).slice(0, 189) + " ... ";

  return (
    <MotionDiv
      variants={cardVariants}
      initial={animate ? "hidden" : ""}
      whileInView={animate ? "visible" : ""}
      viewport={{ once: true }}
      className="flex flex-col gap-y-7 py-7 rounded-2xl px-4 lg:px-7 ring-1 ring-grey-500 duration-500 xl:hover:scale-105 xl:w-[calc(100%_/_3_-_28px)]"
    >
      <Image
        src={imageUrl!}
        alt={description}
        height={318}
        width={432}
        className="object-cover pointer-events-none rounded-2xl"
      />
      <div className="flex flex-col gap-y-1.5 min-h-[160px] cursor-default">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-grey-100 leading-relaxed text-wrap max-w-[432px]">
          {shortDescription}{" "}
        </p>
      </div>
      <div className="flex items-center flex-wrap gap-2 lg:gap-4 *:flex *:items-center *:gap-x-1.5 *:bg-grey-600 *:rounded-4xl *:text-nowrap ">
        <span className="p-2 text-sm font-semibold">
          <BedSingle size={18} />
          <h6>{bedrooms}-Bedroom</h6>
        </span>
        <span className="p-2 text-sm font-semibold">
          <Bath size={18} />
          <h6>{bathrooms}-Bathroom</h6>
        </span>
        <span className="p-2 text-sm font-semibold">
          <AreaChart size={18} />
          <h6>{area} M</h6>
        </span>
      </div>
      <div className="flex md:items-center justify-between gap-x-2 flex-col md:flex-row gap-y-2">
        <h4 className="flex flex-col gap-y-0.5 text-xl xl:text-2xl font-semibold">
          <span className="text-base text-grey-100 lg:text-xl">Price</span>
          {formatPrice(Number(price))}
        </h4>
        <Link href={`/property/${_id}`} className="w-full md:w-1/2">
          <MotionBtn
            className="p-4 text-sm font-semibold rounded-lg cursor-pointer bg-primary-900 xl:py-4 xl:px-5 w-full"
            whileHover={{ scale: 1.05, backgroundColor: "#262626" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            View Property Details
          </MotionBtn>
        </Link>
      </div>
    </MotionDiv>
  );
}

export default PropertyCard;
