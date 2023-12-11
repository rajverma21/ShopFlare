import React from 'react'

export default function Navbar () {
  return (
    <div className='flex flex-row justify-around py-6 p-2 bg-white fixed top-0 left-0 font-[700] right-0 z-50 cursor-default'>
      <div className=''>ShopFlare</div>
      <div>
        <ul className='flex flex-row'>
          <li className='transition ease-in-out mx-6 hover:scale-110 font-medium'>
            <a href='/'>Home</a>
          </li>
          <li className='transition ease-in-out mx-6 hover:scale-110 font-medium'>
            <a href='/'>Products</a>
          </li>
          <li className='transition ease-in-out mx-6 hover:scale-110 font-medium'>
            <a href='/'>New Arrivals</a>
          </li>
          <li className='transition ease-in-out mx-6 hover:scale-110 font-medium'>
            <a href='/'>Collections</a>
          </li>
          <li className='transition ease-in-out mx-6 hover:scale-110 font-medium'>
            <a href='/'>Deal Of The Day</a>
          </li>
          <li className='transition ease-in-out mx-6 hover:scale-110 font-medium'>
            <a href='/'>About</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className='flex flex-row'>
          <li className='mx-2'>
            <a href='/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                />
              </svg>
            </a>
          </li>
          <li className='mx-2'>
            <a href='/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
