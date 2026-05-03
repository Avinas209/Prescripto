import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-slate-100'>
        <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* -------Left Section------- */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto is a seamless healthcare booking platform that connects patients with trusted doctors. We make scheduling appointments simple, fast, and reliable—so you can focus on your health, not the hassle.    </p>
            </div>
            {/* --------Middle Section-------- */}
            <div >
                <p className='text-xl font-medium mb-5 '>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/* --------Right Section--------- */}
            <div>
                 <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
                 <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 628-7889-986</li>
                    <li>avinash@google.com</li>
                    <li><a href="https://prescripto-admin-gules.vercel.app/">Admin Login</a></li>
                 </ul>
            </div>
        </div>

        {/* -------Copywrite Text --------- */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2026@ Prescripto - All Right Reserved</p>
        </div>
    </div>
    </div>
  )
}

export default Footer