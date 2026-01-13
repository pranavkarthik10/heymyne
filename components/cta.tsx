import { ArrowRight, Apple } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Ready to meet your new assistant?
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          Join thousands of Mac users who&apos;ve made Myne part of their daily workflow.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full px-8 gap-2 text-base h-14 bg-primary hover:bg-primary/90">
            <Apple className="w-5 h-5" />
            Download for macOS
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">Requires macOS Sonoma 14.0 or later • Free during beta</p>
      </div>
    </section>
  )
}
