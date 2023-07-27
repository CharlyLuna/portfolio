import { ExpMarkup } from './components/ExpMarkup'
import { HeroBox } from './components/HeroBox'
import { MARKUPS } from './utils/constants'

const App = () => {
  return (
    <>
      <header className='fixed flex justify-center top-0 py-4 w-full z-20'>
        <nav>
          <ul className='flex'>
            <li className=''>
              <a className='hover:bg-[#4D0A11] px-4 transition-all duration-300 p-2 rounded-md' href=''>Home</a>
            </li>
            <li className=''>
              <a className='hover:bg-[#292929] px-4 transition-all duration-300 p-2 rounded-md' href=''>Experience</a>
            </li>
            <li className=''>
              <a className='hover:bg-[#292929] px-4 transition-all duration-300 p-2 rounded-md' href=''>Projects</a>
            </li>
            <li className=''>
              <a className='hover:bg-[#292929] px-4 transition-all duration-300 p-2 rounded-md' href=''>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className='h-screen'>
        <HeroBox />
      </main>
      <section className='mb-16'>
        <h1 className='flex justify-center mb-14 text-3xl text-light-red font-bold'>MY EXPERIENCE</h1>
        <div className='flex justify-center items-center mx-10 md:mx-16'>
          <ol>
            <li className='mb-10 max-w-7xl'>
              <ExpMarkup {...MARKUPS.college} />
            </li>
            <li className='max-w-7xl'>
              <ExpMarkup {...MARKUPS.freeway} />
            </li>
          </ol>
        </div>

      </section>
    </>
  )
}

export default App
