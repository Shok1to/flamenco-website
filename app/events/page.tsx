import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { events } from "@/lib/events"

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container flex flex-col items-center">
            <h1
              className="century-gothic text-4xl font-bold text-center"
              style={{ color: "black" }}
            >
              Next Tablao
            </h1>

            {/* CENTERED GRID WRAPPER */}
            <div className="w-full flex justify-center">
              <div className="grid gap-6 md:grid-cols-2 max-w-3xl w-full">
                {events.map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="text-sm font-medium text-red-600 mb-4">
                        €{event.price}
                      </div>
                      <p className="text-sm mb-4">{event.description}</p>
                      <Link href={`/events/${event.id}`}>
                        <Button className="w-full bg-flamenco hover:bg-flamenco-hover">
                          Book Now
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
