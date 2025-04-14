"use client";
import { AlignJustifyIcon, ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

const menuVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.3,
    },
  },
  exit: { opacity: 0, transition: { when: "afterChildren" } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -400 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -400 },
};

function Header() {
  const pathname = usePathname();
  const [menu, setOpenMenu] = useState<boolean>(false);

  return (
    <>
      <header className="flex items-center justify-between w-full bg-grey-700 px-7 xl:px-20 py-7 lg:py-4">
        <Link className="relative w-32 h-16 cursor-pointer" href={"/"}>
          <Image
            src="/logo.svg"
            alt="logo"
            fill
            priority
            sizes="(max-width: 768px) 120px, 128px"
            className="object-contain"
          /></Link>

        <nav>
          <ul className="hidden lg:flex items-center gap-7 text-lg *:font-medium *:hover:text-primary-700 *:duration-500">
            <li>
              <Link
                href="/"
                className={
                  pathname === "/"
                    ? "bg-grey-800 text-primary-700 py-2 px-4"
                    : ""
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={
                  pathname === "/about"
                    ? "bg-grey-800 text-primary-700 py-2 px-4"
                    : ""
                }
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/properties"
                className={
                  pathname === "/properties"
                    ? "bg-grey-800 text-primary-700 py-2 px-4"
                    : ""
                }
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={
                  pathname === "/services"
                    ? "bg-grey-800 text-primary-700 py-2 px-4"
                    : ""
                }
              >
                Services
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          href="/contact"
          className={
            pathname === "/contact"
              ? "hidden lg:block *:text-white *:bg-primary-700 *:hover:bg-transparent"
              : "hidden lg:block"
          }
        >
          <button
            type="button"
            title="Contact Us"
            className="px-4 py-2 font-semibold duration-500 rounded cursor-pointer bg-grey-800 hover:text-primary-700"
          >
            Contact Us
          </button>
        </Link>

        <button
          type="button"
          className="lg:hidden cursor-pointer *:duration-500 hover:*:text-primary-700"
          onClick={() => setOpenMenu(true)}
        >
          <AlignJustifyIcon />
        </button>
      </header>

      <AnimatePresence>
        {menu && (
          <motion.div className="fixed top-0 left-0 z-[2000] w-full h-dvh bg-grey-800 lg:hidden" initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}>
            <button
              type="button"
              className="absolute cursor-pointer text-primary-700 right-10 top-10 hover:text-red-500 duration-500"
              onClick={() => setOpenMenu(false)}
            >
              <X size={50} />
            </button>
            <motion.ul
              className="p-20 h-full flex flex-col justify-center gap-y-7 *:font-medium *:hover:text-primary-700 *:duration-500 *:text-4xl [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-1.5 [&>li>a>span]:duration-500 *:hover:[&>a>span]:rotate-45"
              variants={menuVariants}

            >
              <motion.li variants={itemVariants}>
                <Link onClick={() => setOpenMenu(false)}

                  href="/"
                  className={
                    pathname === "/"
                      ? "text-primary-700 [&>span]:rotate-45"
                      : ""
                  }
                >
                  <span>
                    <ArrowUpRight size={50} />
                  </span>
                  Home
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link onClick={() => setOpenMenu(false)}

                  href="/about"
                  className={
                    pathname === "/about"
                      ? "text-primary-700 [&>span]:rotate-45"
                      : ""
                  }
                >
                  <span>
                    <ArrowUpRight size={50} />
                  </span>
                  About Us
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  onClick={() => setOpenMenu(false)}
                  href="/properties"
                  className={
                    pathname === "/properties"
                      ? "text-primary-700 [&>span]:rotate-45"
                      : ""
                  }
                >
                  <span>
                    <ArrowUpRight size={50} />
                  </span>
                  Properties
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link onClick={() => setOpenMenu(false)}

                  href="/services"
                  className={
                    pathname === "/services"
                      ? "text-primary-700 [&>span]:rotate-45"
                      : ""
                  }
                >
                  <span>
                    <ArrowUpRight size={50} />
                  </span>
                  Services
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link onClick={() => setOpenMenu(false)}
                  href="/contact"
                  className={
                    pathname === "/contact"
                      ? "text-primary-700 [&>span]:rotate-45"
                      : ""
                  }
                >
                  <span>
                    <ArrowUpRight size={50} />
                  </span>
                  Contact Us
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
