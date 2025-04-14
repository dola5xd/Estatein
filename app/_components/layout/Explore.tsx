import Link from "next/link";

function Explore() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-20 px-7 xl:px-20 lg:bg-footer lg:bg-right-bottom bg-no-repeat bg-cover ring-2 ring-grey-500/50">
      <div className="flex flex-col gap-y-4">
        <h1 className="text-3xl font-semibold">
          {" "}
          Start Your Real Estate Journey Today
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-4 lg:gap-32">
          <p className="text-grey-100 text-sm lg:text-base">
            Your dream property is just a click away. Whether you&apos;re
            looking for a new home, a strategic investment, or expert real
            estate advice, Estatein is here to assist you every step of the way.
            Take the first step towards your real estate goals and explore our
            available properties or get in touch with our team for personalized
            assistance.
          </p>
          <Link href={"/properties"} className="w-full lg:w-1/3">
            <button
              type="button"
              className="w-full px-4 hover:bg-grey-600 py-3 rounded-lg duration-500 bg-primary-900 cursor-pointer"
            >
              Explore Properties{" "}
            </button>{" "}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Explore;
