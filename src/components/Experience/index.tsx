import { useState } from 'react'
import { MdExpandMore } from 'react-icons/md'
import { MdExpandLess } from 'react-icons/md'

import mobilelearning from '../../assets/mobile-learning-icon.jpg'
import checkroomiesicon from '../../assets/checkroomie-logo.png'
import hng from '../../assets/Hng.jpg'
import ustacky from '../../assets/Ustacky.png'
import ExperienceCard from '../ExperienceCard'

const index = () => {
  const [expand1, setExpand1] = useState(true)
  const [expand2, setExpand2] = useState(true)
  const [expand3, setExpand3] = useState(true)
  return (
    <div>
        <h1 className='text-[#08fdd8] text-[3rem] mt-[2rem]'>Experience</h1>
        <div className='flex flex-col gap-[4rem] mt-[2rem]'>

        <div className='md:w-[80%]'>
          <div className={`flex justify-between border border-[#08fdd8] py-[1rem] px-[1rem] text-[#fff] rounded-md ${expand1 && 'border-dashed'}`}>
          <p>Junior Engineeing</p>
          {expand1 ?  <p onClick={()=> setExpand1(!expand1)}><MdExpandLess /></p>:<p onClick={()=> setExpand1(!expand1)}><MdExpandMore /></p>}
          </div>
          {expand1 && 
          <>
          <ExperienceCard image={mobilelearning} role={"Freelance Frontend Engineer"} company={"Team of 3 Engineers"} date={"Feb 2023 - April 2023"} location={"Remote"} responsibility={"I was part of the team that developed and documented API endpoints for the frontend team to work with for quick development of the chess plugin that we built for the workspace project.Generated GitHub issues as the tickets that was distributed among developers.Worked closely with highly skilled backend engineers in other to get theideas and distribution of tickets running as quickly as possible.Handled the Swagger documentation of the endpoints to facilitate easy implementation for the frontend team."} />
          <ExperienceCard image={checkroomiesicon} role={"Freelance Frontend Engineer"} company={"Designing of Users Conversion Page"} date={"January 2023 - Feb 2023"} location={"Remote"} responsibility={"I was part of the team that developed and documented API endpoints for the frontend team to work with for quick development of the chess plugin that we built for the workspace project.Generated GitHub issues as the tickets that was distributed among developers.Worked closely with highly skilled backend engineers in other to get theideas and distribution of tickets running as quickly as possible.Handled the Swagger documentation of the endpoints to facilitate easy implementation for the frontend team."} />
          </>
          }
        </div>
        <div className='md:w-[80%]'>
        <div className={`flex justify-between border border-[#08fdd8] py-[1rem] px-[1rem] text-[#fff] rounded-md ${expand2 && 'border-dashed'}`}>
        <p>Internships</p>
        {expand2 ?  <p onClick={()=> setExpand2(!expand2)}><MdExpandLess /></p>:<p onClick={()=> setExpand2(!expand2)}><MdExpandMore /></p>}
        </div>
        {expand2 && 
           <ExperienceCard image={hng} role={"Backend Developer Intern (NodeJS)"} company={"HNG Internship 8"} date={"FAug 2021 - Oct 2021"} location={"Remote"} responsibility={"I was part of the team that developed and documented API endpoints for the frontend team to work with for quick development of the chess plugin that we built for the workspace project.Generated GitHub issues as the tickets that was distributed among developers.Worked closely with highly skilled backend engineers in other to get theideas and distribution of tickets running as quickly as possible.Handled the Swagger documentation of the endpoints to facilitate easy implementation for the frontend team."}/>
        }
        </div>
        <div className='md:w-[80%]'>
        <div className={`flex justify-between border border-[#08fdd8] py-[1rem] px-[1rem] text-[#fff] rounded-md ${expand3 && 'border-dashed'}`}>
        <p>Volunteerships</p>
        {expand3 ?  <p onClick={()=> setExpand3(!expand3)}><MdExpandLess /></p>:<p onClick={()=> setExpand3(!expand3)}><MdExpandMore /></p>}
        </div>
        {expand3 && 
           <ExperienceCard image={ustacky} role={"Social Ambassadorship"} company={"Ustacky"} date={"May 2021 - Aug 2021"} location={"Remote"} responsibility={"I was helping to create a social media campaign with a team of over 100 people"}/>
        }
        </div>
        </div>
    </div>
  )
}

export default index