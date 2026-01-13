import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 384 512" fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
    </svg>
  )
}

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1] text-balance mb-6">
          Your personal AI
          <br />
          assistant for Mac
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Myne connects to everything on your Mac — messages, calendar, notes, and more. It&apos;s like having Claude
          Code for your personal life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full px-8 gap-2 text-base bg-primary hover:bg-primary/90">
            <AppleLogo className="w-5 h-5" />
            Download for Mac
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="lg" className="text-muted-foreground gap-2 hover:text-foreground">
            Watch demo
          </Button>
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10 overflow-hidden">
            <div className="bg-secondary/80 px-4 py-3 flex items-center gap-2 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-muted-foreground ml-2 font-medium">Myne</span>
            </div>
            <div className="p-8 md:p-12 space-y-6">
              <div className="flex items-start gap-4 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <span className="text-sm">👤</span>
                </div>
                <div className="bg-secondary rounded-2xl rounded-tr-sm px-4 py-3 border border-border">
                  <p className="text-sm text-foreground">
                    What meetings do I have tomorrow and did Sarah reply to my last message?
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 overflow-hidden">
                  <img src="/images/myne.jpeg" alt="Myne" className="w-full h-full object-cover" />
                </div>
                <div className="bg-primary text-primary-foreground rounded-2xl rounded-tl-sm px-4 py-3 max-w-lg">
                  <p className="text-sm">
                    You have 3 meetings tomorrow: a 9am standup, 11am design review, and 2pm client call. Sarah replied
                    an hour ago saying she&apos;d love to grab coffee on Thursday!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
