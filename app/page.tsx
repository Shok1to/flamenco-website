// app/page.tsx
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  const heroImages = [
    {
      src: "/placeholder.svg?key=itgc3",
      alt: "Flamenco dancer in red dress",
    },
    {
      src: "/placeholder.svg?key=5warc",
      alt: "Flamenco dancer with dramatic pose",
    },
    {
      src: "/placeholder.svg?key=otucc",
      alt: "Passionate flamenco performance",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Adjusted section to push content below fixed header */}
        {/* mt-20 or mt-24 should be sufficient. Removed pt-[55vh] as it might push content too far. */}
        <section
          id="home"
          className="relative min-h-screen pt-24 md:pt-28 lg:pt-32 flex items-center justify-center"
        >
          {" "}
          {/* Added flex and justify-center to hero section */}
          {/* This div contains your background image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/flamenco.webp')", // Your background image
            }}
          >
            <div className="absolute inset-0 bg-black/40" />{" "}
            {/* Your overlay */}
          </div>
          {/* This div contains your text content (Next Tablao, description) */}
          <div className="container relative z-10 flex flex-col items-center justify-center text-center text-white py-20">
            {" "}
            {/* Changed to justify-center here for vertical alignment */}
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-zoom-text">
              Next Tablao
            </h1>
            <p className="mt-4 max-w-[700px] text-lg text-white/90 md:text-xl">
              Authentic performances that capture the soul and spirit of Spain
            </p>
          </div>
        </section>

        <section id="events" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Next Tablao
            </h2>
            <div className="flex justify-center">
              {[
                {
                  id: 1,
                  title: "Noche de Flamenco",
                  date: "June 11, 2024",
                  time: "8:00 PM",
                  location: "Tablao Flamenco Theater",
                  image: "/placeholder.svg?key=k470x",
                },
              ].map((event) => (
                <Card
                  key={event.id}
                  className="overflow-hidden max-w-md w-full"
                >
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
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <MapPin className="mr-2 h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-sm mb-4">
                      Experience an unforgettable night of authentic flamenco
                      with our talented dancers and musicians.
                    </p>
                    <Link href={`/events/${event.id}`}>
                      <Button className="w-full bg-flamenco hover:bg-flamenco-hover">
                        Book Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/events">
                <Button variant="outline" size="lg">
                  View All Events
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-slate-50">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div>
                <div className="aspect-video relative max-w-lg w-full mx-auto">
                  <Image
                    src="/placeholder.svg?key=k470x"
                    alt="Tablao Performance"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  What is Tablao?
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Founded in 2010, our tablao brings the authentic spirit of
                  Andalusian flamenco to life. We showcase the finest dancers,
                  singers, and guitarists in an intimate setting that honors
                  this UNESCO-recognized art form.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Each performance is a unique journey through the passionate
                  expressions of flamenco, from the soulful singing (cante) to
                  the intricate guitar playing (toque) and the powerful dancing
                  (baile).
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/about">
                    <Button className="bg-flamenco hover:bg-flamenco-hover">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
              Contact Us
            </h2>
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
