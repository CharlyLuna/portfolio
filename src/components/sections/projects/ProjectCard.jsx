export const ProjectCard = ({ image, title, description, tags, link, repo }) => {
  return (
    <div className='flex flex-col gap-2 p-4 bg-white rounded-sm shadow-md lg:hover:scale-[1.05] w-[300px] h-full transition-all duration-300 text-secondary'>
      <div className='flex justify-center'>
        <img src={image} alt={title} className='w-full object-cover aspect-video' />
      </div>
      <p className='font-bold mb-2'>{title}</p>
      <p className='h-full'>{description}</p>
      <a href={link} target='_blank' className='text-white bg-primary mt-4 w-fit p-2 rounded-sm font-semibold hover:scale-105 hover:bg-red-800 transition-all duration-300 ease-in-out' rel='noreferrer'>See demo</a>
    </div>

  )
}
