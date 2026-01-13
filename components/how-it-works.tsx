import { Download, MessageSquare, Sparkles } from "lucide-react"

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download & Install",
    description: "Get Myne from our website. One click install, no configuration needed.",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Grant Permissions",
    description: "Choose which apps Myne can access. You're always in control.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Start Asking",
    description: "Press ⌘+Space and start chatting. Myne handles the rest.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Get started in minutes</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">No complex setup. No API keys. Just download and go.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="text-center group">
              <div className="relative inline-flex mb-6">
                <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-md group-hover:shadow-primary/10 transition-all">
                  <item.icon className="w-8 h-8 text-foreground" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center shadow-lg">
                  {item.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
