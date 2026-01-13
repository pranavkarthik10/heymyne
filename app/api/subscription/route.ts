import { NextRequest, NextResponse } from "next/server"

// Subscription management API
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization")
  
  if (!authHeader?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const token = authHeader.slice(7)

  try {
    // Decode and validate token
    const decoded = JSON.parse(Buffer.from(token, "base64").toString())
    
    // In production, fetch from database
    return NextResponse.json({
      userId: decoded.userId,
      plan: "free", // or "pro"
      status: "active",
      expiresAt: null,
      features: {
        queriesPerDay: 5,
        hasProModels: false,
        hasVoiceCommands: false,
        hasPrioritySupport: false,
      },
    })
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 })
  }
}

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("authorization")
  
  if (!authHeader?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { plan, paymentMethodId } = body

    if (!plan || !["free", "pro", "pro_yearly"].includes(plan)) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 })
    }

    // In production, you would:
    // 1. Create a Stripe checkout session or process payment
    // 2. Update user subscription in database
    // 3. Return confirmation

    // For demo, simulate successful subscription
    const isYearly = plan === "pro_yearly"
    
    return NextResponse.json({
      success: true,
      subscription: {
        plan: plan === "free" ? "free" : "pro",
        billingCycle: isYearly ? "yearly" : "monthly",
        status: "active",
        startedAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + (isYearly ? 365 : 30) * 24 * 60 * 60 * 1000).toISOString(),
        features: plan === "free" ? {
          queriesPerDay: 5,
          hasProModels: false,
          hasVoiceCommands: false,
          hasPrioritySupport: false,
        } : {
          queriesPerDay: -1, // unlimited
          hasProModels: true,
          hasVoiceCommands: true,
          hasPrioritySupport: true,
        },
      },
    })
  } catch (error) {
    console.error("Subscription error:", error)
    return NextResponse.json({ error: "Subscription failed" }, { status: 500 })
  }
}
