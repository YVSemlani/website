import Link from "next/link"
import { Github, Twitter, Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { getRecentItems } from "@/lib/content"

export default async function HomePage() {
  const recentItems = await getRecentItems(3)

  return (
    <div className="min-h-screen bg-background text-foreground bg-pattern bg-grid">
      <div className="max-w-2xl mx-auto px-6 py-12 relative">
        <div className="gradient-accent absolute inset-0 -z-10"></div>

        {/* Navigation */}
        <Navigation currentPage="main" />

        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-heading">
            Hi, I'm Yash!
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-body">
            I'm a sophomore at UNC Chapel Hill studying Computer Science and Applied Math. Currently, I'm doing an MLE internship at Careset where I use geometric ML to understand the American healthcare system.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-body">
            I spend my time learning about efficient inference, ML for games, and geometric ML by reading papers and working on research or projects. In my free time, I study and play poker as a member of the UNC Poker Club and dabble in the guitar.
          </p>
        </section>

        {/* Current Interests */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 font-heading">What I've been working on</h2>
          <div className="grid gap-4">
            <p className="text-muted-foreground font-body">
              <span className="text-foreground font-medium">Efficient Inference:</span> Understanding how to serve large models quicker and more efficiently.
            </p>
            <p className="text-muted-foreground font-body">
              <span className="text-foreground font-medium">ML for Games:</span> Researching techniques for improving the performance of ML in games with a particular interest in poker.
            </p>
            <p className="text-muted-foreground font-body">
              <span className="text-foreground font-medium">Geometric ML:</span> Using geometric ML to solve problems in healthcare and push forward the <Link href="https://arxiv.org/abs/2309.08630" className="text-muted-foreground hover:text-foreground transition-colors underline">SoTA in particle jet tagging</Link>.
            </p>
          </div>
        </section>

        {/* Recent Work */}
        {recentItems.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-8 font-heading">Recent</h2>
            <div className="space-y-4">
              {recentItems.map((item) => (
                <div key={`${item.category}-${item.slug}`} className="group">
                  <div className="flex items-center justify-between">
                    {item.external_url ? (
                      <Link
                        href={item.external_url}
                        className="text-muted-foreground hover:text-foreground transition-colors font-body"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <Link
                        href={`/content/${item.category}/${item.slug}`}
                        className="text-muted-foreground hover:text-foreground transition-colors font-body"
                      >
                        {item.title}
                      </Link>
                    )}
                    <span className="text-sm text-muted-foreground font-body">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit'
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Social Links */}
        <section>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hover:text-muted-foreground" asChild>
              <a href="https://github.com/YVSemlani" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-muted-foreground" asChild>
              <a href="https://x.com/YVSemlani" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-muted-foreground" asChild>
              <a href="mailto:yashvsemlani@gmail.com">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-muted-foreground" asChild>
              <a href="https://www.linkedin.com/in/yash-semlani-38716b157/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
