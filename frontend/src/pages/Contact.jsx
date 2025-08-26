import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      
    <div className='text-center text-2xl pt-20 text-gray-500'>
      <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>      
    </div>

    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>

      <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='fomt-semibold text-lg text-gray-600'>OUR OFFICE</p>
        <p className='text-gray-500'>456 Villa Town <br />Bihiya Bhojpur</p>
        <p className='text-gray-500'>TEL: +91-6287-998866 <br /> Email: avinash@doctors.com</p>
        <p className='font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
        <p className='text-gray-500'>Learn more about our teams and job openings.</p>
        <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
      </div>
    </div>

    </div>
  )
}

export default Contact