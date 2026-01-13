"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Check, Sparkles, Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "")

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 384 512" fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
    </svg>
  )
}

const proFeatures = [
  "Unlimited AI conversations",
  "Best agentic models (Opus 4.5, GPT-5.2)",
  "All app integrations",
  "Cross-app context & actions",
  "Voice commands",
  "Priority support",
  "Advanced privacy controls",
]

function SubscribeContent() {
  const searchParams = useSearchParams()
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<"pro" | "pro_yearly">("pro")

  const canceled = searchParams.get("canceled")
  const userId = searchParams.get("user_id")
  const email = searchParams.get("email")
  const redirectUri = searchParams.get("redirect_uri") || "myne://subscription/success"

  useEffect(() => {
    if (canceled) {
      setError("Checkout was canceled. You can try again when you're ready.")
    }
  }, [canceled])

  const handleSubscribe = async () => {
    setIsProcessing(true)
    setError(null)

    try {
      const response = await fetch("/api/subscription/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan: selectedPlan,
          userId,
          email,
          redirectUri,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout session")
      }

      // Redirect to Stripe Checkout
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl
      } else {
        const stripe = await stripePromise
        if (stripe && data.sessionId) {
          const { error } = await stripe.redirectToCheckout({
            sessionId: data.sessionId,
          })
          if (error) {
            throw error
          }
        }
      }
    } catch (err) {
      console.error("Checkout error:", err)
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
      setIsProcessing(false)
    }
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-lg w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            50% Off for Early Users
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Upgrade to Myne Pro
          </h1>
          <p className="text-muted-foreground">
            Unlock the full power of AI with the best agentic models
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-destructive/10 border border-destructive/20 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
            <p className="text-sm text-destructive">{error}</p>
          </div>
        )}

        <div className="rounded-3xl border border-border bg-card p-8 mb-6">
          {/* Plan Toggle */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setSelectedPlan("pro")}
              className={`flex-1 p-4 rounded-2xl border-2 transition-all ${
                selectedPlan === "pro"
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              <div className="text-sm text-muted-foreground mb-1">Monthly</div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm line-through text-muted-foreground">$19.99</span>
                <span className="text-2xl font-bold text-foreground">$9.99</span>
              </div>
            </button>
            <button
              onClick={() => setSelectedPlan("pro_yearly")}
              className={`flex-1 p-4 rounded-2xl border-2 transition-all relative ${
                selectedPlan === "pro_yearly"
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                Best Value
              </div>
              <div className="text-sm text-muted-foreground mb-1">Yearly</div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm line-through text-muted-foreground">$199</span>
                <span className="text-2xl font-bold text-foreground">$99</span>
              </div>
            </button>
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {proFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Subscribe Button */}
          <Button
            size="lg"
            className="w-full rounded-full gap-2 text-base h-14"
            onClick={handleSubscribe}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Redirecting to checkout...
              </>
            ) : (
              <>
                Subscribe for ${selectedPlan === "pro_yearly" ? "99/year" : "9.99/month"}
              </>
            )}
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-4">
            14-day free trial included. Cancel anytime.
          </p>
        </div>

        <div className="text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
          <p className="text-xs text-muted-foreground">
            Secure payment powered by Stripe
          </p>
        </div>
      </div>
    </main>
  )
}

export default function SubscribePage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-background flex items-center justify-center p-6">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </main>
    }>
      <SubscribeContent />
    </Suspense>
  )
}
