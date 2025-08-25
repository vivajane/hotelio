import React from 'react'

const PageProps = (props: {title:string}) => {
  return (
    <div className='relative  bg-[url("https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg")] bg-cover  bg-center h-96 w-full'>
        <div className='bg-black/50 h-full text-white  flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold'>{props.title}</h1>

        </div>
      
    </div>
  )
}

export default PageProps
