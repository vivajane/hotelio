"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'

type Slider = {
    id: number,
    text: string,
    image: string,
    textColor: string
}

const Slider: Slider[] = [
    {
        id: 1,
        text: "Your Comfort, Our Priority",
        image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
        textColor: "white"

    },
    {
        id: 2,
        text: "Where elegance meets comfort.",
        image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
        textColor: "white"
    },
    {
        id: 3,
        text: "Your perfect stay begins here.",
        image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
        textColor: "black"
    },

]
const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => prev === Slider.length - 1 ? 0 : prev + 1)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (

        <div className='relative h-[400px] md:h-[100vh] w-full'>
            {
                Slider.map((slide, i) => (
                    <div key={slide.id} className={`absolute h-full w-full bg-cover bg-center bg-no-repeat  ${currentSlide === i ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 overflow-hidden`} style={{ backgroundImage: `url(${slide.image})` }}>
                        <div className=' absolute inset-0 bg-black/50 to-transparent'>   {/*bg-black/50 */}
                            <div className='z-10  flex justify-center items-center h-full'>
                                <h1 className={`md:text-4xl text-2xl text-${slide.textColor} font-bold flex inset-0 justify-center items-center`}>Welcome to Hotelio</h1>
                                <h2 className={`absolute top-20 text-white text-base sm:text-xl md:text-2xl font-bold flex inset-0 justify-center items-center`}>{slide.text}</h2>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="absolute flex m-auto bottom-8 gap-4 left-1/2">
                {Slider.map((item, index) => (
                    <div
                        key={item.id}
                        onClick={() => setCurrentSlide(index)}
                        className={` rounded-full w-3 h-3 cursor-pointer items-center flex justify-center item ring-1 ring-gray-600 ${currentSlide === index ? "scale-125" : ""
                            }`}
                    >
                        {currentSlide === index && (
                            <div className="w-[6px] h-[6px] flex items-center bg-gray-600 rounded-full"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>


    )
}

export default Hero
