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
        </div>
      </main>
    </>
  )
}

export default App
