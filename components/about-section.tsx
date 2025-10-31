import { Award, Heart, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img src="/professional-beauty.jpg" alt="Notre équipe" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
              <p className="text-4xl font-serif font-bold">10+</p>
              <p className="text-sm">Ans d'expertise</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
                L'Art de Sublimer Votre Beauté
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Bienvenue dans notre univers dédié à votre bien-être et à votre beauté. Depuis plus de 10 ans, notre
                  salon est devenu une référence d'excellence où chaque cliente est unique et mérite une attention
                  particulière.
                </p>
                <p>
                  Notre équipe de professionnels passionnés et certifiés met son expertise à votre service pour révéler
                  votre beauté naturelle. Nous croyons que la confiance en soi commence par se sentir bien dans sa peau.
                </p>
                <p>
                  Dans un cadre élégant et apaisant, nous utilisons exclusivement des produits haut de gamme et des
                  techniques innovantes pour vous offrir des résultats exceptionnels qui dépassent vos attentes.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold">Excellence</h3>
                <p className="text-sm text-muted-foreground">Expertise reconnue et formation continue</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold">Passion</h3>
                <p className="text-sm text-muted-foreground">Amour du métier et écoute attentive</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold">Confiance</h3>
                <p className="text-sm text-muted-foreground">Relation privilégiée avec nos clientes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
