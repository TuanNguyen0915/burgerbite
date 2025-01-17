import type { Metadata } from "next"
import { Barlow_Condensed } from "next/font/google"
import "./globals.css"
import ResponsiveNav from "@/components/Navigation/ResponsiveNav"

const barlow_Condensed = Barlow_Condensed({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "BurgerBite",
  description: "Generated by create next app",
  icons: {
    icon: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${barlow_Condensed.className} mx-auto min-h-screen max-w-[1920px] bg-[#f4f1ea] `}
        suppressContentEditableWarning
      >
        <ResponsiveNav />
        {children}
      </body>
    </html>
  )
}
