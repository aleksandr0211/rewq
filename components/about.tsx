import Image from "next/image"
import { Check } from "lucide-react"

const features = [
  "Натуральные корма без ГМО и химических добавок",
  "Свободный выгул птицы на чистом воздухе",
  "Ветеринарный контроль и сертификаты качества",
  "Более 10 лет успешной работы",
  "Индивидуальный подход к каждому клиенту",
  "Консультации по содержанию и разведению",
]

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/farm-1.jpg"
                    alt="Ферма"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/images/farm-2.jpg"
                    alt="Куры на выгуле"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/farm-3.jpg"
                    alt="Фермер с птицей"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              О нашем хозяйстве
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Традиции качества с заботой о природе
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Наше фермерское хозяйство расположено в экологически чистом районе вдали от городской суеты. 
              Мы выращиваем домашнюю птицу по старинным традициям, сочетая их с современными стандартами качества.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Каждая курица получает сбалансированное питание из натуральных зерновых культур, 
              свежую воду и возможность свободного выгула на свежем воздухе.
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
