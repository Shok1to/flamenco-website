// components/site-header.tsx
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    // The header is fixed to the viewport and ensures z-index
    <header className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-sm">
      {" "}
      {/* Added z-50 and a semi-transparent background for visibility */}
      <div className="container flex h-20 items-center justify-between">
        {" "}
        {/* Increased height for more space */}
        <div className="flex items-center">
          {/* Link wraps the image; added flex and h-full to the link for better vertical centering */}
          <Link href="/" className="mr-6 flex items-center h-full">
            <Image
              src="/logo.png" // Path confirmed from your project structure
              alt="Tablao Flamenco Logo"
              width={180} // Increased width significantly
              height={80} // Increased height significantly
              className="object-contain" // Ensures the image scales within its bounds without cropping its content
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
