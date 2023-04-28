import React from 'react'
import { clients } from '../data'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import '../workSlider.css'
// import { Navigation, Autoplay } from 'swiper'
const WorkoutSlider = () => {
    const { logos } = clients
    return (
        <Swiper slidesPerView={2}>
            {logos.map((logo, index) => {
                const { image } = logo
                return (
                    <SwiperSlide className='max-w-[150px] max-h-[70px]' key={index}>
                        <img className='h-full flex items-center' src={image} alt="" />
                    </SwiperSlide>
                )
            })} 
        </Swiper>
    )
}

export default WorkoutSlider
