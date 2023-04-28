import React from 'react'
import AcademicCard from '../AcademicCard'

const index = () => {
  return (
    <div>
        <h1 className='text-[#08fdd8] text-[1.5rem] lg:text-[3rem] mt-[2rem] md:w-[100%]'>Education</h1>
            <div className='flex flex-col gap-y-[4rem] mt-[2rem] mb-[2rem]'>
                <AcademicCard />
            </div>
    </div>
  )
}

export default index