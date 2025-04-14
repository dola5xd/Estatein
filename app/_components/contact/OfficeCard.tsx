import { officesdataType } from "@/app/_lib/Types";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

function OfficeCard({ office }: { office: officesdataType }) {
  const { city, contactInfo, describtion, locationUrl, name, type } = office;
  return (
    <div className="flex flex-col justify-between ring-2 ring-grey-500 p-5 md:p-10 rounded-lg lg:min-h-[450px] xl:min-h-[350px] w-full">
      <span className="text-sm md:text-basefont-semibold">
        {type !== "Regional" ? "Main Headquarters" : "Regional Offices"}
      </span>
      <h2 className="text-xl font-semibold md:text-2xl">{name}</h2>
      <p className="my-4 text-sm text-grey-100">{describtion}</p>
      <div className="flex flex-wrap items-center gap-4 *:font-semibold py-4">
        {contactInfo?.map((info, i) => (
          <span
            className="bg-grey-700 ring-1 ring-grey-500 rounded-xl px-4 py-1.5 flex items-center gap-1.5"
            key={info}
          >
            {i === 0 ? (
              <Mail fill="#fff" color="#1a1a1a" />
            ) : (
              <Phone fill="#fff" color="#1a1a1a" />
            )}
            {info}
          </span>
        ))}
        <span className="bg-grey-700 ring-1 ring-grey-500 rounded-xl px-4 py-1.5 flex items-center gap-1.5">
          <MapPin fill="#fff" color="#1a1a1a" />
          {city}
        </span>
      </div>
      <Link href={locationUrl} target="_blank" className="w-full">
        <button
          type="button"
          className="w-full py-3 duration-500 rounded-lg cursor-pointer bg-primary-900 hover:bg-primary-700"
        >
          Get Direction
        </button>
      </Link>
    </div>
  );
}

export default OfficeCard;
