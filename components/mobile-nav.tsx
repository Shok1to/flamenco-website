"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pr-0">
        <div className="flex flex-col">
          <div className="flex items-center justify-between pr-4">
            <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
              <div className="relative h-20 w-20 overflow-hidden">
                <Image src="/images/logo.png" alt="Tablao Flamenco Toronto Logo" fill className="object-contain" />
              </div>
            </Link>
            <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <nav className="mt-8 flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center py-2 text-lg font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="flex items-center py-2 text-lg font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/events"
              onClick={() => setOpen(false)}
              className="flex items-center py-2 text-lg font-medium transition-colors hover:text-primary"
            >
              Events
            </Link>
            <Link
              href="/gallery"
              onClick={() => setOpen(false)}
              className="flex items-center py-2 text-lg font-medium transition-colors hover:text-primary"
            >
              Gallery
            </Link>
            <Link
              href="/#contact"
              onClick={() => {
                setOpen(false)
                if (window.location.pathname === "/") {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                } else {
                  window.location.href = "/#contact"
                }
              }}
              className="flex items-center py-2 text-lg font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
