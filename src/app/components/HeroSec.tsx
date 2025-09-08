import Image from 'next/image'
import React from 'react'

const HeroSec = () => {
  return (
    <div className='lg:flex bg-[#9a9591] w-full py-8 md:py-16 md:px-16 sm:px-24 px-10 gap-10'>
      <div className=' lg:w-1/2 md:py-4 py-2 space-y-4'>
        <h1 data-aos="fade-right"  className='lg:text-4xl md:text-2xl text-base font-bold'>HOTELIO HOTELS</h1>
        <p data-aos="fade-right">Welcome to Hotelio, your trusted gateway to comfort, elegance, and unforgettable stays. Whether you’re planning a quick getaway, a family vacation, or a business trip, Hotelio makes it simple to discover and book the perfect space for every occasion.</p>
        <p>From cozy budget rooms to luxury suites, we connect you to stays designed for every style and need. With secure booking, easy payment, and a touch of convenience, Hotelio ensures your next trip is not just a journey, but an experience worth remembering.</p>
      </div>
      <div data-aos="fade-up" className='flex lg:w-1/2  w-full flex-col gap-6'>
        <Image className='rounded-2xl' src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg" alt="Hotelio Hotels" width={500} height={500} />
      
      </div>


      
    </div>
  )
}

export default HeroSec
