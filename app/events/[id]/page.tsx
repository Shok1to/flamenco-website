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
  if (!event) return <div>Event not found</div>

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

          <div className="grid gap-8 md:grid-cols-2 items-start">
            {/* Event Image */}
            <div className="w-full flex justify-center">
              <div className="relative w-[340px] h-[400px] rounded-lg overflow-hidden shadow-md bg-white">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </div>
            {/* Details & Ticket Card */}
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-2xl font-bold">{event.title}</h1>
                <div className="flex items-center text-muted-foregro
