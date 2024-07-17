export const ProjectCard = ({ image, title, description, tags, link, repo }) => {
  return (
    <div className='bg-white rounded-md shadow-xl lg:hover:scale-[1.05] transition-all duration-300 min-h-[300px]'>
      <img src={image} alt={title} className='rounded-t-md h-[70%] w-full object-cover object-left' />
      <div className='text-secondary'>
        <p>hello</p>
      </div>
    </div>

  )
}
