"use client"
import { AppContext } from '@/app/components/Context'
import DetailPage from '@/app/components/DetailPage'
import React, { use, useContext } from 'react'

const DetailSlug = ({params}) => {
    const context = useContext(AppContext)
    if(!context){
        return <div>Loading...</div>
    }
    
    const { hotels } = context
    const slug = use(params)
    const hotelSlug = hotels.find((e) => e.slug === slug)
    if(!hotelSlug){
        return <div>Loading...</div>
    }
    
  return (
    <div>
      <DetailPage hotel={hotelSlug}/>
    </div>
  )
}

export default DetailSlug
