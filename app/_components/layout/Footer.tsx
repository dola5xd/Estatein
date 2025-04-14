import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="p-10 lg:py-20 xl:px-20 flex flex-col lg:flex-row justify-between">
        <Link className="relative w-32 h-16 cursor-pointer" href={"/"}>
          <Image
            src="/logo.svg"
            alt="logo"
            fill
            priority
            sizes="(max-width: 768px) 120px, 128px"
            className="object-contain"
          /></Link>
        <div className="grid grid-cols-2 gap-7 py-7 lg:flex lg:w-3/4 justify-between *:flex *:flex-col *:gap-y-2 [&>ul>li]:duration-500 [&>ul>li]:hover:underline [&>ul>li]:hover:text-primary-900 ">
          <ul>
            <li className="text-grey-300 font-bold text-lg">
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <a href={"#Hero"}>Hero Section</a>
            </li>
            <li>
              <a href={"#Features"}>Features</a>
            </li>
            <li>
              <a href={"#Properties"}>Properties</a>
            </li>
            <li>
              <a href={"#Testimonials"}>Testimonials</a>
            </li>
            <li>
              <a href={"#FAQs"}>FAQ’s</a>
            </li>
          </ul>
          <ul>
            {" "}
            <li className="text-grey-300 font-bold text-lg">
              <Link href={"/about"}>About Us</Link>
            </li>
            <li>
              <a href={"/about#story"}>Our Story</a>
            </li>
            <li>
              <a href={"/about#works"}>Our Works</a>
            </li>
            <li>
              <a href={"/about#howitworks"}>How It Works</a>
            </li>
            <li>
              <a href={"/about#team"}>Our Team</a>
            </li>
            <li>
              <a href={"/about#clients"}>Our Clients</a>
            </li>
          </ul>
          <ul>
            <li className="text-grey-300 font-bold text-lg">
              <Link href={"/properties"}>Properties</Link>
            </li>
            <li>
              <a href={"/properties"}>Portfolio</a>
            </li>
            <li>
              <a href={"/properties"}>Categories</a>
            </li>
          </ul>
          <ul>
            <li className="text-grey-300 font-bold text-lg">
              <Link href={"/services"}>Services</Link>
            </li>
            <li>
              <a href={"/services"}>Valuation Mastery</a>
            </li>
            <li>
              <a href={"/services"}>Strategic Marketing</a>
            </li>
            <li>
              <a href={"/services#Value"}>Negotiation Wizardry</a>
            </li>
            <li>
              <a href={"/services#Mangment"}>Property Management</a>
            </li>
            <li>
              <a href={"/services#Decisions"}>Closing Success</a>
            </li>
          </ul>
          <ul>
            <li className="text-grey-300 font-bold text-lg">
              <Link href={"/contact"}>Contact Us</Link>
            </li>
            <li>
              <a href={"/contact#Form"}>Contact Form</a>
            </li>
            <li>
              <a href={"/contact#Offices"}>Our Offices</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="xl:px-20 p-10 lg:py-3 gap-y-4 bg-grey-700 lg:bg-grey-600 flex flex-col lg:flex-row items-center justify-between">
        <h6 className="font-semibold">
          @{new Date().getFullYear()} Estatein. All Rights Reserved.
        </h6>
        <span className="flex items-center gap-2 *:text-xs lg:text-base lg:gap-4">
          <h3 className="font-bold text-grey-200">
            Made with 💖 by{" "}
            <Link
              href={"https://my-portfolio-website-orpin.vercel.app/"}
              target="_blank"
              className="underline text-white"
            >
              Adel Yasser
            </Link>
          </h3>
          <h3 className="font-bold text-grey-200">
            ✨ Thanks for design{" "}
            <Link
              href={
                "https://www.figma.com/community/file/1314076616839640516/real-estate-business-website-ui-template-dark-theme-produce-ui"
              }
              target="_blank"
              className="underline text-white"
            >
              Praha | Produce UI
            </Link>
          </h3>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
