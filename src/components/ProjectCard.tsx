import Button from './Button'

interface ProjectCardTypes{
  projectImg: string,
  projectDescription: string,
  style?: string,
  content: string
}

const ProjectCard = ({ projectImg, projectDescription, style, content }: ProjectCardTypes) => {
  return (
    <div className='p-[10px] bg-[#fff] border rounded-md'>
        <div className='h-[200px]'>
            <img src={projectImg} alt='' className='w-[100%]'/>
        </div>
        <div className='flex justify-center mt-[1.2rem] text-[#696969]'>
            <p>{projectDescription}</p>
        </div>
        <div className='flex justify-evenly'>
            <Button buttonContent='Live' customStyle='w-[40%] cursor-pointer'/>
            <Button buttonContent={content} customStyle={`w-[40%] cursor-pointer ${style}`}/>
        </div>
    </div>
  )
}

export default ProjectCard