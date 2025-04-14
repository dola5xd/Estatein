import { div as DivMotion } from "motion/react-client";
import { childVariants } from "@/app/_lib/framerVarients";
import { Step } from "@/app/_lib/Types";

function StepCard({ step }: { step: Step }) {
  const { id, info, step: title } = step;
  return (
    <DivMotion
      variants={childVariants}
      className="col-span-3 row-span-1 lg:col-span-1"
    >
      <h4 className="py-2 pl-4 border-l border-primary-800">Step 0{id}</h4>
      <div className="lg:min-h-[225px] xl:min-h-[200px] ring relative ring-grey-500 rounded-tl-none rounded-xl py-10 w-full px-10 flex flex-col gap-y-2 before:block before:w-0 before:h-0 before:absolute before:top-2 before:left-4 before:-z-10 before:rounded-full before:shadow-3xl before:shadow-primary-800/50 duration-500 cursor-default hover:scale-95">
        <h3 className="text-2xl font-semibold lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-sm text-grey-100">{info}</p>
      </div>
    </DivMotion>
  );
}

export default StepCard;
