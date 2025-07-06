"use client"
import { useEffect, useState } from "react"

export default function TestDisappear() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div>
      {show && (
        <h1
          className="fade-in-out"
          style={{
            background: "yellow",
            color: "red",
            textAlign: "center",
            fontSize: "3rem",
          }}
        >
          THIS SHOULD DISAPPEAR
        </h1>
      )}
      <div>Below test text</div>
    </div>
  )
}
