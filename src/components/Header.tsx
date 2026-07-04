import { useState, useEffect, useCallback } from "react"
import { 
  Home, 
  Info, 
  Stethoscope, 
  Users, 
  Image as ImageIcon, 
  Phone 
} from "lucide-react"

const navItems = [
  { label: "HOME", id: "home", icon: Home },
  { label: "ABOUT", id: "about", icon: Info },
  { label: "SERVICES", id: "services", icon: Stethoscope },
  { label: "DOCTORS", id: "doctors", icon: Users },
  { label: "GALLERY", id: "gallery", icon: ImageIcon },
  { label: "CONTACT", id: "contact", icon: Phone },
]

interface HeaderProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  // Debounce utility function to limit scroll event calls
  const debounce = useCallback((func: (...args: any[]) => void, delay: number) => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    return function(this: any, ...args: any[]) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), delay);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const debouncedHandleScroll = debounce(handleScroll, 100); // Debounce by 100ms
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, [debounce])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-700 ${
          scrolled ? "py-3 animate-fade-in" : "py-6"
        }`}
      >
        <nav
          className={`
            relative overflow-hidden transition-all duration-500
            rounded-2xl w-full max-w-6xl border
            ${scrolled ? "shadow-md scale-[0.98]" : "shadow-sm"}
          `}
          style={{
            background: "rgba(250, 251, 252, 0.75)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderColor: "rgba(26, 29, 35, 0.08)",
          }}
        >
          <div 
            className="absolute top-0 left-0 right-0 h-[1px] opacity-40"
            style={{ background: "linear-gradient(90deg, transparent, var(--clinic-gold), transparent)" }}
          />

          <div className="flex items-center justify-between px-4 md:px-8 py-2.5">
            <button
              onClick={() => onNavigate("home")}
              aria-label="Navigate to Home page"
              className="flex items-center gap-3 group shrink-0 text-left cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-white/40 border border-black/5 flex items-center justify-center overflow-hidden">
                <img 
                  src="/melona-logo.jpg" 
                  alt="Melona Dental Logo" 
                  decoding="async"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span
                  className="text-base md:text-xl font-bold tracking-tight transition-all duration-300 group-hover:tracking-widest font-serif-display text-primary"
                >
                  MELONA
                </span>
                <span 
                  className="text-[8px] md:text-[9px] font-bold tracking-[0.25em] uppercase text-accent"
                >
                  Specialty Dental Care
                </span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse hidden sm:block" />
            </button>

            <div className="hidden lg:flex items-center gap-1.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  aria-label={`Go to ${item.label} page`}
                  aria-current={currentPage === item.id ? "page" : undefined}
                  className={`
                    relative px-3.5 py-1.5 text-[10px] font-bold tracking-[0.18em] transition-all duration-300
                    rounded-xl uppercase cursor-pointer
                    ${currentPage === item.id
                      ? "text-primary bg-primary/10 shadow-sm ring-1 ring-primary/10 animate-scale-up"
                      : "text-foreground/75 hover:text-primary hover:bg-primary/5 hover:-translate-y-[1px]"
                    }
                  `}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent transition-all duration-500 ease-out ${currentPage === item.id ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                  />
                </button>
              ))}
            </div>

          </div>
        </nav>
      </header>

      <nav className="fixed bottom-4 left-0 right-0 z-50 lg:hidden flex justify-center px-4">
        <div className="w-fit rounded-2xl border border-white/10 bg-[rgba(26,29,35,0.92)] backdrop-blur-2xl shadow-2xl">
          <div className="flex items-center justify-center gap-1.5 px-2.5 py-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                aria-label={`Go to ${item.label} page`}
                aria-current={currentPage === item.id ? "page" : undefined}
                className={
                  `flex flex-col items-center justify-center gap-0.5 px-2.5 py-1.5 rounded-xl transition-all duration-300 text-[8px] uppercase font-bold tracking-wider cursor-pointer ${
                    currentPage === item.id
                      ? "text-accent bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.08)]"
                      : "text-gray-400 hover:text-white"
                  }`
                }
              >
                <item.icon size={16} strokeWidth={currentPage === item.id ? 2.5 : 2} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}