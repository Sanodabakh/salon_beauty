import { Instagram, Facebook, Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">Fina Beauty</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Votre destination beauté pour révéler votre éclat naturel depuis 2015.
            </p>
            <div className="flex gap-4 pt-2">
              
              <a href="https://www.instagram.com/fina__beauty" target="_blank" rel="noopener">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/fina.diallo.507" target="_blank" rel="noopener">
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/221778740372"
                target="_blank"
                rel="noopener"
                className="hover:text-green-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>


            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Coiffure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Soins Esthétiques
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Maquillage
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Manucure & Pédicure
                </a>
              </li>
            </ul>
          </div>

          {/* Liens */}
          <div>
            <h4 className="font-semibold mb-4">Informations</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Cartes cadeaux
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Niary Tally
                  <br />
                  Dakar
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+221778740372" className="hover:text-accent transition-colors">
                   +221 77 874 03 72
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:contact@elegance-beaute.fr" className="hover:text-accent transition-colors">
                  fina.beauty@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2025 Fina Beauty. Tous droits réservés.</p>
          <p className="mt-2 italic">"Où la beauté rencontre l'excellence"</p>
        </div>
      </div>
    </footer>
  )
}
