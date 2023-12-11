import React from 'react'
import Marquee from 'react-fast-marquee'

export default function Textslider () {
  return (
    <div className='slider p-4 align-middle text-4xl cursor-default'>
      <Marquee className='marquee_slide' speed={250}>
        <p className='p_marquee'>
          <span className='text-white	shadow_outline mx-2'> Fashion </span>
          <span className='text-black	 mx-2'>for </span>
          <span className='text-white	shadow_outline mx-2'>Every </span>
          <span className='text-black	 mx-2'>Occasion </span>
          <span className='text-white	shadow_outline mx-2'>Fashion </span>
          <span className='text-black mx-2	'>for </span>
          <span className='text-white	shadow_outline mx-2'>Every </span>
          <span className='text-black mx-2	'>Occasion </span>
          <span className='text-white	shadow_outline mx-2'>Fashion </span>
          <span className='text-black mx-2	'>for </span>
          <span className='text-white	shadow_outline mx-2'>Every </span>
          <span className='text-black mx-2	'>Occasion</span>
        </p>
      </Marquee>
    </div>
  )
}
