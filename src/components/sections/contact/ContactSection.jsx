import React from 'react'
import { Form } from './Form'

export const ContactSection = () => {
  return (
    <section id='contact' className='lg:mb-28'>
      <div className='relative flex flex-col lg:flex-row items-center gap-8 px-4 py-10 lg:px-16 xl:px-32 bg-slate-800 lg:min-h-[500px]'>
        <div className='justify-self-start text-center lg:text-start lg:w-1/2 max-w-[600px]'>
          <h1 className='text-xl font-bold'>Contact me</h1>
          <h2 className='text-4xl xl:text-5xl'>Do you want to talk?</h2>
          <p className='mt-4 xl:text-xl'>Either you need help with somethig, you want to ask me about programming or just small talk, you can send me a message, I will answer you as soon as I can.</p>
        </div>
        <Form />
      </div>
    </section>
  )
}
