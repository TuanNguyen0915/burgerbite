"use client"
import { motion } from "framer-motion"
import { Navigation, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { banners } from "@/constants"
import Image from "next/image"
import { BiCycling } from "react-icons/bi"

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flexCenter flexCenter h-[80vh] w-full"
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="h-full w-full"
      >
        {/* <SwiperSlide className="flexCenter md:clip_path flex h-[80%] w-full flex-col bg-red-950"></SwiperSlide>
          <SwiperSlide className="flexCenter md:clip_path flex h-[80%] w-full flex-col bg-blue-950"></SwiperSlide> */}
        {banners.map((banner, idx) => (
          <SwiperSlide
            key={idx}
            className={`flexCenter md:clip_path flex h-full w-full flex-col ${banner.color}`}
          >
            <div className="mx-auto grid h-[80%] w-[80%] grid-cols-1 items-center justify-center gap-8 max-md:h-full max-sm:gap-2 md:grid-cols-2">
              <Image
                src={banner.banner}
                alt="banner"
                width={800}
                height={800}
              />
              <div>
                <h1
                  style={{ color: banner.text1Color }}
                  className={`text-[40px] font-semibold tracking-widest max-sm:text-[30px]`}
                >
                  {banner.text1}
                </h1>
                <h1 className="text-[90px] font-bold uppercase leading-[5rem] tracking-wider text-white max-md:text-[60px] max-sm:hidden">
                  {banner.subText1} <br className="max-md:hidden" />{" "}
                  {banner.brSubText1}
                </h1>
                <p className="mt-4 max-sm:mt-2 text-[18px] tracking-wide text-white/70 max-md:line-clamp-4">
                  {banner.desc}
                </p>
                <button className="flexCenter mt-8 max-sm:mt-4 gap-2 rounded-lg bg-green-700 px-8 py-3 text-[16px] text-white transition-all duration-300 hover:bg-green-600 sm:px-8 sm:py-3">
                  <BiCycling className="h-[1.7rem] w-[1.7rem]" />
                  <p className="font-bold">Order Now</p>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  )
}

export default Hero
