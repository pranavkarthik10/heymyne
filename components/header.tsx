"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/myne.jpeg" alt="Myne" width={32} height={32} className="w-8 h-8 rounded-lg" />
          <span className="text-xl font-semibold text-foreground">myne</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#integrations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Integrations
          </Link>
          <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            How it works
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            Log in
          </Button>
          <Button size="sm" className="rounded-full px-6">
            Download
          </Button>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-4">
          <Link href="#features" className="block text-sm text-muted-foreground">
            Features
          </Link>
          <Link href="#integrations" className="block text-sm text-muted-foreground">
            Integrations
          </Link>
          <Link href="#pricing" className="block text-sm text-muted-foreground">
            Pricing
          </Link>
          <Link href="#how-it-works" className="block text-sm text-muted-foreground">
            How it works
          </Link>
          <div className="pt-4 flex flex-col gap-2">
            <Button variant="ghost" size="sm" className="justify-start">
              Log in
            </Button>
            <Button size="sm" className="rounded-full">
              Download
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
