"use client";
import { useEffect, useState } from "react";
import { animate } from "motion";

function HeroCounter({
  number,
  description,
  plus,
  short,
  className = "",
}: {
  number: number;
  description: string;
  plus?: boolean;
  short?: string;
  className?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animation = animate(0, number, {
      duration: 3,
      onUpdate: (latest) => setCount(Math.floor(latest)),
    });

    return () => animation.stop();
  }, [number]);

  return (
    <div
      className={`bg-grey-700 outline-1 outline-grey-500 rounded-xl xl:py-4 px-4 xl:px-7 flex flex-col gap-y-1 text-center xl:text-start py-5 ${className}`}
    >
      <h3 className="text-2xl font-bold xl:text-4xl">
        {count}
        {short}
        {plus && "+"}
      </h3>
      <p className="text-sm font-medium xl:text-base text-grey-100 text-nowrap lg:text-wrap">
        {description}
      </p>
    </div>
  );
}

export default HeroCounter;
