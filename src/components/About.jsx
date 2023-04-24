import React from 'react'
import { about } from '../data'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

const About = () => {
    const {title, subtitle1, subtitle2, icon, link} = about
    return (
        <div className='py-[80px] md:py-[80px] lg:pb-[80px]'>
            <div className='container mx-auto px-[20px] lg:px-[135px]'>
                <div className='section-title-group justify-start'>
                    <img src={icon} alt="" />
                    <h1 className='h2 section-title'>{title} <span className='text-primary-200'>.</span></h1>
                </div>
                <p className='md:text-body-md mb-12'>{subtitle1}</p>
                <p className='md:text-body-md mb-8'>{subtitle2}</p>
                <div>
                    <a className='link flex items-center gap-x-2 hover:gap-x-4 transition-all' href="#">
                        {link}
                        <IoIosArrowDroprightCircle className='text-xl' />
                    </a>
                </div>
            </div>  
        </div>
    )
}

export default About
