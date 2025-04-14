import { SanityDocument } from "next-sanity";
import SectionStars from "../ui/SectionStars";
import { Suspense } from "react";
import Link from "next/link";
import { shortPropertyQuery, sanityOptions } from "@/app/_lib/Queries";
import { client } from "@/app/_lib/SanityClient";
import PropertyCard from "../card/PropertyCard";

async function Properties() {
  const topProperties = await client.fetch<SanityDocument[]>(
    shortPropertyQuery,
    {},
    sanityOptions
  );
  return (
    <section
      className="flex flex-col py-20 px-7 xl:px-20 gap-y-7"
      id="Properties"
    >
      <div className="flex flex-col gap-y-4">
        <SectionStars />
        <h1 className="text-3xl font-semibold">Featured Properties</h1>
        <div className="flex flex-col items-center justify-between w-full lg:flex-row gap-y-4 lg:gap-32">
          <p className="pr-4 text-grey-100 lg:pr-0">
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein. Click &quot;View Details&quot; for more
            information.
          </p>
          <Link href={"/properties"} className="w-full lg:w-1/4">
            <button className="w-full py-3 duration-500 rounded-lg cursor-pointer bg-grey-600 hover:bg-primary-900">
              View All Properties
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between p-4 lg:flex-row gap-7 ring-2 ring-grey-600/50 lg:p-7 rounded-xl">
        <Suspense
          fallback={
            <>
              <span className="block bg-grey-500 h-[400px] w-[300px] animate-pulse"></span>
              <span className="block bg-grey-500 h-[400px] w-[300px] animate-pulse"></span>
              <span className="block bg-grey-500 h-[400px] w-[300px] animate-pulse"></span>
              <span className="block bg-grey-500 h-[400px] w-[300px] animate-pulse"></span>
            </>
          }
        >
          {topProperties?.map((property) => (
            <PropertyCard
              property={property}
              key={property._id}
              animate={true}
            />
          ))}
        </Suspense>
      </div>
    </section>
  );
}

export default Properties;
