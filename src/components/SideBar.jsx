import { useContext } from 'react'
import {
  IoAnalytics,
  IoCloseOutline,
  IoDocumentText,
  IoFolderOpen,
  IoMail
} from 'react-icons/io5'
import { UIContext } from '../context/UIProvider'

const menuOptions = [
  {
    title: 'About me',
    icon: <IoDocumentText size={30} />,
    href: '/#home'
  },
  {
    title: 'Experience',
    icon: <IoAnalytics size={30} />,
    href: '/#experience'
  },
  {
    title: 'Projects',
    icon: <IoFolderOpen size={30} />,
    href: '/#projects'
  },
  {
    title: 'Contact',
    icon: <IoMail size={30} />,
    href: '/#contact'
  }
]

export const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useContext(UIContext)

  return (
    <div className='text-secondary'>
      {isSidebarOpen && (
        <>
          <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30' />
          <div
            onClick={() => closeSidebar()}
            className='fixed fade-in top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm'
          />
        </>
      )}

      {/* Side menu */}
      <nav
        className={`${!isSidebarOpen && 'translate-x-full'} overflow-auto fixed p-5 right-0 top-0 w-screen md:w-[500px] h-screen bg-[#f5f5f5] z-20 shadow-2xl transform transition-all duration-300`}
      >
        <button onClick={() => closeSidebar()}>
          <IoCloseOutline className='absolute top-5 right-5' size={50} />
        </button>

        <div className='my-10 w-full h-px bg-gray-200' />
        <ul className='flex flex-col gap-4'>
          {menuOptions.map((option) => (
            <a
              key={option.title}
              href={option.href}
              className='flex items-center gap-4 p-3'
              onClick={closeSidebar}
            >
              {option.icon}
              <span className='text-lg pl-3 font-semibold'>
                {option.title}
              </span>
            </a>
          ))}
        </ul>

      </nav>
    </div>
  )
}
