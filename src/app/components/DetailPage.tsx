"use client"
import Image from 'next/image'
import React, { JSX, useState } from 'react'
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
  "free wifi": <FaWifi />,
  "complimentary coffee": <FaCoffee />,
  "pool access": <FaSwimmingPool />,
  "gym access": <CgGym />,
  "beach access": <FaUmbrellaBeach />,
  "juggling clubs": <GiJugglingClubs />,
  "massage": <TbMassage />,
  "codespaces": <GoCodespaces />,
  "chess": <FaRegChessPawn />,
}
const DetailPage = ({ hotel }: DetailPageProps) => {
  const [show, setShow] = useState(false)
  const onShow = () => setShow((prev) => !prev)
  const des = show ? hotel.description : hotel.description.slice(0, 100) + '...'
  return (
    <div className='py-26 '>
      <h1 className='text-2xl pt-2 text-[#c86016] text-center font-bold'>Details</h1>
      <div className='flex w-full py-4 gap-10 px-12'>
        <div className='w-1/2 rounded-lg overflow-hidden'>
          <Image width={500} height={300} src={hotel.image} alt={hotel.name} />
        </div>
        <div className='w-2/3 pt-10'>
          <div className='grid grid-cols-3 gap-4'>
            {hotel.secAmenities.map((amenity, i) => {
              console.log("Amenity icon:", amenity.icon);
              return <div className='flex text-[#c86016] gap-2 items-center' key={i}>
                {iconMap[amenity.text.toLowerCase()] || <span>❓</span>}

                <span className='text-black'>{amenity.text}</span>
              </div>
            }

            )}
          </div>
          <div className='flex gap-20 py-4'>
            <h1 className='text-xl font-bold'>{hotel.name}</h1>
            <h1>{hotel.price} <span>/night</span></h1>
          </div>
          <div>
            <p>{des} <span onClick={onShow} className='text-[#c86016] cursor-pointer'>{show ? "Show less" : "Show more"}</span></p>
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
            <button onClick={() => console.log("Booking...")} className='bg-black cursor-pointer text-white py-2 px-4 rounded' >Book Now</button>
          </div>
        </div>
      </div>
      <div className='flex py-10 gap-10'>
        {hotel.previewImage.map((image, i) =>
          <div className="relative w-[400px] h-[300px] overflow-hidden rounded-lg" key={i}>
            <Image fill src={image} key={i} alt={hotel.name} />
          </div>
        )}
      </div>

    </div>
  )
}

export default DetailPage
