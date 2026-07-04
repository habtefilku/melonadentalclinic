import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Sparkles, Users, ArrowRight } from "lucide-react"

interface AboutProps {
  onNavigate: (page: string) => void
}

export function About({ onNavigate }: AboutProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`pt-24 pb-20 overflow-hidden transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      {/* Our Story Header */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-accent">OUR STORY</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 font-serif-display text-foreground">
            We Make You <br />
            <span className="gradient-text-gold italic">Smile.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 text-muted-foreground">
            At Melona, we believe everyone deserves a healthy and beautiful smile. We use the latest technology to make your visit comfortable, fast, and stress-free.
          </p>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 py-10 border-y border-border/50">
            {[
              { label: "Happy Patients", val: "2,400+" },
              { label: "Specialists", val: "15+" },
              { label: "Years of Care", val: "9+" },
              { label: "Success Rate", val: "98%" },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} 
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="text-3xl font-bold mb-1 text-primary font-serif-display">{stat.val}</div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-clinic-gold/5 rounded-full blur-3xl animate-blob pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-clinic-green/5 rounded-full blur-3xl animate-blob animate-delay-500 pointer-events-none" />
      </section>

      {/* What We Believe In */}
      <section className="py-24 px-6 bg-white border-y border-border/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3 text-accent">OUR VALUES</p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif-display text-foreground">
              What We Believe In
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "You Come First", desc: "We listen to your needs and make sure you are comfortable." },
              { icon: Award, title: "Best Quality", desc: "We use the best materials and tools for your teeth." },
              { icon: Sparkles, title: "Beautiful Results", desc: "We help you get the smile you've always wanted." },
              { icon: Users, title: "Expert Team", desc: "Our doctors are highly trained and very friendly." },
            ].map((v, i) => (
              <Card 
                key={i} 
                className={`border border-border/50 bg-white rounded-3xl p-1 transition-all duration-700 hover:shadow-md hover:translate-y-[-4px] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`} 
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                    <v.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 font-serif-display text-foreground">{v.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className={`mt-20 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <Button
              onClick={() => onNavigate("doctors")}
              className="rounded-2xl px-10 h-14 text-base font-semibold gap-2 bg-primary text-primary-foreground hover:bg-primary/95 shadow-sm hover:scale-[1.02] transition-all cursor-pointer"
            >
              Meet Our Doctors
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}