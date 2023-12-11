import React from 'react'
import wowanSitting from '../images/woman-sitting-rocks-with-cup.jpg'

export default function DealOfTheDay () {
  return (
    <div>
      <div className='w-full h-[100vh] overflow-hidden mt-16 mb-6 relative cursor-default'>
        <img src={wowanSitting} className='w-full' alt='BackGround' />
        <div className='absolute top-[41%] left-[13%] w-[25%]'>
          <p className='dotd font-[600] text-[14px] px-1 leading-none'>
            Up To 70% Off
          </p>
          <p className='dotd text-black text-[39px] font-[600]'>
            Deals Of The Day
          </p>
          <p className='dotd font-[500] text-[14px] px-1 mb-4'>
            Don't miss out on this limited-time opportunity to upgrade your tech
            game while keeping your wallet happy. Grab it before it's gone!
          </p>
          <button className='transition ease-in-out rounded-lg bg-gray-800 px-5 py-2 hover hover:bg-gray-900 text-white'>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  )
}
