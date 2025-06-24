import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React, { useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Services = () => {
  const isMobile = useMediaQuery({ maxWidth: 757 });

  // ✅ Declare refs outside of useGSAP
  const containerRef = useRef();
  const imageRefs = useRef([]);

  const ImageData = [
    { img: "Image 1", link: '/img1.png' },
    { img: "Image 2", link: '/img2.png' },
    { img: "Image 3", link: '/img3.png' },
    { img: "Image 4", link: '/img4.jpg' },
    { img: "Image 5", link: '/img5.jpg' },
    { img: "Image 6", link: '/img6.jpg' },
    { img: "Image 7", link: '/img7.jpg' },
    { img: "Image 8", link: '/img8.jpg' },
    { img: "Image 9", link: '/img9.jpg' },
    { img: "Image 10", link: '/img10.png' },
    { img: "Image 11", link: '/img11.jpg' },
    { img: "Image 12", link: '/img12.png' },
    { img: "Image 13", link: '/img13.jpg' },
    { img: "Image 14", link: '/img14.png' },
    { img: "Image 15", link: '/img15.png' },
    { img: "Image 16", link: '/img16.png' },
  ];

  useGSAP(() => {
    // SplitText animations
    const titleSplit = new SplitText('#title', { type: 'lines' });
    const subtitleSplit = new SplitText('#subtitle', { type: 'lines' });
    const waitSplit = new SplitText('#wait', { type: 'lines' });

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
        toggleActions: 'play none none none',
      },
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
        toggleActions: 'play none none none',
      },
    });

    gsap.from(waitSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.6,
      ease: 'expo.inOut',
      stagger: 0.06,
      delay: 2.2,
      scrollTrigger: {
        trigger: '#main',
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    });

    // ScrollTrigger image sequence
    gsap.set(imageRefs.current, { autoAlpha: 0 });
    gsap.set(imageRefs.current[0], { autoAlpha: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${ImageData.length * 100}vh`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });


    tl.from(containerRef.current, {
      opacity: 0,
      scale: 0,
      duration: 2,
      ease: 'power1.inOut',
    })

    ImageData.forEach((_, i) => {
      if (i === 0) return;
      tl.to(imageRefs.current[i - 1], { autoAlpha: 0, duration: 0.2 }, i);
      tl.to(imageRefs.current[i], { autoAlpha: 1, duration: 0.2 }, i);
    });
  }, []);

  return (
    <div className='relative w-full overflow-hidden'>
      <div
        id='main'
        className='relative z-10 flex flex-col items-center justify-center text-center w-full h-screen'
      >
        <h1
          id='title'
          className='p-4 rounded-xl md:text-4xl text-xl text-[#f5f5f5] font-bold drop-shadow-md'
        >
          Weather it's about covering your
        </h1>
        <h1
          id='subtitle'
          className='p-4 rounded-xl md:text-8xl text-2xl font-bold drop-shadow-md bg-gradient-to-r from-[yellow] to-white bg-clip-text text-transparent'
        >
          Haldi Ceremony
        </h1>
        <h1
          id='wait'
          className='p-4 rounded-xl md:text-6xl text-2xl text-[#f5f5f5] font-bold drop-shadow-md'
        >
          OR
        </h1>

        <h1 className='text-center w-fit mx-auto text-[#f5f5f5] font-semibold md:text-2xl text-xl mt-30'>Scroll to know....</h1>
      </div>

      <div
          ref={containerRef}
          className='relative w-dvw h-dvh overflow-hidden'
        >
          

           <div className='w-full h-full flex items-center justify-center'>
      {ImageData.map((img, index) => (
        <img
          key={index}
          ref={(el) => (imageRefs.current[index] = el)}
          src={img.link}
          alt={img.img}
          className='md:w-[60%] w-[90%] md:h-[80%] h-[90%] object-cover rounded-2xl absolute'
        />

      ))}
    </div>

    {/* Let's add the additional feature */}
    {
            isMobile ? (<></>) :
            (<>
            <div className='absolute top-0 left-0 min-w-[200px] min-h-[100px] flex flex-col items-center justify-center bg-[#f5f5f550] rounded-xl m-10 p-4'>
               <h1 className='text-xl font-bold text-[#f5f5f5] text-wrap text-center'>Wedding and Planning</h1>
               <p className='text-md text-[#f5f5f5] font-semibold text-wrap text-center mt-2'>Turning 'I Do' into a Dream Come True</p>
            </div>
            <div className='absolute top-0 right-0 min-w-[200px] min-h-[100px] flex flex-col items-center justify-center bg-[#f5f5f550] rounded-xl m-10 p-4'>
               <h1 className='text-xl font-bold text-[#f5f5f5] text-wrap text-center'>Birthday Party and Events</h1>
               <p className='text-md text-[#f5f5f5] font-semibold text-wrap text-center mt-2'>Making Every Candle Count with Unforgettable Celebrations</p>
            </div>
            <div className='absolute bottom-0 left-0 min-w-[200px] min-h-[100px] flex flex-col items-center justify-center bg-[#f5f5f550] rounded-xl m-10 p-4'>
               <h1 className='text-xl font-bold text-[#f5f5f5] text-wrap text-center'>Welcome Party and Evenets</h1>
               <p className='text-md text-[#f5f5f5] font-semibold text-wrap text-center mt-2'>The Warmest Welcome Starts with the Perfect Party</p>
            </div>
            <div className='absolute bottom-0 right-0 min-w-[200px] min-h-[100px] flex flex-col items-center justify-center bg-[#f5f5f550] rounded-xl m-10 p-4'>
               <h1 className='text-xl font-bold text-[#f5f5f5] text-wrap text-center'>Club Party and Events</h1>
               <p className='text-md text-[#f5f5f5] font-semibold text-wrap text-center mt-2'>Lights. Beats. Vibes. Your Night, Elevated</p>
            </div>
            </>)
          }
        
         
        
        </div>
    </div>
  );
};

export default Services;
