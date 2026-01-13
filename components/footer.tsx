import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <img src="/images/myne.jpeg" alt="Myne" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-semibold text-foreground">myne</span>
          </div>

          <nav className="flex items-center gap-8 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Support
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Twitter
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">© 2026 Myne. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
