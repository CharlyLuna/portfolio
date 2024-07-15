import { NavBar } from './components/NavBar'
import { ProjectsSection, ContactSection, ExperienceSection } from './components/sections'
import { HeroSection } from './components/sections/HeroSection'
import { Sidebar } from './components/SideBar'

const App = () => {
  return (
    <>
      <NavBar />
      <Sidebar />
      <main className='h-screen'>
        <div className='h-full overflow-auto'>
          <HeroSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
    </>
  )
}

export default App
