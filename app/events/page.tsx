"use client"

import React, { useEffect, useState } from "react"

export default function EventsPage() {
  const [isLoading, setIsLoading] = useState(true) // New state to manage initial client-side rendering
  const [opacity, setOpacity] = useState(0)
  const [display, setDisplay] = useState("none")

  useEffect(() => {
    // Phase 0: Ensure client-side JavaScript has loaded and Hydration is complete
    // This timer ensures the component starts its logic ONLY when client-side is ready.
    const initialClientLoadTimer = setTimeout(() => {
      setIsLoading(false) // Client-side logic can now proceed
    }, 50) // A small delay to allow hydration to complete

    let fadeInTimer, fadeOutTriggerTimer, hideDisplayTimer

    if (!isLoading) {
      // Phase 1: After isLoading is false, set the initial state for the animation
      // This ensures the H1 is in the DOM but fully transparent before animation starts.
      setDisplay("block")
      setOpacity(0)

      // Phase 2: Start the fade-in after a very brief pause (allowing opacity:0 to settle)
      fadeInTimer = setTimeout(() => {
        setOpacity(1) // Trigger fade-in
      }, 100) // Wait 100ms after isLoading is false

      // Phase 3: After being visible for a duration, start fading out
      // Calculate based on fade-in start + visible duration
      // 100ms (fade-in start) + 2000ms (visible duration) = 2100ms
      fadeOutTriggerTimer = setTimeout(() => {
        setOpacity(0) // Trigger fade out
      }, 2100)

      // Phase 4: After fade-out transition completes, remove from DOM
      // Fade-out transition duration (inline style) is 1s.
      // Total time until display: none:
      // 2100ms (fade-out start) + 1000ms (fade-out duration) = 3100ms
      hideDisplayTimer = setTimeout(() => {
        setDisplay("none") // Remove from layout
      }, 3100)
    }

    // Cleanup function for useEffect
    return () => {
      clearTimeout(initialClientLoadTimer)
      clearTimeout(fadeInTimer) // Clear if they were set
      clearTimeout(fadeOutTriggerTimer)
      clearTimeout(hideDisplayTimer)
    }
  }, [isLoading]) // Rerun effect when isLoading state changes

  // Only render the H1 element once isLoading is false
  if (isLoading || display === "none") {
    return null // Don't render until ready, or if it's supposed to be hidden
  }

  return (
    <div>
      <h1
        key="next-tablao-animation-inline-v4" // New key for fresh render
        style={{
          fontSize: "3rem",
          textAlign: "center",
          color: "white",
          marginBottom: "2rem",
          position: "relative",
          zIndex: 10,
          willChange: "opacity", // Performance hint

          // Crucial: Direct inline styles for animation control
          opacity: opacity, // Controlled by state
          display: display, // Controls display: 'block' / 'none'

          // Transitions for opacity changes
          transition:
            opacity === 1 ? "opacity 0.5s ease-in" : "opacity 1s ease-out",
        }}
      >
        Next Tablao
      </h1>
      {/* ...your other EventsPage content here... */}
    </div>
  )
}
