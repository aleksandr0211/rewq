"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

const contactInfo = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (900) 123-45-67",
    href: "tel:+79001234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@ferma.ru",
    href: "mailto:info@ferma.ru",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "Московская область, Раменский район, д. Привольное",
    href: null,
  },
  {
    icon: Clock,
    label: "Режим работы",
    value: "Пн-Вс: 8:00 - 20:00",
    href: null,
  },
]

export function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.")
    setFormData({ name: "", phone: "", message: "" })
  }

  return (
    <section id="contacts" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Свяжитесь с нами
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Контакты
          </h2>
          <p className="mt-4 text-muted-foreground">
            Есть вопросы или хотите сделать заказ? Мы всегда на связи!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-secondary/30 border-none">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-6 relative aspect-video rounded-2xl overflow-hidden bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288461.4561328046!2d37.99731979999999!3d55.38118759999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab5d77e1ee6a1%3A0x5cb60cf8e74ddbe4!2z0KDQsNC80LXQvdGB0LrQuNC5INCz0L7RgNC-0LTRgdC60L7QuSDQvtC60YDRg9CzLCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2sru!4v1710000000000!5m2!1sru!2sru"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-card">
              <CardContent className="p-6 md:p-8">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                  Оставить заявку
                </h3>
                <form onSubmit={handleSubmit}>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="name">Ваше имя</FieldLabel>
                      <Input
                        id="name"
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="phone">Телефон</FieldLabel>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="message">Сообщение</FieldLabel>
                      <Textarea
                        id="message"
                        placeholder="Что вас интересует?"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </Field>
                    <Button type="submit" size="lg" className="w-full gap-2">
                      <Send className="w-4 h-4" />
                      Отправить заявку
                    </Button>
                  </FieldGroup>
                </form>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
