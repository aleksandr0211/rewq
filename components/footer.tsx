import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-lg font-bold">Ф</span>
              </div>
              <div>
                <span className="font-serif text-xl font-semibold text-background">Фермерское</span>
                <span className="block text-xs text-background/60 -mt-1">хозяйство</span>
              </div>
            </div>
            <p className="mt-4 text-background/70 max-w-md leading-relaxed">
              Мы производим экологически чистую продукцию с заботой о природе и вашем здоровье. 
              Свежие домашние куры и яйца с доставкой по всей области.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif font-semibold text-background mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="text-background/70 hover:text-background transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-background/70 hover:text-background transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="#delivery" className="text-background/70 hover:text-background transition-colors">
                  Доставка
                </Link>
              </li>
              <li>
                <Link href="#contacts" className="text-background/70 hover:text-background transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-serif font-semibold text-background mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+79001234567"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +7 (900) 123-45-67
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ferma.ru"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@ferma.ru
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-background/70">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  Московская область, Раменский район
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            2024 Фермерское хозяйство. Все права защищены.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-background/50 hover:text-background transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
