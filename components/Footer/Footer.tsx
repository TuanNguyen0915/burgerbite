"use client"
import { footerProducts, footerQuickLinks } from "@/constants"
import React from "react"
import { FaInstagram } from "react-icons/fa"
import { FaBurger, FaFacebook, FaSnapchat, FaTwitter } from "react-icons/fa6"

const Footer = () => {
  const handleClickToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <div className="w-full rounded-t-2xl bg-[#111827] py-4">
      <div className="mx-auto grid w-[80%] grid-cols-2 lg:grid-cols-4 gap-6">
        {/* LOGO */}
        <div className="flexCol gap-6 text-lg text-white">
          <div
            className="group flex cursor-pointer items-center gap-2"
            onClick={handleClickToTop}
          >
            <FaBurger className="h-[1.2rem] w-[1.2rem] text-orange-500 transition-all group-hover:brightness-125 sm:h-[1.4rem] sm:w-[1.4rem]" />
            <h1 className="text-[30px] font-semibold text-white transition-all group-hover:text-orange-500">
              BurgerBite
            </h1>
          </div>
          <p className="opacity-70">Best Burger in town</p>
          <p className="opacity-70">example@gmail.com</p>
          <p className="text-xl font-semibold text-orange-500">
            617-448-BURGERS
          </p>
        </div>
        {/* PRODUCT */}

        <div className="flexCol gap-4 text-lg text-white">
          <h1 className="cursor-pointer text-[30px] font-semibold text-white transition-all hover:text-orange-500">
            Products
          </h1>
          {footerProducts.map((product, idx) => (
            <p
              key={idx}
              className="cursor-pointer capitalize opacity-70 hover:opacity-100"
            >
              {product.name}
            </p>
          ))}
        </div>
        {/* QUICK LINKS */}
        <div className="flexCol gap-4 text-lg text-white">
          <h1 className="cursor-pointer text-[30px] font-semibold text-white transition-all hover:text-orange-500">
            Quick Links
          </h1>
          {footerQuickLinks.map((link, idx) => (
            <p
              key={idx}
              className="cursor-pointer capitalize opacity-70 hover:opacity-100"
            >
              {link.name}
            </p>
          ))}
        </div>
        {/* OPEN HOURS */}
        <div className="flexCol gap-8 text-lg text-white">
          <h1 className="cursor-pointer text-[30px] font-semibold text-white transition-all hover:text-orange-500">
            OPENING HOURS
          </h1>
          <div className="flex items-center gap-4 text-xl">
            <p>Monday-Friday: </p>
            <p className="text-yellow-500">8am - 6pm</p>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <p>Saturday-Sunday: </p>
            <p className="text-yellow-500">8am - 1pm</p>
          </div>
          <div className=" flex items-center gap-4">
            <FaFacebook
              size={32}
              className="cursor-pointer text-blue-600 transition-all duration-300 hover:scale-125 hover:brightness-125"
            />
            <FaInstagram
              size={32}
              className="cursor-pointer text-red-400 transition-all duration-300 hover:scale-125 hover:brightness-125"
            />
            <FaTwitter
              size={32}
              className="cursor-pointer text-blue-400 transition-all duration-300 hover:scale-125 hover:brightness-125"
            />
            <FaSnapchat
              size={32}
              className="cursor-pointer text-yellow-500 transition-all duration-300 hover:scale-125 hover:brightness-125"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto my-4 h-[2px] w-[80%] rounded-full bg-gray-400" />
      <p className="text-center text-white text-md opacity-70">CopyRight @2024 <span className="text-orange-500">TuanNguyen</span>. All rights reserved</p>
    </div>
  )
}

export default Footer
