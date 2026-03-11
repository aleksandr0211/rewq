import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Catalog } from "@/components/catalog"
import { About } from "@/components/about"
import { Delivery } from "@/components/delivery"
import { Contacts } from "@/components/contacts"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Catalog />
      <About />
      <Delivery />
      <Contacts />
      <Footer />
    </main>
  )
}
