"use client"

import React, { useEffect, useState } from "react"

export default function EventsPage() {
  const [shouldRenderText, setShouldRenderText] = useState(false) // Controls if the H1 is in the DOM at all
  const [opacity, setOpacity] = useState(0) // Controls the actual opacity value
  const [display, setDisplay] = useState("none") // Controls display: 'block' / 'none'

  useEffect(() => {
    // Phase 1: After a very brief delay, add the H1 to the DOM and set initial opacity to 0
    // This gives React time to render the rest of the page before we introduce the H1.
    // Setting display to 'block' here makes it visible in terms of layout but still transparent.
    const initialRenderTimer = setTimeout(() => {
      setShouldRenderText(true) // Now the H1 will appear in the render tree
      setOpacity(0) // Ensure it starts at 0 opacity
      setDisplay("block") // Make it part of the layout
    }, 100) // Give it a very small head start

    // Phase 2: After it's in the DOM and transparent, start the fade-in
    // This timer fires shortly after initialRenderTimer, allowing the browser to paint it at opacity 0 first
    const fadeInTimer = setTimeout(() => {
      setOpacity(1) // Trigger fade-in to opacity 1
    }, 200) // e.g., 100ms (initial render delay) + 100ms (pre-animation delay) = 200ms

    // Phase 3: After being visible for a duration, start fading out
    // Total time before fade-out starts:
    // 200ms (fade-in start) + 2000ms (visible duration) = 2200ms
    const fadeOutTriggerTimer = setTimeout(() => {
      setOpacity(0) // Trigger the fade out
    }, 2200)

    // Phase 4: After the fade-out transition completes, remove from DOM (display: none)
    // Fade-out transition duration (set in inline style) is 1s.
    // Total time until display: none:
    // 2200ms (fade-out start) + 1000ms (fade-out duration) = 3200ms
    const hideDisplayTimer = setTimeout(() => {
      setDisplay("none") // Remove from layout
      setShouldRenderText(false) // Optionally, remove from DOM entirely for cleanup
    }, 3200)

    // Cleanup function for useEffect to clear timers
    return () => {
      clearTimeout(initialRenderTimer)
      clearTimeout(fadeInTimer)
      clearTimeout(fadeOutTriggerTimer)
      clearTimeout(hideDisplayTimer)
    }
  }, []) // Empty dependency array means this effect runs only once after the initial render

  // Only render the H1 if shouldRenderText is true.
  if (!shouldRenderText) {
    return null // Don't render the H1 until the first timer fires
  }

  return (
    <div>
      <h1
        key="next-tablao-animation-inline-v3" // Changed key to ensure a fresh mount if needed
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
          // Apply a transition for both directions
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
