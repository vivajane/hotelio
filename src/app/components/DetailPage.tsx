"use client"
import Image from 'next/image'
import React, { JSX, useContext, useState } from 'react'
import { FaCoffee, FaSwimmingPool, FaWifi } from 'react-icons/fa'
import { CgGym } from "react-icons/cg";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiJugglingClubs } from "react-icons/gi";
import { TbMassage } from "react-icons/tb";
import { GoCodespaces } from "react-icons/go";
import { FaRegChessPawn } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import { AppContext } from './Context';

type Props = {
  name: string
  image: string,
  slug: string,
  id: number
  description: string
  price: number
  currency: string
  secAmenities: { icon: React.ElementType; text: string }[];
  previewImage: string[]

}
type DetailPageProps = {
  hotel: Props
}

const iconMap: Record<string, JSX.Element> = {
  "free wifi": <FaWifi size={30} />,
  "complimentary coffee": <FaCoffee size={30} />,
  "pool access": <FaSwimmingPool size={30} />,
  "gym access": <CgGym size={30} />,
  "beach access": <FaUmbrellaBeach size={30} />,
  "juggling clubs": <GiJugglingClubs size={30} />,
  "massage": <TbMassage size={30} />,
  "codespaces": <GoCodespaces size={30} />,
  "chess": <FaRegChessPawn size={30} />,
  
}



const DetailPage = ({ hotel }: DetailPageProps) => {
  const router = useRouter()
  const context = useContext(AppContext)
  if(!context) return null
  const { setSelected } = context

 const handleBookNow = () => {
  console.log("Booking hotel:", hotel);
  setSelected(hotel);
  router.push("/bookings");
  console.log(context, "after booking")

  
};


 


  const [show, setShow] = useState(false)
  const onShow = () => setShow((prev) => !prev)
  const des = show ? hotel.description : hotel.description.slice(0, 100) + '...'
  return (
    <div className='py-40 '>
      <h1 className='text-2xl pt-2 text-[#c86016] text-center font-bold'>Details</h1>
      <div className='lg:flex w-full py-4 gap-10 px-6 md:px-12'>
        <div className='md:w-1/2  w-full rounded-lg overflow-hidden'>
          <Image width={500} height={300} src={hotel.image} alt={hotel.name} />
        </div>
        <div className='lg:w-2/3 pt-10'>
          <div className='flex  gap-8'>
            {hotel.secAmenities.map((amenity, i) => {
              console.log("Amenity icon:", amenity.icon);
              return <div className='flex text-[#c86016] gap-2 items-center' key={i}>
                {iconMap[amenity.text.toLowerCase()] || <span>❓</span>}

                <span className='text-black font-serif sm:text-sm text-xs md:text-lg'>{amenity.text}</span>
              </div>
            }

            )}
          </div>
          <div className='flex gap-20 py-4'>
            <h1 className='md:text-xl text-sm font-bold'>{hotel.name}</h1>
            <h1 className='md:text-lg text-sm sm:text-base font-bold'>₦{hotel.price} <span>/night</span></h1>
          </div>
          <div>
            <p className='text-lg font-stretch-90%'>{des} <span onClick={onShow} className='text-[#c86016] cursor-pointer'>{show ? "Show less" : "Show more"}</span></p>
          </div>
          <div className='flex items-center gap-2'>
            <div className='flex py-8 gap-1'>
              <span className='text-[#c86016] '><FaStar /></span>
              <span className='text-[#c86016] '><FaStar /></span>
              <span className='text-[#c86016] '><FaStar /></span>
              <span className='text-[#c86016] '><FaStar /></span>
              <span className='text-[#c86016] '><FaRegStar /></span>
            </div>
            <p>4.0</p>

          </div>
          <div className=''>
            <button onClick={handleBookNow} className='bg-black cursor-pointer text-white py-2 px-4 rounded' >Book Now</button>
          </div>
        </div>
      </div>
      <div className='grid px-12 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 py-10 gap-3'>
        {hotel.previewImage.map((image, i) =>
          <div className="relative w-full overflow-hidden rounded-lg" key={i}>
            <Image width={500} height={300} src={image} key={i} alt={hotel.name} />
          </div>
        )}
      </div>

    </div>
  )
}

export default DetailPage
