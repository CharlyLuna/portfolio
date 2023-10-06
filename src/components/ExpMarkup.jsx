import { Tag } from './Tag'

export const ExpMarkup = ({ title, date, tags, description }) => {
  return (
    <div className='flex flex-col md:flex-row gap-4 relative '>
      <div className='absolute -inset-x-4 -inset-y-4 z-0 border border-primary transition-all duration-300 rounded-sm' />
      <header className='mb-2 mt-1 z-10 min-w-[180px] text-secondary font-light'>{date}</header>
      <div className='flex flex-col gap-2 z-10'>
        <h2 className='text-lg font-semibold text-primary'>{title}</h2>
        <p className='text-secondary'>{description}</p>
        <ul className='mt-2 flex flex-wrap gap-2'>
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
