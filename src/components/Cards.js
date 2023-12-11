import React from 'react'
import Card from './Card.js'
import lmd from '../images/LongMaxiDress.jpg'
import ffm from '../images/footwearForMen.jpg'
import cb from '../images/clutchBag.png'
import necklace from '../images/Screenshot 2023-11-08 201834.png'

export default function Cards () {
  return (
    <div className='flex flex-col items-center justify-center cursor-default'>
      <div className='flex justify-center text-[38px] font-semibold items-center'>
        New Arrivals
      </div>
      <p className='text-center text-[13.6px] font-[500] mb-7'>
        We have your occasion covered
      </p>
      <div className='flex w-9/12 justify-center gap-6 items-center mb-4'>
        <Card title='Long Maxi Dress' price='$99.50' image={lmd} />
        <Card title='Clutch Bag' price='$229.50' image={cb} />
        <Card title='Footwear For Men' price='$199.50' image={ffm} />
        <Card title='Jewelry For Women' price='$295.50' image={necklace} />
      </div>
      <button className='transition ease-in-out rounded-lg bg-gray-800 px-5 py-2 hover hover:bg-gray-950 text-white'>
        Shop All
      </button>
    </div>
  )
}
