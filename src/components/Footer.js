import React from 'react'
import gpay from '../images/logo/google-pay.svg'
import mastercard from '../images/logo/mastercard.svg'
import paypal from '../images/logo/paypal.svg'
import paytm from '../images/logo/paytm.svg'
import visa from '../images/logo/visa.svg'

export default function Footer () {
  return (
    <div>
      <div className='w-full h-auto flex justify-between px-[11%] items-center cursor-default'>
        <p className='text-[13px] font-[600] text-[#333333]'>
          &#169; All Rights Reserved
        </p>
        <p className='flex items-center gap-4'>
          <a href='https://www.paypal.com/in/home'>
            <img src={paypal} className='h-[45px] ' alt='' />
          </a>
          <a href='https://www.visa.co.in/'>
            <img src={visa} className='h-[30px] bg-white' alt='' />
          </a>
          <a href='https://pay.google.com/about/'>
            <img src={gpay} className='h-[29px] bg-white' alt='' />
          </a>
          <a href='https://paytm.com/'>
            <img src={paytm} className='h-[13.5px] bg-white' alt='' />
          </a>
          <a href='https://www.mastercard.co.in/en-in.html'>
            <img src={mastercard} className='h-[21px] bg-white' alt='' />
          </a>
        </p>
      </div>
    </div>
  )
}
