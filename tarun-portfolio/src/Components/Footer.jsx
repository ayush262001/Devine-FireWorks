import React from 'react'
import { FaWhatsapp, FaInstagram, FaGlobe } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] py-10 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 text-center md:text-left">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="text-lg">+91 89479 95552</p>
          <p className="text-lg">582 near durga mata temple, shop 4, Tonk Road, DurgaPura, Jaipur</p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-bold mb-2">Connect with Us</h2>
          <div className="flex items-center justify-center md:justify-start gap-4 text-lg">
            <a href="https://wa.me/918947995552" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 flex items-center gap-2">
              <FaWhatsapp /> WhatsApp
            </a>
            <a href="https://instagram.com/divine_events_and_fireworks" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 flex items-center gap-2">
              <FaInstagram /> Instagram
            </a>
            <a href="https://www.divineeventsandfireworks.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex items-center gap-2">
              <FaGlobe /> Website
            </a>
          </div>
        </div>

      </div>

      <div className="text-center text-lg mt-10 text-gray-600">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
