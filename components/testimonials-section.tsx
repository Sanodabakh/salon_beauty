import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sophie Diop",
    service: "Coiffure & Coloration",
    rating: 5,
    text: "Une expérience exceptionnelle ! L'équipe a su comprendre exactement ce que je voulais. Ma coloration est parfaite et mes cheveux n'ont jamais été aussi beaux. Je recommande les yeux fermés !",
    image: "/woman-elegant.jpg",
  },
  {
    name: "Ndeye Sokhna Ndiaye",
    service: "Soins du visage",
    rating: 5,
    text: "Un moment de pure détente dans un cadre magnifique. Les soins sont d'une qualité irréprochable et ma peau rayonne. C'est devenu mon rituel mensuel indispensable.",
    image: "/black-woman.jpg",
  },
  {
    name: "Dieynaba Danso",
    service: "Maquillage mariée",
    rating: 5,
    text: "Pour mon mariage, j'ai fait confiance à cette équipe et je ne le regrette pas ! Le maquillage était sublime, naturel et a tenu toute la journée. Merci pour ce moment magique !",
    image: "/woman-married.jpg",
  },
  {
    name: "Coumba Diop",
    service: "Manucure & Pédicure",
    rating: 5,
    text: "Le meilleur salon de la région ! L'attention aux détails, la propreté impeccable et le professionnalisme font toute la différence. Mes ongles sont toujours parfaits.",
    image: "/woman-elegant-dark.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Elles Nous Font Confiance</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            La satisfaction de nos clientes est notre plus belle récompense. Découvrez leurs témoignages authentiques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.service}</p>
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
