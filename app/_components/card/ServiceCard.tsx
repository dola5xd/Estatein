import { ArrowUpRight } from "lucide-react";
import IconBg from "@/public/svg/IconBackground.svg";
import Image from "next/image";
import { serviceType } from "@/app/_lib/Types";

function ServiceCard({ service }: { service: serviceType }) {
  const { icon: Icon, title } = service;
  return (
    <>
      <span className="relative flex items-center justify-center w-full max-w-[100px] mx-auto">
        <div className="absolute w-[75px] h-[75px]">
          <Image
            src={IconBg}
            alt="Icon background"
            fill
            sizes="(max-width: 640px) 75px, (max-width: 1024px) 75px, 100px"
            className="object-contain h-auto w-auto animate-wiggle"
          />
        </div>


        <Icon color="#A685FA" size={35} />
      </span>

      <h5 className="text-sm font-semibold text-center text-wrap xl:text-start md:text-lg ">
        {title}
      </h5>
      <button
        type="button"
        title="see service!"
        className="absolute cursor-pointer top-4 right-4 duration-500 *:duration-500 hover:rotate-45 hover:*:stroke-[#A685FA] scale-75 md:scale-100"
      >
        <ArrowUpRight size={35} color="#4d4d4d" />
      </button>
    </>
  );
}

export default ServiceCard;
