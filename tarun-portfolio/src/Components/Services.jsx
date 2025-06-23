import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React, { useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Services = () => {

   useGSAP(()=>{
        const titleSplit = new SplitText('#title', {type: 'lines'})
        const subtitleSplit = new SplitText('#subtitle', {type: 'lines'})
        const waitSplit = new SplitText('#wait', {type: 'lines'})

        gsap.from(titleSplit.lines, {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            ease: 'expo.inOut',
            stagger: 0.06,
            delay: 1,
            scrollTrigger: {
              trigger: '#main',
              start: 'top 70%',
              toggleActions: 'play none none none'
            }
          });

          subtitleSplit.lines.forEach((line) => {
            line.classList.add(
              'bg-gradient-to-r',
              'from-yellow-300',
              'to-white',
              'bg-clip-text',
              'text-transparent'
            );
          });

          gsap.from(subtitleSplit.lines, {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            ease: 'expo.inOut',
            stagger: 0.06,
            delay: 1,
            scrollTrigger: {
              trigger: '#main',
              start: 'top 70%',
              toggleActions: 'play none none none'
            }
          });

          gsap.from(waitSplit.lines, {
            yPercent: 100,
            opacity: 0,
            duration: 1.6,
            ease: 'expo.inOut',
            stagger: 0.06,
            delay: 3,
            scrollTrigger: {
              trigger: '#main',
              start: 'top 70%',
              toggleActions: 'play none none none'
            }
          });

   }, [])
 
  return (
    <>
     <div className='relative h-screen w-full overflow-hidden'>
     <div id='main' className=' relative z-10 flex flex-col items-center justify-center text-center w-full h-full'>  
        <h1 id='title' className=' p-4 rounded-xl md:text-4xl text-xl text-[#f5f5f5] font-bold drop-shadow-md'>Weather it's about covering your</h1>
        <h1 id='subtitle' className='p-4 rounded-xl md:text-8xl text-2xl font-bold drop-shadow-md bg-gradient-to-r from-[yellow] to-white bg-clip-text text-transparent'>
            Haldi Ceremony
        </h1>
        <h1 id='wait' className='p-4 rounded-xl md:text-6xl text-2xl text-[#f5f5f5] font-bold drop-shadow-md'>OR</h1>


    </div>

    
    <div id='videoSec' className='w-full h-screen'>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload='metadata'
            src='/background.mp4'
            className='w-full h-full object-cover object-center'
          />
        </div>
     </div>
    </>
  )
}

export default Services
