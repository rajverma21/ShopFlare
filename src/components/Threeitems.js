import React from 'react'
import Item from './Item.js'
import nike_1 from '../images/nike_1.webp'
import exclusive from '../images/exclusive.jpg'
import winter3 from '../images/winter3.jpg'

export default function Threeitems () {
  return (
    <div className='flex gap-8 w-[93vw] justify-center mt-16 mb-16 m-auto cursor-default'>
      <div className='parent overflow-hidden'>
        <Item
          image={winter3}
          className='z-30'
          text='Deals On Winter Collection'
        />
      </div>
      <div className='parent overflow-hidden'>
        <Item image={nike_1} text='Save Up To 15% On Elegant Collection' />
      </div>
      <div className='parent overflow-hidden'>
        <Item image={exclusive} text='Discover Exclusive Collections' />
      </div>
    </div>
  )
}
