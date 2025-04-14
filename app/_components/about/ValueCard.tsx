import Image from "next/image";
import IconBg from "@/public/svg/IconBackground.svg";
import { ValueType } from "@/app/_lib/Types";

function ValueCard({ value }: { value: ValueType }) {
  const { description, icon: Icon, title } = value;
  return (
    <>
      <div className="flex items-center gap-x-4 ">
        <span className="relative min-w-[75px] min-h-[75px] flex items-center justify-center">
          <Image
            src={IconBg}
            width={75}
            height={75}
            alt="IconBg"
            className="absolute animate-wiggle"
          />
          <Icon color="#A685FA" size={25} />
        </span>
        <h5 className="font-semibold text-xl lg:text-lg">{title}</h5>
      </div>
      <p className="pb-2 lg:text-sm text-grey-100">{description}</p>
    </>
  );
}

export default ValueCard;
