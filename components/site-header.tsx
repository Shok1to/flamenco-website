// components/site-header.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button" // Assuming you have a button component

export function SiteHeader() {
  return (
    // Changed 'absolute' to 'fixed' to keep it pinned to the viewport
    <header className="fixed w-full top-0 z-20">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          {/* Your Logo/Site Title - Ensure it's visible against the hero image */}
          <Link href="/" className="mr-6 text-2xl font-bold text-white">
            Next Tablao
          </Link>
          {/* Navigation Links - Ensure they are visible against the hero image */}
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
            {/* Add Gallery link if needed based on your coffee site */}
            <Link
              href="/gallery"
              className="text-sm font-medium text-white hover:text-gray-300"
            >
              Gallery
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          {/* Example: A login or call to action button */}
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Book Now
          </Button>
          {/* Hamburger menu for mobile (you'll need to implement this if not already) */}
          <button className="md:hidden text-white">
            {/* You'd typically use an icon here, e.g., <MenuIcon /> from lucide-react */}
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}
