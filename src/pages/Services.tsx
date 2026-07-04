import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  Send, 
  Diamond, 
  Shield, 
  Zap, 
  Sparkles, 
  Heart, 
  Scissors, 
  Star, 
  CheckCircle,
  Stethoscope
} from "lucide-react"

interface ServicesProps {
  onNavigate: (page: string) => void
}

const serviceCategories = [
  { icon: Stethoscope, title: "Checkups & Cleaning", desc: "Keep your teeth healthy and strong.", items: ["Full Dental Exams", "Professional Cleaning", "Digital X-Rays", "Fillings"] },
  { icon: Diamond, title: "Smile Makeovers", desc: "Get the perfect smile you deserve.", items: ["Porcelain Veneers", "Smile Design", "Bonding", "Gum Shaping"] },
  { icon: Shield, title: "Braces & Invisalign", desc: "Straighten your teeth comfortably.", items: ["Invisalign®", "Clear Braces", "Metal Braces", "Retainers"] },
  { icon: Star, title: "Dental Implants", desc: "Replace missing teeth permanently.", items: ["Single Implants", "Full Mouth Implants", "Bone Grafting", "Implant Bridges"] },
  { icon: Zap, title: "Root Canals", desc: "Save your natural teeth from pain.", items: ["Root Canal Therapy", "Emergency Care", "Pain Relief", "Retreatment"] },
  { icon: Heart, title: "Gum Care", desc: "Healthy gums for a healthy body.", items: ["Gum Disease Treatment", "Deep Cleaning", "Gum Surgery", "Tissue Grafts"] },
  { icon: Scissors, title: "Oral Surgery", desc: "Expert care for complex needs.", items: ["Wisdom Teeth", "Extractions", "Jaw Surgery", "Biopsies"] },
  { icon: Sparkles, title: "Teeth Whitening", desc: "Brighten your smile in one visit.", items: ["In-Office Whitening", "Take-Home Kits", "Internal Whitening", "Safe Results"] },
]

export function Services({ onNavigate }: ServicesProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`pt-24 pb-0 overflow-hidden transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      {/* Header Section */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 50% 50%, var(--clinic-green), transparent 70%)" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-3 text-accent">OUR SERVICES</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif-display text-foreground">
            Complete <span className="text-primary">Dental Care.</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-muted-foreground">
            We offer everything you need for a healthy and beautiful smile, all in one place.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 mb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((cat, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-3xl border border-border/50 bg-white transition-all duration-700 hover:shadow-md hover:translate-y-[-4px] group relative overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`} 
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-secondary text-primary">
                <cat.icon className="size-5" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-serif-display text-foreground">{cat.title}</h3>
              <p className="text-xs mb-6 leading-relaxed text-muted-foreground">{cat.desc}</p>
              <ul className="space-y-3">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-[13px] text-muted-foreground">
                    <CheckCircle className="size-3.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Section */}
      <section className="px-6 py-24 text-center bg-primary text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif-display text-white">Need a Consultation?</h2>
          <p className="text-base md:text-lg mb-8 text-white/80 leading-relaxed">Book your appointment today and discuss your needs with our dental specialists.</p>
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