'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  // Once mounted, we can show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Only run this on the client side
    if (!mounted) return

    // Check localStorage first
    const storedTheme = localStorage.getItem('theme') as Theme
    
    // If there's a stored theme, use it
    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      // Otherwise, check for system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [mounted])

  useEffect(() => {
    // Only run this on the client side
    if (!mounted) return

    // Update the HTML class when theme changes
    const html = document.documentElement
    
    if (theme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  // Provide a value that doesn't cause hydration mismatch
  const value = {
    theme,
    setTheme,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}