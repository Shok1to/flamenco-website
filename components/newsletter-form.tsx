"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setMessage("")

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setMessage("Thank you for subscribing!")
    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <div className="flex">
        <Input
          type="email"
          placeholder="Your email"
          className="flex-1 rounded-l-md px-3 py-2 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" className="rounded-l-none bg-flamenco hover:bg-flamenco-hover" disabled={isSubmitting}>
          {isSubmitting ? "..." : "Subscribe"}
        </Button>
      </div>
      {message && <p className="text-sm text-green-400">{message}</p>}
    </form>
  )
}
