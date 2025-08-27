"use client"
import { AppContext } from '@/app/components/Context'
import DetailPage from '@/app/components/DetailPage'
import React, { use, useContext } from 'react'





const DetailSlug = ({ params }: {params : Promise<{slug: string}>}) => {
  const context = useContext(AppContext)
  const {slug}  = use(params)
  if (!context) {
    return <div>Loading...</div>
  }



  const { hotels } = context
  const hotelSlug = hotels.find((e) => e.slug === slug)
  if (!hotelSlug) {
    return <div className='py-50'>Loading...</div>
  }

  return (
    <div>
      <DetailPage hotel={hotelSlug} />
    </div>
  )
}

export default DetailSlug
