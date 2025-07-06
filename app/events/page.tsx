"use client"
import React, { useEffect, useState } from "react"

export default function EventsPage() {
  const [animationClass, setAnimationClass] = useState("initial-hidden") // State to control CSS class
  const [shouldRender, setShouldRender] = useState(true) // Still used for eventual DOM removal

  useEffect(() => {
    // Phase 1: Make it visible and start the fade-in
    const showTimer = setTimeout(() => {
      setAnimationClass("fade-in-out") // This class will contain the animation
    }, 100) // Small delay to ensure initial-hidden is applied first

    // Phase 2: After the animation completes, remove from DOM
    // The animation is 3s. So, after 3s from 'fade-in-out' start.
    // Total time from component mount: 100ms (delay) + 3000ms (animation duration) = ~3100ms
    const removalTimer = setTimeout(() => {
      setShouldRender(false)
    }, 3100) // Roughly animation duration + initial delay

    return () => {
      clearTimeout(showTimer)
      clearTimeout(removalTimer)
    }
  }, []) // Run only once on mount

  if (!shouldRender) {
    return null // Don't render anything if it should no longer be in the DOM
  }

  return (
    <div>
      <h1
        className={animationClass} // Apply the class based on state
        style={{
          // These styles can remain inline or be moved to CSS if they are fixed
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
