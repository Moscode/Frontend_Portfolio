import React from 'react'

const AcademicCard = () => {
  return (
    <div>
    <div className='w-[80%] bg-[#fff] grid gap-y-[30px] rounded'>
    <div className='bg-[#181818] flex text-[#e9e9e9] px-[20px] py-[10px] justify-between text-[1.5rem]'>
        <div>
            <h1>University of Lagos</h1>
            <h3>BSc in Applied Physics Electronics</h3>
        </div>
        <p>2019 - 2024</p>
    </div>
    <div className='px-[20px] py-[10px]'>
        <ul className='flex flex-col gap-y-[0.5rem] text-[1.1rem]'>
            <li className='flex gap-x-[8px]'>
            <div>⚡</div> 
            <div>
                I have studied subjects like Algebra, Calculus, Quantum Mechanics, Fundamental of Algorithm etc.
            </div>
            </li>
            <li className='flex gap-x-[8px]'>
            <div>⚡</div>
            <div>
                I am a member of a National Robotics Communty where we build embed system projects coded in C++ on an arduno system.
            </div>
            </li>
            <li className='flex gap-x-[8px]'>
            <div>⚡</div>
            <div>
                I am also a core member of Google Developer Student Club and a tutor of frontend technologies
            </div>
            </li>
        </ul>
    </div>
    </div>
    </div>
  )
}

export default AcademicCard