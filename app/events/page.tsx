"use client"
import React, { useEffect, useState } from "react"

export default function EventsPage() {
  const [shouldAnimate, setShouldAnimate] = useState(false) // Controls animation start
  const [shouldRender, setShouldRender] = useState(true) // Controls DOM removal

  useEffect(() => {
    // Phase 1: After a very brief moment, set shouldAnimate to true.
    // This allows the initial opacity to be set before the animation class is applied.
    const initialDelayTimer = setTimeout(() => {
      setShouldAnimate(true)
    }, 50) // A small delay (e.g., 50ms) to ensure initial render is complete

    // Phase 2: After the full animation duration, remove the element from the DOM.
    // The animation is 3s. So, ~3050ms from component mount.
    const removalTimer = setTimeout(() => {
      setShouldRender(false)
    }, 3050) // Total animation duration + initial delay

    return () => {
      clearTimeout(initialDelayTimer)
      clearTimeout(removalTimer)
    }
  }, []) // Run only once on component mount

  if (!shouldRender) {
    return null // Don't render anything if it should no longer be in the DOM
  }

  // Use a key to force React to remount the H1 if we were to re-trigger it,
  // though for this specific "once and disappear" scenario, it's less critical
  // but good to keep in mind for future animation scenarios.
  return (
    <div>
      <h1
        key="next-tablao-animation" // Add a key to force remount if this component was repeatedly rendered
        className={
          shouldAnimate ? "fade-in-out-animated" : "fade-in-out-initial"
        }
        style={{
          fontSize: "3rem",
          textAlign: "center",
          color: "white",
          marginBottom: "2rem",
          position: "relative",
          zIndex: 10,
          willChange: "opacity", // Keep for performance hint
        }}
      >
        Next Tablao
      </h1>
      {/* ...your other EventsPage content here... */}
    </div>
  )
}
