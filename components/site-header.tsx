// components/site-header.tsx
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="fixed w-full top-0 z-20">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center h-full">
            <Image
              src="/logo.png"
              alt="Tablao Flamenco Logo"
              width={160} // Increased width again
              height={70} // Increased height again
              className="object-contain"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              href="#home"
              className="text-sm font-medium text-white hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              href="#events"
              className="text-sm font-medium text-white hover:text-gray-300"
            >
              Events
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-white hover:text-gray-300"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-white hover:text-gray-300"
            >
              Contact
            </Link>
            <Link
              href="/gallery"
              className="text-sm font-medium text-white hover:text-gray-300"
            >
              Gallery
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Book Now
          </Button>
          <button className="md:hidden text-white">Menu</button>
        </div>
      </div>
    </header>
  )
}
