"use client"
import { useState } from "react"
import MobileNav from "./MobileNav"
import Nav from "./Nav"

const ResponsiveNav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)
  const openMobileNavHandler = () => setShowMobileNav(true)
  const closeMobileNavHandler = () => setShowMobileNav(false)
  return (
    <div>
      <Nav openMobileNavHandler={openMobileNavHandler} />
      <MobileNav
        showMobileNav={showMobileNav}
        closeMobileNavHandler={closeMobileNavHandler}
      />
    </div>
  )
}

export default ResponsiveNav
