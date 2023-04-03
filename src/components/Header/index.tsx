import React, { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Header = () =>{
    let heroText = useRef(null)
    let headerContainer = useRef(null)
    //let heroProfile = useRef(null)
    useLayoutEffect(()=>{
        let ctx = gsap.context(() => {
            gsap.to(heroText.current, {
                scrollTrigger: {
                    trigger: heroText.current,
                    start: '100% 80%',
                    scrub: 1,
                    markers:true,
                    toggleActions: "restart none none none"
                },
                x: -320,
                fontSize:'60px'})
            
          }, headerContainer);
          
          return () => ctx.revert();
        
    }, [])
    
    return(
        <>
        <div ref={headerContainer} className='h-[100vh] flex justify-center items-center leading-none'>
            <div className='flex'>
            <h1 ref={heroText} className="text-[5rem] font-bold text-[#fff]">
            Hi,<br/>
            I'm Moses,<br/>
            Frontend Engineer
            </h1>
            </div>
        </div>
        {/*<div>
            <p>I'm a software engineer with focus on frontend development</p>
            <p>My Projects</p>
    </div>*/}
        </>
    )
}

export default Header