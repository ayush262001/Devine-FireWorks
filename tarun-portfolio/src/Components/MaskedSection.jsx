import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const MaskedSection = () => {

    const isMobile = useMediaQuery({maxWidth: 767});

    

    useGSAP(()=>{
        const start = isMobile? 'top 20%' : 'top center';
        const maskedTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start: start,
                end: 'bottom center',
                scrub: 2,
                pin: true
            }
        })

        maskedTimeline.to('#hands', {
            scale: 1.3, maskPosition:'center', maskSize: '400%', duration: 0.8, ease: 'power1.inOut' 
        })
    }, [])

    useGSAP(()=>{
        const textSplit = new SplitText('#head', { type: 'lines' });
    const paraSplit = new SplitText('#sub', { type: 'lines' });

    gsap.from(textSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: 'expo.inOut',
      stagger: 0.08,
      delay: 1,
      scrollTrigger: {
        trigger: '#head',
        start: 'top 60%',
        toggleActions: 'play none none none'
      }
    });

    gsap.from(paraSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.6,
      ease: 'expo.inOut',
      stagger: 0.06,
      delay: 2.5,
      scrollTrigger: {
        trigger: '#sub',
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    });

    gsap.from('.divStyle',{
        yPercent: 100,
        opacity:0,
        duration:1.6,
        ease:'expo.inOut',
        stagger: 0.06,
        delay:1.5,
        scrollTrigger:{
            trigger: "#styleMe",
            start: 'top 70%',
            
        }
    })
    }, [])


  return (
    <div className='flex flex-col items-center justify-center relative h-full w-full' id='art'>
      <img src='/couples.jpg' id='hands'
          
          style={{
            maskImage: 'url("/hands.png")',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            maskSize: '40%'
            }}

           className='abs-center z-1 md:w-[50vw] w-[95vw] md:h-[50vh] h-[60vh] rounded-3xl object-cover mx-auto position-bottom' />

        <div className='text-[#f5f5f5] z-10 text-center relative'>
            <h1 className='md:text-6xl text-2xl mt-25' id='head'>More Than Just a Wedding</h1>
            <p className='md:text-xl text-lg mt-2' id='sub'>We Create Celebrations Your Family Will Never Forget</p>

            <div className='mt-30 flex items-center-justify-center flex-wrap mb-[5vh]' id='styleMe'>
                <div className='divStyle md:w-[33.33%] w-[100%] flex items-center justify-center'><p className='px-6 py-4 rounded-xl bg-[#f5f5f560] w-fit font-bold md:text-xl text-md m-6'>We craft unforgettable experiences.</p></div>
                <div className='divStyle md:w-[33.33%] w-[100%] flex items-center justify-center'><p className='px-6 py-4 rounded-xl bg-[#f5f5f560] w-fit font-bold md:text-xl text-md m-6'>From weddings to club nights.</p></div>
                <div className='divStyle md:w-[33.33%] w-[100%] flex items-center justify-center'><p className='px-6 py-4 rounded-xl bg-[#f5f5f560] w-fit font-bold md:text-xl text-md m-6'>Traditional or modern – we do it all.</p></div>
                <div className='divStyle md:w-[50%] w-[100%] flex items-center justify-center md:ml-[60px]'><p className='px-6 py-4 rounded-xl bg-[#f5f5f560] w-fit font-bold md:text-xl text-md m-6'>Personalized planning, flawless execution.</p></div>
                <div className='divStyle md:w-[50%] w-[100%] flex items-center justify-left md:ml-[-60px]'><p className='px-6 py-4 rounded-xl bg-[#f5f5f560] w-fit font-bold md:text-xl text-md m-6'>Every moment, designed with care.</p></div>
                <div className='divStyle md:w-[100%] w-[100%] flex items-center justify-center'><p className='px-6 py-4 rounded-xl bg-[#f5f5f560] w-fit font-bold md:text-xl text-md m-6'>Your celebration, our commitment.</p></div>
            </div>

        </div>
    </div>
  )
}

export default MaskedSection
