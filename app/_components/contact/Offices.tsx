"use client";
import { useState } from "react";
import SectionStars from "../ui/SectionStars";
import { officesData } from "@/app/_lib/Constants";
import OfficeCard from "./OfficeCard";

const filters: string[] = ["All", "Regional", "International"];

function Offices() {
  const [filterOffice, setFilterOffice] = useState<string>("All");
  const filterdOffices = officesData.filter((value) =>
    filterOffice !== "All" ? value.type === filterOffice : filterOffice
  );
  return (
    <section className="flex flex-col p-7 gap-y-7 xl:p-20">
      <div className="flex flex-col gap-y-1">
        <SectionStars />
        <h2 className="text-3xl font-semibold">
          Discover Our Office Locations
        </h2>
        <p className="text-sm lg:w-3/4 text-grey-100">
          Estatein is here to serve you across multiple locations. Whether
          you&apos;re looking to meet our team, discuss real estate
          opportunities, or simply drop by for a chat, we have offices
          conveniently located to serve your needs. Explore the categories below
          to find the Estatein office nearest to you
        </p>
      </div>
      <div className="flex items-center self-start px-2 py-4 rounded-lg sm:px-4 bg-grey-700 gap-x-2 sm:gap-x-4 md:px-7">
        {filters?.map((fill) => (
          <span
            className={`${
              filterOffice === fill ? "bg-grey-800" : ""
            } ring-1 ring-grey-500 rounded-lg py-2 px-7 cursor-pointer`}
            onClick={() => setFilterOffice(fill)}
            key={fill}
          >
            {fill}
          </span>
        ))}
      </div>
      <div className="flex flex-col items-center gap-7 lg:flex-row">
        {filterdOffices?.map((office) => (
          <OfficeCard office={office} key={office.id} />
        ))}
      </div>
    </section>
  );
}

export default Offices;
