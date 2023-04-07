import HomePage from '../assets/HomePage.png'
import Button from './Button'

const ProjectCard = () => {
  return (
    <div className='p-[10px] bg-[#fff] border rounded-md'>
        <div>
            <img src={HomePage} alt='' className='w-[100%]'/>
        </div>
        <div className='flex justify-center'>
            <p>MERN stack Application designed to simplify the process of estimating the required number of trailers. All estimates are based on the average of the five previous weeks, or specific days of the week. With app's charts, you can easily identify seasonal orders spikes, and be prepared for the growing demand.</p>
        </div>
        <div className='flex justify-evenly'>
            <Button buttonContent='Live'/>
            <Button buttonContent='Github Repo'/>
        </div>
    </div>
  )
}

export default ProjectCard