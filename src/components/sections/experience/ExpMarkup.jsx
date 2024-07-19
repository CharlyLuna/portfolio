export const ExpMarkup = ({ title, date, tags, description, place }) => {
  return (
    <li className='mb-10 ms-4'>
      <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white' />
      <time className='mb-1 text-sm font-normal leading-none text-gray-400'>{date}</time>
      <h3 className='text-lg font-semibold text-gray-900'>{title} - {place}</h3>
      <p className='text-base font-normal text-gray-500 '>{description}</p>
    </li>
  )
}
