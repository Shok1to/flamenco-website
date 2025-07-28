// app/layout.tsx
import React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Tablao Flamenco - Authentic Spanish Flamenco Performances",
  description:
    "Experience the passion and artistry of authentic flamenco performances at our intimate tablao venue.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add Montserrat font from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
