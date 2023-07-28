import { Tag } from './Tag'

export const ExpMarkup = ({ title, date, tags, description }) => {
  return (
    <div className='flex flex-col md:flex-row gap-4 relative group'>
      <div className='absolute -inset-x-4 -inset-y-4 z-0 opacity-50 lg:group-hover:bg-black/50 lg:group-hover:shadow-[inset_0_1px_var(--primary-red-200)] lg:drop-shadow-xl transition-all duration-300 rounded-md' />
      <header className='text-sm mb-2 mt-1 z-10 min-w-[180px] text-[#e0e0e0] font-light'>{date}</header>
      <div className='flex flex-col gap-2 z-10'>
        <h2 className='text-lg font-semibold'>{title}</h2>
        <p className='text-light-red'>{description}</p>
        <ul className='mt-2 flex gap-2'>
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
