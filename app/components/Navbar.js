'use client'
import Link from 'next/link'
import { Instagram } from 'lucide-react' // using lucide-react icons (can switch to anything)

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50  text-white">
      {/* Top Row */}
      <div className="flex justify-center md:justify-between items-center px-6 py-3 text-md mx-auto max-w-7xl">
        <a className='hidden md:block' href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-5 h-5" />
        </a>
          <div className="text-center">
          <img src="/logo.png" alt="Svako Dobro" className="h-30 mx-auto" />
        </div>
        <button className="border hidden text-md md:block border-white px-4 py-1 hover:bg-white hover:text-black transition">
          Book a Table
        </button>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">
        {/* Left nav links */}
        <ul className="hidden md:flex space-x-6 text-md uppercase">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#menu">Menu</Link></li>
      
          <li><Link href="#testimonials">Testimonials</Link></li>
          <li><Link href="#gallery">Gallery</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
