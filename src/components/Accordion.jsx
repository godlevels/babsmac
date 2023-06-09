import React, { useState } from 'react'
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa'


const Accordion = ({accordion}) => {
    const [open, setOpen] = useState(false)

    const { question, answer } = accordion
    return (
        <div onClick={()=> setOpen(!open)} className='cursor-pointer'>
            <div className='bg-white border rounded-sm'>
                <div className='min-h-[60px] flex items-center justify-between px-[30px]'>
                    <h6 className='h6'>{question}</h6>
                    <div>
                        {open ? <FaChevronCircleUp className='text-[20px] text-neutral-500' /> : <FaChevronCircleDown className='text-[20px] text-neutral-500' />}
                    </div>
                </div>

                <div className={` ${open ? 'min-h-[200px] lg:min-h-[160px]' : 'min-h-0'} max-h-0 overflow-hidden flex justify-center transition-all px-[30px]`}>
                    <h3 className='mt-6'>{answer}</h3>
                </div>
            </div> 
        </div>
    )
}

export default Accordion
