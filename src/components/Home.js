import React from 'react'
import bgimg from '../images/whitewomen.jpg'

export default function Home () {
  return (
    <div className='h-screen w-full overflow-hidden cursor-default'>
      <img className='object-cover h-screen w-full ' src={bgimg} alt='' />
      <div className='absolute text-white side_div'>
        <h1 className='side_heading mt-6 mb-2 pr-[10px] w-[42vw] leading-[4.1rem]'>
          Elevate Your Style With Trendy Choices
        </h1>
        <p className='mb-2 text-base'>
          Elevate Your Wardrobe with our Exclusive Collection
        </p>
        <button className='transition ease-in-out rounded-lg bg-gray-800 px-5 py-2 hover hover:bg-gray-900 text-white'>
          Shop Now
        </button>
      </div>
    </div>
  )
}
