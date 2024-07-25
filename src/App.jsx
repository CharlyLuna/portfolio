import { Toaster } from 'react-hot-toast'
import { NavBar } from './components/NavBar'
import { ContactSection, ExperienceSection, HeroSection, ProjectsSection, SkillSection } from './components/sections'
import { Sidebar } from './components/SideBar'

const App = () => {
  return (
    <>
      <NavBar />
      <Sidebar />
      <main className='h-screen'>
        <div className='h-full overflow-auto'>
          <HeroSection />
          <SkillSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
          <Toaster
            position='bottom-right'
            reverseOrder={false}
          />
        </div>
      </main>
    </>
  )
}

export default App
