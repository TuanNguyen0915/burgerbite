"use client"
import { motion } from "framer-motion"

import { PiPhone } from "react-icons/pi"
import ReservationForm from "./ReservationForm"

const Reservation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative mx-auto w-full bg-[url('/images/bg-black.jpg')] bg-cover rounded-xl"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[#000000a6] rounded-xl" />
      <div className="flexBetween relative z-[20] mx-auto w-[80%] gap-20 py-8 max-lg:flex-col max-md:gap-10">
        <div className="w-full space-y-10">
          <h1 className="heading text-white">
            DO YOU HAVE ANY DINNER PLAN TODAY? RESERVE YOUR TABLE
          </h1>
          <p className="text-slate-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            illum veniam sed hic minus. Nam at qui eos nihil ipsum. Consequatur
            porro eligendi fuga aliquid.
          </p>
          <div className="flex w-full items-center gap-6">
            <div className="rounded-full bg-red-500 p-4">
              <PiPhone size={36} className="text-white" />
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-semibold text-white">
                quick order 24/7
              </p>
              <p className="text-3xl text-yellow-500">617-448-ORDERS</p>
            </div>
          </div>
        </div>
        <ReservationForm />
      </div>
    </motion.div>
  )
}

export default Reservation
