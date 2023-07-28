import { ExpMarkup } from './components/ExpMarkup'
import { HeroBox } from './components/HeroBox'
import { NavBar } from './components/NavBar'
import { ProjectCard } from './components/ProjectCard'
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
      <section id='experience' className='mb-20'>
        <h1 className='flex justify-center pt-20 mb-14 text-3xl text-light-red font-bold'>MY EXPERIENCE</h1>
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
      <section id='projects' className='mb-20'>
        <h1 className='flex justify-center mb-14 pt-20 text-3xl text-light-red font-bold'>PROJECTS</h1>
        <div className='mx-10 flex  items-center place-content-center'>
          <ul className='grid grid-cols-1 gap-8 xl:gap-2 lg:grid-cols-2 xl:grid-cols-3 m-0 place-items-center xl:w-full xl:max-w-7xl'>
            <li>
              <ProjectCard image='/dalle-clone-preview.PNG' tags={['React', 'Tailwindcss', 'MongoDB', 'Nodejs']} title='Project' description='lorem ipsum' />
            </li>
            <li>
              <ProjectCard image='/dalle-clone-preview.PNG' tags={['React', 'Tailwindcss', 'MongoDB', 'Nodejs']} title='Project' description='lorem ipsum' />
            </li>
            <li>
              <ProjectCard image='/dalle-clone-preview.PNG' tags={['React', 'Tailwindcss', 'MongoDB', 'Nodejs']} title='Project' description='lorem ipsum' />
            </li>
          </ul>

        </div>
      </section>
    </>
  )
}

export default App
