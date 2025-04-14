import { Metadata } from "next";
import Explore from "../_components/layout/Explore";
import Footer from "../_components/layout/Footer";
import AllProperties from "../_components/properties/AllProperties";
import { propertyQuery, sanityOptions } from "../_lib/Queries";
import { client } from "../_lib/SanityClient";
import { SanityDocument } from "next-sanity";

export const metadata: Metadata = {
  title: "Estatein | Discover Properties",
};

async function Page() {
  const Properties = await client.fetch<SanityDocument[]>(
    propertyQuery,
    {},
    sanityOptions
  );
  return (
    <>
      <AllProperties Properties={Properties} />
      <Explore />
      <Footer />
    </>
  );
}

export default Page;
