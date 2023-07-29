import { useState, useEffect } from 'react'

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = (e) => {
      const { currentTarget } = e
      if (currentTarget.scrollY === 0) {
        setIsScrolled(false)
      } else {
        setIsScrolled(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`${isScrolled ? 'bg-black/80' : 'bg-transparent'} fixed flex justify-center top-0 py-4 w-full z-20`}>
        <ul className='flex text-lg text-secondary font-semibold'>
          <li className=''>
            <a className='hover:underline px-4 transition-all duration-300 p-2 rounded-md' href='#home'>Home</a>
          </li>
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
      </nav>
    </>
  )
}
