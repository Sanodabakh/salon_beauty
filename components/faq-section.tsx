import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield } from "lucide-react"

const faqs = [
  {
    question: "Quels sont vos tarifs ?",
    answer:
      "Nos tarifs varient selon les prestations. Une coupe femme commence à partir de 20.000 FCFA, une coloration à partir de 25000 FCA, un soin du visage à partir de 30000 FCFA, et une manucure à partir de 10000 FCFA. Nous proposons également des forfaits avantageux. N'hésitez pas à nous contacter pour un devis personnalisé.",
  },
  {
    question: "Quelles mesures d'hygiène appliquez-vous ?",
    answer:
      "L'hygiène est notre priorité absolue. Tous nos outils sont stérilisés après chaque utilisation, nous utilisons du matériel jetable quand c'est possible, et notre salon est désinfecté quotidiennement. Nos professionnels suivent des protocoles stricts pour garantir votre sécurité et votre confort.",
  },
  {
    question: "Quelles sont les qualifications de votre équipe ?",
    answer:
      "Notre équipe est composée de professionnels diplômés d'État avec plus de 10 ans d'expérience. Nous suivons régulièrement des formations pour maîtriser les dernières techniques et tendances. Chaque membre est spécialisé dans son domaine pour vous garantir une expertise optimale.",
  },
  {
    question: "Quels produits utilisez-vous ?",
    answer:
      "Nous travaillons exclusivement avec des marques premium reconnues pour leur qualité : Kérastase pour les soins capillaires, Dermalogica pour les soins du visage, et OPI pour les vernis. Tous nos produits sont professionnels, testés dermatologiquement et respectueux de votre peau et de vos cheveux.",
  },
  {
    question: "Comment prendre rendez-vous ?",
    answer:
      "Vous pouvez réserver en ligne 24h/24 via notre système de réservation, nous appeler directement au 01 23 45 67 89, ou nous envoyer un message sur Instagram. Nous vous recommandons de réserver à l'avance, surtout pour les week-ends et les prestations longues.",
  },
  {
    question: "Proposez-vous des forfaits ou cartes cadeaux ?",
    answer:
      "Oui ! Nous proposons des forfaits avantageux pour combiner plusieurs prestations, ainsi que des cartes cadeaux personnalisables pour faire plaisir à vos proches. C'est le cadeau parfait pour offrir un moment de détente et de beauté.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Notre Engagement Qualité</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Questions Fréquentes</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Toutes les réponses à vos questions pour vous accompagner en toute sérénité
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-8 bg-accent/5 border border-accent/20 rounded-xl text-center">
            <p className="text-muted-foreground mb-4">Vous avez d'autres questions ?</p>
            <Button variant="outline" className="border-accent/50 hover:bg-accent/10 bg-transparent">
              Contactez-nous
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
