import React from 'react'
import blueshirt from '../images/blueshirt.jpg'
import unknown from '../images/20103861-01.jpg'
import nightdress from '../images/nightdress.jpg'
import blackwomen from '../images/blackwomen.jpg'
import reddress from '../images/reddress.jpg'
import purple from '../images/purple.jpg'

export default function Showcase () {
  return (
    <div className='flex w-11/12 justify-center gap-4 m-auto mb-12 w-full gap-7 p-1'>
      <div className='w-16 h-16  flex flex-col w-[35vw] gap-7 h-[70vh] '>
        <div className='h-[35vh]  relative overflow-hidden rounded-lg '>
          <img
            src={blackwomen}
            className='object-cover absolute top-0 transition ease-in-out hover:scale-110'
            alt=''
          />
          <button className='z-40 absolute right-3 bottom-3 px-5 py-1 bg-slate-100 cursor-pointer rounded-lg'>
            New
          </button>
        </div>
        <div className='h-[35vh] w-full flex gap-7'>
          <div className='h-[35vh] w-[17vw] relative overflow-hidden rounded-lg'>
            <img
              src={blueshirt}
              className='absolute top-0 object-cover hover:scale-110 transition ease-in-out'
              alt=''
            />
            <button className='z-40 absolute right-3 bottom-3 px-5 py-1 bg-slate-100 cursor-pointer rounded-lg'>
              New
            </button>
          </div>
          <div className=' h-[35vh] w-[17vw] relative overflow-hidden rounded-lg'>
            <img
              src={unknown}
              className='absolute top-0 object-cover hover:scale-110 transition ease-in-out '
              alt=''
            />
            <button className='z-40 absolute right-3 bottom-3 px-5 py-1 bg-slate-100 cursor-pointer rounded-lg'>
              New
            </button>
          </div>
        </div>
      </div>
      <div className='w-16 h-[35vh]  h-[70vh] overflow-hidden w-[22vw] rounded-lg relative'>
        <img
          src={nightdress}
          className='h-full w-full object-cover hover:scale-110 transition ease-in-out '
          alt=''
        />
        <button className='z-40 absolute right-3 bottom-3 px-5 py-1 bg-slate-100 cursor-pointer rounded-lg'>
          New
        </button>
      </div>
      <div className='w-16 h-16  flex flex-col w-[35vw] gap-7 h-[70vh] '>
        <div className='h-[35vh] w-full flex gap-7'>
          <div className=' h-[35vh] w-[17vw] relative overflow-hidden rounded-lg'>
            <img
              src={purple}
              className='absolute top-0 object-cover transition ease-in-out hover:scale-110 '
              alt=''
            />
            <button className='z-40 absolute right-3 bottom-3 px-5 py-1 bg-slate-100 cursor-pointer rounded-lg'>
              New
            </button>
          </div>
          <div className=' h-[35vh] w-[17vw] relative overflow-hidden rounded-lg'>
            <img
              src={reddress}
              className='absolute top-0 object-cover hover:scale-110 transition ease-in-out '
              alt=''
            />
            <button className='z-40 absolute right-3 bottom-3 px-5 py-1 bg-slate-100 cursor-pointer rounded-lg'>
              New
            </button>
          </div>
        </div>
        <div className='h-[35vh] relative overflow-hidden rounded-lg'>
          <img
            src={blackwomen}
            className='object-cover absolute top-0 hover:scale-110 transition ease-in-out '
            alt=''
          />
          <button className='z-40 absolute right-3 bottom-3 px-5 py-1 bg-slate-100 cursor-pointer rounded-lg'>
            New
          </button>
        </div>
      </div>
    </div>
  )
}
