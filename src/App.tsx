import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Education from './components/Education'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { useRef } from 'react'

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
    <div className='md:flex flex-col mt-[4rem] md:mt-[0rem]'>
      <div className='w-[100%] md:w-[20%]'>
      <div className='w-[100%] bg-[#181818] md:p-[10px] fixed md:block justify-evenly py-[10px] px-[5px] top-0'>
        <h1 className='text-[#fff] font-bold md:text-[2rem] cursor-pointer hidden' onClick={() => scrollToSection(header)}>Moscode</h1>
        <div className='md:h-[100vh] flex md:flex-col md:justify-center justify-evenly'>
                <p className='text-[#fff] font-bold md:text-[2rem] cursor-pointer md:hidden' onClick={() => scrollToSection(header)}>MO.</p>
                <p className='pl-[20px] text-[#4f4f4f] font-medium md:text-[2rem] md:pb-[2rem] cursor-pointer' onClick={() => scrollToSection(portfolio)}>Portfolio</p>
                <p className='text-[#4f4f4f] font-medium md:text-[2rem] md:pb-[2rem] cursor-pointer' onClick={() => scrollToSection(experience)}>Experience</p>
                <p className='text-[#4f4f4f] font-medium md:text-[2rem] md:pb-[2rem] cursor-pointer'  onClick={() => scrollToSection(academics)}>Academics</p>
                <p className='text-[#4f4f4f] font-medium md:text-[2rem] md:pb-[2rem] cursor-pointer'  onClick={() => scrollToSection(contact)}>Contact</p>
        </div>
      </div>
      </div>
        <div className='mx-auto w-[90%] md:w-[75%]'>
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
