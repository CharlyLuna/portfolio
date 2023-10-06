import { ExpMarkup } from './components/ExpMarkup'
import { Form } from './components/Form'
import { HeroBox } from './components/HeroBox'
import { NavBar } from './components/NavBar'
import { ProjectCard } from './components/ProjectCard'
import { MARKUPS, PROJECTS } from './utils/constants'

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main id='home' className='h-screen min-h-fit flex justify-center'>
        <HeroBox />
      </main>
      <section id='experience' className='mb-20'>
        <h1 className='flex justify-center pt-20 mb-14 text-3xl text-[#4b4f5d] font-bold'>MY EXPERIENCE</h1>
        <div className='flex justify-center items-center mx-10 md:mx-16'>
          <ol>
            <li className='mb-14 max-w-7xl'>
              <ExpMarkup {...MARKUPS.college} />
            </li>
            <li className='max-w-7xl'>
              <ExpMarkup {...MARKUPS.freeway} />
            </li>
          </ol>
        </div>
      </section>
      <section id='projects' className='mb-20'>
        <h1 className='flex justify-center mb-14 pt-20 text-3xl text-[#4b4f5d] font-bold'>PROJECTS</h1>
        <div className='mx-10 flex justify-center'>
          <ul className='grid grid-flow-row grid-cols-1 gap-8 xl:gap-2 lg:grid-cols-2 xl:grid-cols-3 m-0 xl:w-full xl:max-w-7xl justify-items-center'>
            {
              PROJECTS.map((project, index) => (
                <li key={`${project}_${index}`}>
                  <ProjectCard {...project} />
                </li>
              ))
            }
          </ul>
        </div>
      </section>
      <section id='contact' className='mb-20'>
        <h1 className='flex justify-center mb-14 pt-20 text-3xl text-[#4b4f5d] font-bold'>CONTACT</h1>
        <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
          <Form />
          <div className='text-secondary w-[30%] text-center md:text-start'>
            <h2 className='text-5xl'>Lets talk!</h2>
            <p className='text-lg pt-2'>I'm open to hear about your ideas an propositions.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
