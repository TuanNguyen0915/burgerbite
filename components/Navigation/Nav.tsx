"use client"
import { navLinks } from "@/constants"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BiCycling, BiShoppingBag } from "react-icons/bi"
import { FaBurger } from "react-icons/fa6"
import { HiBars3BottomRight } from "react-icons/hi2"

interface INavProps {
  openMobileNavHandler: () => void
}

const Nav = ({ openMobileNavHandler }: INavProps) => {
  const router = useRouter()
  return (
    <div className="h-[12vh] w-full bg-white">
      <div className="flexBetween mx-auto h-full w-[95%] sm:w-[90%] cursor-pointer">
        {/* LOGO */}
        <div
          className="group flex items-center gap-2"
          onClick={() => router.push("/")}
        >
          <FaBurger className="h-[1.6rem] w-[1.6rem] text-orange-500 transition-all group-hover:text-black sm:h-[1.4rem] sm:w-[1.4rem]" />
          <h1 className="text-[30px] max-sm:text-[] font-semibold transition-all group-hover:text-orange-500 lg:text-[60px]">
            BurgerBite
          </h1>
        </div>
        {/* NAV LINK */}
        <div className="lg:flexCenter hidden gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.path}
              className="text-[20px] font-medium transition-all hover:text-red-600"
            >
              {link.title}
            </Link>
          ))}
        </div>
        {/* BUTTONS */}
        <div className="flex items-center justify-end gap-4">
          <button className="flexCenter gap-2 rounded-lg bg-blue-950 px-6 py-2 text-[14px] text-white transition-all duration-300 hover:bg-red-600 sm:px-8 sm:py-3 sm:text-[16px]">
            <BiCycling className="h-[1.2rem] w-[1.2rem] sm:h-[1.7rem] sm:w-[1.7rem]" />
            <p className="font-bold">Order Now</p>
          </button>
          <button className="flexCenter rounded-lg bg-orange-600 px-4 py-2 text-white transition-all duration-300 hover:bg-green-700 sm:px-6 sm:py-3">
            <BiShoppingBag className="h-[1.2rem] w-[1.2rem] sm:h-[1.7rem] sm:w-[1.7rem]" />
          </button>
          <HiBars3BottomRight
            className="h-[2rem] w-[2rem] cursor-pointer text-black lg:hidden"
            onClick={openMobileNavHandler}
          />
        </div>
      </div>
    </div>
  )
}

export default Nav
