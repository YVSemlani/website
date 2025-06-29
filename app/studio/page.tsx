import Link from "next/link"
import { getContentStructure } from "@/lib/content"

export default async function StudioPage() {
  const contentSections = await getContentStructure()

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 bg-pattern bg-grid">
      <div className="max-w-2xl mx-auto px-6 py-12 relative">
        <div className="gradient-accent absolute inset-0 -z-10"></div>

        {/* Navigation */}
        <nav className="flex items-center justify-between mb-16">
          <Link href="/" className="text-lg font-medium font-heading">
            Main
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/studio" className="text-zinc-100 font-medium">
              Studio
            </Link>
          </div>
        </nav>

        {/* Dynamic Content Sections */}
        {contentSections.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold mb-4 font-heading text-zinc-300">No Content Yet</h2>
            <p className="text-zinc-400 font-body">
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
                          className="text-zinc-300 hover:text-zinc-100 transition-colors font-body"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <Link
                          href={`/content/${item.category}/${item.slug}`}
                          className="text-zinc-300 hover:text-zinc-100 transition-colors font-body"
                        >
                          {item.title}
                        </Link>
                      )}
                      <span className="text-sm text-zinc-400 font-body">
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
