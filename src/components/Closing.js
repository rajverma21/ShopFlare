import React from 'react'
import fb from '../images/logo/facebook-svgrepo-com.svg'
import tw from '../images/logo/twitter-svgrepo-com.svg'
import ig from '../images/logo/instagram-svgrepo-com.svg'

export default function Closing () {
  return (
    <div>
      <div className='bg-[#333333] h-auto cursor-default w-full h-[100px] py-[4%] px-[10%] text-white flex gap-10 justify-center'>
        <div className='w-[31%] p-1'>
          <p className='m-1 font-[700]'>ShopFlare</p>
          <p className='text-[13.5px] m-1'>
            Empower your e-commerce store with a beautiful look & ultra-modern
            features. With a modern yet elegant look and feel for your online
            fashion store. This theme comes with limitless possibilities to help
            you sell with finesse.
          </p>
          <div className='mt-4 flex gap-3'>
            <a
              href='https://www.facebook.com/'
              rel='noreferrer noopener'
              target='_blank'
            >
              <img src={fb} className='h-[15px]' alt='' />
            </a>
            <a
              href='https://www.instagram.com/'
              rel='noreferrer noopener'
              target='_blank'
            >
              <img src={ig} className='h-[15px]' alt='' />
            </a>
            <a
              href='https://twitter.com/'
              rel='noreferrer noopener'
              target='_blank'
            >
              <img src={tw} className='h-[15px]' alt='' />
            </a>
          </div>
        </div>
        <div className='ml-[4%] w-[60%] flex justify-between px-8'>
          <ul className=''>
            <li className='font-[500] text-[16.6px] mb-2 cursor-default '>
              Quick Link
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Home</a>
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>About Us</a>
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Contact Us</a>
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Products</a>
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Blog</a>
            </li>
          </ul>
          <ul>
            <li className='font-[500] text-[16.6px] mb-2 cursor-default'>
              Collections
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Men & Women</a>
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Kid's Care</a>
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Summer Collection</a>
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Winter Collection</a>
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Sports Collection</a>
            </li>
          </ul>
          <ul>
            <li className='font-[500] text-[16.6px] mb-2 cursor-default'>
              Services
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Refund Policy</a>
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Easy Return</a>
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Payment</a>
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Term Of Service</a>
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>FAQ's</a>
            </li>
          </ul>
          <ul>
            <li className='font-[500] text-[16.6px] mb-2 cursor-default'>
              Account
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Log in</a>
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Sign Up</a>
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Track Your Order</a>
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>Returns</a>
            </li>
            <li className='text-[13.5px] mb-1'>
              <a href='/'>24/7 Support</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
