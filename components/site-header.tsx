// components/site-header.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const pathname = usePathname()

  const isHome = pathname === "/" // adjust this if your homepage is not exactly "/"

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 pt-4">
      <div
        className="relative flex items-center w-full"
        style={{ minHeight: "64px" }}
      >
        {/* Logo Left */}
        <div className="flex-1">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Tablao Flamenco Logo"
              width={100}
              height={48}
              className="object-contain"
              priority
            />
          </Link>
        </div>
        {/* Menu Centered (only on home page) */}
        {isHome && (
          <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-8">
            <Link
              href="#home"
              className="text-base font-medium text-white hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#events"
              className="text-base font-medium text-white hover:text-gray-300 transition-colors"
            >
              Events
            </Link>
            <Link
              href="#about"
              className="text-base font-medium text-white hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-base font-medium text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/gallery"
              className="text-base font-medium text-white hover:text-gray-300 transition-colors"
            >
              Gallery
            </Link>
          </nav>
        )}
        {/* Right (optional/empty for now) */}
        <div className="flex-1 flex justify-end"></div>
      </div>
    </header>
  )
}
