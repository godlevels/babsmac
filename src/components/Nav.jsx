import React from 'react'
import { nav } from '../data'

const Nav = () => {
    return (
        <div className='hidden lg:flex'>
            <ul className='flex gap-x-8'>
                {nav.map((item, index)=> {
                    return (
                        <li key={index}>
                            <a className='hover:text-primary-200 transition' href={item.href}>{item.name}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Nav
