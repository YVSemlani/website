"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

interface NavigationProps {
  currentPage?: "main" | "studio" | "content"
}

export function Navigation({ currentPage = "main" }: NavigationProps) {
  return (
    <nav className="flex items-center justify-between mb-12">
      <Link 
        href="/" 
        className={
          currentPage === "main" 
            ? "text-foreground font-medium font-heading" 
            : "text-muted-foreground hover:text-foreground transition-colors font-heading"
        }
      >
        Main
      </Link>
      <div className="flex items-center gap-8">
        <Link 
          href="/studio" 
          className={
            currentPage === "studio" 
              ? "text-foreground font-medium" 
              : "text-muted-foreground hover:text-foreground transition-colors"
          }
        >
          Studio
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}