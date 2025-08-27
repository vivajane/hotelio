"use client"
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'


type Hotels = {
    id: number,
    name: string,
    description: string,
    price: number,
    image: string,
    slug: string,
    amenities: string[],
    secAmenities: { icon: React.ElementType; text: string }[];
    currency: string,
    previewImage: string[]
}

type ContextType = {
    hotels: Hotels[]
    setHotels: React.Dispatch<React.SetStateAction<Hotels[]>>
    error: string | null
    setError: React.Dispatch<React.SetStateAction<string | null>>

}

type Props = {
    children: React.ReactNode
}

export const AppContext = createContext<ContextType | null>(null)
const Context = ({ children }: Props) => {
    const [hotels, setHotels] = useState<Hotels[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getHotels = async () => {
            try {
                const response = await fetch("/api/hotels")
                const data = await response.json()
                console.log(data)
                setHotels(data)
            } catch (error) {
                setError("Failed to fetch hotels")
                console.log(error)

            }
        }
        getHotels()

    }, [])
    const contextValue = {
        hotels,
        setHotels,
        error,
        setError

    }
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export default Context
