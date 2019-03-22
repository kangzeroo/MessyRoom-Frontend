/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React from 'react'
import "./LandingPage.scss"
import LandingHeader from './LandingHeader/LandingHeader'
import LandingDemo from './LandingDemo/LandingDemo'
import LandingCaseStudies from './LandingCaseStudies/LandingCaseStudies'
import LandingGallery from './LandingGallery/LandingGallery'
import LandingTestimonials from './LandingTestimonials/LandingTestimonials'
import LandingFooter from './LandingFooter/LandingFooter'
import brands from '../../assets/brands.json'
import gallery from '../../assets/gallery.json'
import testimonials from '../../assets/testimonials.json'

/** <LandingPage>
 *
 *
**/
export default ({}) => {
  return (
    <div id="LandingPage">
      <div id="LandingPageGradient">
        <LandingHeader />
        <LandingDemo />
      </div>
      <LandingGallery gallery={gallery} />
      <div style={{ height: "50px", width: "100%" }}></div>
      <LandingCaseStudies brands={brands} />
      <LandingTestimonials testimonials={testimonials} />
      <LandingFooter />
    </div>
  )
}
