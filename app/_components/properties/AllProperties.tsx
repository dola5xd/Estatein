"use client";
import { Suspense, useState } from "react";
import { SanityDocument } from "next-sanity";
import SectionStars from "../ui/SectionStars";
import PropertyCard from "../card/PropertyCard";

function AllProperties({ Properties }: { Properties: SanityDocument[] }) {
  const [search, setSearch] = useState<string>("");
  const [searchProperties, setProperties] =
    useState<SanityDocument[]>(Properties);

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
    if (!searchValue.trim()) {
      setProperties(Properties);
    } else {
      const filtered = Properties.filter((property) =>
        property.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setProperties(filtered);
    }
  };

  return (
    <>
      <section className="flex flex-col items-center gap-y-4">
        <div className="flex p-10 xl:p-20 flex-col gap-y-2 pb-20 xl:min-h-[250px] bg-gradient-to-r from-grey-700 to-grey-800 bg-no-repeat w-full">
          <h1 className="text-3xl font-semibold">Find Your Dream Property</h1>
          <p className="text-sm sm:text-base xl:pr-32 text-grey-100">
            Welcome to Estatein, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life.
          </p>
        </div>
        <div className="flex flex-col items-center w-full px-10 -translate-y-1/2 rounded-lg">
          <div className="flex items-center justify-between w-full p-4 rounded-lg sm:w-3/4 lg:w-1/2 bg-grey-700 ring-1 ring-grey-500">
            <input
              type="text"
              placeholder="Search For A Property"
              className="w-full px-4 py-3 rounded-t-lg ring-1 outline-0 ring-grey-500 bg-grey-800"
              onChange={(e) => handleSearch(e.target.value)}
              value={search}
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col px-7 sm:px-10 md:px-20 gap-y-2">
        <SectionStars />
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Discover a World of Possibilities
        </h2>
        <p className="text-sm sm:text-base text-grey-100">
          Our portfolio of properties is as diverse as your dreams. Explore the
          following categories to find the perfect property that resonates with
          your vision of home.
        </p>

        <div className="flex flex-wrap items-center justify-center my-10 lg:justify-normal ring-2 ring-grey-600/50 p-7 lg:p-7 rounded-xl gap-7">
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
            {searchProperties?.length ? (
              searchProperties.map((property) => (
                <PropertyCard property={property} key={property._id} />
              ))
            ) : (
              <p className="self-center py-20 my-20 text-3xl font-semibold">
                No properties found for &quot;{search}&quot;
              </p>
            )}
          </Suspense>
        </div>
      </section>
    </>
  );
}

export default AllProperties;
