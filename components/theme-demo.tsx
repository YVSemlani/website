"use client"

import { ThemeToggle, ThemeSwitch } from "@/components/theme-toggle"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ThemeDemo() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Dark/Light Mode Toggle Demo</h1>
        <p className="text-muted-foreground">
          Try switching between light and dark modes using the toggles below!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Dropdown Theme Toggle</CardTitle>
            <CardDescription>
              A dropdown menu with three options: Light, Dark, and System (follows your OS preference)
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ThemeToggle />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Switch Theme Toggle</CardTitle>
            <CardDescription>
              A simple switch that toggles between light and dark modes only
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ThemeSwitch />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Theme Features</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Light Mode</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Clean, bright interface</li>
                <li>• Better for well-lit environments</li>
                <li>• Easier reading for some users</li>
                <li>• Traditional web design aesthetic</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Dark Mode</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Reduced eye strain in low light</li>
                <li>• Modern, sleek appearance</li>
                <li>• Better battery life on OLED screens</li>
                <li>• Popular for development tools</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Implementation Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              <strong>Framework:</strong> Next.js 15 with TypeScript
            </p>
            <p>
              <strong>Styling:</strong> Tailwind CSS with CSS variables for theme switching
            </p>
            <p>
              <strong>Theme Management:</strong> next-themes library for persistence and system preference detection
            </p>
            <p>
              <strong>Components:</strong> Radix UI for accessible, unstyled component primitives
            </p>
            <p>
              <strong>Features:</strong> Automatic theme persistence, system preference detection, smooth transitions
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}