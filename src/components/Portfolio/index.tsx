import ContactInfo from '../../assets/ContactInfo-App.png'
import Pokemon from '../../assets/Pokemon-Game.png'
import Subcription from '../../assets/Sass-App.png'
import Checkroomie from '../../assets/checkroomie.png'
import CoderUnblock from '../../assets/coderunblock.png'
import SwapBook from '../../assets/swapbook.png'

import ProjectCard from '../ProjectCard'

const Portfolio = () => {
  return (
    <div>
        <h1 className='text-[#08fdd8] text-[3rem]'>My Portfolio</h1>
        <div className='grid md:grid-cols-2 gap-[4rem] mt-[2rem]'>
            <ProjectCard projectImg={Checkroomie}
            stack={["React", "Tailwind CSS", "TypeScript"]}
            projectDescription='This is a freelance project that I designed for a real estate startup. The website is used to generate conversion of over 50 thousand user that are currently using the app on both IOS and Android.' style='cursor-not-allowed text-red-500' content='Private Repo' live="https://checkroomie.com/" repo="#"/>
            <ProjectCard projectImg={CoderUnblock} 
            stack={["React", "Tailwind CSS", "TypeScript"]}
            projectDescription='Coderunblock is a platfrom that helps connect less experience software developers to industry experts with the aim of facilitating pairprogramming and one-off mentorships. It is a free service so it is based on experts availabilities.' content='Github Repo' live="https://coderunblock.netlify.app" repo="https://github.com/Moscode/coderunblock"/>
            <ProjectCard projectImg={SwapBook} 
            stack={["React", "Tailwind CSS", "TypeScript"]}
            projectDescription='SwapBook is a web application that connects readers that are willing to swap their hard copy books with one another but it is currently optimized for mobile view. The desktop view is coming soon and complete features is coming soon.' content='Github Repo' live="https://swapbook.netlify.app" repo="https://github.com/Moscode/BookSwap"/>
            <ProjectCard projectImg={ContactInfo} 
            stack={["React", "Tailwind CSS", "TypeScript"]}
            projectDescription='This is a contact management app that fetches data from a public api and display all the contact info using a grid layout. It allows users to search by names - to simulate the good old phone book.' content='Github Repo' live="https://contact-list-management-app.netlify.app" repo="https://github.com/Moscode/contact-list-management-app"/>
            <ProjectCard projectImg={Pokemon} 
            stack={["React", "Tailwind CSS", "TypeScript"]}
            projectDescription='The Lengendry Pokeman display board with pagination from the public pokeman api. In this app, each pokeman ability and complete features were displayed.' content='Github Repo' live="https://pokemonseries.netlify.app" repo="https://github.com/Moscode/PokemonGame"/>
            <ProjectCard projectImg={Subcription} 
            stack={["React", "Tailwind CSS", "TypeScript"]}
            projectDescription='This project was built with HTML, and SASS... This is a subcription card app inspired by a design on frontendmentor.io. This was a good opportunity to play around with sass css.' content='Github Repo' live="https://subscription-page-with-sass.netlify.app" repo="https://github.com/Moscode/Subscription-Page-Component"/>
        </div>
    </div>
  )
}

export default Portfolio