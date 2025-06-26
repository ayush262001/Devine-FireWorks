import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    name: 'Shivani Lodha',
    role: 'Birthday Event at Diona',
    text: 'The event was a huge success. The team was professional and the setup was amazing. The firework display was the highlight of the event. The room was decorated beautifully and the food was delicious. The team was very helpful and the event was a lot of fun. I would definitely recommend this team for any event.',
  },
  {
    name: 'Mr.Manish',
    role: 'Wedding in Jaipur',
    text: 'The wedding was a huge success. With the great fireworks and drone shoot the recording was great. The memories and the laughter moments were captured beautifully. The team was very helpful and the event was a lot of fun. I would definitely recommend this team for any event.',
  },
  {
    name: 'Mohit Saini',
    role: 'Wedding in Jaipur',
    text: 'The wedding was great the fireworks were amazing and the unique setup was so beautiful. The team was very helpful and the event was a lot of fun. I would definitely recommend this team for any event.',
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
