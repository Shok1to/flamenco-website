"use client"
import { useEffect, useState } from "react"

export default function EventsPage() {
  const [showTitle, setShowTitle] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(false), 3000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div>
      {showTitle && (
        <h1
          className="fade-in-out"
          style={{
            fontSize: "3rem",
            color: "red",
            background: "yellow",
            textAlign: "center",
          }}
        >
          Next Tablao
        </h1>
      )}
      <div>Test below</div>
    </div>
  )
}
