import React from 'react'

const SideBar = () => {
  return (
    <div className='bg-[#181818] p-[10px] fixed'>
    <h1 className='text-[#fff] font-bold text-[2rem]'>Moscode</h1>
    <div className='h-[100vh] flex flex-col justify-center'>
        <div className=''>
            <p className='text-[#4f4f4f] font-medium text-[2rem] pb-[3rem]'>Portfolio</p>
            <p className='text-[#4f4f4f] font-medium text-[2rem] pb-[3rem]'>Experience</p>
            <p className='text-[#4f4f4f] font-medium text-[2rem] pb-[3rem]'>Academics</p>
        </div>
    </div>
    </div>
  )
}

export default SideBar