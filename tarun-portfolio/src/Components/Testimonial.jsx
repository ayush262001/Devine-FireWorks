import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO at Example Inc.',
    text: 'This platform transformed our business. The automation saved us countless hours!',
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Lead at AgencyCo',
    text: 'The interface is intuitive and the results speak for themselves. Highly recommend!',
  },
  {
    name: 'Alex Johnson',
    role: 'Realtor at HomeFinders',
    text: 'I’ve closed more deals thanks to the smart tools offered here.',
  },
]

const Testimonial = () => {
  const containerRef = useRef()

  useGSAP(() => {
    gsap.utils.toArray('.testimonial-card').forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="mt-40 bg-white py-16 px-6 sm:px-12 lg:px-24 min-h-[100vh] w-[100vw]">
      <h2 className="md:text-8xl text-2xl font-bold text-center mb-10 text-gray-800">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card bg-gray-100 p-6 rounded-2xl shadow-lg h-full opacity-0"
          >
            <p className="text-xl text-gray-700 mb-4">“{testimonial.text}”</p>
            <div className="text-md text-gray-600 font-semibold">{testimonial.name}</div>
            <div className="text-sm text-gray-500">{testimonial.role}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
