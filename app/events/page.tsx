"use client"

export default function EventsPage() {
  return (
    <div>
      <h1
        style={{
          animation: "fadeInOut 3s forwards",
          willChange: "opacity",
          background: "yellow",
          color: "red",
          fontSize: "3rem",
          textAlign: "center",
        }}
      >
        TEST FADE DIRECT STYLE
      </h1>
      <div>Below test text</div>
    </div>
  )
}
