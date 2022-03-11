import React from 'react'
import { BodyCarousel } from '../Body/BodyCarousel'
import { BodyDescription } from '../Body/BodyDescription'
import { ListSkills } from '../Body/ListSkills'
import { Footer } from '../Footer/Footer'
import { NavBar } from '../NavBar/NavBar'

export const Home = () => {
  return (
    <>
    <NavBar/>
    <BodyCarousel/>
    <BodyDescription/>
    <ListSkills/>
    <Footer/>
    </>
  )
}
