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
    <div className=''>
      <PageProps title="Rooms" />
      <div className='grid grid-cols-2 py-14 gap-10'>
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
