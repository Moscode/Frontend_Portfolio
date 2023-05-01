import React, { useEffect, useLayoutEffect, useRef } from 'react'
//import ProfilePic from '../../assets/Moses.png'
/*import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
*/
const Header = () =>{
   /* let heroText = useRef(null)
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
        
    }, []) */

    
    return(
        <div className='h-[100vh] flex justify-center items-center flex-col' id="main">
            <div className='animate-heading2' id="main2">
                <h1 className="text-[2rem] md:text-[4rem] lg:text-[4.5rem] font-bold text-[#fff] animate-heading" id="head">
                I'm Moses Odunosho
                </h1>
                <h2 className='text-right text-[#08fdd8] font-bold text-[1.5rem] sm:text-[2.5rem] lg:text-[3rem] animate-heading1'>Front-End Engineer</h2>
            </div>
        </div>
    )
}

export default Header