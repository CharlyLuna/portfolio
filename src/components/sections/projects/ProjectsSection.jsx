import { ProjectsSlider } from './ProjectsSlider'

export const ProjectsSection = () => {
  return (
    <section id='projects' className='mb-20'>
      <h1 className='flex justify-center mb-14 pt-20 text-3xl text-[#4b4f5d] font-bold'>
        PROJECTS
      </h1>
      <div className='flex justify-center w-full h-[500px] items-center md:p-8'>
        {/* <ul
          className='group/list grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 m-0 xl:w-full xl:max-w-7xl
      justify-items-center'
        >
          {PROJECTS.map((project, index) => (
            <li
              className='lg:group-hover/list:opacity-80 lg:hover:!opacity-100 transition-all '
              key={`${project}_${index}`}
            >
              <ProjectCard {...project} />
            </li>
          ))}
        </ul> */}
        <ProjectsSlider />
      </div>
    </section>
  )
}
