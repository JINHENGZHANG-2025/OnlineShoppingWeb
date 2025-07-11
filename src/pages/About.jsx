import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
        <div className='text-2x1 text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'}/>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <p>Strawedwe was born to a pssion to the game of Strawdew and a desire to help use guide the prce of items inside this game.</p>
                <p>Since our inception, we workerd to make players happy.</p>
                <b className='text-gray-800'>Our Mission</b>
                <p>Our mission is give happines to this word. Since our inception, we workerd to make players happy.</p>
            </div>
        </div>

        <div className='text-x1 py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance:</b>
                <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our strigent</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p className='text-gray-600'>With our user-friendly interface, We meticulously select and vet each product to ensure it meets our strigent</p>
            </div>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer Service:</b>
                <p className='text-gray-600'> Our team of dedicated professionals</p>
            </div>
        </div>
      
        <NewsletterBox />
    </div>
  )
}

export default About
