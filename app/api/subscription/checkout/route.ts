import { NextRequest, NextResponse } from "next/server"
import { stripe, PRICE_IDS } from "@/lib/stripe"

// Create Stripe checkout session for subscription
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { plan, userId, email, redirectUri } = body

    if (!plan || !["pro", "pro_yearly"].includes(plan)) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 })
    }

    const isYearly = plan === "pro_yearly"
    const priceId = isYearly ? PRICE_IDS.pro_yearly : PRICE_IDS.pro_monthly

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    const appRedirectUri = redirectUri || "myne://subscription/success"

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/subscribe/success?session_id={CHECKOUT_SESSION_ID}&redirect_uri=${encodeURIComponent(appRedirectUri)}`,
      cancel_url: `${baseUrl}/subscribe?canceled=true&redirect_uri=${encodeURIComponent(appRedirectUri)}`,
      customer_email: email,
      client_reference_id: userId,
      metadata: {
        userId,
        plan,
        redirectUri: appRedirectUri,
      },
      subscription_data: {
        metadata: {
          userId,
          plan,
        },
        trial_period_days: 14,
      },
      allow_promotion_codes: true,
    })

    return NextResponse.json({
      checkoutUrl: session.url,
      sessionId: session.id,
    })
  } catch (error) {
    console.error("Checkout error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create checkout" },
      { status: 500 }
    )
  }
}
