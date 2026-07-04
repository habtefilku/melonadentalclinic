import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Send, Phone, MessageSquare, Shield, Diamond, Star, Zap, ArrowLeft } from "lucide-react"
import { useInView } from "@/hooks/useInView"

interface AppointmentProps {
  onNavigate: (page: string) => void
}

const careAreas = [
  { id: "general", icon: Shield, title: "Checkup & Cleaning" },
  { id: "cosmetic", icon: Diamond, title: "Smile Makeover" },
  { id: "ortho", icon: Star, title: "Braces & Invisalign" },
  { id: "emergency", icon: Zap, title: "Emergency Care" },
]

const timings = ["Morning", "Afternoon", "Evening", "Weekend"]

export function Appointment({ onNavigate }: AppointmentProps) {
  const [selectedCare, setSelectedCare] = useState<string | null>("cosmetic")
  const [selectedTiming, setSelectedTiming] = useState<string | null>("Afternoon")
  const heroRef = useInView()
  const formRef = useInView()

  const phoneNumber = "+251911000000"
  const telegramUsername = "melonadental"

  const handleAction = (type: 'telegram' | 'sms' | 'call') => {
    if (!selectedCare || !selectedTiming) return
    const careItem = careAreas.find((c) => c.id === selectedCare)
    const message = `Hello Melona Dental! I'd like to book an appointment.\n\nService: ${careItem?.title}\nPreferred Time: ${selectedTiming}`
    
    if (type === 'telegram') {
      window.open(`https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`, "_blank")
    } else if (type === 'sms') {
      window.open(`sms:${phoneNumber}?body=${encodeURIComponent(message)}`, "_blank")
    } else {
      window.open(`tel:${phoneNumber}`, "_blank")
    }
  }

  return (
    <div className="pt-24 pb-20 overflow-hidden bg-background">
      <section className="py-16 px-6 relative overflow-hidden">
        <div ref={heroRef.ref} className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Description Block */}
          <div className={`transition-all duration-1000 ${heroRef.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <button 
              onClick={() => onNavigate("home")}
              className="inline-flex items-center gap-2 text-xs font-bold text-primary mb-6 hover:translate-x-[-2px] transition-all cursor-pointer"
            >
              <ArrowLeft className="size-3.5" />
              BACK TO HOME
            </button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif-display text-foreground animate-slide-up">
              Book Your <span className="text-primary italic">Visit.</span>
            </h1>
            <p className="text-base mb-8 leading-relaxed text-muted-foreground">
              Choose your service and preferred time, then click a button below to book your appointment instantly.
            </p>
            <div className="p-5 rounded-2xl border border-border bg-white shadow-sm inline-block text-left">
              <p className="text-xs font-bold text-accent uppercase mb-2">Need Urgent Care?</p>
              <p className="text-sm text-foreground">For dental emergencies, please call us directly for immediate assistance.</p>
              <button 
                onClick={() => onNavigate("contact")}
                className="text-xs font-bold text-primary mt-3 hover:underline cursor-pointer"
              >
                Go to Contact Page &rarr;
              </button>
            </div>
          </div>

          {/* Form Booking Block */}
          <div ref={formRef.ref} className={`transition-all duration-1000 delay-200 ${formRef.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <Card className="rounded-3xl border border-border/50 bg-white shadow-sm">
              <CardContent className="p-7">
                {/* Step 1: Care selection */}
                <div className="mb-7">
                  <p className="text-xs font-bold tracking-widest uppercase mb-4 text-foreground/80">1. WHAT DO YOU NEED?</p>
                  <div className="grid grid-cols-2 gap-3">
                    {careAreas.map((area) => (
                      <button
                        key={area.id}
                        onClick={() => setSelectedCare(area.id)}
                        className="flex items-center gap-3 p-3.5 rounded-2xl text-left transition-all duration-300 border cursor-pointer"
                        style={{
                          borderColor: selectedCare === area.id ? "var(--clinic-green)" : "var(--border)",
                          background: selectedCare === area.id ? "oklch(0.35 0.10 162 / 0.06)" : "transparent",
                        }}
                      >
                        <area.icon className="size-4 shrink-0" style={{ color: selectedCare === area.id ? "var(--clinic-green)" : "var(--muted-foreground)" }} />
                        <div className="font-semibold text-xs" style={{ color: selectedCare === area.id ? "var(--clinic-green)" : "var(--foreground)" }}>{area.title}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Timing preference */}
                <div className="mb-8">
                  <p className="text-xs font-bold tracking-widest uppercase mb-4 text-foreground/80">2. WHEN DO YOU PREFER?</p>
                  <div className="flex flex-wrap gap-2.5">
                    {timings.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTiming(t)}
                        className="px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 border cursor-pointer"
                        style={{
                          borderColor: selectedTiming === t ? "var(--clinic-green)" : "var(--border)",
                          background: selectedTiming === t ? "oklch(0.35 0.10 162 / 0.06)" : "transparent",
                          color: selectedTiming === t ? "var(--clinic-green)" : "var(--foreground)",
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Booking Options CTA */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    className="rounded-2xl h-14 text-sm font-bold gap-2 bg-[#229ED9] hover:bg-[#229ED9]/90 text-white cursor-pointer"
                    onClick={() => handleAction('telegram')}
                  >
                    <Send className="size-4" />
                    Telegram Booking
                  </Button>
                  <Button
                    className="rounded-2xl h-14 text-sm font-bold gap-2 bg-primary hover:bg-primary/95 text-primary-foreground cursor-pointer"
                    onClick={() => handleAction('sms')}
                  >
                    <MessageSquare className="size-4" />
                    Text Message
                  </Button>
                  <Button
                    className="sm:col-span-2 rounded-2xl h-14 text-sm font-bold gap-2 bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer"
                    onClick={() => handleAction('call')}
                  >
                    <Phone className="size-4" />
                    Call Us Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}