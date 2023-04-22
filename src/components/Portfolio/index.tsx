import ContactInfo from '../../assets/ContactInfo-App.png'
import Pokemon from '../../assets/Pokemon-Game.png'
import Subcription from '../../assets/Sass-App.png'
import Checkroomie from '../../assets/checkroomie.png'

import ProjectCard from '../ProjectCard'

const Portfolio = () => {
  return (
    <div>
        <h1 className='text-[#08fdd8] text-[3rem]'>My Portfolio</h1>
        <div className='grid md:grid-cols-2 gap-[4rem] mt-[2rem]'>
            <ProjectCard projectImg={Checkroomie} projectDescription='This is a freelance project that I designed for a real estate startup. The website is used to generate conversion of over 50 thousand user that are currently using the app on both IOS and Android.' style=' cursor-not-allowed text-red-500' content='Private Repo'/>
            <ProjectCard projectImg={ContactInfo} projectDescription='This is a contact management app that fetches data from a public api and display all the contact info using a grid layout. It allows users to search by names - to simulate the good old phone book.' content='Github Repo'/>
            <ProjectCard projectImg={Pokemon} projectDescription='The Lengendry Pokeman display board with pagination from the public pokeman api. In this app, each pokeman ability and complete features were displayed.' content='Github Repo'/>
            <ProjectCard projectImg={Subcription} projectDescription='This project was built with HTML, and SASS... This is a subcription card app inspired by a design on frontendmentor.io. This was a good opportunity to play around with sass css.' content='Github Repo'/>
        </div>
    </div>
  )
}

export default Portfolio