"use client"

import React, { useEffect, useState } from "react"

export default function EventsPage() {
  // State to control the animation and rendering stages
  // We'll manage opacity directly via style props.
  const [opacity, setOpacity] = useState(0)
  const [display, setDisplay] = useState("block") // 'block' or 'none'

  useEffect(() => {
    // Stage 1: Component mounts. Set opacity to 0 immediately.
    setOpacity(0)
    setDisplay("block") // Ensure it's displayed but transparent

    // Stage 2: Fade in after a very short delay
    const fadeInTimer = setTimeout(() => {
      setOpacity(1)
    }, 50) // Small delay to ensure initial opacity:0 is applied

    // Stage 3: After being visible for a duration, start fading out
    // Total time before fade-out starts: 50ms (initial delay) + 2000ms (visible duration) = 2050ms
    const fadeOutTriggerTimer = setTimeout(() => {
      setOpacity(0) // Trigger the fade out
    }, 2050)

    // Stage 4: After the fade-out transition completes, hide completely (display: none)
    // Fade-out transition duration (set in inline style) is 1s.
    // Total time until display: none: 2050ms (fade-out start) + 1000ms (fade-out duration) = 3050ms
    const hideDisplayTimer = setTimeout(() => {
      setDisplay("none")
    }, 3050)

    // Cleanup function for useEffect to clear timers
    return () => {
      clearTimeout(fadeInTimer)
      clearTimeout(fadeOutTriggerTimer)
      clearTimeout(hideDisplayTimer)
    }
  }, []) // Run only once on initial mount

  return (
    <div>
      {/*
        Using a key here ensures that if this component's parent re-renders and passes
        a new key, the H1 element itself will be unmounted and remounted,
        forcing the animation sequence to restart.
      */}
      <h1
        key="next-tablao-animation-inline"
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
          display: display, // Controlled by state (to remove from layout after fade)

          // Transitions for opacity changes
          transition:
            opacity === 1 ? "opacity 0.5s ease-in" : "opacity 1s ease-out",
          // If opacity is 1 (fading in), use 0.5s transition.
          // If opacity is 0 (fading out or initial), use 1s transition.
          // The initial opacity (0) will apply instantly due to the 50ms delay
          // ensuring the first transition to 1 is the one we want to see.
        }}
      >
        Next Tablao
      </h1>
      {/* ...your other EventsPage content here... */}
    </div>
  )
}
