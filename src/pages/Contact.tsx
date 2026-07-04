import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle } from "lucide-react"
import { useInView } from "@/hooks/useInView"

interface ContactProps {
  onNavigate: (page: string) => void
}

const hours = [
  { day: "Monday - Friday", time: "8:30 AM — 6:00 PM", open: true },
  { day: "Saturday", time: "9:00 AM — 2:00 PM", open: true },
  { day: "Sunday", time: "Closed", open: false },
]

export function Contact({ onNavigate }: ContactProps) {
  const heroRef = useInView()
  const infoRef = useInView()
  const [formData, setFormData] = useState({ name: "", contact: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: "", contact: "", message: "" })
  }

  return (
    <div className="pt-24 pb-20 overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div ref={heroRef.ref} className="max-w-5xl mx-auto">
          <div
            className={`transition-all duration-1000 ${heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-3xl font-serif-display text-foreground">
              We're Here to <span className="text-primary">Help.</span>
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed text-muted-foreground">
              Have a question or want to book a visit? Reach out to us today. We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Info & Form Section */}
      <section className="px-6">
        <div ref={infoRef.ref} className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details Cards */}
          <div
            className={`space-y-6 transition-all duration-1000 ${infoRef.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <Card className="rounded-3xl border border-border/50 bg-white shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-7">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-secondary text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase mb-1 text-accent">OUR LOCATION</p>
                    <p className="text-sm leading-relaxed mb-4 text-foreground">
                      Bole Medhanialem Area,<br />
                      Next to Harmony Hotel,<br />
                      Addis Ababa, Ethiopia
                    </p>
                    <a
                      href="https://maps.app.goo.gl/khrZ9Ztw63F9o1vcA"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/95 transition-all shadow-sm"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border border-border/50 bg-white shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-7">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-secondary text-primary">
                    <Phone className="size-5" />
                  </div>
                  <p className="text-xs font-bold tracking-widest uppercase pt-2.5 text-accent">CONTACT US</p>
                </div>
                <div className="space-y-3 ml-14">
                  <div className="flex items-center gap-3">
                    <Phone className="size-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">+251 911 00 00 00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="size-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">hello@melonadental.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border border-border/50 bg-white shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-7">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-secondary text-primary">
                    <Clock className="size-5" />
                  </div>
                  <p className="text-xs font-bold tracking-widest uppercase pt-2.5 text-accent">OPENING HOURS</p>
                </div>
                <div className="space-y-3 ml-14">
                  {hours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between">
                      <span className="text-sm text-foreground">{h.day}</span>
                      <span className="text-sm font-medium text-muted-foreground">{h.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Button
              className="w-full rounded-2xl h-14 text-sm font-bold gap-3 bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm cursor-pointer"
              onClick={() => onNavigate("appointment")}
            >
              <MessageCircle className="size-5" />
              BOOK ON TELEGRAM
            </Button>
          </div>

          {/* Contact Message Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${infoRef.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <Card className="rounded-3xl border border-border/50 bg-white shadow-sm">
              <CardContent className="p-7">
                <h2 className="text-3xl font-bold mb-6 font-serif-display text-foreground">Send us a Message</h2>

                {submitted ? (
                  <div className="flex flex-col items-center gap-3 py-8 animate-scale-in text-center">
                    <CheckCircle className="size-10 text-primary animate-pulse" />
                    <p className="font-bold text-foreground">Message Sent!</p>
                    <p className="text-sm text-muted-foreground">We will get back to you very soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="fullname" className="text-xs font-bold text-foreground block mb-1.5">Full Name</label>
                      <input
                        id="fullname"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full rounded-xl border border-border px-4 py-2.5 text-sm bg-background text-foreground outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactInfo" className="text-xs font-bold text-foreground block mb-1.5">Email or Phone</label>
                      <input
                        id="contactInfo"
                        type="text"
                        placeholder="How can we reach you?"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        required
                        className="w-full rounded-xl border border-border px-4 py-2.5 text-sm bg-background text-foreground outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="text-xs font-bold text-foreground block mb-1.5">Message</label>
                      <textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="w-full rounded-xl border border-border px-4 py-2.5 text-sm bg-background text-foreground outline-none resize-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full rounded-xl h-12 font-semibold bg-primary text-primary-foreground hover:bg-primary/95 shadow-sm cursor-pointer"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}