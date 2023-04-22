import React from 'react'
import AcademicCard from '../AcademicCard'

const index = () => {
  return (
    <div>
        <h1 className='text-[#08fdd8] text-[3rem] mt-[2rem]'>Education</h1>
            <div className='flex flex-col gap-y-[4rem] mt-[2rem] mb-[2rem]'>
                <AcademicCard />
                <AcademicCard />
            </div>
    </div>
  )
}

export default index