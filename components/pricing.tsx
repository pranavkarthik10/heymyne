"use client"

import { useState } from "react"
import { Check, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 384 512" fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
    </svg>
  )
}

const freeFeatures = [
  { name: "Basic AI conversations", included: true },
  { name: "Core app integrations", included: true },
  { name: "5 queries per day", included: true },
  { name: "Standard models", included: true },
  { name: "Best agentic models (Opus 4.5, GPT-5.2)", included: false },
  { name: "Unlimited queries", included: false },
  { name: "Priority support", included: false },
]

const proFeatures = [
  { name: "Unlimited AI conversations", included: true },
  { name: "All app integrations", included: true },
  { name: "Best agentic models (Opus 4.5, GPT-5.2)", included: true },
  { name: "Cross-app context & actions", included: true },
  { name: "Voice commands", included: true },
  { name: "Priority support", included: true },
  { name: "Advanced privacy controls", included: true },
]

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Start free, upgrade when you need the full power of AI.
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Free</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-foreground">$0</span>
                <span className="text-muted-foreground">/ month</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Perfect for getting started</p>
            </div>

            <ul className="space-y-4 mb-8">
              {freeFeatures.map((feature) => (
                <li key={feature.name} className="flex items-center gap-3">
                  {feature.included ? (
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <X className="w-3 h-3 text-muted-foreground" />
                    </div>
                  )}
                  <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>

            <Button size="lg" variant="outline" className="w-full rounded-full gap-2 text-base">
              <AppleLogo className="w-5 h-5" />
              Download Free
            </Button>
          </div>

          {/* Pro Tier */}
          <div className="relative rounded-3xl border-2 border-primary/50 bg-gradient-to-b from-card to-secondary/30 p-8 shadow-2xl shadow-primary/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              50% Off for Early Users
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Myne Pro</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-medium text-muted-foreground line-through">${isYearly ? "199" : "19.99"}</span>
                <span className="text-5xl font-bold text-foreground">${isYearly ? "99" : "9.99"}</span>
                <span className="text-muted-foreground">{isYearly ? "/ year" : "/ month"}</span>
              </div>
              {isYearly && <p className="text-sm text-muted-foreground mt-2">That&apos;s just $8.25/month</p>}
            </div>

            <ul className="space-y-4 mb-8">
              {proFeatures.map((feature) => (
                <li key={feature.name} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{feature.name}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="w-full rounded-full gap-2 text-base">
              <AppleLogo className="w-5 h-5" />
              Get Pro
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">14-day free trial included</p>
          </div>
        </div>
      </div>
    </section>
  )
}
