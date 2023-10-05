import ProfilePic from '../assets/ai-self-pic.png'
import { GithubIcon } from './GithubIcon'
import { LinkedInIcon } from './LinkedInIcon'

const codeText = '<Frontend Developer />'
export const HeroBox = () => {
  return (
    <>

      <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-4 lg:gap-8 mx-8'>
        <div className='flex flex-col lg:w-[50%] max-w-[750px] gap-1 text-center lg:text-left'>
          <p className='text-secondary lg:text-lg'>Hello,</p>
          <h1 className='text-3xl lg:text-5xl font-bold text-[#4b4f5d]'>I'm <span className='text-primary'>Carlos</span> Luna</h1>
          <h2 className='text-secondary font-semibold text-lg lg:text-xl'>{codeText}</h2>
          <p className='text-secondary sm:w-[80%] max-lg:self-center pt-2'>Focused on Front-End development with React. Love to learn new technologies and eager to get involve in new projects.</p>
          <button className='bg-primary mt-4 w-fit self-center lg:self-start p-2 rounded-sm font-semibold hover:scale-110 hover:bg-accent transition-all duration-300 ease-in-out'>Download CV</button>
        </div>
        <div className='p-2 border border-secondary rounded-full'>
          <img className='rounded-full h-60 lg:h-80 xl:h-96 w-auto object-cover' src={ProfilePic} alt='profile picture' />
        </div>

      </div>
      <div className='absolute left-10 bottom-5 flex lg:justify-start flex-col lg:max-w-[30%] gap-4'>
        <div className='flex gap-5'>
          <a
            className='hover:scale-[1.15] transition-transform duration-300 ease-in-out'
            href='https://github.com/CharlyLuna'
            target='_blank'
            rel='noreferrer noopener'
          >
            <GithubIcon />
          </a>
          <a
            className='hover:scale-[1.15] transition-transform duration-300'
            href=''
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </>
  )
}
