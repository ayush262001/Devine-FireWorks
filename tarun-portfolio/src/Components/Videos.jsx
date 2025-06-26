'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

const Videos = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 757px)' });
  const [videoIdx, setVideoIdx] = useState(0);
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const content = contentRef.current;

    gsap.set([heading, content], { opacity: 0 });

    ScrollTrigger.create({
      trigger: heading,
      start: 'top center',
      end: 'bottom top',
      onEnter: () => gsap.to(heading, { opacity: 1, duration: 1 }),
      onLeaveBack: () => gsap.to(heading, { opacity: 0, duration: 0.5, delay: 0.5 }),
    });

    ScrollTrigger.create({
      trigger: content,
      start: 'top center+=100',
      end: 'bottom top',
      onEnter: () => gsap.to(content, { opacity: 1, duration: 1, delay: 1 }),
      onLeaveBack: () => gsap.to(content, { opacity: 0, duration: 0.5 }),
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='my-40'>
      <h1
        ref={headingRef}
        className='md:text-8xl font-bold text-center text-2xl text-[#f5f5f5] mb-15 opacity-0'
      >
        Our Work
      </h1>

      <div
        ref={contentRef}
        className={`flex ${isMobile? 'flex-col' : ''} flex-wrap items-center justify-center gap-4 opacity-0`}
      >
        <div className={`flex ${isMobile? 'flex-row' : 'flex-col'} gap-4 items-center justify-center`} id='right'>
          {['video1', 'video2', 'video3', 'video4'].map((vid, idx) => (
            <img
              key={vid}
              src={`/${vid}.png`}
              onClick={() => setVideoIdx(idx)}
              alt={vid}
              className={`w-[100px] h-[100px] object-cover hover:scale-110 transition-all duration-300 ${
                videoIdx === idx ? 'border-2 border-gray-200' : ''
              }`}
            />
          ))}
        </div>

        <div className='flex flex-col gap-4 items-center justify-center' id='left'>
          <video
            src={`/video${videoIdx + 1}.mp4`}
            autoPlay
            loop
            muted
            playsInline
            className='opacity-100 md:w-[70dvw] h-[70dvh] shadow-md object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Videos;
