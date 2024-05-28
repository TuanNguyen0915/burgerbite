"use client"
import { chefs } from "@/constants"
import Image from "next/image"
import { motion } from "framer-motion"
const Chefs = () => {
  return (
    <div className="mx-auto w-[80%] space-y-10 py-2">
      <h1 className="heading text-center">
        meet our expert <span className="text-orange-500">Chefs</span>
      </h1>
      <div className="grid grid-cols-1 place-items-center gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-24">
        {chefs.map((chef, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className={`flexBetween group flex-col gap-4`}
            key={idx}
          >
            <Image
              src={chef.image}
              alt={chef.name}
              width={800}
              height={800}
              className="rounded-2xl"
            />
            <h1 className="text-2xl font-bold tracking-wide lg:text-4xl">
              {chef.name}
            </h1>
            <div className="flexCenter w-[40%] rounded-lg bg-[#ffa500] px-4 py-2">
              <p className="capitalize text-black">kitchen porter</p>
            </div>
            <p className="text-center opacity-60 transition-all group-hover:opacity-100 md:text-lg ">
              {chef.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Chefs
