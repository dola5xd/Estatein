import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./_styles/globals.css";
import { Urbanist } from "next/font/google";
import Header from "./_components/layout/Header";
import Banner from "./_components/ui/Banner";
import Lenis from "./_components/layout/Lenis";
import { ToastContainer } from "react-toastify";

const urabansitFont = Urbanist({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estatein | Discover your place!",
  description:
    "Estatein helps you discover, compare, and buy homes across the U.S. Browse verified listings, get local market insights, and connect with top agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urabansitFont.className} antialiased bg-grey-800 text-light-200 min-h-dvh w-screen overflow-x-hidden relative md-0`}
      >
        <Lenis>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            theme="dark"
          />

          <Banner />
          <Header />
          <main className="min-h-full">{children}</main>
        </Lenis>
      </body>
    </html>
  );
}
