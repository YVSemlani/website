import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { getContentItem } from "@/lib/content"
import { redirect } from "next/navigation"
import { notFound } from "next/navigation"

interface ContentPageProps {
  params: {
    category: string
    slug: string
  }
}

export default async function ContentPage({ params }: ContentPageProps) {
  const item = await getContentItem(params.category, params.slug)

  if (!item) {
    notFound()
  }

  // If it's an external URL, redirect to it
  if (item.external_url) {
    redirect(item.external_url)
  }

  return (
    <div className="min-h-screen bg-background text-foreground bg-pattern bg-grid">
      <div className="max-w-2xl mx-auto px-6 py-12 relative">
        <div className="gradient-accent absolute inset-0 -z-10"></div>

        {/* Navigation */}
        <Navigation currentPage="studio" />

        {/* Back Button */}
        <Button variant="ghost" size="sm" className="mb-8 -ml-2" asChild>
          <Link href="/studio">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Studio
          </Link>
        </Button>

        {/* Content Article */}
        <article>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight font-heading">
              {item.title}
            </h1>
            <time className="text-muted-foreground font-body" dateTime={item.date}>
              {new Date(item.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </header>

          <div className="prose prose-invert prose-zinc max-w-none dark:prose-invert">
            {item.htmlContent ? (
              <div
                className="text-muted-foreground leading-relaxed font-body [&>*]:mb-6 [&>h1]:text-3xl [&>h1]:font-semibold [&>h1]:text-foreground [&>h1]:mt-12 [&>h1]:mb-6 [&>h1]:font-heading [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-foreground [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:font-heading [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:mt-8 [&>h3]:mb-4 [&>h3]:font-heading [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>li]:mb-2 [&>blockquote]:border-l-4 [&>blockquote]:border-border [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-muted-foreground [&>code]:bg-muted [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm [&>pre]:bg-muted [&>pre]:p-4 [&>pre]:rounded [&>pre]:overflow-x-auto [&>pre]:text-sm"
                dangerouslySetInnerHTML={{ __html: item.htmlContent }}
              />
            ) : (
              <p className="text-muted-foreground leading-relaxed font-body">
                Content not available.
              </p>
            )}
          </div>
        </article>
      </div>
    </div>
  )
} 