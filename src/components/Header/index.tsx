import React, { useEffect, useLayoutEffect, useRef } from 'react'
import ProfilePic from '../../assets/Moses.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Header = () =>{
    let heroText = useRef(null)
    let headerContainer = useRef(null)
    let heroProfile = useRef(null)

    useLayoutEffect(()=>{
        let ctx = gsap.context(() => {
            gsap.to(heroText.current, {
                scrollTrigger: {
                    trigger: heroText.current,
                    start: '100% 70%',
                    end: '0%',
                    scrub: 1,
                    toggleActions: "restart none none none"
                },
                x: -150,
                fontSize:'30px'});
          }, headerContainer);
          
          return () => ctx.revert();
        
    }, [])
    
    return(
        <div className=''>
        <div ref={headerContainer} className='h-[100vh] flex justify-center items-center flex-col leading-none'>
            <div ref={heroText}>
                <h1 className="text-[5rem] font-bold text-[#fff]">
                Hi,<br/>
                I'm Moses,<br/>
                Frontend Engineer
                </h1>
            </div>
        </div>
        </div>
    )
}

export default Header