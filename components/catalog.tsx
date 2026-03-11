"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Куры-несушки",
    description: "Молодые куры-несушки породы Хайсекс Браун. Высокая яйценоскость до 320 яиц в год.",
    price: "от 450",
    unit: "шт",
    image: "/images/hen-laying.jpg",
    badge: "Популярное",
  },
  {
    id: 2,
    name: "Бройлеры",
    description: "Мясные бройлеры от 2 кг. Выращены на натуральных кормах без добавок.",
    price: "от 280",
    unit: "кг",
    image: "/images/broiler.jpg",
    badge: null,
  },
  {
    id: 3,
    name: "Цыплята",
    description: "Суточные и подрощенные цыплята разных пород для домашнего разведения.",
    price: "от 80",
    unit: "шт",
    image: "/images/chicks.jpg",
    badge: "Весна 2024",
  },
  {
    id: 4,
    name: "Домашние яйца",
    description: "Свежие деревенские яйца от кур на свободном выгуле. Отборные, крупные.",
    price: "от 120",
    unit: "десяток",
    image: "/images/eggs.jpg",
    badge: "Хит продаж",
  },
  {
    id: 5,
    name: "Петухи",
    description: "Молодые петухи для разведения или на мясо. Разные породы в наличии.",
    price: "от 600",
    unit: "шт",
    image: "/images/rooster.jpg",
    badge: null,
  },
  {
    id: 6,
    name: "Инкубационное яйцо",
    description: "Оплодотворенные яйца для инкубации. Высокий процент выводимости.",
    price: "от 50",
    unit: "шт",
    image: "/images/incubation-eggs.jpg",
    badge: null,
  },
]

export function Catalog() {
  return (
    <section id="catalog" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Наша продукция
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Каталог товаров
          </h2>
          <p className="mt-4 text-muted-foreground">
            Все наши птицы выращены в экологически чистых условиях на натуральных кормах
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group bg-card hover:shadow-lg transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <CardContent className="p-5">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <p className="mt-4 text-2xl font-bold text-primary">
                  {product.price} <span className="text-sm font-normal text-muted-foreground">руб/{product.unit}</span>
                </p>
              </CardContent>
              <CardFooter className="px-5 pb-5 pt-0">
                <Button className="w-full gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Заказать
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
