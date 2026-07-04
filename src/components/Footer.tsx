import { Send, Globe, Share2, AtSign, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface FooterProps {
  onNavigate: (page: string) => void
}

const socialLinks = [
  { Icon: Globe, label: "Website", url: "https://melonadental.com" },
  { Icon: Share2, label: "Share Website", url: "#" },
  { Icon: AtSign, label: "Email Us", url: "mailto:hello@melonadental.com" }
]

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative overflow-hidden pt-16 pb-8 bg-primary text-white">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-3 font-serif-display text-white">Melona</h3>
            <p className="text-sm leading-relaxed mb-4 text-white/70">
              Providing the best dental care in Addis Ababa. We use modern technology and a gentle touch to keep your smile healthy and beautiful.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, label, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target={url.startsWith('http') ? "_blank" : undefined}
                  rel={url.startsWith('http') ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 bg-white/10 hover:bg-white/20 text-accent"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest mb-4 uppercase text-accent">Quick Links</h4>
            <ul className="space-y-2.5">
              {["Privacy Policy", "Terms of Service", "Patient Portal", "Emergency Care"].map((item) => (
                <li key={item}>
                  <button 
                    aria-label={`Open ${item}`}
                    className="text-sm transition-all duration-200 hover:translate-x-1 inline-block text-white/60 hover:text-white cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest mb-4 uppercase text-accent">Contact</h4>
            <div className="space-y-2.5 text-sm mb-5 text-white/70">
              <p>Around Bole Mikeal Area,</p>
              <p>Addis Ababa, Ethiopia</p>
              <p>+251 911 00 00 00</p>
            </div>
            <div className="flex flex-col gap-2">
              <Button 
                onClick={() => onNavigate("contact")} 
                className="w-full rounded-xl text-xs font-semibold gap-2 h-9 bg-white text-foreground hover:bg-white/95 cursor-pointer"
              >
                <Phone className="size-3.5" />
                Contact Page
              </Button>
              <Button 
                onClick={() => window.open('https://t.me/melonadental', '_blank')} 
                variant="outline" 
                className="w-full rounded-xl text-xs font-semibold gap-2 h-9 border-accent text-accent hover:bg-accent/15 cursor-pointer"
              >
                <Send className="size-3.5" />
                Telegram
              </Button>
            </div>
          </div>
        </div>
      
        <Separator className="mb-6 bg-white/10" />
        <p className="text-center text-xs text-white/40">&copy; {new Date().getFullYear()} Melona Dental Center. Addis Ababa, Ethiopia.</p>
      </div>
    </footer>
  )
}