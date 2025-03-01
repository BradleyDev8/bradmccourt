'use client'

import { useTheme } from '@/components/ui/theme-provider'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-md p-2 transition-colors duration-200 hover:bg-ui-component-hover"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-5 w-5 text-high-contrast-text" />
      ) : (
        <MoonIcon className="h-5 w-5 text-high-contrast-text" />
      )}
    </button>
  )
}