import { useState, useEffect } from 'react'
import { BurgerMenu } from './BurgerMenu'
import { BurgerMenuIcon } from './BurgerMenuIcon'

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

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
      <nav className={`${isScrolled ? 'bg-[#eee] border-b border-black/10' : 'bg-transparent'} fixed flex justify-between px-4 lg:px-24 top-0 py-2 w-full z-20`}>
        <a
          className='flex text-lg text-secondary font-semibold hover:underline px-4 transition-all duration-300 p-2 rounded-md'
          href='#home'
        >
          CARLOS LUNA
        </a>

        <ul className='hidden md:flex text-lg text-secondary font-semibold items-center'>
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
        <button className='md:hidden flex items-center px-4' onClick={() => setShowMenu(!showMenu)}>
          <BurgerMenuIcon />
        </button>
        <BurgerMenu isVisible={showMenu} />
      </nav>
    </>
  )
}
