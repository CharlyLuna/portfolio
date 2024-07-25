import { useContext } from 'react'
import { IoMenu } from 'react-icons/io5'
import { UIContext } from '../context/UIProvider'

export const NavBar = () => {
  const { openSidebar } = useContext(UIContext)

  return (
    <>
      <nav className='bg-primary border-b border-gray-100 fixed flex justify-between px-4 lg:px-24 top-0 py-2 w-full z-20'>
        <a
          className='flex md:text-lg text-white font-semibold hover:underline px-4 transition-all duration-300 p-2 rounded-md'
          href='#home'
        >
          CARLOS LUNA
        </a>

        <ul className='hidden md:flex text-lg text-white font-semibold items-center'>
          <li className=''>
            <a className='hover:underline px-4 transition-all duration-300 p-2 rounded-md' href='#skills'>Skills</a>
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
        <button className='md:hidden' onClick={openSidebar}>
          <IoMenu className='text-white' size={30} />
        </button>
      </nav>
    </>
  )
}
