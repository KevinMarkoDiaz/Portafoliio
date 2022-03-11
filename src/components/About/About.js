import React from 'react'
import { BodyBanner } from '../Body/BodyBanner'
import { Footer } from '../Footer/Footer'
import { NavBar } from '../NavBar/NavBar'
import { AboutDescription } from './AboutDescription'
import { NextSkills } from './NextSkills'

export const About = () => {
  return (
    <>
      <NavBar />
      <BodyBanner/>
      <AboutDescription/>
      <NextSkills/>
      <Footer />
    </>
  )
}
