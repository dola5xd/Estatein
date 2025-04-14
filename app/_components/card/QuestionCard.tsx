import { QATypes } from "@/app/_lib/Types";
import { LucideCircleSmall } from "lucide-react";

function QuestionCard({ questionAns }: { questionAns: QATypes }) {
  const { answer, question } = questionAns;
  return (
    <div className="ring-1 w-full ring-grey-500 lg:w-1/3 rounded-xl flex flex-col gap-y-7 py-10 px-7 xl:p-10 lg:min-h-[225px]">
      <h3 className="text-xl font-semibold xl:h-[50px]">{question}</h3>
      <p className="flex gap-2 text-grey-200">
        <LucideCircleSmall />
        {answer}
      </p>
    </div>
  );
}

export default QuestionCard;
