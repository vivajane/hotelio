"use client"
import React, {useContext } from 'react'
import PageProps from '../components/PageProps'
import Rooms from '../components/Rooms'
import { AppContext } from '../components/Context'

const RoomsPage = () => {
  const context = useContext(AppContext)
  if(!context){
    throw new Error("Context not found")
  }
  const { hotels } = context
  return (
    <div className='bg-[#888484]'>
      <PageProps title="Rooms" />
      <div className='flex py-14 flex-col gap-10'>
        {hotels?.map((hotel) => (
          <div className='  px-12 ' key={hotel.id}>
            <Rooms {...hotel} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RoomsPage
