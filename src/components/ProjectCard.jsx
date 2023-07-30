import { Tag } from './Tag'
import { GithubIcon } from './GithubIcon'

export const ProjectCard = ({ image, title, description, tags, link }) => {
  return (
    <div className='relative max-w-sm rounded-lg shadow bg-primary border-accent h-full'>
      <a className='relative group' href={link}>
        <img className='rounded-t-lg group-hover:contrast-125 transition-all duration-300' src={image} alt={`${title} page preview`} />
      </a>
      <div className='p-5'>
        <a className='flex gap-2 mb-2 items-center hover:text-accent w-fit' href={link}>
          <h5 className='flex text-2xl font-bold tracking-tight transition-all duration-300'>{title}</h5>
          <GithubIcon />
        </a>
        <p className='mb-3 font-normal text-secondary'>{description}</p>
        <ul className='mt-2 flex gap-2 flex-wrap'>
          {
            tags?.map((tag, index) => (
              <li key={`#${tag}_${index}`}>
                <Tag title={tag} />
              </li>
            ))
          }
        </ul>
      </div>
    </div>

  )
}
