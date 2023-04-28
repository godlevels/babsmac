import React from 'react'
import { footer } from '../data'

const Footer = () => { 
    const year = new Date().getFullYear()
    const { copyrightText } = footer
    return (
        <div className='bg-neutral-500 mt-10'>
            <div className='mx-auto container h-[40px]'>
                <p className='text-sm pt-3'>&copy; Babsmac {year}. {copyrightText}</p>
            </div>
        </div>
    )
}

export default Footer
