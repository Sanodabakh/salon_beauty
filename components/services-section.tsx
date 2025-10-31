import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Sparkles, Palette, Hand } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Coiffure",
    description:
      "Coupes tendances, colorations sur-mesure, balayages naturels et soins capillaires profonds pour sublimer votre chevelure.",
    features: ["Coupe & Brushing", "Coloration", "Mèches & Balayage", "Soins Kerastase"],
  },
  {
    icon: Sparkles,
    title: "Soins Esthétiques",
    description:
      "Traitements du visage personnalisés, épilations délicates et soins anti-âge pour une peau éclatante et rajeunie.",
    features: ["Soins du visage", "Épilation", "Microdermabrasion", "Peeling doux"],
  },
  {
    icon: Palette,
    title: "Maquillage",
    description:
      "Maquillage professionnel pour tous vos événements, du naturel au glamour, avec des produits haut de gamme.",
    features: ["Maquillage jour", "Maquillage soirée", "Mariée", "Cours de maquillage"],
  },
  {
    icon: Hand,
    title: "Manucure & Pédicure",
    description:
      "Soins complets des mains et pieds, pose de vernis semi-permanent, nail art créatif et modelage des ongles.",
    features: ["Manucure classique", "Vernis semi-permanent", "Nail art", "Pédicure spa"],
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Nos Services d'Excellence</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Une gamme complète de prestations pour prendre soin de vous de la tête aux pieds, avec des techniques
            innovantes et des produits premium
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="font-serif text-2xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 pt-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
