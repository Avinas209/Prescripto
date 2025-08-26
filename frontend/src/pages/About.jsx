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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aliquid. Tenetur a blanditiis eum. Fugit doloremque in similique at aperiam dolore, minus maxime laudantium ut. Ipsam impedit dolorem deserunt, nihil ducimus cupiditate quae ab possimus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit consequatur minus deleniti nostrum aperiam temporibus ad incidunt! Sed officia aperiam inventore at recusandae aliquid praesentium nemo, quasi corrupti quis, blanditiis velit hic perspiciatis excepturi incidunt nam, id dolorum. Nihil modi doloremque veritatis, sed corrupti nisi.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique excepturi, aliquid suscipit natus nisi culpa dolor deserunt non eaque accusamus, cupiditate consequatur harum possimus praesentium.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Convenience:</b>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores enim dolor quo?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Personalization:</b>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, est.</p>
        </div>
      </div>

    </div>
  )
}

export default About