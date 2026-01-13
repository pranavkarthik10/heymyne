"use client"

import { useEffect, useState } from "react"

const integrations = [
  { name: "Messages", icon: "💬", color: "bg-green-500" },
  { name: "Calendar", icon: "📅", color: "bg-red-500" },
  { name: "Notes", icon: "📝", color: "bg-yellow-500" },
  { name: "Mail", icon: "✉️", color: "bg-blue-500" },
  { name: "Reminders", icon: "✓", color: "bg-orange-500" },
  { name: "WhatsApp", icon: "📱", color: "bg-green-600" },
  { name: "Notion", icon: "📓", color: "bg-foreground" },
  { name: "Slack", icon: "💼", color: "bg-[#4A154B]" },
  { name: "Finder", icon: "📁", color: "bg-blue-400" },
  { name: "Safari", icon: "🧭", color: "bg-blue-600" },
  { name: "Photos", icon: "🖼️", color: "bg-gradient-to-br from-pink-500 to-yellow-500" },
  { name: "Contacts", icon: "👥", color: "bg-amber-600" },
]

export function IntegrationsCarousel() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev + 1)
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="integrations" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Connects to everything</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Seamlessly integrates with your favorite apps and macOS native features
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div
          className="flex gap-6"
          style={{
            transform: `translateX(-${offset % (integrations.length * 140)}px)`,
          }}
        >
          {[...integrations, ...integrations, ...integrations].map((integration, index) => (
            <div
              key={`${integration.name}-${index}`}
              className="flex-shrink-0 w-32 h-32 rounded-2xl bg-card border border-border flex flex-col items-center justify-center gap-3 hover:border-accent/50 transition-colors cursor-pointer group"
            >
              <div
                className={`w-12 h-12 rounded-xl ${integration.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}
              >
                {integration.icon}
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {integration.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
