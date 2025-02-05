import React from 'react'
import { HyperText } from '../ui/hyper-text'


function Aboutus() {
  return (
    
        <div id="about" className="pt-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-mono text-4xl font-extrabold text-white sm:text-5xl">
           <HyperText >About us </HyperText>
          </h2>
          <p className="mt-4 max-w-5xl mx-auto text-xl text-white/80 font-sans text-justify">
          Hack to the Hive is an international hackathon that brings together passionate innovators to solve exciting technological challenges. It provides a collaborative space where participants can transform their ideas into impactful solutions while gaining valuable insights from expert mentors.

Over the course of 30 hours, participants will experience hands-on coding, creative problem-solving, and opportunities to learn and grow in a competitive yet supportive environment. Join us to push the boundaries of technology, connect with like-minded individuals, and leave a lasting impact on the tech community.
          </p>
        </div>
        </div>
        </div>
      
    
  )
}

export default Aboutus
