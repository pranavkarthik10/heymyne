import { Sparkles, Shield, Zap, Mic, MessageSquare } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Natural Conversations",
    description: "Just talk naturally. Myne understands context and remembers your preferences.",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "All data stays on your Mac. Nothing leaves your device without permission.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Zap,
    title: "Instant Actions",
    description: "Send messages, create events, and manage files in seconds.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Mic,
    title: "Built for Voice",
    description: "The agentic Siri you've always wanted. Speak naturally and watch Myne take action.",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    icon: MessageSquare,
    title: "Cross-App Context",
    description: "Ask about a meeting and Myne pulls in related emails, messages, and notes automatically.",
    className: "md:col-span-2 md:row-span-1",
  },
]

export function FeaturesBento() {
  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Powerful features that feel invisible. Myne works in the background until you need it.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`${feature.className} p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group backdrop-blur-sm`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
