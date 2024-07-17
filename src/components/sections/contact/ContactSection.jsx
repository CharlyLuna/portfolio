import React from 'react'
import { Form } from './Form'

export const ContactSection = () => {
  return (
    <section id='contact' className='mb-20'>
      <h1 className='flex justify-center mb-14 pt-20 text-3xl text-[#4b4f5d] font-bold'>CONTACT</h1>
      <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
        <Form />
        <div className='text-secondary w-[30%] text-center md:text-start'>
          <h2 className='text-5xl'>Lets talk!</h2>
          <p className='text-lg pt-2'>I'm open to hear about your ideas an propositions.</p>
        </div>
      </div>
    </section>
  )
}
