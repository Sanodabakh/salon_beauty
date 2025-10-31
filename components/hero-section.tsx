import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/elegant-beauty-salon.png"
          alt="Salon de beauté élégant"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-4">
            <p className="text-sm font-medium text-accent-foreground">Votre destination beauté depuis 2020</p>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight">
            Révélez votre <span className="text-accent">beauté</span> naturelle
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Un havre de paix où expertise, élégance et bien-être se rencontrent pour sublimer votre confiance et votre
            éclat naturel
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90">
              <Calendar className="mr-2 h-5 w-5" />
              Réserver en ligne
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6 bg-transparent">
              <Phone className="mr-2 h-5 w-5" />
              Nous appeler
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <p className="text-3xl font-serif font-bold text-accent">5+</p>
              <p className="text-sm text-muted-foreground">Années d'expérience</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-serif font-bold text-accent">100+</p>
              <p className="text-sm text-muted-foreground">Clientes satisfaites</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-serif font-bold text-accent">4.9★</p>
              <p className="text-sm text-muted-foreground">Note moyenne</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
