"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const integrations = [
  { name: "Gmail", image: "/images/gmail.png" },
  { name: "Messages", image: "/images/messages.png" },
  { name: "Calendar", image: "/images/calendar.png" },
  { name: "Google Calendar", image: "/images/googlecalendar.png" },
  { name: "Notion", image: "/images/notion.png" },
  { name: "GitHub", image: "/images/github.png" },
  { name: "Weather", image: "/images/weather.png" },
  { name: "Notes", image: "/images/notes.png" },
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
              <div className="w-16 h-16 relative group-hover:scale-110 transition-transform">
                <Image
                  src={integration.image}
                  alt={integration.name}
                  fill
                  className="object-contain"
                />
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
