import { useState } from 'react'
import { MdExpandMore } from 'react-icons/md'
import { MdExpandLess } from 'react-icons/md'

import HNG from '../../assets/Hng.jpg'

const index = () => {
  const [expand1, setExpand1] = useState(true)
  const [expand2, setExpand2] = useState(true)
  const [expand3, setExpand3] = useState(true)
  return (
    <div>
        <h1 className='text-[#08fdd8] text-[3rem] mt-[2rem]'>Experience</h1>
        <div className='flex flex-col gap-[4rem] mt-[2rem]'>

        <div className='w-[80%]'>
          <div className={`flex justify-between border border-[#08fdd8] py-[1rem] px-[1rem] text-[#fff] rounded-md ${expand1 && 'border-dashed'}`}>
          <p>Junior Engineeing</p>
          {expand1 ?  <p onClick={()=> setExpand1(!expand1)}><MdExpandLess /></p>:<p onClick={()=> setExpand1(!expand1)}><MdExpandMore /></p>}
          </div>
          {expand1 && <div className='w-[90%] rounded-md mx-[auto] flex border border-red-500 mt-[20px] px-[10px] py-[10px]'>
          <div className='mr-[20px] h-[20%]'>
            <img className='bg-yellow-900' src={HNG} alt='company' />
          </div>
          <div>
              <div className='flex justify-between text-[#fff] mb-[10px]'>
                <div>
                <h3>Backend Developer Intern (NodeJS)</h3>
                <p>HNG Internship 8</p>
                </div>
                <div>
                  <p>Aug 2021 - Oct 2021</p>
                  <p>Remote</p>
                </div>
              </div>
              <div className='text-[#fff]'>
                <p>I was part of the team that developed and documented API endpoints for the frontend team to work with for quick development of the chess plugin that we built for the workspace project.Generated GitHub issues as the tickets that was distributed among developers.Worked closely with highly skilled backend engineers in other to get theideas and distribution of tickets running as quickly as possible.Handled the Swagger documentation of the endpoints to facilitate easy implementation for the frontend team.</p>
              </div>
          </div>
        </div>}
        </div>
        <div className='w-[80%]'>
        <div className={`flex justify-between border border-[#08fdd8] py-[1rem] px-[1rem] text-[#fff] rounded-md ${expand2 && 'border-dashed'}`}>
        <p>Internships</p>
        {expand2 ?  <p onClick={()=> setExpand2(!expand2)}><MdExpandLess /></p>:<p onClick={()=> setExpand2(!expand2)}><MdExpandMore /></p>}
        </div>
        {expand2 && <div className='w-[90%] rounded-md mx-[auto] flex border border-red-500 mt-[20px] px-[10px] py-[10px]'>
          <div className='mr-[20px] h-[20%]'>
            <img className='bg-yellow-900' src={HNG} alt='company' />
          </div>
          <div>
              <div className='flex justify-between text-[#fff] mb-[10px]'>
                <div>
                <h3>Backend Developer Intern (NodeJS)</h3>
                <p>HNG Internship 8</p>
                </div>
                <div>
                  <p>Aug 2021 - Oct 2021</p>
                  <p>Remote</p>
                </div>
              </div>
              <div className='text-[#fff]'>
                <p>I was part of the team that developed and documented API endpoints for the frontend team to work with for quick development of the chess plugin that we built for the workspace project.Generated GitHub issues as the tickets that was distributed among developers.Worked closely with highly skilled backend engineers in other to get theideas and distribution of tickets running as quickly as possible.Handled the Swagger documentation of the endpoints to facilitate easy implementation for the frontend team.</p>
              </div>
          </div>
        </div>}
        </div>
        <div className='w-[80%]'>
        <div className={`flex justify-between border border-[#08fdd8] py-[1rem] px-[1rem] text-[#fff] rounded-md ${expand3 && 'border-dashed'}`}>
        <p>Volunteerships</p>
        {expand3 ?  <p onClick={()=> setExpand3(!expand3)}><MdExpandLess /></p>:<p onClick={()=> setExpand3(!expand3)}><MdExpandMore /></p>}
        </div>
        {expand3 && <div className='w-[90%] rounded-md mx-[auto] flex border border-red-500 mt-[20px] px-[10px] py-[10px]'>
          <div className='mr-[20px] h-[20%]'>
            <img className='bg-yellow-900' src={HNG} alt='company' />
          </div>
          <div>
              <div className='flex justify-between text-[#fff] mb-[10px]'>
                <div>
                <h3>Backend Developer Intern (NodeJS)</h3>
                <p>HNG Internship 8</p>
                </div>
                <div>
                  <p>Aug 2021 - Oct 2021</p>
                  <p>Remote</p>
                </div>
              </div>
              <div className='text-[#fff]'>
                <p>I was part of the team that developed and documented API endpoints for the frontend team to work with for quick development of the chess plugin that we built for the workspace project.Generated GitHub issues as the tickets that was distributed among developers.Worked closely with highly skilled backend engineers in other to get theideas and distribution of tickets running as quickly as possible.Handled the Swagger documentation of the endpoints to facilitate easy implementation for the frontend team.</p>
              </div>
          </div>
        </div>}
        </div>
        </div>
    </div>
  )
}

export default index