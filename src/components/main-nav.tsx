"use client"

import Link from "next/link"
import Image from "next/image"
import logo from "../../public/logo.png"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

const navItems = [
  { href: "/materi", label: "Materi" },
  { href: "/alumni", label: "Alumni" },
  { href: "/beasiswa", label: "Beasiswa" },
]

export function MainNav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="border-b 
    bg-gradient-to-r from-merah_2 via-slate-50 to-kuning_2 to-[99%]">
      <div className="flex h-16 items-center px-4 container max-w-7xl mx-auto">
        <Link href="/"><Image alt="logo" src={logo} width={128} height={72}></Image></Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex ml-auto gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[385px]">
            <SheetHeader>
              <SheetTitle>Mau cari apa?</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}