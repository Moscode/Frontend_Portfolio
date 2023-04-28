import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Education from './components/Education'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { useRef } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

function App() {
  let header = useRef<HTMLDivElement | null>(null)
  let portfolio = useRef<HTMLDivElement | null>(null)
  let experience = useRef<HTMLDivElement | null>(null)
  let academics = useRef<HTMLDivElement | null>(null)
  let contact = useRef<HTMLDivElement | null>(null)

  const scrollToSection = (elementRef:any)=>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div className='lg:flex lg:flex-row flex-col mt-[4rem] lg:mt-[0rem]'>
      <div className='w-[100%] lg:w-[20%]'>
      <div className='w-[100%] lg:w-[20%] lg:p-[10px] bg-[#181818] fixed lg:block justify-evenly py-[10px] px-[5px] top-0'>
        <h1 className='text-[#fff] font-bold lg:text-[2rem] cursor-pointer hidden lg:block' onClick={() => scrollToSection(header)}>Moscode</h1>
        <p className="text-[#fff] font-bold lg:text-[2rem] cursor-pointer lg:hidden"></p>
        <div className='lg:h-[100vh] lg:flex lg:flex-col lg:justify-center justify-evenly hidden'>
                <p className='text-[#fff] font-bold lg:text-[2rem] cursor-pointer lg:hidden' onClick={() => scrollToSection(header)}>MO.</p>
                <p className='pl-[20px] lg:pl-[0px] text-[#4f4f4f] font-medium lg:text-[2rem] lg:pb-[2rem] cursor-pointer' onClick={() => scrollToSection(portfolio)}>Portfolio</p>
                <p className='text-[#4f4f4f] lg:font-medium lg:text-[2rem] lg:pb-[2rem] cursor-pointer' onClick={() => scrollToSection(experience)}>Experience</p>
                <p className='text-[#4f4f4f] lg:font-medium lg:text-[2rem] lg:pb-[2rem] cursor-pointer'  onClick={() => scrollToSection(academics)}>Academics</p>
                <p className='text-[#4f4f4f] lg:font-medium lg:text-[2rem] lg:pb-[2rem] cursor-pointer'  onClick={() => scrollToSection(contact)}>Contact</p>
        </div>
      </div>
      </div>
        <div className='mx-auto w-[90%] lg:w-[75%] lg:ml-[2rem]'>
        <div ref={header}>
          <Header />
        </div>
        <div ref={portfolio}>
          <Portfolio />
        </div>
        <div ref={experience}>
          <Experience />
        </div>
        <div ref={academics}>
          <Education />
        </div>
        <div ref={contact}>
          <Contact />
        </div>
        </div>
    </div>
  )
}

export default App
