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
    <div className='flex'>
      <div className='w-[20%]'>
      <div className='bg-[#181818] p-[10px] fixed'>
        <h1 className='text-[#fff] font-bold text-[2rem] cursor-pointer' onClick={() => scrollToSection(header)}>Moscode</h1>
        <div className='h-[100vh] flex flex-col justify-center'>
            <div className=''>
                <p className='text-[#4f4f4f] font-medium text-[2rem] pb-[2rem] cursor-pointer' onClick={() => scrollToSection(portfolio)}>Portfolio</p>
                <p className='text-[#4f4f4f] font-medium text-[2rem] pb-[2rem] cursor-pointer' onClick={() => scrollToSection(experience)}>Experience</p>
                <p className='text-[#4f4f4f] font-medium text-[2rem] pb-[2rem] cursor-pointer'  onClick={() => scrollToSection(academics)}>Academics</p>
                <p className='text-[#4f4f4f] font-medium text-[2rem] pb-[2rem] cursor-pointer'  onClick={() => scrollToSection(contact)}>Contact</p>
            </div>
        </div>
    </div>
      </div>
        <div className='w-[75%]'>
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
