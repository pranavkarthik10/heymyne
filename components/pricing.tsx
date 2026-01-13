"use client"

import { useState } from "react"
import { Check, Apple } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            One plan with everything you need. No hidden fees, no surprises.
          </p>

          <div className="inline-flex items-center gap-2 p-1 rounded-full bg-secondary border border-border">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isYearly
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-primary-foreground/20 px-2 py-0.5 rounded-full">Save 17%</span>
            </button>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative rounded-3xl border-2 border-primary/50 bg-gradient-to-b from-card to-secondary/30 p-8 shadow-2xl shadow-primary/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
              Most Popular
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Myne Pro</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-foreground">${isYearly ? "100" : "9.99"}</span>
                <span className="text-muted-foreground">{isYearly ? "/ year" : "/ month"}</span>
              </div>
              {isYearly && <p className="text-sm text-muted-foreground mt-2">That's just $8.33/month</p>}
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "Unlimited AI conversations",
                "All app integrations",
                "Voice commands",
                "Priority support",
                "Advanced privacy controls",
                "Cross-app context",
                "Instant actions",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="w-full rounded-full gap-2 text-base">
              <Apple className="w-5 h-5" />
              Download for Mac
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">14-day free trial • Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  )
}
