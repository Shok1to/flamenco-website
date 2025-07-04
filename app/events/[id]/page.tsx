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
    <div className="flex min-h-screen flex-col bg-slate-50">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl px-2 py-10 mx-auto">
          <Link
            href="/events"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Link>
          <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row gap-0 md:gap-10 p-6 md:p-10 items-center">
            {/* Image side */}
            <div className="w-full max-w-xs flex-shrink-0 flex items-center justify-center mx-auto">
              <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-white border">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 80vw, 320px"
                />
              </div>
            </div>
            {/* Details + Booking */}
            <div className="flex-1 w-full flex flex-col justify-between mt-8 md:mt-0">
              <h1 className="text-2xl font-bold mb-2">{event.title}</h1>
              <div className="flex items-center text-muted-foreground mb-1">
                <Calendar className="mr-2 h-5 w-5" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-muted-foreground mb-1">
                <Clock className="mr-2 h-5 w-5" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="mr-2 h-5 w-5" />
                <span>{event.location}</span>
              </div>
              <Separator className="my-4" />
              <h2 className="text-lg font-bold mb-2">About This Event</h2>
              <p className="text-muted-foreground mb-6">{event.description}</p>
              <div className="w-full">
                <div className="rounded-lg border bg-card p-6 shadow-sm w-full">
                  <h3 className="text-lg font-bold mb-4">Book Tickets</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-muted-foreground">
                      Price per ticket
                    </span>
                    <span className="font-bold">€{event.price}</span>
                  </div>
                  <BookingForm
                    eventId={String(event.id)}
                    eventTitle={event.title}
                    price={event.price}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
