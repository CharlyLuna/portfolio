import { Tag } from './Tag'

export const ProjectCard = ({ image, title, description, tags }) => {
  return (
    <div class='relative max-w-sm rounded-lg shadow bg-primary border-accent'>
      <a href='#'>
        <img class='rounded-t-lg' src={image} alt={`${title} page preview`} />
      </a>
      <div class='p-5'>
        <a href='#'>
          <h5 class='mb-2 flex text-2xl font-bold tracking-tight'>{title}
          </h5>
        </a>
        <p class='mb-3 font-normal text-secondary'>{description}</p>
        <ul className='mt-2 flex justify-center gap-2'>
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
