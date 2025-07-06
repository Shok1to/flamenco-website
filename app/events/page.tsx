"use client"
import React, { useEffect, useState } from "react"

export default function EventsPage() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {/* This style block is for the animation */}
      <style>
        {`
          @keyframes fadeInOut {
            0% { opacity: 0; }
            10% { opacity: 1; }
            80% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}
      </style>
      {show && (
        <h1
          style={{
            animation: "fadeInOut 3s forwards",
            willChange: "opacity",
            fontSize: "3rem",
            textAlign: "center",
            color: "white",
            marginBottom: "2rem",
            position: "relative",
            zIndex: 10,
          }}
        >
          Next Tablao
        </h1>
      )}
      {/* ...your other EventsPage content here... */}
    </div>
  )
}
