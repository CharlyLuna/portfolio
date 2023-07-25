import { HeroBox } from './components/HeroBox'

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
      <main className='h-screen overflow-x-hidden'>
        <HeroBox />
      </main>

    </>
  )
}

export default App
