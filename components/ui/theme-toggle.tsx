'use client'

import { useTheme } from '@/components/ui/theme-provider'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-md p-2 transition-colors duration-200 hover:bg-ui-component-hover"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-high-contrast-text" />
      ) : (
        <Moon className="h-5 w-5 text-high-contrast-text" />
      )}
    </button>
  )
}