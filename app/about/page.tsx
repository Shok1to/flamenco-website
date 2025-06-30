import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              What is flamenco?
            </h1>
            <div className="grid gap-6 md:grid-cols-2 items-center">
              {/* Reduced gap from 12 to 6 */}
              <div className="relative flex justify-center items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lunares%20in%20Long%20Rectangle.jpg-XDG4g1JCIgYB5EKskbgJC9Xq2nYnNW.jpeg"
                  alt="Tablao Flamenco Toronto Logo"
                  className="max-w-full h-auto rounded-lg"
                  style={{ maxWidth: "280px" }}
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2010, our tablao brings the authentic spirit of
                  Andalusian flamenco to life. We showcase the finest dancers,
                  singers, and guitarists in an intimate setting that honors
                  this UNESCO-recognized art form.
                </p>
                <p className="text-muted-foreground mb-4">
                  Each performance is a unique journey through the passionate
                  expressions of flamenco, from the soulful singing (cante) to
                  the intricate guitar playing (toque) and the powerful dancing
                  (baile).
                </p>
                <p className="text-muted-foreground mb-4">
                  Our mission is to preserve and promote the rich tradition of
                  flamenco while creating unforgettable experiences for our
                  guests. We believe in the power of this art form to connect
                  people across cultures and languages through its universal
                  emotional resonance.
                </p>
              </div>
            </div>

            <Separator className="my-12" />

            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">About Kiyo</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We work with some of the most talented flamenco artists, each
                bringing their unique style and interpretation to this
                traditional art form.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Carmen Romero",
                  role: "Lead Dancer",
                  bio: "With over 15 years of experience, Carmen is known for her powerful footwork and emotional expression.",
                  image: "/placeholder.svg?key=0fnfu",
                },
                // {
                //   name: "Miguel Fernández",
                //   role: "Guitarist",
                //   bio: "A virtuoso guitarist who has performed worldwide and recorded with some of the greatest flamenco artists.",
                //   image: "/placeholder.svg?key=dzusu",
                // },
                // {
                //   name: "Rafael Cortés",
                //   role: "Singer",
                //   bio: "Rafael's deep, soulful voice carries the centuries-old tradition of flamenco singing with authentic passion.",
                //   image: "/placeholder.svg?key=bzupc",
                // },
                // {
                //   name: "Lucía Martínez",
                //   role: "Dancer",
                //   bio: "Lucía brings grace and fire to every performance, specializing in the Alegrías and Soleá styles.",
                //   image: "/placeholder.svg?key=u4z52",
                // },
                // {
                //   name: "Antonio Reyes",
                //   role: "Percussionist",
                //   bio: "Antonio's rhythmic precision on the cajón adds depth and texture to our flamenco performances.",
                //   image: "/placeholder.svg?key=a4fwy",
                // },
                // {
                //   name: "Isabel Flores",
                //   role: "Dancer & Choreographer",
                //   bio: "As our artistic director, Isabel brings innovation while respecting the traditional roots of flamenco.",
                //   image: "/placeholder.svg?key=k9uye",
                // },
              ].map((artist) => (
                <div
                  key={artist.name}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative h-48 w-48 overflow-hidden rounded-full mb-4">
                    <Image
                      src={artist.image || "/placeholder.svg"}
                      alt={artist.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{artist.name}</h3>
                  <p className="text-sm text-flamenco-500 mb-2">
                    {artist.role}
                  </p>
                  <p className="text-sm text-muted-foreground">{artist.bio}</p>
                </div>
              ))}
            </div>

            <Separator className="my-12" />

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">The Art of Flamenco</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                Flamenco is a passionate and expressive art form that originated
                in the Andalusia region of southern Spain. It encompasses three
                main elements: cante (singing), toque (guitar playing), and
                baile (dance).
              </p>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="p-6 rounded-lg bg-slate-50">
                  <h3 className="text-xl font-bold mb-2">Cante</h3>
                  <p className="text-muted-foreground">
                    The vocal expression of flamenco, often raw and emotional,
                    conveying deep feelings of pain, joy, or longing.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-slate-50">
                  <h3 className="text-xl font-bold mb-2">Toque</h3>
                  <p className="text-muted-foreground">
                    The intricate guitar playing that provides the melodic and
                    rhythmic foundation for flamenco performances.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-slate-50">
                  <h3 className="text-xl font-bold mb-2">Baile</h3>
                  <p className="text-muted-foreground">
                    The expressive dance characterized by precise footwork,
                    graceful arm movements, and emotional intensity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
