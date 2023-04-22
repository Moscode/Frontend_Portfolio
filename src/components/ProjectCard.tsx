import Button from './Button'

interface ProjectCardTypes{
  projectImg: string,
  projectDescription: string,
  style?: string,
  content: string,
  live: string,
  repo: string
}

const ProjectCard = ({ projectImg, projectDescription, style, content, live, repo }: ProjectCardTypes) => {
  return (
    <div className='p-[10px] bg-[#fff] border rounded-md'>
        <div className={`h-[200px]`}>
            <img src={projectImg} alt='' className='w-[100%] h-[100%] object-cover'/>
        </div>
        <div className='flex justify-center mt-[1.2rem] text-[#696969]'>
            <p>{projectDescription}</p>
        </div>
        <div className='flex justify-evenly'>
            <Button buttonContent='Live' customStyle='cursor-pointer' link={live}/>
            <Button buttonContent={content} customStyle={`${style}`} link={repo}/>
        </div>
    </div>
  )
}

export default ProjectCard