import React from 'react'

type Props ={
    name: string

}
type DetailPageProps = {
    hotel: Props
}
const DetailPage = ({hotel}: DetailPageProps) => {
  return (
    <div className='py-30'>
      <h1>{hotel.name}</h1>
    </div>
  )
}

export default DetailPage
