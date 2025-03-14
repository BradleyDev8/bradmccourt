'use client'

import { useTheme } from '@/components/ui/theme-provider'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only show the toggle after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder with the same dimensions to avoid layout shift
    return <div className="w-5 h-5" aria-hidden="true" />
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-md p-2 transition-colors duration-200 hover:bg-ui-component-hover"
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-high-contrast-text" />
      ) : (
        <Moon className="h-5 w-5 text-high-contrast-text" />
      )}
    </button>
  )
}