"use client"

import Link from "next/link"
import { useState } from "react"
import { Instagram } from "lucide-react"

export function MainFooter() {
  const [open, setOpen] = useState(false)

  return (
    <footer className="min-h-12 flex justify-center items-center space-x-4 border-b bg-merah_1">
        <p>Instagram: </p>
            <Link
              key="ig"
              href="https://www.instagram.com/campusday.24/"
              className="underline hover:no-underline"
              target="_blank"
            >
              <Instagram className="inline"/> @campusday.24
            </Link>
    </footer>
  )
}