import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Education from './components/Education'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { useRef, useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'

function App() {
  let logo = useRef<HTMLDivElement | null>(null)
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
    const list = elementRef.current.children;
    var headState = false
    for (const e of list) {
      if (e.id === "main"){
        for (const i of e.children){
          if (i.id === "main2"){
            for (const j of i.children){
                if (j.id === "head"){
                  var headState = true
                }
            }
          }
        }
      }
    }
    if (headState){
      setToggleOpen(toggleOpen)
    }
    else{
      setToggleOpen(!toggleOpen)
    }
  }

  const [toggleOpen, setToggleOpen] = useState(false)
  const [disableLogoToggle, setDisableLogoToggle] = useState(false)

  const handleToggleOpen = () => {
    setToggleOpen(!toggleOpen)
  }

  return (
    <div className='lg:flex lg:flex-row flex-col mt-[4rem] lg:mt-[0rem]'>
      <div className='w-[100%] lg:w-[20%]'>
      <div className='w-[100%] lg:w-[20%] lg:p-[10px] bg-[#181818] fixed lg:block justify-evenly py-[10px] px-[5px] top-0'>
        <div className='flex justify-between items-center lg:justify-center'>
        <h1 className='text-[#fff] font-bold lg:text-[2rem] cursor-pointer' ref={logo} onClick={() => scrollToSection(header)}>Moscode</h1>
        {toggleOpen ? 
        <p className="text-[#fff] font-bold lg:text-[2rem] cursor-pointer lg:hidden flex justify-end" onClick={() => handleToggleOpen()}><AiOutlineClose /></p>:
        <p className="text-[#fff] font-bold lg:text-[2rem] cursor-pointer lg:hidden flex justify-end" onClick={() => handleToggleOpen()}><AiOutlineMenu /></p>
        }
        </div>
        <div className={`lg:h-[100vh] flex flex-col lg:justify-center lg:items-center justify-between h-[100%] hover:text-[#08fdd8] ${toggleOpen ? 'mt-[2rem] gap-y-[2rem] md:items-center lg:gap-y-[0px] lg:mt-[0px]':'hidden lg:flex'}`}>
                <p className='text-[#4f4f4f] font-medium lg:text-[2rem] lg:pb-[2rem] cursor-pointer hover:text-[#08fdd8]' onClick={() => scrollToSection(portfolio)}>Portfolio</p>
                <p className='text-[#4f4f4f] lg:font-medium lg:text-[2rem] lg:pb-[2rem] cursor-pointer hover:text-[#08fdd8]' onClick={() => scrollToSection(experience)}>Experience</p>
                <p className='text-[#4f4f4f] lg:font-medium lg:text-[2rem] lg:pb-[2rem] cursor-pointer hover:text-[#08fdd8]'  onClick={() => scrollToSection(academics)}>Academics</p>
                <p className='text-[#4f4f4f] lg:font-medium lg:text-[2rem] lg:pb-[2rem] cursor-pointer hover:text-[#08fdd8]'  onClick={() => scrollToSection(contact)}>Contact</p>
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
