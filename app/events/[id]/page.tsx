import { events } from "@/lib/events"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react"
import { BookingForm } from "@/components/booking-form"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

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
    <div className="flex min-h-screen flex-col bg-slate-50">
      <SiteHeader />
      <main className="flex-1 flex flex-col items-center justify-center py-8">
        <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row gap-8 items-center">
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-72 flex items-center justify-center">
            <div className="w-60 h-72 relative rounded-lg overflow-hidden bg-white border">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          {/* Details & Booking */}
          <div className="flex-1 w-full flex flex-col gap-4">
            <div>
              <Link
                href="/events"
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-2"
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to Events
              </Link>
              <h1 className="text-2xl font-bold mb-1">{event.title}</h1>
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <Clock className="mr-2 h-4 w-4" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <MapPin className="mr-2 h-4 w-4" />
                <span>{event.location}</span>
              </div>
              <p className="text-muted-foreground mb-2">{event.description}</p>
            </div>
            <div className="mt-2">
              <div className="rounded-lg border bg-card p-4 shadow-sm w-full">
                <h3 className="text-md font-bold mb-2">Book Tickets</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">
                    Price per ticket
                  </span>
                  <span className="font-bold">€{event.price}</span>
                </div>
                <BookingForm
                  eventId={event.id}
                  eventTitle={event.title}
                  price={event.price}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
