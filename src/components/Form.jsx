import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
export const Form = () => {
  const form = useRef()
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        setMessage('Message sent successfully!')
        form.current.reset()
      }, (error) => {
        console.log(error.text)
      })
  }

  return (
    <form ref={form} onSubmit={handleSubmit} className='flex flex-col gap-2 text-secondary shadow-lg bg-[#eee] py-8 px-4 w-[80%] md:w-[50%] max-w-[450px]'>
      <label htmlFor='name'>Name</label>
      <input required id='name' className='p-2 rounded-sm ' type='text' name='name' />
      <label htmlFor='email'>Email</label>
      <input required id='email' className='p-2 rounded-sm ' type='email' name='email' />
      <label htmlFor='message'>Message</label>
      <textarea required id='message' className='p-2 rounded-sm h-[100px] min-h-[100px]' type='text' name='message' />
      <button type='submit' className='bg-primary text-[#f5f5f5] mt-4 w-fit py-2 px-6 rounded-sm font-semibold hover:scale-105 hover:bg-accent transition-all duration-300 ease-in-out'>Send</button>
      {message && <p className='text-center text-sm text-green-500'>{message}</p>}
    </form>
  )
}
