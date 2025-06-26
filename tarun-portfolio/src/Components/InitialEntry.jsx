import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React, { useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplashCursor from './SplashCursor';

gsap.registerPlugin(ScrollTrigger, SplitText);

const InitialEntry = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const textSplit = new SplitText('#headline', { type: 'chars, words' });
    const paraSplit = new SplitText('#para', { type: 'lines' });

    gsap.from(textSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: 'expo.inOut',
      stagger: 0.08
    });

    gsap.from(paraSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.6,
      ease: 'expo.inOut',
      stagger: 0.06,
      delay: 2
    });

    
  }, []);

  return (
    <>
      <div className='relative'>
        <SplashCursor />
        <section id='content' className='w-dvw h-dvh flex flex-col items-center relative justify-center z-10'>
          <h1 id='headline' className='md:text-8xl text-2xl text-[#f5f5f5] font-bold text-center'>Divine Events & Fireworks</h1>
          <p id='para' className='md:text-xl text-mlg mt-10 text-[#f5f5f5]'>Creating Unforgettable Moments</p>

          
        </section>

      </div>

      {/* <div id='videoSec' className=' absolute bottom-0 left-0'>
          <video
            ref={videoRef}
            muted
            playsInline
            preload='metadata'
            src='/initial.mp4'
            className='w-[100vw] h-[100vh] object-cover object-center'
          />
        </div> */}
    </>
  );
};

export default InitialEntry;
