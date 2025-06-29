import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'app/content')

export interface ContentMeta {
  title: string
  date: string
  slug: string
  external_url?: string
  category: string
}

export interface ContentItem extends ContentMeta {
  content?: string
  htmlContent?: string
}

export interface ContentSection {
  category: string
  items: ContentItem[]
}

// Configuration for header ordering - modify this to change the order
const HEADER_ORDER = ['work', 'thoughts', 'projects', 'experiments', 'writings']

export async function getRecentItems(limit: number = 3): Promise<ContentItem[]> {
  const sections = await getContentStructure()
  const allItems: ContentItem[] = []
  
  // Collect all items from all sections
  sections.forEach(section => {
    allItems.push(...section.items)
  })
  
  // Sort by date (newest first) and return the requested number
  return allItems
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

export async function getContentStructure(): Promise<ContentSection[]> {
  const sections: ContentSection[] = []
  
  try {
    // Check if content directory exists
    if (!fs.existsSync(contentDirectory)) {
      return sections
    }

    // Get all category folders
    const allCategories = fs.readdirSync(contentDirectory, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)

    // Order categories based on HEADER_ORDER, then add any others
    const orderedCategories = [
      ...HEADER_ORDER.filter(cat => allCategories.includes(cat)),
      ...allCategories.filter(cat => !HEADER_ORDER.includes(cat))
    ]

    for (const category of orderedCategories) {
      const categoryPath = path.join(contentDirectory, category)
      const items: ContentItem[] = []

      // Get all markdown files in the category
      const files = fs.readdirSync(categoryPath)
        .filter(name => name.endsWith('.md'))

      for (const file of files) {
        const filePath = path.join(categoryPath, file)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContent)

        const slug = path.basename(file, '.md')
        
        const item: ContentItem = {
          title: data.title || slug,
          date: data.date || new Date().toISOString().split('T')[0],
          slug,
          category,
          external_url: data.external_url,
          content,
        }

        // Convert markdown to HTML if it's not an external link
        if (!item.external_url && content) {
          const processedContent = await remark()
            .use(html)
            .process(content)
          item.htmlContent = processedContent.toString()
        }

        items.push(item)
      }

      // Sort items by date (newest first)
      items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

      if (items.length > 0) {
        sections.push({ category, items })
      }
    }

    return sections
  } catch (error) {
    console.error('Error reading content structure:', error)
    return sections
  }
}

export async function getContentItem(category: string, slug: string): Promise<ContentItem | null> {
  try {
    const filePath = path.join(contentDirectory, category, `${slug}.md`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)

    const item: ContentItem = {
      title: data.title || slug,
      date: data.date || new Date().toISOString().split('T')[0],
      slug,
      category,
      external_url: data.external_url,
      content,
    }

    // Convert markdown to HTML if it's not an external link
    if (!item.external_url && content) {
      const processedContent = await remark()
        .use(html)
        .process(content)
      item.htmlContent = processedContent.toString()
    }

    return item
  } catch (error) {
    console.error('Error reading content item:', error)
    return null
  }
} 