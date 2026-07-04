import { Button } from "@/components/ui/button"
import { Award, GraduationCap, Send } from "lucide-react"
import { useInView } from "@/hooks/useInView"

interface DoctorsProps {
  onNavigate: (page: string) => void
}

const team = [
  { id: "chief", name: "Dr. Alene Tadesse", title: "Expert in Implants & Crowns", specialty: "Prosthodontics", quote: "I am here to help you get your smile and your confidence back.", education: ["BDS – Addis Ababa University", "MDS – Cairo University"], experience: "12 years", bgGradient: "linear-gradient(135deg, oklch(0.25 0.08 162), oklch(0.12 0.04 162))", image: "/doc 1.jpeg" },
  { id: "ortho", name: "Dr. Bethel Haile", title: "Expert in Braces", specialty: "Orthodontics", quote: "I love helping my patients get the straight, beautiful smile they want.", education: ["BDS – AAU", "NYU Fellowship"], experience: "9 years", bgGradient: "linear-gradient(135deg, oklch(0.22 0.06 200), oklch(0.15 0.04 240))", image: "/doc 2.jpeg" },
  { id: "nurse", name: "Sr. Selamawit Kassa", title: "Head Dental Nurse", specialty: "Clinical Nursing", quote: "We treat every patient with kindness and care.", education: ["Nursing – AAU"], experience: "10 years", bgGradient: "linear-gradient(135deg, oklch(0.22 0.07 145), oklch(0.15 0.04 170))", image: "/doc 3.jpeg" },
]

export function Doctors({ onNavigate }: DoctorsProps) {
  const heroRef = useInView()
  const chiefRef = useInView()

  return (
    <div className="pt-24 pb-20 overflow-hidden bg-background">
      {/* Hero Header */}
      <section className="py-20 px-6 relative">
        <div ref={heroRef.ref} className="max-w-5xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4 text-accent">OUR TEAM</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif-display text-foreground">
              Meet Our <span className="text-primary italic">Expert Doctors.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Doctor Cards Grid */}
      <section className="py-8 px-6">
        <div ref={chiefRef.ref} className="max-w-6xl mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${chiefRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            {team.map((member) => (
              <div key={member.id} className="relative group flex flex-col justify-between h-full bg-white border border-border/50 rounded-[2.5rem] p-4 shadow-sm hover:shadow-md transition-all">
                <div>
                  {/* Photo area with name overlay */}
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-sm" style={{ background: member.bgGradient }}>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute bottom-6 left-6 right-6 glass p-5 rounded-2xl border border-white/20 shadow-sm">
                      <h3 className="text-xl font-bold text-foreground font-serif-display leading-tight">{member.name}</h3>
                      <p className="text-xs font-bold text-primary mt-1">{member.title}</p>
                    </div>
                  </div>

                  {/* Details area */}
                  <div className="p-6 space-y-4">
                    <p className="text-base italic leading-relaxed text-foreground font-serif-display">"{member.quote}"</p>
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="size-4 shrink-0 text-accent" />
                        <p className="text-xs text-muted-foreground">{member.education.join(", ")}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="size-4 shrink-0 text-accent" />
                        <p className="text-xs text-muted-foreground">{member.experience} of experience</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <Button 
                    onClick={() => onNavigate("appointment")} 
                    className="rounded-2xl px-6 h-12 text-sm font-semibold gap-2 w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm cursor-pointer"
                  >
                    <Send className="size-4" />
                    Book with {member.name.split(' ')[1]}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}