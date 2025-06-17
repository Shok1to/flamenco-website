import Link from "next/link"
import Image from "next/image"

import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-28 items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-24 w-24 overflow-hidden">
            <Image src="/images/logo.png" alt="Tablao Flamenco Toronto Logo" fill className="object-contain" />
          </div>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/events" className="text-sm font-medium transition-colors hover:text-primary">
            Events
          </Link>
          <Link href="/gallery" className="text-sm font-medium transition-colors hover:text-primary">
            Gallery
          </Link>
          <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="w-24 md:block"></div> {/* Spacer to maintain layout balance */}
        <MobileNav />
      </div>
    </header>
  )
}
