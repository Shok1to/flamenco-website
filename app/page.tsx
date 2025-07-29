import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  // Events array, just add more if needed!
  const events = [
    {
      id: 1,
      title: "Aliali Flamenco",
      date: "May 18, 2025",
      time: "3:30 PM",
      location: "RIVOLI",
      image: "/events.jpg",
      description:
        "Experience an unforgettable night of authentic flamenco with our talented dancers and musicians.",
    },
    // If you want to add a second event, copy and edit this object!
    // {
    //   id: 2,
    //   title: "Noche de Flamenco",
    //   date: "June 11, 2025",
    //   time: "8:00 PM",
    //   location: "Tablao Flamenco Theater",
    //   image: "/another-event.jpg",
    //   description: "Another amazing flamenco night.",
    // },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative min-h-screen pt-24 md:pt-28 lg:pt-32 flex items-center justify-center"
        >
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/flamenco.webp')",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center text-center text-white py-20">
            <h1
              className="century-gothic text-4xl font-bold text-center tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-zoom-text py-20"
              style={{ color: "#DA2522" }}
            >
              TABLAO FLAMENCO TORONTO
            </h1>

            <p className="mt-4 max-w-[700px] text-lg text-white/90 md:text-xl">
              Authentic performances that capture the soul and spirit of Spain
            </p>
          </div>
        </section>

        {/* EVENTS SECTION - SIDE-BY-SIDE POSTER */}
        <section id="events" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Next Tablao
            </h2>
            <div className="flex flex-col gap-10 max-w-4xl mx-auto">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-lg shadow-md p-6"
                >
                  {/* IMAGE LEFT */}
                  <div className="flex justify-center">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={300}
                      height={400}
                      className="rounded-lg bg-white"
                      priority
                    />
                  </div>
                  {/* DETAILS RIGHT */}
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
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
                    <p className="text-base mb-4">{event.description}</p>
                    <Link href={`/events/${event.id}`}>
                      <Button className="bg-flamenco hover:bg-flamenco-hover">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
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

        {/* ABOUT SECTION */}
        <section id="about" className="py-16 bg-slate-50">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div>
                <div className="relative w-full max-w-xl aspect-[4/3] rounded-lg overflow-hidden shadow-md mx-auto">
                  <Image
                    src="/Tablao.jpg"
                    alt="Tablao Performance"
                    fill
                    className="object-cover rounded-lg"
                    priority
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

        {/* CONTACT SECTION */}
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
