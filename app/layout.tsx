// app/layout.tsx
import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header" // <--- IMPORT SiteHeader here

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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Render SiteHeader here, ensuring it's a direct child of body */}
          <SiteHeader />
          {children} {/* children will now contain your main page content */}
        </ThemeProvider>
      </body>
    </html>
  )
}
