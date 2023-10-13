export const BurgerMenu = ({ isVisible }) => {
  return (
    <>
      <div className={`${isVisible ? '' : 'hidden'} border border-black/10 bg-[#eee] absolute right-4 top-16 -z-10 h-fit py-10 px-4`}>
        <ul className='text-secondary font-semibold text-end'>
          <li className=''>
            <a className='hover:underline px-4 transition-all duration-300 p-2 rounded-md' href='#experience'>Experience</a>
          </li>
          <li className=''>
            <a className='hover:underline px-4 transition-all duration-300 p-2 rounded-md' href='#projects'>Projects</a>
          </li>
          <li className=''>
            <a className='hover:underline px-4 transition-all duration-300 p-2 rounded-md' href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </>
  )
}
