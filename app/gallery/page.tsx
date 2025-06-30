import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function GalleryPage() {
  const galleryImages = [
    {
      id: 1,
      title: "Flamenco Performance",
      category: "performances",
      image:
        "/placeholder.svg?height=600&width=600&query=female flamenco dancer in red dress on stage",
    },
    {
      id: 2,
      title: "Guitar Solo",
      category: "performances",
      image:
        "/placeholder.svg?height=600&width=600&query=flamenco guitarist performing solo on stage",
    },
    {
      id: 3,
      title: "Dance Workshop",
      category: "workshops",
      image:
        "/placeholder.svg?height=600&width=600&query=flamenco dance workshop with students",
    },
    {
      id: 4,
      title: "Backstage Moments",
      category: "backstage",
      image:
        "/placeholder.svg?height=600&width=600&query=flamenco dancers backstage preparing",
    },
    {
      id: 5,
      title: "Venue Interior",
      category: "venue",
      image:
        "/placeholder.svg?height=600&width=600&query=intimate flamenco venue with tables and stage",
    },
    {
      id: 6,
      title: "Group Performance",
      category: "performances",
      image:
        "/placeholder.svg?height=600&width=600&query=group of flamenco dancers on stage",
    },
    {
      id: 7,
      title: "Percussion Class",
      category: "workshops",
      image:
        "/placeholder.svg?height=600&width=600&query=flamenco cajon percussion workshop",
    },
    {
      id: 8,
      title: "Costume Details",
      category: "backstage",
      image:
        "/placeholder.svg?height=600&width=600&query=detailed flamenco dress and accessories",
    },
    {
      id: 9,
      title: "Stage Lighting",
      category: "venue",
      image:
        "/placeholder.svg?height=600&width=600&query=flamenco stage with dramatic lighting",
    },
    {
      id: 10,
      title: "Solo Dance",
      category: "performances",
      image:
        "/placeholder.svg?height=600&width=600&query=solo flamenco dancer with dramatic pose",
    },
    {
      id: 11,
      title: "Guitar Workshop",
      category: "workshops",
      image:
        "/placeholder.svg?height=600&width=600&query=flamenco guitar technique workshop",
    },
    {
      id: 12,
      title: "Rehearsal",
      category: "backstage",
      image:
        "/placeholder.svg?height=600&width=600&query=flamenco dancers rehearsing in studio",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Photo Gallery
            </h1>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Explore the passion and artistry of flamenco through our
              collection of performances, workshops, and behind-the-scenes
              moments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              {galleryImages.map((image) => (
                <GalleryItem key={image.id} image={image} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

function GalleryItem({
  image,
}: {
  image: { id: number; title: string; category: string; image: string }
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="aspect-square relative">
        <Image
          src={image.image || "/placeholder.svg"}
          alt={image.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-medium">{image.title}</h3>
        <p className="text-white/80 text-sm capitalize">{image.category}</p>
      </div>
    </div>
  )
}
