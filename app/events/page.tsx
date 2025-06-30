import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function EventsPage() {
  // This would be fetched from Sanity CMS in the future
  const events = [
    {
      id: 1,
      title: "Noche de Flamenco",
      date: "June 15, 2024",
      time: "8:00 PM",
      location: "Tablao Flamenco Theater",
      description:
        "Experience an unforgettable night of authentic flamenco with our talented dancers and musicians.",
      image: "/placeholder.svg?key=hiooi",
      price: 45,
    },
    {
      id: 2,
      title: "Flamenco Fusion",
      date: "June 22, 2024",
      time: "8:00 PM",
      location: "Tablao Flamenco Theater",
      description:
        "A unique blend of traditional flamenco with contemporary influences, creating a mesmerizing experience.",
      image: "/placeholder.svg?key=aeain",
      price: 50,
    },
    {
      id: 3,
      title: "Guitarra y Cante",
      date: "June 29, 2024",
      time: "8:00 PM",
      location: "Tablao Flamenco Theater",
      description:
        "An intimate evening focused on the soulful singing and masterful guitar playing of flamenco.",
      image: "/placeholder.svg?key=cqq01",
      price: 40,
    },
    // {
    //   id: 4,
    //   title: "Flamenco Workshop",
    //   date: "July 5, 2024",
    //   time: "6:00 PM",
    //   location: "Tablao Flamenco Studio",
    //   description:
    //     "Learn the basics of flamenco dance in this beginner-friendly workshop led by our professional dancers.",
    //   image: "/placeholder.svg?key=ho18p",
    //   price: 35,
    // },
    // {
    //   id: 5,
    //   title: "Andalusian Night",
    //   date: "July 12, 2024",
    //   time: "8:00 PM",
    //   location: "Tablao Flamenco Theater",
    //   description:
    //     "A special performance celebrating the rich cultural heritage of Andalusia through flamenco.",
    //   image: "/placeholder.svg?key=0yjm4",
    //   price: 45,
    // },
    // {
    //   id: 6,
    //   title: "Flamenco & Tapas",
    //   date: "July 19, 2024",
    //   time: "7:30 PM",
    //   location: "Tablao Flamenco Theater",
    //   description:
    //     "Enjoy authentic Spanish tapas while experiencing the passion of flamenco in this dinner show.",
    //   image: "/placeholder.svg?key=8b8bo",
    //   price: 65,
    // },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Next Tablao
            </h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
