import { ProjectsSlider } from './ProjectsSlider'

export const ProjectsSection = () => {
  return (
    <section id='projects' className='mb-20'>
      <h1 className='flex justify-center mb-8 pt-20 text-3xl text-[#4b4f5d] font-bold'>
        PROJECTS
      </h1>
      <div className='flex justify-center w-full items-center py-2 px-4 xl:px-24 bg-slate-800'>
        <ProjectsSlider />
      </div>
    </section>
  )
}
