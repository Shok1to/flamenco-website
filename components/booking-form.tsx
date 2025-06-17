"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface BookingFormProps {
  eventId: string
  eventTitle: string
  price: number
}

export function BookingForm({ eventId, eventTitle, price }: BookingFormProps) {
  const [quantity, setQuantity] = useState("1")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // This would be replaced with actual Stripe integration
    setMessage("Booking successful! This is a placeholder for Stripe integration.")
    setIsSubmitting(false)
  }

  const totalPrice = Number.parseInt(quantity) * price

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="event">Event</Label>
        <Input id="event" value={eventTitle} disabled />
      </div>

      <div>
        <Label htmlFor="quantity">Number of tickets</Label>
        <Select value={quantity} onValueChange={setQuantity}>
          <SelectTrigger id="quantity">
            <SelectValue placeholder="Select quantity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 ticket</SelectItem>
            <SelectItem value="2">2 tickets</SelectItem>
            <SelectItem value="3">3 tickets</SelectItem>
            <SelectItem value="4">4 tickets</SelectItem>
            <SelectItem value="5">5 tickets</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-between font-medium">
        <span>Total:</span>
        <span>€{totalPrice.toFixed(2)}</span>
      </div>

      <Button type="submit" className="w-full bg-flamenco hover:bg-flamenco-hover" disabled={isSubmitting}>
        {isSubmitting ? "Processing..." : "Book Now"}
      </Button>

      {message && <div className="p-3 bg-green-50 text-green-700 rounded-md text-sm">{message}</div>}

      <p className="text-xs text-muted-foreground text-center">Secure payment via Stripe. No additional fees.</p>
    </form>
  )
}
