import { events } from "@/lib/events"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react"
import { BookingForm } from "@/components/booking-form"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function EventPage({ params }: { params: { id: string } }) {
  const event = events.find((e) => String(e.id) === params.id)
  if (!event) return <div className="text-center py-20">Event not found.</div>

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-8 max-w-4xl mx-auto">
          <Link
            href="/events"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Link>
          <div className="grid gap-10 md:grid-cols-3 items-center">
            {/* Event Image */}
            <div className="md:col-span-1 flex justify-center">
              <div className="relative w-full max-w-xs aspect-[4/3] rounded-lg overflow-hidden shadow bg-white">
                <Image
