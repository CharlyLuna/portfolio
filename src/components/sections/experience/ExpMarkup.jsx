export const ExpMarkup = ({ title, date, tags, description, place, containerStyle }) => {
  return (
    <li className={containerStyle ?? 'mb-10 ms-4'}>
      <div className='absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-white' />
      <time className='mb-1 text-sm font-normal leading-none text-gray-600'>{date}</time>
      <h3 className='text-lg font-semibold text-primary'>{title} - {place}</h3>
      <p className='text-base font-normal text-secondary'>{description}</p>
    </li>
  )
}
