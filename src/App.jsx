import ProfilePic from './assets/ai-self-pic.png'
import GithubIcon from './assets/github.svg'
import LinkedInIcon from './assets/linkedIn.svg'

const App = () => {
  return (
    <>
      <header className='fixed flex justify-center top-0 py-4 w-full z-20 border'>
        <nav>
          <ul className='flex gap-6'>
            <li className=''>
              <a className='hover:bg-slate-400 transition-all ease-in duration-200 p-2 rounded-md' href=''>Home</a>
            </li>
            <li className=''>
              <a className='hover:bg-slate-400 transition-all ease-in-out duration-300 p-2 rounded-md' href=''>Experience</a>
            </li>
            <li className=''>
              <a className='hover:bg-slate-400 transition-all ease-in-out duration-300 p-2 rounded-md' href=''>Projects</a>
            </li>
            <li className=''>
              <a className='hover:bg-slate-400 transition-all ease-in-out duration-300 p-2 rounded-md' href=''>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className='h-screen'>
        <div className='relative flex h-[400px] justify-between mx-10 top-1/2 -translate-y-1/2 p-8 border-gray-400 border'>
          {/* <div className='absolute border-gray-400 border w-full h-full opacity-40 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 m-2 -z-10' /> */}
          <h2 className='flex-grow basis-0 text-xl'>WEB DEVELOPER</h2>

          <div className='flex flex-col absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center z-20 drop-shadow-[0px_0px_100px_gray] gap-2'>
            <div className='p-2 border border-white rounded-full'>
              <img className='rounded-full h-64 lg:h-96 w-auto' src={ProfilePic} alt='profile picture' />
            </div>
            <div className='bg-gray-950 py-1'>
              <h1 className='text-4xl'>CARLOS LUNA</h1>
            </div>
          </div>

          <div className='flex justify-start flex-col max-w-[30%] gap-4'>
            <p className='text-xl text-end'>Fast learner, hardworker and looking for excellence</p>
            <div className='flex justify-end gap-4'>
              <a href=''>
                <img className='h-10 w-10' src={GithubIcon} alt='github icon' />
              </a>
              <a href=''>
                <img className='h-10 w-10' src={LinkedInIcon} alt='github icon' />
              </a>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}

export default App
