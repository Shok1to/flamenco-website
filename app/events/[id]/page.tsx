import { events } from "@/lib/events"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react"
import { BookingForm } from "@/components/booking-form"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Separator } from "@/components/ui/separator"

export default function EventPage({ params }: { params: { id: string } }) {
  const event = events.find((e) => String(e.id) === params.id)

  if (!event) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Event not found</h1>
            <Link href="/events" className="text-blue-600 underline">
              Back to Events
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-12">
          <Link
            href="/events"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Link>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Event Poster */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-lg overflow-hidden shadow-md bg-white">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            {/* Event Details + Booking */}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2">{event.title}</h1>
                <div className="flex items-center text-muted-foreground mb-1">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-1">
                  <Clock className="mr-2 h-5 w-5" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-ce
