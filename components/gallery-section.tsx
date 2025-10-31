export function GallerySection() {
  const images = [
    { url: "/woman-married.jpg", alt: "Transformation coiffure" },
    { url: "/woman-elegant-dark.jpg", alt: "Maquillage professionnel" },
    { url: "/professional-makeup.jpg", alt: "Nail art élégant" },
    { url: "/black-woman.jpg", alt: "Soin du visage" },
    { url: "/hair-coloring-salon.png", alt: "Coloration professionnelle" },
    { url: "/beauty-salon-interior-elegant-modern.jpg", alt: "Notre salon" },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Galerie & Transformations</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Découvrez nos réalisations et laissez-vous inspirer par les transformations que nous créons chaque jour.
            Chaque cliente a une histoire unique à raconter.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="aspect-square rounded-xl overflow-hidden group cursor-pointer">
              <img
                src={image.url || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Suivez-nous sur Instagram{" "}
            <a href="#" className="text-accent hover:underline font-medium">
              @elegance.beaute
            </a>{" "}
            pour plus d'inspirations
          </p>
        </div>
      </div>
    </section>
  )
}
