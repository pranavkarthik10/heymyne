import { NextRequest, NextResponse } from "next/server"

// This endpoint handles auth token exchange from the Mac app
// The Mac app will redirect users here with an auth code
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get("code")
  const state = searchParams.get("state")
  const redirectUri = searchParams.get("redirect_uri") || "myne://auth/callback"

  if (!code) {
    return NextResponse.json({ error: "Missing authorization code" }, { status: 400 })
  }

  try {
    // In production, you would:
    // 1. Exchange the code for tokens with your auth provider
    // 2. Create/update user in your database
    // 3. Generate a session token for the app

    // For now, we'll simulate a successful auth
    const mockToken = Buffer.from(JSON.stringify({
      userId: `user_${Date.now()}`,
      email: "user@example.com",
      createdAt: new Date().toISOString(),
    })).toString("base64")

    // Redirect back to the Mac app with the token
    const callbackUrl = new URL(redirectUri)
    callbackUrl.searchParams.set("token", mockToken)
    if (state) {
      callbackUrl.searchParams.set("state", state)
    }

    return NextResponse.redirect(callbackUrl.toString())
  } catch (error) {
    console.error("Auth error:", error)
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { token } = body

    if (!token) {
      return NextResponse.json({ error: "Missing token" }, { status: 400 })
    }

    // Validate the token and return user info
    try {
      const decoded = JSON.parse(Buffer.from(token, "base64").toString())
      return NextResponse.json({
        valid: true,
        user: {
          id: decoded.userId,
          email: decoded.email,
          subscription: "free", // or "pro"
        },
      })
    } catch {
      return NextResponse.json({ valid: false, error: "Invalid token" }, { status: 401 })
    }
  } catch (error) {
    console.error("Token validation error:", error)
    return NextResponse.json({ error: "Validation failed" }, { status: 500 })
  }
}
