import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { BookingForm } from "@/components/booking-form"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { events } from "@/lib/events"

export default function EventPage({ params }: { params: { id: string } }) {
  // This would be fetched from Sanity CMS in the future
  const events = [
    {
      id: "1",
      title: "Noche de Flamenco",
      date: "June 15, 2024",
      time: "8:00 PM",
      location: "Tablao Flamenco Theater",
      description:
        "Experience an unforgettable night of authentic flamenco with our talented dancers and musicians. This special performance brings together the finest elements of traditional flamenco art, featuring passionate dancing, soulful singing, and masterful guitar playing.\n\nOur internationally acclaimed artists will take you on a journey through the diverse styles (palos) of flamenco, from the intense and dramatic Soleá to the festive Alegrías. The intimate setting of our tablao creates the perfect atmosphere to feel the raw emotion and energy that makes flamenco a UNESCO-recognized cultural heritage.",
      image:
        "/placeholder.svg?height=600&width=1200&query=female flamenco dancer in red dress on stage with spotlight",
      price: 45,
      performers: [
        {
          name: "Carmen Romero",
          role: "Lead Dancer",
          bio: "With over 15 years of experience, Carmen is known for her powerful footwork and emotional expression.",
          image:
            "/placeholder.svg?height=300&width=300&query=female flamenco dancer portrait",
        },
        {
          name: "Miguel Fernández",
          role: "Guitarist",
          bio: "A virtuoso guitarist who has performed worldwide and recorded with some of the greatest flamenco artists.",
          image:
            "/placeholder.svg?height=300&width=300&query=male flamenco guitarist portrait",
        },
        {
          name: "Rafael Cortés",
          role: "Singer",
          bio: "Rafael's deep, soulful voice carries the centuries-old tradition of flamenco singing with authentic passion.",
          image:
            "/placeholder.svg?height=300&width=300&query=male flamenco singer portrait",
        },
      ],
    },
    {
      id: "2",
      title: "Flamenco Fusion",
      date: "June 22, 2024",
      time: "8:00 PM",
      location: "Tablao Flamenco Theater",
      description:
        "A unique blend of traditional flamenco with contemporary influences, creating a mesmerizing experience. This innovative performance pushes the boundaries of flamenco while respecting its rich heritage.\n\nOur artists combine traditional flamenco techniques with elements from jazz, contemporary dance, and world music to create a fresh and exciting show that appeals to both flamenco aficionados and newcomers alike.",
      image: "/placeholder.svg?key=llagu",
      price: 50,
      performers: [
        {
          name: "Lucía Martínez",
          role: "Lead Dancer",
          bio: "Lucía brings grace and fire to every performance, specializing in both traditional and contemporary flamenco styles.",
          image:
            "/placeholder.svg?height=300&width=300&query=young female flamenco dancer portrait",
        },
        {
          name: "Antonio Reyes",
          role: "Percussionist",
          bio: "Antonio's rhythmic precision on the cajón adds depth and texture to our flamenco performances.",
          image:
            "/placeholder.svg?height=300&width=300&query=male flamenco percussionist portrait",
        },
        {
          name: "Isabel Flores",
          role: "Dancer & Choreographer",
          bio: "As our artistic director, Isabel brings innovation while respecting the traditional roots of flamenco.",
          image:
            "/placeholder.svg?height=300&width=300&query=mature female flamenco dancer portrait",
        },
      ],
    },
  ]

  const event = events.find((e) => e.id === params.id) || events[0]

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

          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg">
            <Image
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              fill
              className="object-cover"
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
                <div className="prose max-w-none">
                  {event.description.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="mb-4 text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              <div>
                <h2 className="text-xl font-bold mb-4">Featured Performers</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {event.performers.map((performer) => (
                    <div
                      key={performer.name}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="relative h-32 w-32 overflow-hidden rounded-full mb-4">
                        <Image
                          src={performer.image || "/placeholder.svg"}
                          alt={performer.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-bold">{performer.name}</h3>
                      <p className="text-sm bg-flamenco hover:bg-flamenco-hover mb-2">
                        {performer.role}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {performer.bio}
                      </p>
                    </div>
                  ))}
                </div>
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
