import React from 'react'
import Card from './Card.js'
import nw from '../images/nikeWhite.webp'
import bs from '../images/blendStole.jpg'
import cbs from '../images/cottonBedSheet.jpg'
import gwj from '../images/glassWaterJug.jpg'

export default function YouLike () {
  return (
    <div className='flex flex-col items-center justify-center cursor-default'>
      <div className='flex justify-center text-[38px] font-semibold items-center'>
        You May Also Like
      </div>
      <p className='text-center text-[13.6px] font-[500] mb-7'>
        Explore these too
      </p>
      <div className='flex w-9/12 justify-center gap-6 items-center mb-4'>
        <Card title='Nike Dunk Low' price='₹9,999' image={nw} />
        <Card title='Navy Cotton Silk Stole' price='₹3,499' image={bs} />
        <Card title='Multi Voyage Cotton Quilt' price='₹3,790' image={cbs} />
        <Card title='Blue Phulwari Glass Jug' price='₹1,899' image={gwj} />
      </div>
      <button className='transition ease-in-out rounded-lg bg-gray-800 px-5 py-2 hover hover:bg-gray-950 text-white'>
        Shop All
      </button>
    </div>
  )
}
