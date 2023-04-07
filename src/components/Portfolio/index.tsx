import ProjectCard from '../ProjectCard'

const Portfolio = () => {
  return (
    <div>
        <h1 className='text-[#08fdd8] text-[3rem]'>My Portfolio</h1>
        <div className='grid md:grid-cols-2 gap-[4rem] mt-[2rem]'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </div>
  )
}

export default Portfolio