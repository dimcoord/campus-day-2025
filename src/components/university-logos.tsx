"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { pt } from "@/lib/pt"

const universities = pt

export function UniversityLogos() {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="w-full bg-muted/50 py-8 sm:py-12">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 px-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Perguruan Tinggi</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Perguruan tinggi yang berpartisipasi dalam acara CampusDay 2025:
          </p>
        </div>
        
        {/* Scrollable container with custom scrollbar */}
        <div 
          ref={containerRef}
          className="relative px-4 overflow-x-auto scrollbar-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div 
            className={`flex gap-8 min-w-max animate-scroll ${
              isPaused ? 'animation-play-state-paused' : ''
            }`}
          >
            {/* First set of logos */}
            {universities.map((university) => (
              <div
                key={university.name}
                className="flex-shrink-0"
              >
                <Image
                  src={university.logo}
                  alt={university.name}
                  width={200}
                  height={80}
                  className="object-contain h-16 sm:h-20"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

