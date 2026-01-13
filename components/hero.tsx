import { ArrowRight, Apple } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-foreground text-sm mb-8 border border-primary/20">
          <Apple className="w-4 h-4 text-primary" />
          <span className="font-medium">macOS Native</span>
        </div> */}

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
            <Apple className="w-5 h-5" />
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
              <span className="text-xs text-muted-foreground ml-2 font-medium">Myne Assistant</span>
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
