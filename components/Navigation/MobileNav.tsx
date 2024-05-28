import { navLinks } from "@/constants"
import Link from "next/link"
import { ImCross } from "react-icons/im"

interface IMobileNavProps {
  closeMobileNavHandler: () => void
  showMobileNav: boolean
}

const MobileNav = ({
  closeMobileNavHandler,
  showMobileNav,
}: IMobileNavProps) => {
  const navStyle = showMobileNav ? "translate-x-0" : "translate-x-[-100%]"

  return (
    <div
      className={`fixed ${navStyle} bottom-0 left-0 right-0 top-0 z-50 h-full  bg-[#000000e0] transition-all duration-500`}
    >
      <ImCross
        className="absolute right-[2rem] top-[2rem] h-[2rem] w-[2rem] cursor-pointer text-white"
        onClick={closeMobileNavHandler}
      />
      <div
        className={` flexCol ${navStyle} h-full w-[70vw] items-center justify-center gap-10 divide-neutral-500 bg-emerald-700 transition-all delay-200 duration-500`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.title}
            href={link.path}
            className="text-[35px] font-medium text-white transition-all hover:text-yellow-400"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MobileNav
