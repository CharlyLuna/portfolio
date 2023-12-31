import ProfilePic from '../assets/ai-self-pic.png'
import GithubIcon from '../assets/github.svg'
import LinkedInIcon from '../assets/linkedIn.svg'

export const HeroBox = () => {
  return (
    <div className='relative flex-col lg:flex-row flex justify-between items-center mx-4 md:mx-10 top-1/2 -translate-y-1/2 p-8 gap-2 md:gap-6 lg:gap-0 lg:bg-primary lg:border border-accent'>

      <h2 className='flex-grow text-center lg:text-start basis-0 text-md md:text-x text-secondary font-semibold'>FRONT-END DEVELOPER</h2>

      <div className='flex flex-col items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 text-center z-20 gap-2'>
        <div className='p-2 border border-secondary rounded-full'>
          <img className='rounded-full h-64 lg:h-80 xl:h-96 w-auto hover:drop-shadow-[0_0_20px_var(--accent)] transition-all duration-300 object-cover' src={ProfilePic} alt='profile picture' />
        </div>
        <div className='py-1'>
          <h1 className='text-2xl md:text-4xl font-bold text-secondary'>CARLOS LUNA</h1>
        </div>
      </div>

      <div className='flex lg:justify-start flex-col lg:max-w-[30%] gap-4'>
        <p className='text-base md:text-base text-center lg:text-end text-secondary'>Focused on Front-End development with React. Love to learn new technologies and eager to get involve in new projects.</p>
        <div className='flex justify-center lg:justify-end gap-5'>
          <a
            className='hover:scale-125 transition-transform duration-300 ease-in-out'
            href='https://github.com/CharlyLuna'
            target='_blank'
            rel='noreferrer noopener'
          >
            <img className='h-9 w-9' src={GithubIcon} alt='Github icon' />
          </a>
          <a
            className='hover:scale-125 transition-transform duration-300'
            href=''
          >
            <img className='h-9 w-9' src={LinkedInIcon} alt='linkedIn icon' />
          </a>
        </div>
      </div>
    </div>
  )
}
