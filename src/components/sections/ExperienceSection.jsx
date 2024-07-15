import { MARKUPS } from '../../utils/constants'
import { ExpMarkup } from '../ExpMarkup'

export const ExperienceSection = () => {
  return (
    <section id='experience' className='mb-20'>
      <h1 className='flex justify-center pt-20 mb-14 text-3xl text-secondary font-bold'>MY EXPERIENCE</h1>
      <div className='flex justify-center items-center mx-10 md:mx-16'>
        <ol>
          <li className='max-w-7xl mb-14'>
            <ExpMarkup {...MARKUPS.mxmart} />
          </li>
          <li className='mb-14 max-w-7xl'>
            <ExpMarkup {...MARKUPS.college} />
          </li>
          <li className='max-w-7xl'>
            <ExpMarkup {...MARKUPS.freeway} />
          </li>
        </ol>
      </div>
    </section>
  )
}
