// components/site-header.tsx
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    // The header is fixed to the viewport and ensures z-index
    <header className="absolute left-0 w-full z-50 bg-black/40 backdrop-blur-sm mt-4">
      <div
        className="container flex items-center justify-between py-2"
        style={{ height: "64px" }}
      >
        <div className="flex items-center h-full pt-2">
          <Link href="/" className="flex items-center h-full mr-6">
            <Image
              src="/logo.png"
              alt="Tablao Flamenco Logo"
              width={100}
              height={48}
              className="object-contain"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6 ml-4">
            {" "}
            {/* Increased spacing */}
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
        </div>
        {/* <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Book Now
          </Button>
          <button className="md:hidden text-white">Menu</button>
        </div> */}
      </div>
    </header>
  )
}
