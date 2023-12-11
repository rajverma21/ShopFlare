import React from 'react'
import circle1 from '../images/icons8-circle-16.png'
import circle2 from '../images/icons8-circle-16 (1).png'
import circle3 from '../images/icons8-circle-16(2).png'

export default function Card (props) {
  return (
    <div className='flex flex-col border-2 rounded h-[59vh] w-[22vw] mb-6 cursor-default'>
      <div className='h-[42vh] w-[18vw] overflow-hidden'>
        <img src={props.image} alt='' className='border-b-2 h-full w-full' />
      </div>
      <div>
        <p className='text-lg font-medium pt-4 px-4'>{props.title}</p>
        <p className='px-4 flex py-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            class='w-3.5 h-3.5'
          >
            <path
              fill-rule='evenodd'
              d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
              clip-rule='evenodd'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            class='w-3.5 h-3.5'
          >
            <path
              fill-rule='evenodd'
              d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
              clip-rule='evenodd'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            class='w-3.5 h-3.5'
          >
            <path
              fill-rule='evenodd'
              d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
              clip-rule='evenodd'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            class='w-3.5 h-3.5'
          >
            <path
              fill-rule='evenodd'
              d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
              clip-rule='evenodd'
            />
          </svg>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-3.5 h-3.5'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
            />
          </svg>
        </p>
        <p className='text-[14px] px-4 font-medium'>{props.price}</p>
        <p className='px-4 flex py-1 pb-3 gap-1'>
          <img src={circle1} alt='' />
          <img src={circle2} alt='' />
          <img src={circle3} alt='' />
        </p>
      </div>
    </div>
  )
}
