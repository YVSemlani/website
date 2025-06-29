# Personal Portfolio Website

A modern, minimalist portfolio website built with Next.js to showcase my work and thoughts.

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YVSemlani/website.git
   cd website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── content/              # Dynamic content directory
│   │   ├── work/            # Work-related content
│   │   │   ├── numpy-transformer.md
│   │   │   └── pcn-paper.md
│   │   └── thoughts/        # Blog posts and thoughts
│   ├── [category]/[slug]/   # Dynamic content pages
│   ├── studio/              # Studio page (content overview)
│   ├── globals.css          # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── theme-provider.tsx  # Theme provider
├── lib/
│   ├── content.ts          # Content management utilities
│   └── utils.ts           # Utility functions
├── public/                 # Static assets
└── styles/                # Additional styles
```

## ✍️ Content Management

### Adding New Content

1. **Create a category folder** in `app/content/` (e.g., `projects`, `writings`)
2. **Add markdown files** to the folder
3. **Use proper frontmatter** for metadata

### Content Types

#### Regular Articles
```markdown
---
title: "Your Article Title"
date: "2024-12-15"
---

# Your Article Content

Write your article content here using markdown syntax.
```

#### External Links
```markdown
---
title: "My GitHub Project"
date: "2024-12-15"
external_url: "https://github.com/username/project"
---

This content won't be displayed since it redirects to the external URL.
```

### Header Ordering

Control the order of sections in the Studio page by modifying the `HEADER_ORDER` array in `lib/content.ts`:

```typescript
const HEADER_ORDER = ['work', 'thoughts', 'projects', 'experiments', 'writings']
```

## 🎨 Customization

### Personal Information

Update your personal information in `app/page.tsx`:
- Name and introduction
- Current interests and work
- Social media links

### Styling

The website uses a custom dark theme with:
- **Primary colors**: Zinc color palette for elegant contrast
- **Typography**: Custom font classes (`font-heading`, `font-body`)
- **Animations**: Subtle hover effects and transitions
- **Grid patterns**: Custom background patterns

### Components

All UI components are built with shadcn/ui and can be customized in the `components/ui/` directory.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server  
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with each push

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Environment Variables

No environment variables are required for basic functionality. Add them as needed for additional features.


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **GitHub**: [@YVSemlani](https://github.com/YVSemlani)
- **Twitter**: [@YVSemlani](https://x.com/YVSemlani)
- **Email**: yashvsemlani@gmail.com
- **LinkedIn**: [Yash Semlani](https://www.linkedin.com/in/yash-semlani-38716b157/)

---

Built with ❤️ using Next.js and TypeScript 