import { Button } from "@/components/ui/button"
import { Calendar, Phone, MapPin } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">Prête à Révéler Votre Beauté ?</h2>
          <p className="text-lg text-accent-foreground/90 text-pretty leading-relaxed max-w-2xl mx-auto">
            Offrez-vous un moment d'exception et laissez nos experts sublimer votre beauté naturelle. Réservez dès
            maintenant votre rendez-vous.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" variant="secondary" className="text-base px-8 py-6">
              <Calendar className="mr-2 h-5 w-5" />
              Réserver en ligne
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 border-accent-foreground/20 hover:bg-accent-foreground/10 bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              +221 77 874 03 72
            </Button>
          </div>

          <div className="pt-8 border-t border-accent-foreground/20">
            <div className="flex items-center justify-center gap-2 text-accent-foreground/90">
              <MapPin className="w-5 h-5" />
              <p>Niary Tally ,  Dakar</p>
            </div>
            <p className="text-sm text-accent-foreground/70 mt-2">Ouvert du mardi au samedi, 9h-19h</p>
          </div>
        </div>
      </div>
    </section>
  )
}
