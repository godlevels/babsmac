import React from 'react'
import { contact } from '../data'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const Contact = () => {
  const { title, info, form } = contact
    return (
        <div>
          <div className='container mx-auto px-6'>
            <div className='flex flex-col lg:flex-row gap-y-16'>
              <div className='flex-1'>
                <h2 className='h2 section-title'>{title} <span className='text-primary-200'>:</span></h2>

                <div className='flex flex-col lg:flex-row gap-x-10 gap-y-16 xl:gap-y-0 mt-14'>
                  {info.map((i, idx)=> {
                    const { title, subtitle, address, phone, email, link } = i
                    return (
                      <div key={idx}>
                        <div className='font-primary uppercase font-medium text-xl mb-3'>{title}</div>
                        <div className='mb-6 text-[#333] leading-[187%] tracking-[0.02em]'>{subtitle}</div>

                        <div className='flex flex-col gap-y-3'>
                          <div className='flex items-center gap-[10px]'>
                            <FaMapMarkerAlt />
                            <div className='font-medium'>{address.name}</div>
                          </div>

                          <div className='flex items-center gap-[10px]'>
                            <FaPhoneAlt />
                            <div className='font-medium'>{phone.number}</div>
                          </div>

                          <div className='flex items-center gap-[10px]'>
                            <FaEnvelope />
                            <div className='font-medium'>{email.address}</div>
                          </div>

                          <a className='font-medium border-b border-secondary pb-[5px]' href="#">{link}</a>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className='flex-1 lg:pl-[40px] flex justify-center items-center mt-24'>
                <form className='flex flex-col gap-y-10 w-full'>
                  <input className='border-b border-slate-800 placeholder:text-[#555] outline-none italic tracking-[0.06em] pb-4' placeholder={form.name} type="text" />

                  <input className='border-b border-slate-800 placeholder:text-[#555] outline-none italic tracking-[0.06em] pb-4' placeholder={form.email} type="text" />

                  <input className='border-b border-slate-800 placeholder:text-[#555] outline-none italic tracking-[0.06em] pb-4' placeholder={form.message} type="text" />

                  <button className='btn btn-sm btn-primary w-[20%]'>{form.btnText}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Contact
