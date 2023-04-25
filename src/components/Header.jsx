import React, { useState, useEffect } from 'react' 
import { header } from '../data'
import Nav from '../components/Nav'
import NavMobile from '../components/NavMobile'
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri'


const Header = () => {
    const [open, setOpen] = useState(false)
    const [mobile, setMobile] = useState(false)
    const { logo, btnExplore } = header

    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            window.scrollY > 80 ? setOpen(true) : setOpen(false)
        })
    })

    return (
        <div className={`${open ? 'bg-neutral-100 py-[5px]' : 'bg-neutral-100 py-[5px]'} fixed max-w-[1440px] z-30 left-0 right-0 flex justify-between items-center px-[20px] lg:px-[50px] shadow-md mx-auto transition-all duration-300`}>
            <a href="">
                <img className='text-blue-300 w-14' src={logo} alt="" />
            </a>
            <Nav />
            <div className='hidden lg:flex'>
                <button className='btn btn-sm btn-primary'>{btnExplore}</button>
            </div>

            <div onClick={()=> setMobile(!mobile)} className='lg:hidden absolute right-4 top-6 cursor-pointer'>
                {mobile ? (<RiCloseFill className='text-primary-200 text-2xl flex items-center' />) : (<RiMenu4Fill className='text-primary-200 text-2xl flex items-center' />) }
            </div>

            <NavMobile mobile={mobile} />
        </div>
    )
}

export default Header
