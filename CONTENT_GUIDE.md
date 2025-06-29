# Content System Guide

Your portfolio now uses a dynamic content system that automatically organizes your work and thoughts based on folder structure.

## How It Works

1. **Folder Structure**: Each folder in `app/content/` becomes a section header in your Studio page
2. **Markdown Files**: Each `.md` file in these folders becomes a link/article
3. **Dynamic Headers**: Folder names are automatically converted to headers (e.g., "work" becomes "Work", "side-projects" becomes "Side Projects")
4. **Recent Work**: The main page automatically shows the 3 most recent items across all categories

## Header Ordering

You can control the order of headers in Studio by modifying the `HEADER_ORDER` array in `lib/content.ts`:

```typescript
const HEADER_ORDER = ['work', 'thoughts', 'projects', 'experiments', 'writings']
```

- Headers appear in the order specified in this array
- Any folders not in the array will appear after the ordered ones
- Simply rearrange the array to change the order in Studio

## Content Types

### Regular Articles
Create markdown files with frontmatter for articles that will be displayed on your site:

```markdown
---
title: "Your Article Title"
date: "2024-12-15"
---

# Your Article Content

Write your article content here using markdown syntax.
```

### External Link Pseudoarticles
Create markdown files with `external_url` in frontmatter to redirect to external resources:

```markdown
---
title: "My GitHub Project"
date: "2024-12-15"
external_url: "https://github.com/username/project"
---

This content won't be displayed since it redirects to GitHub.
```

## Adding New Content

1. Create a folder in `app/content/` (e.g., `projects`, `writings`, `experiments`)
2. Add `.md` files to the folder
3. The folder name becomes a header in Studio
4. The markdown files become links under that header
5. The 3 most recent items will automatically appear in "Recent Work" on the main page

## Examples

- `app/content/work/` → "Work" section
- `app/content/thoughts/` → "Thoughts" section  
- `app/content/side-projects/` → "Side Projects" section

## Current Structure

```
app/content/
├── work/
│   ├── design-system-generator.md (external link)
│   └── minimal-task-manager.md (external link)
└── thoughts/
    ├── building-with-next-js.md (regular article)
    └── design-system-principles.md (regular article)
```

## Features

- **Automatic Organization**: No need to manually update the Studio page
- **Flexible Content**: Mix regular articles with external links
- **Clean URLs**: Articles get nice URLs like `/content/thoughts/building-with-next-js`
- **Markdown Support**: Full markdown formatting with proper styling
- **Date Sorting**: Content is automatically sorted by date within each section
- **Recent Work**: Main page shows the 3 most recent items across all categories
- **Custom Header Order**: Control the order of sections in Studio via configuration 