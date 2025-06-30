import { Navigation } from "@/components/navigation"
import { ThemeDemo } from "@/components/theme-demo"

export default function ThemeDemoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-pattern bg-grid">
      <div className="max-w-2xl mx-auto px-6 py-12 relative">
        <div className="gradient-accent absolute inset-0 -z-10"></div>
        
        {/* Navigation */}
        <Navigation />
        
        <ThemeDemo />
      </div>
    </div>
  )
}