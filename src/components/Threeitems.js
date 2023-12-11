import React from 'react'
import Item from './Item.js'
import img from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'

export default function Threeitems () {
  return (
    <div className='flex gap-8 w-[93vw] justify-center mt-16 mb-16 m-auto cursor-default'>
      <div className='parent overflow-hidden'>
        <Item image={img3} className='z-30' text='Deals On Winter Collection' />
      </div>
      <div className='parent overflow-hidden'>
        <Item image={img} text='Save Up To 15% On Elegant Collection' />
      </div>
      <div className='parent overflow-hidden'>
        <Item image={img2} text='Discover Exclusive Collections' />
      </div>
    </div>
  )
}
