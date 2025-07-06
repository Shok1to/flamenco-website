"use client" // This directive is important for Next.js to treat this as a client component

import React, { useEffect, useState } from "react"

export default function EventsPage() {
  // State to control the animation and rendering stages
  // 'hidden-initial': Element is in the DOM but hidden (opacity 0), no transition yet.
  // 'visible': Element is fading in or fully visible (opacity 1), with a fade-in transition.
  // 'fading-out': Element is fading out (opacity 0), with a fade-out transition.
  // 'removed': Element is no longer rendered in the DOM.
  const [stage, setStage] = useState("hidden-initial")

  useEffect(() => {
    // Stage 1: Component mounts. It's initially 'hidden-initial'.
    // After a very brief delay, transition it to 'visible' to start the fade-in.
    // This small delay (e.g., 50ms) ensures the 'hidden-initial' opacity:0 is applied first
    // before the 'visible' class triggers its transition.
    const fadeInTimer = setTimeout(() => {
      setStage("visible")
    }, 50)

    // Stage 2: After the element has been 'visible' for a certain duration,
    // transition it to 'fading-out'.
    // Let's assume the fade-in takes ~0.5s (from CSS) and you want it visible for ~2s.
    // So, total time before starting fade-out = 50ms (initial delay) + 2000ms (visible duration) = 2050ms
    const fadeOutTriggerTimer = setTimeout(() => {
      setStage("fading-out")
    }, 2050)

    // Stage 3: After the 'fading-out' transition completes, remove the element from the DOM.
    // If 'fading-out' transition is 1s (from CSS), then removal time =
    // 2050ms (when fade-out starts) + 1000ms (fade-out duration) = 3050ms
    const removalTimer = setTimeout(() => {
      setStage("removed")
    }, 3050)

    // Cleanup function for useEffect to clear timers if the component unmounts early
    return () => {
      clearTimeout(fadeInTimer)
      clearTimeout(fadeOutTriggerTimer)
      clearTimeout(removalTimer)
    }
  }, []) // Empty dependency array means this effect runs only once after the initial render

  // If the stage is 'removed', don't render the H1 element at all.
  if (stage === "removed") {
    return null
  }

  return (
    <div>
      <h1
        // Dynamic class names based on the current stage
        // 'next-tablao-text' provides base styles (like font size, color, etc.)
        // The 'stage' class (hidden-initial, visible, fading-out) controls opacity and transitions.
        className={`next-tablao-text ${stage}`}
        // Inline styles for non-animation related properties (can be moved to CSS if preferred)
        style={{
          fontSize: "3rem",
          textAlign: "center",
          color: "white",
          marginBottom: "2rem",
          position: "relative",
          zIndex: 10,
          willChange: "opacity", // Performance hint for browsers
        }}
      >
        Next Tablao
      </h1>
      {/*
        You can place your other EventsPage content here.
        This H1 will appear, animate, and then disappear from the DOM above your other content.
      */}
    </div>
  )
}
