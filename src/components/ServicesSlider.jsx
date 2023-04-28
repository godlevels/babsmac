import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'


const ServicesSlider = ({works}) => {
    return (
        <Swiper slidesPerView={3} spaceBetween={32} centeredSlides={'auto'} grabCursor={true} modules={[]}>
            {works.map((i, idx) => {
                const { image, title, subtitle } = i
                return (
                    <SwiperSlide key={idx}>
                        <div className='relative'>
                            <div>
                                <img className='rounded-md' src={image} alt="" />
                            </div>

                            <div className='absolute bottom-[30px] p-[20px]'>
                                <div className='flex items-center justify-center gap-x-[3px]'>
                                    <span className='text-[50px] text-primary-200 font-bold'>~</span>
                                    <h2 className='mb-8 text-[40px] text-white font-bold px-[30px] pt-9'>{title}</h2>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default ServicesSlider
