import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function GalleryPage() {
  const galleryImages = [
    {
      id: 1,
      title: "Flamenco Performance",
      category: "performances",
      description:
        "A vibrant performance by our lead dancer at the annual show.",
      image: "/flamenco.webp",
    },
    {
      id: 2,
      title: "Guitar Solo",
      category: "performances",
      description:
        "A soulful solo by our guitarist, captivating the entire audience.",
      image: "/guitar.jpg",
    },
    {
      id: 3,
      title: "Dance Workshop",
      category: "workshops",
      description:
        "A lively workshop session introducing new dancers to flamenco basics.",
      image: "/dance.jpg",
    },
    {
      id: 4,
      title: "Backstage Moments",
      category: "backstage",
      description: "Dancers preparing costumes and makeup before the big show.",
      image: "/backstage.jpg",
    },
    // Add more images as needed...
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
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
  image: {
    id: number
    title: string
    category: string
    image: string
    description?: string
  }
}) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transition-shadow duration-200 flex flex-col h-full">
      <div className="aspect-square relative w-full">
        <Image
          src={image.image || "/placeholder.svg"}
          alt={image.title}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
        <p className="text-xs text-gray-500 capitalize">{image.category}</p>
        {image.description && (
          <p className="text-sm text-gray-600 mt-1 flex-1">
            {image.description}
          </p>
        )}
      </div>
    </div>
  )
}
