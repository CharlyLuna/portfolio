import { useState } from 'react'
import { BurgerMenuIcon } from './BurgerMenuIcon'
import { CloseIcon } from './CloseIcon'

export const BurgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <button aria-label='Open navigation menu' className={`${showMenu ? 'hidden' : ''} md:hidden flex items-center px-4`} onClick={() => setShowMenu(!showMenu)}>
        <BurgerMenuIcon />
      </button>
      <div className={`${showMenu ? '' : 'hidden'} md:hidden flex flex-col gap-4  bg-[#eee] absolute right-0 top-0 -z-10 h-screen py-3 px-6`}>
        <button aria-label='Close' className='self-end px-2' onClick={() => setShowMenu(!showMenu)}>
          <CloseIcon />
        </button>
        <ul className='text-secondary font-semibold text-end flex flex-col gap-4'>
          <li onClick={() => setShowMenu(!showMenu)}>
            <a className='hover:underline px-4 transition-all duration-300 p-2 rounded-md' href='#experience'>Experience</a>
          </li>
          <li onClick={() => setShowMenu(!showMenu)}>
            <a className='hover:underline px-4 transition-all duration-300 p-2 rounded-md' href='#projects'>Projects</a>
          </li>
          <li onClick={() => setShowMenu(!showMenu)}>
            <a className='hover:underline px-4 transition-all duration-300 p-2 rounded-md' href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </>
  )
}
