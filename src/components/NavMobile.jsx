import React from 'react'
import { nav } from '../data'

const NavMobile = ({mobile}) => {
    return (
        <div className={`${mobile ? 'min-h-screen' : 'min-h-0'} lg:hidden w-full bg-neutral-100 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0`}>
            <ul className='w-full h-full flex flex-col justify-center items-center gap-y-8'>
                {nav.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className='text-black text-body-sm' href={item.href}>{item.name}</a>
                        </li>
                    )
                })}
            </ul>
            <div className='flex -mt-20 justify-center'>
                <button className='btn btn-lg text-white btn-primary'>Explore</button>
            </div>
        </div>
    )
}

export default NavMobile
