"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { popularBurgers } from "@/constants"
import { motion } from "framer-motion"
import PopularCard from "./PopularCard"
const PopularBurgers = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-full space-y-10 pt-[4rem]"
    >
      {/* HEADING */}
      <h1 className="heading w-full text-center">
        our popular
        <span className="text-orange-500"> Burgers</span>
      </h1>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            width: 640,
          },
          768: {
            slidesPerView: 2,
            width: 768,
          },
          1024: {
            slidesPerView: 3,
            width: 1024,
          },
          1280: {
            slidesPerView: 4,
            width: 1280,
          },
          1536: {
            slidesPerView: 4,
            width: 1536,
          },
          1920: {
            slidesPerView: 4,
            width: 1920,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mx-auto w-full"
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
      >
        <div className="flexCenter mx-auto w-[80%]">
          {popularBurgers.map((burger, idx: number) => (
            <SwiperSlide
              key={idx}
              className="flexCol w-full items-center justify-between gap-4 rounded-2xl p-4 transition-all hover:bg-white md:p-8"
            >
              <PopularCard burger={burger} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </motion.div>
  )
}

export default PopularBurgers
