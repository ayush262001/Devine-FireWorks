import React from 'react'

// animation libraries to be imported
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'

const Details = () => {

  // Implementing GSAP animation here
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#packagesDiv',
        start: 'top bottom',
        end: 'bottom 70%',
        scrub: true,
        toggleActions: "play none none reverse"
      }
    });

    // animate using timeline
    tl.fromTo('#packages', 
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' }
    )
    .fromTo('#items', 
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' },
      '-=0.5' // Start slightly before the previous animation ends
    );

  }, [])

  const eventSetups = [
    {
      title: "Sangeet Night Setup",
      price: "₹1,00,000",
      items: [
        "Premium Sound System (4 Top + 2 Bass)",
        "2 Sharpee Lights for Focus Effects",
        "SFX Special Effects Setup",
        "2 CO2 Jets & 2 Spacular Machines",
        "20 LED Lights on Stage for Dynamic Lighting",
        "Live Dhol Performance"
      ]
    },
    {
      title: "Haldi Ceremony Setup",
      price: "₹1,00,000",
      items: [
        "15' x 30' Trust Structure",
        "Carpet Flooring",
        "Theme-based Props",
        "Creative Selfie Point",
        "Stage Carpet Setup",
        "Professional Sound System (2 Top + 2 Bass)",
        "Haldi Decor Elements",
        "Vermala Setup",
        "Decorative U-Gate",
        "Comfortable Seating (Chairs + Sofas + Couch)",
        "4 Traditional Dhol Artists"
      ]
    },
    {
      title: "Wedding Setup",
      price: "₹1,00,000",
      items: [
        "12' x 60' Trust Structure with Fabric (Kapda) Covering",
        "Exclusive Props & Decor Elements",
        "Stylish Selfie Point",
        "Designer Panel Gate",
        "50 Cop Lights for Grand Illumination",
        "Stunning Backdrop Setup",
        "VIP Lounge Setup",
        "Designer Wedding Mandap",
        "Elegant Mirror Entry Passage",
        "Backstage Aatishbazi (Fireworks)",
        "Electric Pairo Effects",
        "Stage Carpet Arrangement"
      ]
    }
  ];
  

  return (
    <div id='packagesDiv' className='relative mt-20'>
        <h1 id='packages' className='md:text-8xl text-2xl w-full text-center text-[#f5f5f5] font-bold'>
          Packages
        </h1>
        
        <div id='items' className='flex items-center justify-center flex-wrap mt-20'>
            {/* Every single div will be created here */}
           {eventSetups.map((ele, index)=>(
            <>
             <div className='bg-[#f5f5f520] w-fit h-fit p-6 shadow-xl m-4 text-[#f5f5f5] hover:scale-110 hover:bg-[#f5f5f530] transform transition-[2000]' key={index}>
                <h3 className='md:text-2xl text-xl font-semibold text-wrap text-center'>{ele.title}</h3>
                <h2 className='md:text-4xl my-6 text-2xl font-semibold text-wrap text-center'>{ele.price}</h2>
                <p className='text-lg text-center text-wrap font-thin'>
                  <ol>
                    {ele.items.map((item, i)=>(
                      <li key={i} className='my-1'>{item}</li>
                    ))}
                  </ol>
                </p>
             </div>
            </>
           ))}
        </div>
    </div>
  )
}

export default Details
