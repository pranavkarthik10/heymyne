"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Check, Loader2, PartyPopper } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

function SuccessContent() {
  const searchParams = useSearchParams()
  const [countdown, setCountdown] = useState(5)

  const sessionId = searchParams.get("session_id")
  const redirectUri = searchParams.get("redirect_uri") || "myne://subscription/success"

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          // Redirect to app
          const callbackUrl = new URL(decodeURIComponent(redirectUri))
          callbackUrl.searchParams.set("status", "success")
          if (sessionId) {
            callbackUrl.searchParams.set("session_id", sessionId)
          }
          window.location.href = callbackUrl.toString()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [redirectUri, sessionId])

  const handleOpenApp = () => {
    const callbackUrl = new URL(decodeURIComponent(redirectUri))
    callbackUrl.searchParams.set("status", "success")
    if (sessionId) {
      callbackUrl.searchParams.set("session_id", sessionId)
    }
    window.location.href = callbackUrl.toString()
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
            <Check className="w-12 h-12 text-primary-foreground" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-4">
          <PartyPopper className="w-6 h-6 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Welcome to Myne Pro!</h1>
          <PartyPopper className="w-6 h-6 text-primary scale-x-[-1]" />
        </div>

        <p className="text-lg text-muted-foreground mb-8">
          Your subscription is now active. You have access to all Pro features including the best AI models.
        </p>

        <div className="space-y-4">
          <Button
            size="lg"
            className="w-full rounded-full gap-2 text-base h-14"
            onClick={handleOpenApp}
          >
            Open Myne App
          </Button>

          <p className="text-sm text-muted-foreground">
            Redirecting automatically in {countdown} seconds...
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="font-medium text-foreground mb-4">What&apos;s included in Pro:</h3>
          <ul className="text-sm text-muted-foreground space-y-2 text-left max-w-xs mx-auto">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary shrink-0" />
              Unlimited AI conversations
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary shrink-0" />
              Best agentic models (Opus 4.5, GPT-5.2)
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary shrink-0" />
              Voice commands & cross-app actions
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary shrink-0" />
              Priority support
            </li>
          </ul>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Need help? <Link href="mailto:support@heymyne.com" className="text-primary hover:underline">Contact support</Link>
        </p>
      </div>
    </main>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-background flex items-center justify-center p-6">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </main>
    }>
      <SuccessContent />
    </Suspense>
  )
}
