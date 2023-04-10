import React from 'react'
import Button from '../Button'

const index = () => {
  return (
    <div>
      <h1 className='text-[#08fdd8] text-[3rem] mt-[2rem]'>Contact</h1>
      <form className='mb-[2rem] mt-[2rem]'>
        <div className=' w-[50%] grid gap-y-[1.2rem]'>
        <div className='flex gap-x-2'>
          <input placeholder='Name' className='inline-block relative w-full bg-[#2b2b2b] p-4 placeholder-[#8d8d8d] text-[#8d8d8d] focus:outline-none'/>
          <input placeholder='Email' className='w-full bg-[#2b2b2b] p-4 placeholder-[#8d8d8d] text-[#8d8d8d] focus:outline-none'/>
        </div>
        <div>
          <input placeholder='Subject' className='w-[100%] bg-[#2b2b2b] p-4 placeholder-[#8d8d8d] text-[#8d8d8d] focus:outline-none'/>
        </div>
        <div>
          <textarea rows={8} className='w-[100%] bg-[#2b2b2b] p-4 placeholder-[#8d8d8d] text-[#8d8d8d] focus:outline-none' placeholder='Message'></textarea>
        </div>
        <div className='flex justify-end'>
          <Button buttonContent='Contact Me' customStyle='text-[#fff] w-[50%] cursor-pointer'/>
        </div>
        </div>
      </form>
    </div>
  )
}

export default index