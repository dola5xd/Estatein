import * as motion from "motion/react-client";
import SectionStars from "../ui/SectionStars";
import { clientsQuery, sanityOptions } from "@/app/_lib/Queries";
import { client } from "@/app/_lib/SanityClient";
import ClientsSlider from "./ClientsSlider";
import { containerVariants } from "@/app/_lib/framerVarients";
import { childVariants } from "@/app/_lib/framerVarients";
import { ClientType } from "@/app/_lib/Types";

async function Clients() {
  const clientsData = await client.fetch<ClientType[]>(
    clientsQuery,
    {},
    sanityOptions
  );

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col px-5 py-10 md:p-10 xl:p-20 gap-y-7"
    >
      <motion.div
        variants={containerVariants}
        className="relative flex flex-col justify-center col-span-1 gap-y-7"
      >
        <SectionStars />
        <motion.h1
          className="text-4xl font-semibold text-balance"
          variants={childVariants}
        >
          Our Valued Clients
        </motion.h1>
        <motion.p className="text-gray-400" variants={childVariants}>
          At Estatein, we have had the privilege of working with a diverse range
          of clients across various industries. Here are some of the clients
          we&apos;ve had the pleasure of serving
        </motion.p>
      </motion.div>

      <motion.div className="w-full" variants={containerVariants}>
        <ClientsSlider data={clientsData} />
      </motion.div>
    </motion.section>
  );
}

export default Clients;
