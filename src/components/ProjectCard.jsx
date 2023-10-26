import { Tag } from './Tag'
import { AlternativeGithubIcon } from './AlternativeGithubIcon'

export const ProjectCard = ({ image, title, description, tags, link, repo }) => {
  return (
    <div className='group relative max-w-md lg:max-w-sm rounded-lg border border-primary
      lg:hover:scale-[1.05] transition-all duration-300 h-full'
    >
      <a target='_blank' rel='noopener noreferrer' className='flex w-full justify-center items-center pt-5 group/image-preview' href={link}>
        <img className='rounded-lg w-[90%] h-60 object-cover group-hover/image-preview:contrast-125' src={image} alt={`${title} page preview`} />
      </a>
      <div className='p-5'>
        <a target='_blank' rel='noopener noreferrer' className='flex gap-2 mb-2 items-center group/repo w-fit' href={repo}>
          <h1 className='flex text-2xl font-bold text-primary group-hover/repo:underline transition-all duration-300'>{title}</h1>
          <AlternativeGithubIcon color='primary' />
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
