import { useEffect, useState } from 'react'
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6'

const codeText = '<Frontend Developer />'
export const HeroBox = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <>
      <div className=' flex flex-col-reverse lg:flex-row justify-center items-center gap-4 lg:gap-8 mx-8'>
        <div className='flex flex-col lg:w-[50%] max-w-[750px] gap-1 text-center lg:text-left'>
          <p className='text-secondary lg:text-lg'>Hello,</p>
          <h1 className='text-xl md:text-3xl lg:text-5xl font-bold text-[#4b4f5d]'>I'm <span className='text-primary'>Carlos</span> Luna</h1>
          <h2 className='text-secondary font-semibold md:text-lg lg:text-xl'>{codeText}</h2>
          <p className='text-sm md:text-base text-secondary sm:w-[80%] max-lg:self-center pt-2'>Focused on Front-End development with React and Next.js. Currently learning about AWS and different technologies, I love to get involve in new projects and take new challengues.</p>
          <a href='/CarlosLuna-CV.pdf' download='carlos-luna-cv' className='bg-primary mt-4 w-fit self-center lg:self-start p-2 rounded-sm font-semibold hover:scale-105 hover:bg-red-800 transition-all duration-300 ease-in-out'>Download CV</a>
        </div>
        {
          loaded
            ? (
              <img className='rounded-full h-60 lg:h-80 xl:h-96 w-auto object-cover border-2 shadow-xl aspect-square' src='/profile-2.jpg' alt='profile picture' />
              )
            : (
              <div className='h-60 lg:h-80 xl:h-96 aspect-square animate-pulse bg-gray-200 rounded-full' />
              )
        }
      </div>

      <div className='absolute left-8 lg:left-28 bottom-5 flex gap-4 text-slate-800'>
        <a
          className='hover:scale-[1.15] transition-transform duration-300 ease-in-out'
          href='https://github.com/CharlyLuna'
          target='_blank'
          rel='noreferrer noopener'
          aria-label="Open in a new window Carlos Luna's GitHub profile"
        >
          <FaSquareGithub size={35} />
        </a>
        <a
          className='hover:scale-[1.15] transition-transform duration-300'
          href='https://www.linkedin.com/in/ch-luna/'
          aria-label="Open in a new window Carlos Luna's LinkedIn profile"
        >
          <FaLinkedin size={35} />
        </a>
      </div>
    </>
  )
}
