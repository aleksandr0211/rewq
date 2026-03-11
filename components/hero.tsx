import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-farm.jpg"
          alt="Фермерское хозяйство"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Свежие продукты каждый день
          </span>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Домашние куры и яйца от фермерского хозяйства
          </h1>
          
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Мы выращиваем птицу на натуральных кормах без антибиотиков и гормонов. 
            Свежая продукция с доставкой прямо к вашему столу.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="gap-2">
              Смотреть каталог
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Связаться с нами
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border/50">
            <div>
              <p className="font-serif text-3xl font-bold text-foreground">10+</p>
              <p className="text-sm text-muted-foreground">лет опыта</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">довольных клиентов</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">натуральные корма</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
