import React from 'react'
import { Banner, Bestdeal, Contactus, Featured, Properties, Vedioview } from '../containers'

const Homepage = () => {
  return (
    <>
      <Banner />
      <Featured />
      <Vedioview />
      <Bestdeal />
      <Properties />
      <Contactus />
    </>
  )
}

export default Homepage