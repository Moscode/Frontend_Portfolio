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
        <div>
        <div className='h-[100vh] flex justify-center items-center flex-col'>
            <div className='animate-heading2'>
                <h1 className="sm:text-[1.8rem] md:text-[2.5rem] lg:text-[4rem] font-bold text-[#fff] animate-heading">
                I'm Moses Odunosho
                </h1>
                <h2 className='text-right text-[#08fdd8] font-bold lg:text-[3rem] animate-heading1'>Frontend Engineer</h2>
            </div>
        </div>
        </div>
    )
}

export default Header