import React from 'react'

export const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2 text-secondary shadow-lg bg-[#eee] py-8 px-4 w-[80%] md:w-[50%] max-w-[450px]'>
      <label htmlFor='user_name'>Name</label>
      <input className='p-2 rounded-sm ' type='text' name='user_name' />
      <label htmlFor='user_email'>Email</label>
      <input className='p-2 rounded-sm ' type='text' name='user_email' />
      <label htmlFor='message'>Message</label>
      <textarea className='p-2 rounded-sm h-[100px] ' type='text' name='message' />
      <button type='submit' className='bg-primary text-[#f5f5f5] mt-4 w-fit py-2 px-6 rounded-sm font-semibold hover:scale-105 hover:bg-accent transition-all duration-300 ease-in-out'>Send</button>
    </form>
  )
}
