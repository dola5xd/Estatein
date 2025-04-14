import Link from "next/link";
import { LayoutGrid, Zap } from "lucide-react";
import { ClientType } from "@/app/_lib/Types";

function ClientCard({ client }: { client: ClientType }) {
  const { category, domin, herf, message, publishedAt, title } = client;
  return (
    <div className="ring-4 shadow-2xl shadow-grey-700 ring-grey-500 min-h-[350px] lg:min-h-[400px] p-5 sm:p-10 rounded-xl grid grid-cols-2 gap-y-7">
      <div className="flex flex-col justify-between w-full col-span-2 md:items-center md:flex-row gap-y-4">
        <div className="font-semibold">
          <span className="text-sm text-grey-100">Since {publishedAt}</span>
          <h4 className="text-xl">{title}</h4>
        </div>
        <Link
          href={herf}
          target="_blank"
          className="w-full  md:w-1/3 cursor-pointer hover:*:bg-primary-800"
        >
          <button
            type="button"
            className="w-full px-4 py-3 text-sm duration-500 rounded cursor-pointer bg-grey-700 sm:text-base"
          >
            Visit Website
          </button>
        </Link>
      </div>
      <div className="flex flex-col col-span-2 gap-y-4 md:justify-between md:items-center md:flex-row gap-x-5 lg:gap-x-0">
        <div className="flex flex-col gap-y-1">
          <span className="flex items-center gap-2 font-semibold text-grey-100">
            <LayoutGrid />
            Domin
          </span>
          <h4 className="text-sm font-semibold sm:text-base">{domin}</h4>
        </div>
        <hr className="h-1/2 bg-grey-300 text-grey-300 w-[1px]" />
        <div className="flex flex-col gap-y-1">
          <span className="flex items-center gap-2 font-semibold text-grey-100">
            <Zap />
            Category
          </span>
          <h4 className="text-sm font-semibold sm:text-base">{category}</h4>
        </div>
      </div>

      <div className="col-span-2 ring-grey-500 ring-2 p-4 rounded flex flex-col gap-y-1.5 ">
        <span className="font-semibold text-grey-100">What They Said 🤗</span>
        <p className="text-xs sm:text-sm md:text-base">{message}</p>
      </div>
    </div>
  );
}

export default ClientCard;
