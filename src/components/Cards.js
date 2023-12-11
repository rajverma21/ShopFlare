import React from 'react'
import Card from './Card.js'
import lmd from '../images/LongMaxiDress.jpg'
import ffm from '../images/jordan.webp'
import cb from '../images/clutchBag.jpg'
import necklace from '../images/necklace.jpg'

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
        <Card title='Long Maxi Dress' price='₹1,699' image={lmd} />
        <Card title='Clutch Bag' price='₹1,999' image={cb} />
        <Card title='Footwear For Men' price='₹9,999' image={ffm} />
        <Card title='Jewellery For Women' price='₹2,499' image={necklace} />
      </div>
      <button className='transition ease-in-out rounded-lg bg-gray-800 px-5 py-2 hover hover:bg-gray-950 text-white'>
        Shop All
      </button>
    </div>
  )
}
