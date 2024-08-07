import localFont from "next/font/local"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

export const fontHeading = localFont({
    src: "../../public/fonts/cal-sans-semi-bold.woff2",
    variable: "--font-heading",
})

export const fontSans = GeistSans

export const fontMono = GeistMono