import Stripe from "stripe"

if (!process.env.STRIPE_SECRET_KEY) {
  console.warn("Warning: STRIPE_SECRET_KEY is not set")
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-05-28.basil",
  typescript: true,
})

// Price IDs from your Stripe dashboard
export const PRICE_IDS = {
  pro_monthly: process.env.STRIPE_PRICE_PRO_MONTHLY || "price_pro_monthly",
  pro_yearly: process.env.STRIPE_PRICE_PRO_YEARLY || "price_pro_yearly",
}

export const PLANS = {
  free: {
    name: "Free",
    queriesPerDay: 5,
    hasProModels: false,
    hasVoiceCommands: false,
    hasPrioritySupport: false,
  },
  pro: {
    name: "Myne Pro",
    queriesPerDay: -1, // unlimited
    hasProModels: true,
    hasVoiceCommands: true,
    hasPrioritySupport: true,
  },
}
