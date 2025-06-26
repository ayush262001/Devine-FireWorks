import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, SplitText)

const MaskedSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  useGSAP(() => {
    const start = isMobile ? 'top 20%' : 'top center'
    const maskedTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#art',
        start,
        end: 'bottom center',
        scrub: 2,
        pin: true,
      },
    })

    maskedTimeline.to('#hands', {
      scale: 1.3,
      maskPosition: 'center',
      maskSize: '400%',
      duration: 0.8,
      ease: 'power1.inOut',
    })
  }, [])

  useGSAP(() => {
    const textSplit = new SplitText('#head', { type: 'lines' })
    const paraSplit = new SplitText('#sub', { type: 'lines' })

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
        toggleActions: 'play none none none',
      },
    })

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
        toggleActions: 'play none none none',
      },
    })

    gsap.from('.divStyle', {
      yPercent: 100,
      opacity: 0,
      duration: 1.6,
      ease: 'expo.inOut',
      stagger: 0.06,
      delay: 1.5,
      scrollTrigger: {
        trigger: '#styleMe',
        start: 'top 70%',
      },
    })
  }, [])

  return (
    <div
      id='art'
      className='flex flex-col items-center justify-center relative h-full w-full bg-[#f5f5f5]'
    >
      <img
        src='/couples.jpg'
        id='hands'
        style={{
          maskImage: 'url("/hands.png")',
          WebkitMaskImage: 'url("/hands.png")',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
          maskSize: '40%',
          WebkitMaskSize: '40%',
        }}
        className='z-1 md:w-[50vw] w-[95vw] md:h-[50vh] h-[60vh] rounded-3xl object-cover mx-auto'
        alt='masked couple'
      />

      <div className='text-center z-10 w-full px-6'>
        <h1 id='head' className='md:text-6xl text-3xl font-bold text-[#212121] mt-16'>
          More Than Just a Wedding
        </h1>
        <p id='sub' className='md:text-xl text-lg mt-4 text-[#424242]'>
          We Create Celebrations Your Family Will Never Forget
        </p>

        <div
          id='styleMe'
          className='mt-16 flex flex-wrap justify-center items-center mb-[5vh]'
        >
          {[
            'We craft unforgettable experiences.',
            'From weddings to club nights.',
            'Traditional or modern – we do it all.',
            'Personalized planning, flawless execution.',
            'Every moment, designed with care.',
            'Your celebration, our commitment.',
          ].map((text, idx) => (
            <div
              key={idx}
              className='divStyle md:w-[33%] w-full flex items-center justify-center'
            >
              <p className='px-6 py-4 m-4 rounded-xl bg-[#21212110] text-[#212121] backdrop-blur-md w-fit font-semibold md:text-lg text-md text-center shadow-md'>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MaskedSection
