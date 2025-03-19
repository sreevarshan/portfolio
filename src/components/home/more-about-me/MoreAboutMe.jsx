import React from 'react'
import Intro from './about/Intro'
import Drone from './about/Drone'
import DroneCarousel from './carousel/DroneCarousel'
import SocialMedia from './about/SocialMedia'
import CrossFit from './about/CrossFit'
import CrossfitCarousel from './carousel/CrossfitCarousel'
import Outro from './about/Outro'

const MoreAboutMe = () => {
  return (
    <>
        <div className="flex flex-col items-center bg-white dark:bg-gray-800">
        <Intro/>
        <Drone/>
        <DroneCarousel/>
        <SocialMedia/>
        <CrossFit/>
        <CrossfitCarousel/>
        <Outro/>
        </div>
    </>
  )
}

export default MoreAboutMe
