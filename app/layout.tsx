import "./globals.css"
import { Rajdhani } from "next/font/google"
import type React from "react"

const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] })

export const metadata = {
  title: "MD SADIKUR RAHAMAN - Game Developer Portfolio",
  description: "Portfolio of MD SADIKUR RAHAMAN, a Unity Game Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body className={`${rajdhani.className} gaming-bg`}>{children}</body>
    </html>
  )
}

