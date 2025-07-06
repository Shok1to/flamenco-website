"use client"
import React, { useEffect, useState } from "react"

export default function EventsPage() {
  const [isVisible, setIsVisible] = useState(true)
  const [shouldRender, setShouldRender] = useState(true) // New state to control DOM removal

  useEffect(() => {
    if (isVisible) {
      // Start the fade-out animation after 3 seconds
      const animationTimer = setTimeout(() => {
        setIsVisible(false) // This will trigger the CSS fade-out
      }, 3000)

      // After the animation duration (e.g., 3 seconds for fadeInOut),
      // remove the element from the DOM to clean up.
      const removalTimer = setTimeout(() => {
        setShouldRender(false)
      }, 6000) // 3 seconds for visibility + 3 seconds for animation = 6 seconds total

      return () => {
        clearTimeout(animationTimer)
        clearTimeout(removalTimer)
      }
    }
  }, [isVisible])

  // You can move the @keyframes to app/globals.css as you already have it there.
  // Remove the <style> block from here if you do.

  if (!shouldRender) {
    return null // Don't render anything if it should no longer be in the DOM
  }

  return (
    <div>
      <h1
        style={{
          animation: isVisible ? "fadeInOut 3s forwards" : "none", // Apply animation only when visible
          willChange: "opacity",
          fontSize: "3rem",
          textAlign: "center",
          color: "white",
          marginBottom: "2rem",
          position: "relative",
          zIndex: 10,
        }}
        // Add a class for simpler CSS if you prefer
        // className={isVisible ? "fade-in-out" : ""}
      >
        Next Tablao
      </h1>
      {/* ...your other EventsPage content here... */}
    </div>
  )
}
