import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { getContentStructure } from "@/lib/content"

export default async function StudioPage() {
  const contentSections = await getContentStructure()

  return (
    <div className="min-h-screen bg-background text-foreground bg-pattern bg-grid">
      <div className="max-w-2xl mx-auto px-6 py-12 relative">
        <div className="gradient-accent absolute inset-0 -z-10"></div>

        {/* Navigation */}
        <Navigation currentPage="studio" />

        {/* Dynamic Content Sections */}
        {contentSections.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold mb-4 font-heading text-muted-foreground">No Content Yet</h2>
            <p className="text-muted-foreground font-body">
              Create folders in the content directory and add markdown files to see them here.
            </p>
          </div>
        ) : (
          contentSections.map((section, index) => (
            <section key={section.category} className={index < contentSections.length - 1 ? "mb-16" : ""}>
              <h2 className="text-2xl font-semibold mb-8 font-heading capitalize">
                {section.category.replace(/[-_]/g, ' ')}
              </h2>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.slug} className="group">
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
          ))
        )}
      </div>
    </div>
  )
}
