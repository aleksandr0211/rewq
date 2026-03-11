import { Card, CardContent } from "@/components/ui/card"
import { Truck, Clock, MapPin, Shield } from "lucide-react"

const deliveryFeatures = [
  {
    icon: Truck,
    title: "Доставка по региону",
    description: "Осуществляем доставку по всей области. Стоимость зависит от расстояния.",
  },
  {
    icon: Clock,
    title: "Быстрая обработка",
    description: "Обрабатываем заказы в течение 24 часов. Доставка в удобное для вас время.",
  },
  {
    icon: MapPin,
    title: "Самовывоз",
    description: "Возможен самовывоз с фермы. Мы находимся в 30 км от города.",
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "Гарантируем свежесть продукции. Все документы и сертификаты в наличии.",
  },
]

export function Delivery() {
  return (
    <section id="delivery" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Доставка и оплата
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Как получить заказ
          </h2>
          <p className="mt-4 text-muted-foreground">
            Мы позаботимся о том, чтобы свежая продукция доехала до вас в лучшем виде
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliveryFeatures.map((feature, index) => (
            <Card key={index} className="bg-card border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mt-4">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Info */}
        <div className="mt-12 bg-card rounded-2xl p-8 md:p-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-xl font-semibold text-foreground">Стоимость доставки</h3>
              <p className="mt-2 text-muted-foreground text-sm">Рассчитывается индивидуально</p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-secondary/50 rounded-xl">
                <p className="text-2xl font-bold text-foreground">Бесплатно</p>
                <p className="text-sm text-muted-foreground mt-1">Самовывоз</p>
              </div>
              <div className="text-center p-4 bg-secondary/50 rounded-xl">
                <p className="text-2xl font-bold text-foreground">от 300 руб</p>
                <p className="text-sm text-muted-foreground mt-1">До 30 км</p>
              </div>
              <div className="text-center p-4 bg-secondary/50 rounded-xl">
                <p className="text-2xl font-bold text-foreground">от 500 руб</p>
                <p className="text-sm text-muted-foreground mt-1">Свыше 30 км</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
