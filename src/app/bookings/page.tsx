"use client"
import { useContext } from "react"
import { AppContext } from "../components/Context"
// import { AppContext } from "@/context/Context"

const BookingPage = () => {
  const context = useContext(AppContext)
  if(!context) return null
  const { selected } = context
  console.log(selected, "<-- selected hotel")

  if (!selected) {
    return <p>No hotel selected. Please go back and choose a hotel.</p>
  }

  return (
    <div className="py-20">
      <h1 className="text-2xl text-center pb-4 font-bold">Booking for {selected.name}</h1>
      <div>
        <label htmlFor="check-in">Check-in Date:</label>
        <input type="date" id="check-in" />
      </div>
      <div>
        <label htmlFor="check-out">Check-out Date:</label>
        <input type="date" id="check-out" />
      </div>
      <div>
        <label htmlFor="guests">Number of Guests:</label>
        <input type="number" id="guests" min="1" defaultValue="1" />
      </div>


    </div>
  )
}

export default BookingPage
