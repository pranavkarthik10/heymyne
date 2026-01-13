import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import Stripe from "stripe"

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get("stripe-signature")

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Missing signature or webhook secret" }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error("Webhook signature verification failed:", err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session
        const userId = session.client_reference_id || session.metadata?.userId
        const plan = session.metadata?.plan

        console.log(`Checkout completed for user ${userId}, plan: ${plan}`)

        // TODO: Update your database to mark user as subscribed
        // await db.user.update({
        //   where: { id: userId },
        //   data: { 
        //     subscriptionStatus: "active",
        //     subscriptionPlan: "pro",
        //     stripeCustomerId: session.customer,
        //     stripeSubscriptionId: session.subscription,
        //   }
        // })

        break
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription
        const userId = subscription.metadata?.userId

        console.log(`Subscription updated for user ${userId}:`, subscription.status)

        // TODO: Update subscription status in database
        // await db.user.update({
        //   where: { stripeSubscriptionId: subscription.id },
        //   data: { 
        //     subscriptionStatus: subscription.status,
        //   }
        // })

        break
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription
        const userId = subscription.metadata?.userId

        console.log(`Subscription canceled for user ${userId}`)

        // TODO: Downgrade user to free plan
        // await db.user.update({
        //   where: { stripeSubscriptionId: subscription.id },
        //   data: { 
        //     subscriptionStatus: "canceled",
        //     subscriptionPlan: "free",
        //   }
        // })

        break
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice
        console.log(`Payment succeeded for invoice ${invoice.id}`)
        break
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice
        console.log(`Payment failed for invoice ${invoice.id}`)

        // TODO: Notify user about failed payment
        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook handler error:", error)
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 })
  }
}
