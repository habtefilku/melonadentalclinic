import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import BeforeAfterSlider from "@/components/BeforeAfterSlider"
import { useInView } from "@/hooks/useInView"

interface GalleryProps {
  onNavigate: (page: string) => void
}

const transformations = [
  {
    title: "Smile Makeover",
    desc: "Veneers & Gum Shaping",
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Braces Results",
    desc: "Straight Teeth in 14 Months",
    before: "https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?auto=format&fit=crop&q=80&w=800",
    after: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Teeth Whitening",
    desc: "Bright Results in One Visit",
    before: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    after: "https://images.unsplash.com/photo-1593022356769-11f09279a259?auto=format&fit=crop&q=80&w=800",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Dental Implants",
    desc: "Natural Looking Results",
    before: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    span: "md:col-span-2 md:row-span-1",
  },
]

export function Gallery({ onNavigate }: GalleryProps) {
  const heroRef = useInView()
  const gridRef = useInView()

  return (
    <div className="pt-24 pb-0 overflow-hidden bg-background">
      {/* Header Section */}
      <section className="py-20 px-6 text-center relative">
        <div ref={heroRef.ref} className="relative z-10">
          <div className={`transition-all duration-1000 ${heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4 text-accent">OUR WORK</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif-display text-foreground">
              See the <span className="text-primary italic">Difference.</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed text-muted-foreground">
              Drag the slider to see how we help our patients get their best smiles.
            </p>
          </div>
        </div>
      </section>

      {/* Before/After Gallery Grid */}
      <section className="px-6 mb-24">
        <div ref={gridRef.ref} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
            {transformations.map((item, i) => (
              <div
                key={i}
                className={`
                  relative rounded-3xl overflow-hidden shadow-sm border border-border/40 transition-all duration-1000 bg-white
                  ${item.span}
                  ${gridRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                `}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <BeforeAfterSlider 
                  beforeImage={item.before} 
                  afterImage={item.after} 
                  label={`${item.title} - ${item.desc}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="px-6 py-24 text-center bg-primary text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif-display text-white">Start Your Journey Today</h2>
          <p className="text-base md:text-lg mb-8 text-white/80 leading-relaxed">Book a consultation with our experts to find out how we can transform your smile.</p>
          <Button
            onClick={() => onNavigate("appointment")}
            className="rounded-2xl px-10 h-14 text-base font-semibold gap-3 bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:scale-[1.02] transition-all cursor-pointer"
          >
            <MessageCircle className="size-5" />
            Book an Appointment
          </Button>
        </div>
      </section>
    </div>
  )
}