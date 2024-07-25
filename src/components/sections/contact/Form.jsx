import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
export const Form = () => {
  const form = useRef()
  const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      toast.error('All fields are required', {
        style: {
          padding: '16px',
          color: '#fff',
          backgroundColor: '#bb2649'
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#bb2649'
        }
      })
      return
    }
    setIsLoading(true)
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result)
        toast.success('Email send successfully', {
          style: {
            padding: '16px',
            color: '#fff',
            backgroundColor: '#00a86b'
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#00a86b'
          }
        })
        setIsLoading(false)
        form.current.reset()
      }, (error) => {
        setIsLoading(false)
        toast.error('Something went wrong sending the message', {
          style: {
            padding: '16px',
            color: '#fff',
            backgroundColor: '#bb2649'
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#bb2649'
          }
        })
        console.log(error.text)
      })
  }

  return (
    <form ref={form} onSubmit={handleSubmit} className='lg:absolute right-16 xl:right-32 -bottom-16 flex flex-col gap-2 text-secondary shadow-xl bg-white py-10 px-4 w-full max-w-[400px] xl:max-w-[450px]'>
      <label htmlFor='name'>Your name</label>
      <input required id='name' className='p-2 rounded-sm bg-gray-100' type='text' name='name' />
      <label htmlFor='email'>Your email</label>
      <input required id='email' className='p-2 rounded-sm bg-gray-100' type='email' name='email' />
      <label htmlFor='message'>Your message</label>
      <textarea required id='message' className='p-2 rounded-sm h-[150px] bg-gray-100' type='text' name='message' />
      <button disabled={isLoading} type='submit' className={`${isLoading ? 'bg-gray-500' : 'hover:scale-105 hover:bg-red-800'} bg-primary text-[#f5f5f5] mt-4 w-fit py-2 px-6 rounded-sm font-semibold transition-all duration-300 ease-in-out`}>
        {isLoading ? 'Sending...' : 'Send'}
      </button>
    </form>
  )
}
