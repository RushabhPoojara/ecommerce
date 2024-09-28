"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export const ThemeToggle = (): React.JSX.Element | null => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  if (!mounted) {
    return null
  }

  return (
    <Button
      className="bg-transparent hover:bg-transparent text-muted-foreground"
      variant="secondary"
      size="icon"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <Sun/>
      ) : (
        <Moon/>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}