import React from 'react'

export default function Item (props) {
  return (
    <div>
      <div className='h-[60vh] w-[28vw] shadow-2xl relative cursor-pointer'>
        <img src={props.image} className='h-full w-full object-cover ' alt='' />
        <p className='absolute bottom-[7vh] left-[2.8vw] text-[36px] text-white leading-10 font-bold txtStroke z-10'>
          {props.text}
        </p>
        <div className='child h-[42%] w-full bg-gradient-to-t from-[#500724] to-transparent absolute bottom-[-42%]'></div>
      </div>
    </div>
  )
}
