"use client"
import Image from "next/image"
import { features } from "@/constants"
import { motion } from "framer-motion"
const Feature = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="mt-6 w-full space-y-4"
    >
      {/* HEADING */}
      <h1 className="heading w-full text-center">
        burgers made with <br />
        love and <span className="text-orange-500">care</span>
      </h1>
      <div className="mx-auto my-[3rem] grid w-[80%] grid-cols-1 place-items-center gap-8 md:mt-[5rem] md:w-[90%] md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx: number) => (
          <div
            key={idx}
            className={`${idx === 1 && "lg:translate-y-[4rem]"} flexCol gap-4 rounded-3xl p-6 transition-all duration-200 hover:bg-white`}
          >
            <Image
              src={feature.image}
              alt={feature.text1}
              width={800}
              height={800}
              className="rounded-3xl"
            />
            <h1 className="text-center text-2xl font-bold capitalize">
              {feature.text1}
            </h1>
            <p className="text-center text-lg text-gray-500">{feature.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Feature
