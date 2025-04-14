import { Star } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/app/_lib/ImageUrl";
import { RatingType } from "@/app/_lib/Types";

function RatingCard({ rate }: { rate: RatingType }) {
  const { avatar, location, message, name, rating, title } = rate;
  const avatarUrl = avatar ? urlFor(avatar)?.width(50).height(50).url() : null;

  return (
    <div className="ring-1 ring-grey-500 min-h-[350px] py-10 pl-7 rounded-xl flex flex-col gap-y-7">
      <div className="flex items-center gap-x-1.5">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className="ring-1 ring-grey-500 rounded-full p-1.5">
            <Star
              fill={i + 1 <= Math.round(rating) ? "#FFE500" : ""}
              color="#FFE500"
              size={20}
            />
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-y-2 pr-7 min-h-[125px]">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-grey-100 text-sm">{message}</p>
      </div>
      <div className="flex items-center gap-x-3">
        <Image
          src={avatarUrl!}
          width={50}
          height={50}
          alt={`${name} avatar`}
          className="rounded-full aspect-square object-cover object-top"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <h6 className="text-grey-200">{location}</h6>
        </div>
      </div>
    </div>
  );
}

export default RatingCard;
