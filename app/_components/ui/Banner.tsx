"use client";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function Banner() {
  const [openBanner, setOpenBanner] = useState<boolean>(true);

  useEffect(() => {
    const storedValue = localStorage.getItem("banner");
    setOpenBanner(storedValue !== "false");
  }, []);

  useEffect(() => {
    localStorage.setItem("banner", String(openBanner));
  }, [openBanner]);

  if (!openBanner) return null;

  return (
    <div className="bg-banner w-full h-[50px] text-center py-2 px-4 lg:px-10 flex lg:justify-between items-center">
      <h1 className="text-xs sm:text-base lg:text-xl w-full flex items-center gap-x-3 justify-center">
        ✨Discover Your Dream Property with Estatein{" "}
        <Link href={"/properties"} className="underline">
          Learn More
        </Link>
      </h1>
      <button
        type="button"
        title="close"
        onClick={() => setOpenBanner(false)}
        className="self-end bg-grey-200/60 p-1 rounded-full cursor-pointer"
      >
        <X />
      </button>
    </div>
  );
}

export default Banner;