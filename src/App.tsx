import { useState, useEffect, lazy, Suspense } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const Home = lazy(() => import("@/pages/Home").then(m => ({ default: m.Home })))
const About = lazy(() => import("@/pages/About").then(m => ({ default: m.About })))
const Services = lazy(() => import("@/pages/Services").then(m => ({ default: m.Services })))
const Doctors = lazy(() => import("@/pages/Doctors").then(m => ({ default: m.Doctors })))
const Gallery = lazy(() => import("@/pages/Gallery").then(m => ({ default: m.Gallery })))
const Contact = lazy(() => import("@/pages/Contact").then(m => ({ default: m.Contact })))
const Appointment = lazy(() => import("@/pages/Appointment").then(m => ({ default: m.Appointment })))

type Page = "home" | "about" | "services" | "doctors" | "gallery" | "contact" | "appointment"

export function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home")

  const navigate = (page: string) => {
    setCurrentPage(page as Page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    document.title = currentPage === "home"
      ? "Melona Specialty Dental Center — Addis Ababa"
      : `${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} — Melona Dental`
  }, [currentPage])

  const renderPage = () => {
    switch (currentPage) {
      case "home": return <Home onNavigate={navigate} />
      case "about": return <About onNavigate={navigate} />
      case "services": return <Services onNavigate={navigate} />
      case "doctors": return <Doctors onNavigate={navigate} />
      case "gallery": return <Gallery onNavigate={navigate} />
      case "contact": return <Contact onNavigate={navigate} />
      case "appointment": return <Appointment onNavigate={navigate} />
      default: return <Home onNavigate={navigate} />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} onNavigate={navigate} />
      <main className="pb-28">
        <Suspense fallback={
          <div className="h-screen w-full flex items-center justify-center bg-background">
            <div className="w-8 h-8 border-4 border-clinic-gold border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          {renderPage()}
        </Suspense>
      </main>
      <Footer onNavigate={navigate} />
    </div>
  )
}

export default App
