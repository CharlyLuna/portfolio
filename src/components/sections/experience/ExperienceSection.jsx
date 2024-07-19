import { MARKUPS } from '../../../utils'
import { ExpMarkup } from './ExpMarkup'

export const ExperienceSection = () => {
  return (
    <section id='experience' className='mb-20'>
      <h1 className='flex justify-center pt-20 mb-14 text-3xl text-secondary font-bold'>MY EXPERIENCE</h1>
      <div className='flex justify-center items-center px-8 lg:px-28'>
        <ol className='relative border-s border-gray-200'>
          <li className='mb-10 ms-4'>
            <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white' />
            <time className='mb-1 text-sm font-normal leading-none text-gray-400'>February 2022</time>
            <h3 className='text-lg font-semibold text-gray-900'>Application UI code in Tailwind CSS</h3>
            <p className='mb-4 text-base font-normal text-gray-500 '>Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
            <a href='#' className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700'>Learn more
              <svg className='w-3 h-3 ms-2 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
              </svg>
            </a>
          </li>
          <ExpMarkup {...MARKUPS.mxmart} />
          <li className='ms-4'>
            <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white' />
            <time className='mb-1 text-sm font-normal leading-none text-gray-400'>April 2022</time>
            <h3 className='text-lg font-semibold text-gray-900'>E-Commerce UI code in Tailwind CSS</h3>
            <p className='text-base font-normal text-gray-500 '>Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
          </li>
        </ol>

      </div>
    </section>
  )
}
