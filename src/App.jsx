import { ExpMarkup } from './components/ExpMarkup'
import { HeroBox } from './components/HeroBox'
import { NavBar } from './components/NavBar'
import { MARKUPS } from './utils/constants'

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main id='home' className='h-screen'>
        <HeroBox />
      </main>
      <section id='experience' className='mb-16'>
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
