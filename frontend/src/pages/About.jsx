import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center pt-10 text-2xl text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='flex flex-col my-10 gap-12 md:flex-row'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Prescripto is a modern healthcare platform designed to simplify how patients connect with doctors. We provide an easy and reliable way to search, compare, and book appointments with verified medical professionals—all in one place.</p>
          <p>Our platform is built with a focus on accessibility and efficiency, ensuring that users can find the right doctor without unnecessary delays. Whether it's a routine checkup or urgent consultation, Prescripto helps you take control of your healthcare journey.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision is to make quality healthcare accessible to everyone by leveraging technology. We aim to eliminate long waiting times, improve doctor-patient connectivity, and create a seamless digital experience for managing medical appointments.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Book appointments in minutes with a streamlined and user-friendly interface, reducing the time spent searching for the right doctor.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Convenience:</b>
        <p>Access a wide network of trusted doctors anytime, anywhere, without the hassle of long queues or manual booking processes.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Personalization:</b>
        <p>Get tailored recommendations based on your needs, helping you find the most suitable healthcare provider quickly.</p>
        </div>
      </div>

    </div>
  )
}

export default About