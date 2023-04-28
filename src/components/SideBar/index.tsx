import React from 'react'

const SideBar = () => {
  return (
    <div className='md:block md:fixed md:bg-[#181818] md:p-[10px] hidden'>
    <h1 className='text-[#fff] font-bold text-[2rem]'>Moscode</h1>
    <div className='h-[100vh] flex flex-col justify-center'>
            <p className='text-[#4f4f4f] font-medium text-[2rem] pb-[3rem]'>Portfolio</p>
            <p className='text-[#4f4f4f] font-medium text-[2rem] pb-[3rem]'>Experience</p>
            <p className='text-[#4f4f4f] font-medium text-[2rem] pb-[3rem]'>Academics</p>
    </div>
    </div>
  )
}

export default SideBar