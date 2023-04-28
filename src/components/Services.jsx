import React from 'react'
import { services } from '../data'
import ServicesSlider from '../components/ServicesSlider'

const Services = () => {
    const { title, works } = services
    return (
        <div className='section relative mb-[250px] mt-[100px]'>
            <div className='mx-auto container'>
                <div className='flex'>
                    <div className='section-title-group max-w-[240px] px-4 lg:px-0 lg:ml-0 mx-auto'>
                        <h2 className='h2 section-title'>{title} <span className='text-primary-200'>.</span></h2>
                    </div>

                    <div className='absolute -right-[375px] lg:-right-[280px] w-[1100px] top-28 lg:top-0'>
                        <ServicesSlider works={works} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
