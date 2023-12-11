import React from 'react'
// import nw from '../images/newletter.jpg'

export default function NewLetter () {
  return (
    <div>
      <div className='newletter mt-4 mb-2 flex flex-col text-white items-center justify-center gap-4 cursor-default'>
        <p className='text-[34px] font-semibold'>Newsletter Subscribe</p>
        <p className=''>
          Sign Up To Stay In Loop, Receive Updates, Access To Exclusive Deals,
          And More.
        </p>
        <div className='rounded-md h-[7vh] w-[33vw] bg-white flex items-center justify-between p-1'>
          <form className='flex justify-between w-full'>
            <input
              type='email'
              className='p-2 h-[6vh] w-full focus:outline-none text-black'
              placeholder='Email Address'
            />
            <button
              type='submit'
              className='h-[6vh] transition ease-in-out rounded-lg bg-gray-800 px-5 py-2 hover hover:bg-gray-900 text-white'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
