import Explore from "../_components/layout/Explore";
import Footer from "../_components/layout/Footer";
import PropertyDecisions from "../_components/properties/PropertyDecisions";
import PropertyMangment from "../_components/properties/PropertyMangment";
import PropertyValue from "../_components/properties/PropertyValue";
import HeroCards from "../_components/ui/HeroCards";
import { services } from "../_lib/Constants";

function page() {
  return (
    <>
      <section className="flex flex-col items-center gap-y-4">
        <div className="flex p-10 md:p-20 flex-col gap-y-2 min-h-[250px] bg-gradient-to-r from-grey-700 to-grey-800 bg-no-repeat w-full">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Elevate Your Real Estate Experience
          </h1>
          <p className="text-sm md:text-base md:pr-32 text-grey-100">
            Welcome to Estatein, where your real estate aspirations meet expert
            guidance. Explore our comprehensive range of services, each designed
            to cater to your unique needs and dreams.
          </p>
        </div>
      </section>
      <HeroCards data={services} />
      <PropertyValue />
      <PropertyMangment />
      <PropertyDecisions />
      <Explore />
      <Footer />
    </>
  );
}

export default page;
