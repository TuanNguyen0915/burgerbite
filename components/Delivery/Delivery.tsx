"use client"
import Image from "next/image"
import React from "react"
import { BsDoorOpenFill } from "react-icons/bs"
import { IoFastFood } from "react-icons/io5"
import { RiEBike2Fill } from "react-icons/ri"
import { motion } from "framer-motion"
const Delivery = () => {
  return (
    <div className="flexBetween mx-auto w-[90%] gap-10 py-2 max-lg:flex-col max-lg:gap-4">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/delivery.svg"
          alt="delivery"
          width={1000}
          height={1000}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="flexCol gap-4 md:gap-10"
      >
        <h1 className="heading">
          your <span className="text-red-600">favorite burger</span> on the way
        </h1>
        <p className="text-lg">
          We are committed to delivering the finest, carefully crafted hot
          burgers right to your fingertips.
        </p>
        <div className="flex items-center gap-10">
          <RiEBike2Fill size={36} className="text-red-600" />
          <p className="text-lg font-bold">Delivery in 30 minutes</p>
        </div>
        <div className="flex items-center gap-10">
          <IoFastFood size={36} className="text-red-600" />
          <p className="text-lg font-bold">Free ship from $25 within 10miles</p>
        </div>
        <div className="flex items-center gap-10">
          <BsDoorOpenFill size={36} className="text-red-600" />
          <p className="text-lg font-bold">Delivery on your Doorstep</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Delivery
