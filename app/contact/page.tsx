import Image from "next/image";
import HeroCards from "../_components/ui/HeroCards";
import { contactInfo } from "../_lib/Constants";
import logo from "@/app/_assets/Icon.svg";
import IconBg from "@/public/svg/IconBackground.svg";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ContactForm from "../_components/contact/ContactForm";
import Explore from "../_components/layout/Explore";
import Footer from "../_components/layout/Footer";
import Offices from "../_components/contact/Offices";

function page() {
  return (
    <>
      <section className="flex flex-col items-center gap-y-4">
        <div className="flex p-10 xl:p-20 flex-col gap-y-2 lg:min-h-[250px] bg-gradient-to-r from-grey-700 to-grey-800 bg-no-repeat w-full">
          <h1 className="text-3xl font-semibold">Get in Touch with Estatein</h1>
          <p className="text-sm md:text-basemd:pr-32 text-grey-100">
            Welcome to Estatein&apos;s Contact Us page. We&apos;re here to
            assist you with any inquiries, requests, or feedback you may have.
            Whether you&apos;re looking to buy or sell a property, explore
            investment opportunities, or simply want to connect, we&apos;re just
            a message away. Reach out to us, and let&apos;s start a
            conversation.
          </p>
        </div>
      </section>
      <HeroCards data={contactInfo}>
        <span className="relative flex items-center justify-center w-full max-w-[75px] mx-auto">
          <div className="absolute w-[75px] h-[75px]">
            <Image
              src={IconBg}
              alt="Icon background"
              fill
              sizes="(max-width: 640px) 75px, (max-width: 1024px) 75px, 100px"
              className="object-contain animate-wiggle"
            />
          </div>

          <div className="relative w-[35px] h-[35px]">
            <Image
              src={logo}
              alt="Logo"
              fill
              sizes="(max-width: 640px) 35px, (max-width: 1024px) 35px, 50px"
              className="object-contain"
            />
          </div>
        </span>

        <h5 className="font-semibold text-xs md:text-lg flex items-center gap-x-2 flex-wrap justify-center md:gap-x-4 *:underline *:duration-500 *:hover:text-primary-800 ">
          <Link href={"https://github.com/dola5xd"} target="_blank">
            Instagram
          </Link>
          <Link
            href={"https://www.linkedin.com/in/adel-yasser-a28181242/"}
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link href={"https://www.facebook.com/dola2005ti"} target="_blank">
            Facebook
          </Link>
        </h5>

        <button
          type="button"
          title="see service!"
          className="absolute cursor-pointer top-4 right-4 duration-500 *:duration-500 hover:rotate-45 hover:*:stroke-[#A685FA] scale-75 md:scale-100"
        >
          <ArrowUpRight size={35} color="#4d4d4d" />
        </button>
      </HeroCards>
      <ContactForm />
      <Offices />
      <Explore />
      <Footer />
    </>
  );
}

export default page;
