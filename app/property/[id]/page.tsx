import FAQ from "@/app/_components/layout/FAQ";
import Footer from "@/app/_components/layout/Footer";
import PropertyDecription from "@/app/_components/properties/PropertyDecription";
import PropertyFeatures from "@/app/_components/properties/PropertyFeatures";
import PropertyRegister from "@/app/_components/properties/PropertyRegister";
import PropertySlider from "@/app/_components/properties/PropertySlider";
import { formatPrice } from "@/app/_lib/Helpers";
import { propertyIDFetch, sanityOptions } from "@/app/_lib/Queries";
import { client } from "@/app/_lib/SanityClient";
import { PropertyType } from "@/app/_lib/Types";
import { MapPin } from "lucide-react";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params

  const property = await client.fetch<PropertyType>(
    propertyIDFetch,
    { id: id },
    sanityOptions
  );

  const title = `${property.name} | Estatein`;
  const description = `Explore ${property.name} located in ${property.location}. Features: ${property.bedrooms} beds, ${property.bathrooms} baths, ${property.area} sqft.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: property.images?.[0]?.asset?.url || "/default-og.png",
          width: 1200,
          height: 630,
          alt: property.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [property.images?.[0]?.asset?.url || "/default-og.png"],
    },
  };
}



export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const property = await client.fetch<PropertyType>(
    propertyIDFetch,
    { id },
    sanityOptions
  );

  const {
    name,
    price,
    location,
    images,
    description,
    bedrooms,
    bathrooms,
    area,
    keyFeatures,
    amenities,
  } = property;

  return (
    <>
      <section className="flex flex-col p-5 md:p-10 lg:pt-20 lg:px-32 gap-y-7">
        <div className="flex flex-col justify-between gap-y-4 md:gap-y-0 md:items-center md:flex-row">
          <span className="flex items-center justify-between gap-5 pr-5 md:pr-0">
            <h1 className="text-xl font-semibold md:text-2xl">{name}</h1>
            <h3 className="flex items-center gap-1 px-3 py-2 text-sm rounded-full ring ring-grey-500 md:text-base">
              <MapPin />
              {location}
            </h3>
          </span>
          <span className="flex gap-x-2 md:flex-col md:gap-y-1">
            <h6 className="text-grey-200">Price</h6>
            <h3 className="text-xl font-semibold">
              {formatPrice(Number(price))}
            </h3>
          </span>
        </div>

        <PropertySlider images={images} />
        <div className="flex flex-col items-start gap-4 lg:flex-row">
          <PropertyDecription
            data={{ description, bedrooms, bathrooms, area }}
          />
          <PropertyFeatures data={[...keyFeatures, ...amenities]} />
        </div>
      </section>
      <PropertyRegister name={name} />
      <FAQ />
      <Footer />
    </>
  );
}
