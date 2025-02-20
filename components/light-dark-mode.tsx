"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative transition-all duration-500 ease-in-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute h-[1.2rem] w-[1.2rem] transition-opacity transform ${
          theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" fill="yellow" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute h-[1.2rem] w-[1.2rem] transition-opacity transform ${
          theme === "light" ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
          fill="lightblue"
        />
      </svg>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
