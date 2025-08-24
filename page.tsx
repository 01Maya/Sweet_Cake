import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Mail, MapPin, Phone, Facebook, Instagram, Twitter, Cake, Clock, Truck, Star, Users } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { NavBar } from "@/components/nav-bar"
import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      e.preventDefault()
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll as EventListener)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll as EventListener)
      })
    }
  }, [])
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative flex min-h-[600px] items-center justify-center bg-gradient-to-b from-pink-50 to-white pt-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-pink-800 sm:text-5xl xl:text-6xl/none">
                  Home-Baked Treats, Freshly Crafted with Love
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Flavor in Every Bite! Handcrafted cakes and cupcakes perfect for any celebration or just because.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                  <Cake className="mr-2 h-5 w-5" /> Order Now
                </Button>
                <Button size="lg" variant="outline" className="border-pink-200">
                  <Clock className="mr-2 h-5 w-5" /> View Menu
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wed.jpg-yGZHBLyU5aITX6sSej95SnJrQ6PvuL.jpeg"
                width={400}
                height={400}
                alt="Elegant pink and gold tiered wedding cake"
                className="mx-auto rounded-lg object-cover shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 rounded-full bg-white p-2 shadow-lg">
                <Star className="h-8 w-8 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </section>
<center>
      {/* Featured Products Carousel */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-pink-800 sm:text-5xl">
            Our Latest Creations
          </h2>
          <Carousel className="w-full">
            <CarouselContent>
              {[
                {
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cake.jpg-xJlCbtN1z3vSBPL1OZUTHeepZU4mt2.jpeg",
                  title: "Signature Collection",
                  description: "Discover our award-winning cakes"
                },
                {
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chocolate.jpg-KLzmQiIwAY6ZpKMGTv3Nciglr30Y7A.jpeg",
                  title: "Chocolate Indulgence",
                  description: "For the ultimate chocolate lovers"
                },
                {
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/red%20velet.jpg-hww5XYWoWCynBmrtH5eudLiGZ2qudP.jpeg",
                  title: "Classic Red Velvet",
                  description: "Our bestselling flavor"
                }
              ].map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <Image
                        src={item.image}
                        width={400}
                        height={300}
                        alt={item.title}
                        className="w-full object-cover h-48"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="w-full bg-pink-50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-pink-800 sm:text-5xl">
            Our Signature Cakes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Wedding Elegance",
                price: "$299.99",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wed.jpg-yGZHBLyU5aITX6sSej95SnJrQ6PvuL.jpeg"
              },
              {
                name: "Red Velvet Dream",
                price: "$49.99",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/red%20velet.jpg-hww5XYWoWCynBmrtH5eudLiGZ2qudP.jpeg"
              },
              {
                name: "Birthday Love",
                price: "$59.99",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pink.jpg-HUVUjHpU0tHHx5h4245EstchgkbrU2.jpeg"
              },
              {
                name: "Chocolate Decadence",
                price: "$69.99",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chocolate.jpg-KLzmQiIwAY6ZpKMGTv3Nciglr30Y7A.jpeg"
              },
              {
                name: "Hearts & Hearts",
                price: "$54.99",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/white.jpg-r3PCxens8MhqXjMqkPsLu7NorbQrl2.jpeg"
              },
              {
                name: "Celebration Special",
                price: "$79.99",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cake.jpg-xJlCbtN1z3vSBPL1OZUTHeepZU4mt2.jpeg"
              }
            ].map((product, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={product.image}
                  width={300}
                  height={300}
                  alt={product.name}
                  className="aspect-square object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  <p className="text-lg text-white">{product.price}</p>
                  <Button className="mt-2 bg-pink-600 hover:bg-pink-700">
                    <Cake className="mr-2 h-4 w-4" /> Order Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section with Stats */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-pink-800 sm:text-5xl">Our Sweet Journey</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Creating sweet memories since 2010. Our passion for baking transforms ordinary moments into extraordinary
                celebrations.
              </p>
            </div>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              { icon: Cake, label: "Cakes Created", value: "10,000+" },
              { icon: Users, label: "Happy Clients", value: "5,000+" },
              { icon: Star, label: "5-Star Reviews", value: "1,000+" },
              { icon: Truck, label: "Deliveries Made", value: "20,000+" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border-2 border-pink-100 bg-white p-6 transition-all hover:border-pink-200">
                <stat.icon className="h-12 w-12 text-pink-500" />
                <h3 className="text-3xl font-bold text-pink-800">{stat.value}</h3>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flavor Selection Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-pink-800 sm:text-5xl">
            Choose Your Favorite Flavor
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { name: "Strawberry", icon: "🍓", color: "bg-red-100" },
              { name: "Vanilla", icon: "🍶", color: "bg-yellow-100" },
              { name: "Chocolate", icon: "🍫", color: "bg-purple-100" },
              { name: "Pineapple", icon: "🍍", color: "bg-yellow-200" },
              { name: "Rainbow", icon: "🌈", color: "bg-purple-100" },
              { name: "Red Velvet", icon: "🍰", color: "bg-red-200" },
            ].map((flavor) => (
              <div
                key={flavor.name}
                className={`${flavor.color} p-4 rounded-lg text-center transition-transform hover:scale-105`}
              >
                <div className="text-4xl mb-2">{flavor.icon}</div>
                <h3 className="font-semibold">{flavor.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section id="process" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-pink-50">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-pink-800 sm:text-5xl">
            Our Baking Process
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Cake, title: "Select", description: "Choose your favorite flavors" },
              { icon: Clock, title: "Bake", description: "Freshly baked with love" },
              { icon: Heart, title: "Decorate", description: "Beautifully crafted designs" },
              { icon: Truck, title: "Deliver", description: "Right to your doorstep" },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
                  <step.icon className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-pink-50 py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-pink-800 sm:text-5xl">Get in Touch</h2>
            <p className="text-gray-500">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-pink-600" />
                <span>123 Bakery Street, Sweet City, SC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-pink-600" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-pink-600" />
                <span>hello@sweetcakes.com</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="hover:bg-pink-100">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-pink-100">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-pink-100">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-4">
              <Input placeholder="Name" />
              <Input placeholder="Email" type="email" />
              <Textarea placeholder="Message" />
              <Button className="bg-pink-600 hover:bg-pink-700">
                <Mail className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-white py-6">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-pink-600">Contact Us</h3>
              <p className="text-sm">Email: hello@sweetcakes.com</p>
              <p className="text-sm">Phone: (555) 123-4567</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-pink-600">Address</h3>
              <p className="text-sm">123 Bakery Street,</p>
              <p className="text-sm">Sweet City, SC 12345</p>
            </div>
            <div className="space-y-2 flex flex-col items-center text-cente">
              <h3 className="font-semibold text-pink-600">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-500 hover:text-pink-600">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-pink-600">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-pink-600">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-pink-600">Sweet Words</h3>
              <p className="text-sm italic">"Life is short, eat dessert first!"</p>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            © 2024 Sweet Cakes. All rights reserved.
          </div>
        </div>
      </footer>
    </center>
    </div>
  )
}
