import { useEffect, useRef } from "react"
import { 
  Stethoscope, 
  Phone,
  Diamond,
  Shield,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Send,
  MapPin,
  Clock
} from "lucide-react"
import { useInView } from "@/hooks/useInView"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface HomeProps {
  onNavigate: (page: string) => void
}

export function Home({ onNavigate }: HomeProps) {
  const heroRef = useInView()
  const aboutRef = useInView()
  const pillarsRef = useInView()
  const servicesRef = useInView()
  const teamRef = useInView()
  const contactRef = useInView()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video auto-play failed:", error)
      })
    }
  }, [])

  const pillars = [
    {
      icon: Diamond,
      title: "Modern Technology",
      desc: "We use the latest dental tools to give you fast, accurate, and painless treatments.",
    },
    {
      icon: Sparkles,
      title: "Gentle Care",
      desc: "Your comfort is our priority. We make sure every visit is relaxed and stress-free.",
    },
    {
      icon: ShieldCheck,
      title: "Lasting Results",
      desc: "We don't just fix teeth; we help you keep a healthy and beautiful smile for life.",
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Video Background Container */}
        <div className="absolute inset-0 z-0">
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          >
            <source src="/video%20.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay for readability */}
          <div 
            className="absolute inset-0 z-10" 
            style={{ background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.75))" }} 
          />
          <div className="absolute top-20 right-20 w-32 h-32 bg-clinic-gold/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-clinic-green/5 rounded-full blur-3xl animate-float-delay"></div>
        </div>

        <div 
          ref={heroRef.ref} 
          className={`relative z-20 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 pt-20 ${
            heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Badge 
            variant="outline"
            className="mb-6 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border-accent/40 bg-accent/10 text-accent"
          >
            Welcome to Melona Dental
          </Badge>

          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6 font-serif-display text-white">
            The Best Care for <span className="text-accent">Your Smile.</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-white/80">
            Experience painless, professional, and friendly dental care in the heart of Addis Ababa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate("appointment")}
              className="rounded-2xl px-8 h-14 text-base font-semibold gap-2 bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:scale-[1.02] transition-all cursor-pointer"
            >
              <Send className="size-5" />
              Book on Telegram
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('tel:+251911000000')}
              className="rounded-2xl px-8 h-14 text-base font-semibold gap-2 border-white/20 text-white hover:bg-white/10 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <Phone className="size-5" />
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            ref={aboutRef.ref} 
            className={`transition-all duration-1000 ${
              aboutRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-3 text-accent">Who We Are</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 font-serif-display text-foreground">
              A Better Way to <span className="text-primary">Visit the Dentist.</span>
            </h2>
            <p className="text-base leading-relaxed mb-8 text-muted-foreground">
              We believe that going to the dentist should be a positive experience. At Melona, we combine expert medical skill with a warm, welcoming environment.
            </p>
            <Button 
              onClick={() => onNavigate("about")} 
              variant="outline" 
              className="rounded-2xl px-6 h-12 font-semibold gap-2 border-primary text-primary hover:bg-primary/5 hover:scale-[1.02] transition-all cursor-pointer"
            >
              Learn More About Us
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-white border-y border-border/40">
        <div ref={pillarsRef.ref} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3 text-accent">Why Choose Us</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif-display text-foreground">Our Promise to You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <Card key={i} className="group rounded-3xl border border-border/50 bg-white overflow-hidden transition-all duration-500 hover:shadow-md hover:translate-y-[-4px]">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-115 group-hover:rotate-3 bg-secondary text-primary">
                    <pillar.icon className="size-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-serif-display text-foreground">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{pillar.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-background">
        <div ref={servicesRef.ref} className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${servicesRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-xs font-bold tracking-widest uppercase mb-3 text-accent">Our Services</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif-display text-foreground">Complete Dental Care</h2>
            <p className="text-base max-w-2xl mx-auto text-muted-foreground">Everything you need for a healthy and beautiful smile</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Stethoscope, title: "Checkups & Cleaning", desc: "Keep your teeth healthy and strong", image: "/filling-_xnG-n2d.jpg" },
              { icon: Diamond, title: "Smile Makeovers", desc: "Get the perfect smile you deserve", image: "/implant-CQTe0HTr.jpg" },
              { icon: Shield, title: "Braces & Invisalign", desc: "Straighten your teeth comfortably", image: "/orthod-CbZeAFhX.jpg" },
            ].map((service, i) => (
              <div 
                key={i} 
                className={`group transition-all duration-700 hover:shadow-md hover:translate-y-[-4px] relative overflow-hidden bg-white border border-border/55 rounded-2xl ${
                  servicesRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`} 
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 bg-white/90 border border-white/20 shadow-sm">
                    <service.icon className="size-5 text-accent" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-serif-display text-foreground">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button 
              onClick={() => onNavigate("services")} 
              variant="outline" 
              className="rounded-2xl px-8 h-12 text-base font-semibold gap-2 border-accent text-accent hover:bg-accent/5 hover:scale-[1.02] transition-all cursor-pointer"
            >
              View All Services
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24 px-6 bg-white border-y border-border/40">
        <div ref={teamRef.ref} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3 text-accent">Meet Our Team</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif-display text-foreground">Expert Doctors</h2>
            <p className="text-base max-w-2xl mx-auto text-muted-foreground">Highly trained professionals dedicated to your smile</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Alene Tadesse", title: "Expert in Implants & Crowns", desc: "12 years of experience", image: "/doc 1.jpeg" },
              { name: "Dr. Bethel Haile", title: "Expert in Braces", desc: "9 years of experience", image: "/doc 2.jpeg" },
              { name: "Sr. Selamawit Kassa", title: "Head Dental Nurse", desc: "10 years of experience", image: "/doc 3.jpeg" },
            ].map((member, i) => (
              <div key={i} className="group text-center p-6 rounded-3xl border border-border/50 bg-white transition-all duration-500 hover:shadow-md hover:translate-y-[-4px]">
                <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden transition-all duration-500 group-hover:scale-[1.05] relative z-10 ring-2 ring-primary/20">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif-display text-foreground">{member.name}</h3>
                <p className="text-sm font-semibold mb-2 text-primary">{member.title}</p>
                <p className="text-xs text-muted-foreground">{member.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button 
              onClick={() => onNavigate("doctors")} 
              variant="outline" 
              className="rounded-2xl px-8 h-12 text-base font-semibold gap-2 border-accent text-accent hover:bg-accent/5 hover:scale-[1.02] transition-all cursor-pointer"
            >
              Meet Our Team
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-24 px-6 bg-background">
        <div ref={contactRef.ref} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3 text-accent">Get in Touch</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif-display text-foreground">Visit Us Today</h2>
            <p className="text-base max-w-2xl mx-auto text-muted-foreground">We're here to help you get the smile you deserve</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-3xl border border-border/50 bg-white transition-all duration-500 hover:shadow-md hover:translate-y-[-4px]">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 bg-secondary flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 text-primary">
                <Phone className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-serif-display text-foreground">Call Us</h3>
              <p className="text-sm text-foreground font-semibold">+251 911 00 00 00</p>
              <p className="text-xs mt-2 text-muted-foreground">Mon-Fri: 9AM-6PM</p>
            </div>
            
            <div className="group text-center p-8 rounded-3xl border border-border/50 bg-white transition-all duration-500 hover:shadow-md hover:translate-y-[-4px]">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 bg-secondary flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 text-primary">
                <MapPin className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-serif-display text-foreground">Location</h3>
              <p className="text-sm text-foreground font-semibold">Bole Medhanialem Area</p>
              <p className="text-xs mt-2 text-muted-foreground">Next to Harmony Hotel</p>
            </div>
            
            <div className="group text-center p-8 rounded-3xl border border-border/50 bg-white transition-all duration-500 hover:shadow-md hover:translate-y-[-4px]">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 bg-secondary flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 text-primary">
                <Send className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-serif-display text-foreground">Book Online</h3>
              <p className="text-sm text-foreground font-semibold">Telegram Booking</p>
              <p className="text-xs mt-2 text-muted-foreground text-primary">Active Now</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button 
              onClick={() => onNavigate("contact")} 
              variant="outline" 
              className="rounded-2xl px-8 h-12 text-base font-semibold gap-2 border-accent text-accent hover:bg-accent/5 hover:scale-[1.02] transition-all cursor-pointer"
            >
              Contact Us
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-24 px-6 bg-white border-y border-border/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3 text-accent">Our Location</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif-display text-foreground">Visit Our Clinic</h2>
            <p className="text-base max-w-2xl mx-auto text-muted-foreground">Conveniently located in the heart of Addis Ababa</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="p-8 rounded-3xl border border-border/50 bg-background shadow-sm">
                <h3 className="text-2xl font-bold mb-6 font-serif-display text-foreground">Melona Dental Clinic</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="size-5 mt-1 shrink-0 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground mt-0.5">Around Bole Mikeal Area, Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="size-5 mt-1 shrink-0 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground mt-0.5">+251 911 00 00 00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="size-5 mt-1 shrink-0 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Hours</p>
                      <p className="text-sm text-muted-foreground mt-0.5">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-sm text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={() => onNavigate("contact")} 
                  className="rounded-2xl px-8 h-12 text-base font-semibold gap-2 bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm hover:scale-[1.02] transition-all cursor-pointer"
                >
                  Get Directions
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-md border border-border/40" style={{ height: "400px" }}>
              <iframe
                title="Melona Specialty Dental Clinic Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.123456789!2d38.756789!3d9.012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDAwJzQ0LjQiTiAzOMK3NDUnMTcuNCJF!5e0!3m2!1sen!2set!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[2rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bold CTA Section */}
      <section className="py-24 px-6 text-center bg-primary text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif-display text-white">Ready for a Better Smile?</h2>
          <p className="text-base md:text-lg mb-8 text-white/80 leading-relaxed">Book your appointment today and see why our patients love us.</p>
          <Button 
            size="lg" 
            onClick={() => onNavigate("appointment")} 
            className="rounded-2xl px-10 h-14 text-base font-semibold gap-2 bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:scale-[1.02] transition-all cursor-pointer"
          >
            <Send className="size-5" />
            Book on Telegram
          </Button>
        </div>
      </section>
    </div>
  )
}
