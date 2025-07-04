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

  if (!event) return <div>Event not found.</div>

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-8">
          <Link
            href="/events"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Link>

          {/* FIXED IMAGE SIZE */}
          <div className="relative mx-auto my-8 w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden shadow-md bg-white">
            <Image
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="grid gap-8 md:grid-cols-3 mt-8">
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold">{event.title}</h1>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="mr-2 h-5 w-5" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-2 h-5 w-5" />
                  <span>{event.location}</span>
                </div>
              </div>
              <Separator className="my-6" />
              <div>
                <h2 className="text-xl font-bold mb-4">About This Event</h2>
                <p className="mb-4 text-muted-foreground">
                  {event.description}
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-lg border bg-card p-6 shadow-sm sticky top-24">
                <h3 className="text-lg font-bold mb-4">Book Tickets</h3>
                <div className="flex justify-between items-center mb-4">
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
