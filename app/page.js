import React from 'react'
import Hero from './Hero'
import AboutUs from './ábout'
import Secondbg from './secondbg'
import MenuPreview from './menu'

import Weserve from './weserve'
import Testimonials from './testimonials'
import Slider from './slider'
import InfoSection from './Footer'


export default function page() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Secondbg />
      <MenuPreview/>
      <Weserve />
      <Testimonials />
      <Slider/>
      <InfoSection/>
    </div>
  )
}
