import React from 'react'

// animation libraries to be imported
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger)

const Details = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#packagesDiv',
        start: 'top bottom',
        end: 'bottom 70%',
        scrub: true,
        toggleActions: "play none none reverse",
      }
    })

    tl.fromTo('#packages',
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' }
    ).fromTo('#items',
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' },
      '-=0.5'
    )
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
  ]

  return (
    <div id='packagesDiv' className='relative mt-40 bg-white py-10'>
      <h1
        id='packages'
        className='md:text-8xl text-3xl w-full text-center text-gray-900 font-bold mt-20'>
        Packages
      </h1>

      <div id='items' className='flex items-center justify-center flex-wrap mt-20 px-4'>
        {eventSetups.map((ele, index) => (
          <div
            key={index}
            className='bg-white border border-gray-200 rounded-xl w-fit h-fit p-6 shadow-md m-4 text-gray-800 hover:scale-105 hover:shadow-xl transform transition duration-500 ease-in-out'
          >
            <h3 className='md:text-2xl text-xl font-semibold text-center mb-2'>{ele.title}</h3>
            <h2 className='md:text-4xl text-2xl font-bold text-center my-4 text-indigo-600'>{ele.price}</h2>
            <ol className='text-base text-gray-700 font-normal list-disc list-inside space-y-1'>
              {ele.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Details
