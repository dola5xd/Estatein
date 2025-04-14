import { QA } from "@/app/_lib/Constants";
import QuestionCard from "../card/QuestionCard";
import SectionStars from "../ui/SectionStars";

function FAQ() {
  return (
    <section id="FAQs" className="py-20 px-7 xl:px-20 flex flex-col gap-y-7">
      <div className="flex flex-col gap-y-4">
        <SectionStars />
        <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
        <div className="flex items-center justify-between w-full gap-32">
          <p className="text-grey-100">
            Find answers to common questions about Estatein&apos;s services,
            property listings, and the real estate process. We&apos;re here to
            provide clarity and assist you every step of the way.
          </p>
        </div>
      </div>
      <div className="flex flex-col p-7 lg:flex-row items-center justify-between ring-2 ring-grey-600/50 rounded-xl gap-7">
        {QA.map((q) => (
          <QuestionCard questionAns={q} key={q.id} />
        ))}
      </div>
    </section>
  );
}

export default FAQ;
